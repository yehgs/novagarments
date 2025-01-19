'use client';

import { useState } from 'react';

const faqData = [
  {
    category: 'Order Finalization',
    questions: [
      {
        question: 'How can I finalize an order with Nova Garment BV?',
        answer:
          'To finalize an order, you must provide product specifications, technical details, agreed payment methods, and sign the Sales Contract, along with paying the required deposit.',
      },
      {
        question: 'What information is required to complete an order?',
        answer:
          'The required information includes technical product specifications (type, raw material, color, sizes, accessories, customizations), payment methods, and packaging details.',
      },
    ],
  },
  {
    category: 'Payments',
    questions: [
      {
        question: 'How are payments managed for air-shipped orders?',
        answer:
          'For air-shipped orders, a 30% deposit is required upon signing the contract. The balance must be paid before shipment, following a final inspection adhering to AQL 5% standards.',
      },
      {
        question:
          'How are payments managed for sea shipments exceeding €50,000?',
        answer:
          'For sea shipments over €50,000, a 5% deposit is required upon signing the contract, with the balance due upon unloading at our Amsterdam warehouse.',
      },
      {
        question: 'How are payments managed for orders below €50,000?',
        answer:
          'For orders under €50,000, a 30% deposit is required at the time of order, with the balance payable before shipment to our Amsterdam warehouse.',
      },
    ],
  },
  {
    category: 'Production',
    questions: [
      {
        question: 'What are the delivery times for an order?',
        answer:
          'Delivery times range from 45 to 150 days, depending on the complexity of the order. Any additional inspections must be agreed upon in advance.',
      },
      {
        question: 'How is the production phase managed?',
        answer:
          'The office in the production country will send updates to the client on all production phases.',
      },
      {
        question: 'What are the main production processes?',
        answer:
          'Sending the pre-production sample and its approval. Sending the shipping sample and its approval.',
      },
      {
        question:
          'Who bears the transportation costs for samples sent from the origin country?',
        answer: 'All sample transportation costs are borne by the client.',
      },
      {
        question:
          'How quickly can I send comments or approvals on received samples?',
        answer:
          'Responses must be sent within 48 hours of receiving the samples.',
      },
      {
        question: 'How is product quality managed?',
        answer:
          'All materials undergo strict quality controls based on international standards, with regular inspections during production.',
      },
      {
        question: 'Can I request certifications for materials or labor?',
        answer:
          'Yes, any requirements for certifications on fabrics, labor, or factory audits must be discussed and formalized during the contract phase.',
      },
      {
        question: 'What happens if I cancel an order?',
        answer:
          'If the client cancels the order for reasons not attributable to Nova Garment BV, a release letter must be provided to allow the sale of materials to third parties in markets not covered by the client’s brand.',
      },
      {
        question: 'Is a declaration required to initiate production?',
        answer:
          'Yes, a declaration on the client&lsquo;s letterhead authorizing the production of the brand is required.',
      },
      {
        question: 'When is an order considered confirmed?',
        answer:
          'An order is considered confirmed only after the Sales Contract is signed and the required deposit is paid.',
      },
      {
        question: 'Are there penalties for delays or non-compliance?',
        answer:
          'No, delays due to force majeure (such as natural disasters, conflicts, disruptions, or other unforeseen circumstances beyond Nova Garment BV&lsquo;s control) do not incur penalties. Delivery times may be adjusted accordingly without liability.',
      },
      {
        question: 'How can I monitor my order&lsquo;s progress?',
        answer:
          'Every order is monitored daily, and weekly reports are provided with updates on production progress and any emerging issues.',
      },
      {
        question: 'How is communication managed during production?',
        answer:
          'A dedicated contact person will always be available for timely updates, modifications, and issue resolution.',
      },
      {
        question: 'How can a client ensure production meets expectations?',
        answer:
          'Before shipment, the client will receive the Shipping Samples, which must be approved prior to shipment.',
      },
    ],
  },
  {
    category: 'Shipping and Logistics',
    questions: [
      {
        question: 'Who handles customs procedures?',
        answer:
          'Nova Garment BV manages all customs formalities, including extraordinary inspections, to ensure a compliant and efficient process.',
      },
      {
        question: 'Are sea and air shipments insured?',
        answer:
          'Yes, all shipments are insured. Additional insurance coverage can be requested at an extra cost to be agreed upon.',
      },
      {
        question: 'What are the customs clearance timelines?',
        answer:
          'Customs clearance typically takes 7 days unless the goods are subject to customs checks, which may cause delays not attributable to Nova Garment BV.',
      },
      {
        question:
          'Where is the material stored upon arrival in the Netherlands?',
        answer:
          'The material is stored at our customs warehouse in Oude Meer upon arrival, whether by air or sea.',
      },
      {
        question: 'Can the material be inspected at the customs warehouse?',
        answer:
          'Yes, the material can be inspected, but samples cannot be removed.',
      },
      {
        question: 'How soon must I visit your warehouses for inspection?',
        answer:
          'The client must visit our warehouses in Oude Meer within 48 hours of our confirmation of material availability for inspection.',
      },
      {
        question: 'When must the balance payment be made?',
        answer:
          'The balance must be paid within 48 hours of the inspection date. Delays will incur storage fees. (Click here to view storage costs.)',
      },
      {
        question:
          'What happens if the inspected material does not conform to the approved Shipping Samples?',
        answer:
          'If the material does not conform to the approved Shipping Samples, the client has the right to refuse the material and not pay the balance',
      },
      {
        question:
          'What happens if the client does not collect the material for reasons attributable to them? Does the deposit get forfeited?',
        answer:
          'If the client fails to collect the material for reasons attributable to them, the deposit is forfeited.',
      },
      {
        question:
          'What happens if the client does not collect the goods for reasons not attributable to Nova Garment BV?',
        answer:
          'If the client fails to collect the goods for reasons not attributable to Nova Garment BV, a release letter must be issued at the time of signing the Sales Contract, authorizing Nova Garment BV to sell the goods in countries outside the client’s brand market.',
      },
      {
        question:
          'After the inspected sea shipment is approved, how soon can delivery be made?',
        answer:
          'Delivery will be made within a week of the balance payment date.',
      },
      {
        question: 'Who ultimately clears the material?',
        answer: 'Nova Garment BV is responsible for clearing the material.',
      },
    ],
  },
  {
    category: 'Invoicing',
    questions: [
      {
        question: 'How does invoicing work within the EU?',
        answer:
          'All transactions with Nova Garment BV are Europeanized, meaning invoices are issued without VAT (except for Dutch clients) under Article 8 of EU regulations to simplify administrative management.',
      },
      {
        question: 'Why are invoices issued without VAT?',
        answer:
          'Invoices are VAT-exempt in compliance with Article 8 of EU regulations, which allows VAT exemption for transactions between EU countries, simplifying the tax process for our clients.',
      },
      {
        question: 'How can I benefit from VAT exemption?',
        answer:
          'VAT exemption automatically applies to Europeanized transactions between VAT-registered entities within the EU. No additional steps are required, provided the transaction meets regulatory requirements.',
      },
      {
        question:
          'Is VAT-exempt invoicing valid for all transactions with Nova Garment BV?',
        answer:
          'Yes, all transactions within the EU will be invoiced VAT-exempt (except in the Netherlands), unless otherwise specified in contractual terms.',
      },
      {
        question: 'How can I verify eligibility for VAT exemption?',
        answer:
          'To qualify for VAT exemption, the client must be a VAT-registered entity within the EU. If necessary, the VAT number may be requested at the time of order.',
      },
      {
        question: 'How is invoicing handled for non-EU clients?',
        answer:
          "For non-EU clients, invoicing will comply with international regulations and may include VAT or other applicable taxes depending on the destination country's laws.",
      },
      {
        question: 'How does VAT exemption affect customs documentation?',
        answer:
          'VAT exemption does not affect customs procedures, which are handled separately according to applicable international shipping regulations. Nova Garment BV manages all customs formalities.',
      },
      {
        question: 'Does VAT-exempt invoicing incur additional costs?',
        answer:
          'No, VAT-exempt invoicing does not incur additional costs. It simplifies tax management for EU clients by reducing administrative formalities.',
      },
      {
        question: 'What information is included in a VAT-exempt invoice?',
        answer:
          'The VAT-exempt invoice includes all necessary details, such as order specifications, the total amount excluding VAT, and a reference to Article 8 of EU regulations justifying the tax exemption.',
      },
      {
        question: 'What happens if my VAT number is invalid?',
        answer:
          'If the provided VAT number is invalid or cannot be verified, Nova Garment BV reserves the right to apply VAT to the transaction per applicable regulations.',
      },
    ],
  },
];

const FAQPage = () => {
  const [openCategory, setOpenCategory] = useState<string | null>(null);

  const toggleCategory = (category: string) => {
    setOpenCategory((prev) => (prev === category ? null : category));
  };

  return (
    <div className="container mx-auto py-10 px-6 md:px-20 lg:px-32">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">
        Frequently Asked Questions
      </h1>
      {faqData.map((section, index) => (
        <div key={index} className="mb-6 border-b border-gray-300">
          <button
            onClick={() => toggleCategory(section.category)}
            className="w-full text-left text-xl font-semibold py-4 px-2 text-gray-800 bg-gray-100 hover:bg-gray-200 transition-all"
          >
            {section.category}
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out  ${
              openCategory === section.category ? 'h-full' : 'max-h-0'
            }`}
          >
            <ul className="pl-4 pr-2 py-2 space-y-4">
              {section.questions.map((item, qIndex) => (
                <li key={qIndex}>
                  <h3 className="text-lg font-medium text-gray-700">
                    {item.question}
                  </h3>
                  <p className="text-gray-600">{item.answer}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQPage;
