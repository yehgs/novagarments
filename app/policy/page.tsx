import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto py-10 px-6 md:px-20 lg:px-32">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">
        Privacy Policy
      </h1>
      <p className="text-gray-700 mb-4">
        This Privacy Policy outlines how Nova Garment BV (“we,” “our,” or “us”)
        collects, uses, and protects your personal data when you visit our
        website (
        <a href="https://novagarments.com" className="text-blue-600 underline">
          novagarments.com
        </a>
        ) or engage with our services. By using our website, you agree to the
        terms of this Privacy Policy.
      </p>

      {/* Section: Information We Collect */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          1. Information We Collect
        </h2>
        <p className="text-gray-700 mb-4">
          We collect personal data that you provide to us and data automatically
          collected when you interact with our website.
        </p>
        <ul className="list-disc pl-6 space-y-3 text-gray-700">
          <li>
            <strong>Information You Provide:</strong> This includes your name,
            email address, phone number, shipping address, billing address,
            payment details, and any other information you submit via forms on
            our website.
          </li>
          <li>
            <strong>Automatically Collected Information:</strong> When you
            access our website, we collect information such as your IP address,
            browser type, device information, and browsing behavior through
            cookies and similar technologies.
          </li>
        </ul>
      </section>

      {/* Section: How We Use Your Information */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          2. How We Use Your Information
        </h2>
        <p className="text-gray-700 mb-4">
          We use your personal data for the following purposes:
        </p>
        <ul className="list-disc pl-6 space-y-3 text-gray-700">
          <li>
            To process and fulfill your orders, including shipping and billing.
          </li>
          <li>To respond to your inquiries and provide customer support.</li>
          <li>
            To send you updates about your orders and promotional materials, if
            you opt-in.
          </li>
          <li>To improve our website, services, and user experience.</li>
          <li>
            To comply with legal obligations and prevent fraud or misuse of our
            website.
          </li>
        </ul>
      </section>

      {/* Section: How We Share Your Information */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          3. How We Share Your Information
        </h2>
        <p className="text-gray-700 mb-4">
          We do not sell your personal data. However, we may share your
          information with third parties in the following situations:
        </p>
        <ul className="list-disc pl-6 space-y-3 text-gray-700">
          <li>
            <strong>Service Providers:</strong> We may share your information
            with vendors and service providers that perform services on our
            behalf, such as payment processors, shipping companies, and IT
            support.
          </li>
          <li>
            <strong>Legal Compliance:</strong> We may disclose your information
            if required by law or if we believe such action is necessary to
            comply with legal obligations or protect our rights.
          </li>
          <li>
            <strong>Business Transfers:</strong> In the event of a merger,
            acquisition, or sale of our assets, your information may be
            transferred to the new entity.
          </li>
        </ul>
      </section>

      {/* Section: Your Privacy Rights */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">4. Your Privacy Rights</h2>
        <p className="text-gray-700 mb-4">
          Depending on your location, you may have the following rights
          regarding your personal data:
        </p>
        <ul className="list-disc pl-6 space-y-3 text-gray-700">
          <li>The right to access the personal data we hold about you.</li>
          <li>
            The right to request correction of inaccurate or incomplete data.
          </li>
          <li>
            The right to request deletion of your personal data, subject to
            legal obligations.
          </li>
          <li>
            The right to opt out of marketing communications or withdraw consent
            for data processing.
          </li>
        </ul>
        <p className="text-gray-700">
          To exercise your rights, please contact us at{' '}
          <a
            href="mailto:info@novagarments.com"
            className="text-blue-600 underline"
          >
            info@novagarments.com
          </a>
          .
        </p>
      </section>

      {/* Section: Cookies and Tracking Technologies */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          5. Cookies and Tracking Technologies
        </h2>
        <p className="text-gray-700">
          We use cookies and similar tracking technologies to enhance your
          browsing experience, analyze website usage, and deliver personalized
          content. By using our website, you consent to the use of cookies as
          described in our{' '}
          <a href="/cookie-policy" className="text-blue-600 underline">
            Cookie Policy
          </a>
          .
        </p>
      </section>

      {/* Section: Data Security */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">6. Data Security</h2>
        <p className="text-gray-700">
          We implement appropriate technical and organizational measures to
          safeguard your personal data against unauthorized access, loss,
          misuse, or alteration. However, no data transmission over the internet
          is completely secure, and we cannot guarantee absolute security.
        </p>
      </section>

      {/* Section: Updates to This Policy */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          7. Updates to This Privacy Policy
        </h2>
        <p className="text-gray-700">
          We may update this Privacy Policy from time to time. Changes will be
          posted on this page with an updated "Last Updated" date. We encourage
          you to review this policy periodically to stay informed about how we
          are protecting your information.
        </p>
      </section>

      {/* Section: Contact Information */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">8. Contact Information</h2>
        <p className="text-gray-700">
          If you have any questions or concerns about this Privacy Policy or our
          data practices, please contact us at:
        </p>
        <address className="not-italic text-gray-700">
          <strong>Nova Garment BV </strong> <br />
          John M Keynesplein, <br /> 1 - 1066EP,
          <br /> Amsterdam, Netherlands.
          <br />
          Email:
          <a
            href="mailto:info@novagarments.com"
            className="text-blue-600 underline"
          >
            info@novagarments.com
          </a>
        </address>
      </section>

      <p className="text-sm text-gray-600">Last Updated: January 2025</p>
    </div>
  );
};

export default PrivacyPolicy;
