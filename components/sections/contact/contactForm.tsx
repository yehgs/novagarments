'use client';

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { Country } from 'country-state-city';
import emailjs from 'emailjs-com';
import { Toaster, toast } from 'react-hot-toast';
import Confetti from 'react-confetti';

// Dynamic import of Select to avoid SSR issues
const DynamicSelect = dynamic(() => import('react-select'), { ssr: false });

interface Option {
  value: string;
  label: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    fullname: '',
    role: '',
    companyName: '',
    nationality: null as Option | null,
    garmentSector: null as Option | null,
    address: '',
    phone: '',
    email: '',
    message: '',
  });

  const [isCelebrating, setIsCelebrating] = useState(false);

  const convertToOptions = (
    data: string[] | any[],
    labelKey?: string,
    valueKey?: string
  ): Option[] => {
    if (Array.isArray(data) && data.length > 0) {
      if (typeof data[0] === 'string') {
        return data.map((item) => ({
          label: item,
          value: item,
        }));
      }
      return data.map((item) => ({
        label: item[labelKey || 'name'],
        value: item[valueKey || 'value'],
      }));
    }
    return [];
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCountryChange = (selectedOption: Option | null) => {
    setFormData({
      ...formData,
      nationality: selectedOption,
    });
  };

  const handleSelectChange = (field: string, selectedOption: Option | null) => {
    setFormData((prevState) => ({
      ...prevState,
      [field]: selectedOption,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const loadingToastId = toast.loading('Sending your message...');

    try {
      const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID!;
      const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID!;
      const publicKey = process.env.NEXT_PUBLIC_KEY!;

      console.log(serviceId, templateId, publicKey);

      if (!serviceId || !templateId || !publicKey) {
        throw new Error('EmailJS environment variables are not defined.');
      }

      const response = await emailjs.send(
        serviceId,
        templateId,
        {
          fullname: formData.fullname,
          role: formData.role,
          companyName: formData.companyName,
          nationality: formData.nationality?.label || 'N/A',
          garmentSector: formData.garmentSector?.label || 'N/A',
          address: formData.address,
          phone: formData.phone,
          email: formData.email,
          message: formData.message,
        },
        publicKey
      );

      toast.dismiss(loadingToastId);

      if (response.status === 200) {
        toast.success('Message sent successfully!');
        setIsCelebrating(true);
        setTimeout(() => setIsCelebrating(false), 5000);

        setFormData({
          fullname: '',
          role: '',
          companyName: '',
          nationality: null,
          garmentSector: null,
          address: '',
          phone: '',
          email: '',
          message: '',
        });
      } else {
        throw new Error('Failed to send the message.');
      }
    } catch (error) {
      toast.dismiss(loadingToastId);
      toast.error('Failed to send the message. Please try again.');
      console.error('Error:', error);
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-white shadow-md rounded-md p-6">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="fullname" className="block text-sm font-medium">
            Contact Name
          </label>
          <input
            type="text"
            id="fullname"
            name="fullname"
            value={formData.fullname}
            onChange={handleChange}
            className="w-full border rounded-md px-4 py-2 mt-1 focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="fullname" className="block text-sm font-medium">
            Company Name
          </label>
          <input
            type="text"
            id="CompanyName"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            className="w-full border rounded-md px-4 py-2 mt-1 focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="nationality" className="block text-sm font-medium">
            Country
          </label>
          <DynamicSelect
            id="nationality"
            options={convertToOptions(
              Country.getAllCountries(),
              'name',
              'isoCode'
            )}
            value={formData.nationality || null}
            onChange={(newValue) =>
              handleCountryChange(newValue as Option | null)
            }
          />
        </div>

        <div className="mb-4">
          <label htmlFor="garmentSector" className="block text-sm font-medium">
            What garment sector are you interested in?
          </label>
          <DynamicSelect
            id="garmentSector"
            options={convertToOptions([
              'Fashion',
              'Underwear',
              'Beachwear',
              'Sportswear',
              'Promo Wear',
              'Workwear',
            ])}
            value={formData.garmentSector || null}
            onChange={(newValue) =>
              handleSelectChange('garmentSector', newValue as Option | null)
            }
          />
        </div>

        <div className="mb-4">
          <label htmlFor="address" className="block text-sm font-medium">
            Address
          </label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="w-full border rounded-md px-4 py-2 mt-1 focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="phone" className="block text-sm font-medium">
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border rounded-md px-4 py-2 mt-1 focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border rounded-md px-4 py-2 mt-1 focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="block text-sm font-medium">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full border rounded-md px-4 py-2 mt-1 focus:outline-none focus:ring focus:border-blue-300"
            rows={4}
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-blue text-white hover:bg-accent font-bold py-3 px-5 rounded-md transition-all duration-300"
        >
          Send Request
        </button>
      </form>

      <Toaster position="top-center" reverseOrder={false} />
      {isCelebrating && <Confetti />}
    </div>
  );
};

export default ContactForm;
