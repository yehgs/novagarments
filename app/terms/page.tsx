import React from 'react';

const TermsAndConditions = () => {
  return (
    <div className="container mx-auto py-10 px-6 md:px-20 lg:px-32">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">
        Terms and Conditions of Sale
      </h1>
      <p className="text-lg mb-4">
        These Terms and Conditions govern transactions between Nova Garment BV
        and its customers. Accessing the website, placing orders, or entering
        into contracts with Nova Garment BV implies acceptance of these Terms
        and Conditions.
      </p>

      {/* Section 1: Finalization of Orders */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          1. Finalization of Orders
        </h2>
        <ul className="list-disc pl-6 space-y-3">
          <li>
            To finalize an order, the customer must provide product
            specifications, technical details, agreed payment terms, and sign
            the Sales Contract, paying the required deposit. The order is
            considered confirmed only when the Sales Contract is signed, and the
            deposit is received by Nova Garment BV.
          </li>
          <li>
            If the customer fails to provide the necessary information or comply
            with payment terms, Nova Garment BV reserves the right to cancel the
            order.
          </li>
          <li>
            If goods are not collected by the customer for reasons not
            attributable to Nova Garment BV, the customer must issue a release
            letter authorizing Nova Garment BV to sell the goods to third
            parties.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">2. Payments</h2>
        <ul className="list-disc pl-6 space-y-3">
          <li>
            For air shipments, a 30% deposit is required upon signing the
            contract. The balance is due before shipment.
          </li>
          <li>
            For sea shipments exceeding €50,000, a 5% deposit is required upon
            signing the contract, with the balance due upon unloading at the
            Amsterdam warehouse.
          </li>
          <li>
            For orders below €50,000, a 30% deposit is required at the time of
            order, with the balance due before shipment from the Amsterdam
            warehouse.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">3. Production</h2>
        <ul className="list-disc pl-6 space-y-3">
          <li>
            Delivery times range from 45 to 150 days, depending on the order
            complexity.
          </li>
          <li>
            Customers will receive updates on all production stages, including
            pre-production and shipping sample approvals.
          </li>
          <li>
            All materials undergo strict quality control in accordance with
            international standards.
          </li>
          <li>
            Any requirements regarding certifications or factory audits must be
            discussed at the contractual stage.
          </li>
          <li>
            Delays caused by force majeure events (e.g., natural disasters or
            conflicts) are not attributable to Nova Garment BV.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          4. Shipping and Logistics
        </h2>
        <ul className="list-disc pl-6 space-y-3">
          <li>
            Nova Garment BV handles all customs formalities, including
            extraordinary inspections, ensuring compliance.
          </li>
          <li>
            All shipments are insured, with additional insurance coverage
            available upon request.
          </li>
          <li>
            Customers must inspect materials at the bonded warehouse within 48
            hours of confirmation of material availability.
          </li>
          <li>
            If inspected materials do not conform to approved shipping samples,
            the customer has the right not to collect the goods and not to pay
            the balance.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">5. Invoicing</h2>
        <ul className="list-disc pl-6 space-y-3">
          <li>
            Invoices are issued VAT-free under Article 8 of EU regulations for
            transactions between EU countries.
          </li>
          <li>
            VAT exemption applies to transactions between VAT-registered
            entities in the EU.
          </li>
          <li>
            For non-EU customers, invoicing complies with international
            regulations and may include applicable taxes based on destination
            country laws.
          </li>
        </ul>
      </section>

      <p className="text-sm text-gray-600">Last Updated: January 2025</p>
    </div>
  );
};

export default TermsAndConditions;
