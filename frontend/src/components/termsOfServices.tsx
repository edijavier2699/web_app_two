import { Link } from "react-router-dom";

const TermsOfService = () => {
  return (
    <div className="bg-gray-100  text-md  py-10">
      <div className=" mx-auto px-5 md:px-10 lg:px-20">
        <div className="rounded-lg p-8 lg:p-12">
          <h1 className="text-3xl lg:text-4xl font-extrabold text-center text-gray-900 mb-8">
            Terms of Service
          </h1>
          <p className="text-gray-700 mb-6 text-md leading-relaxed">
            These Terms of Service constitute a legal agreement between you, as the user of the Website, and
            TSSRCT, as the owner of the Website. Throughout these Terms of Service, references to{" "}
            <strong>“we”/”our”/”us”</strong> refer to TSSRCT, and references to <strong>“you”/”your”</strong> refer to you as the user.
          </p>

          {/* Section 1 */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">1. Application</h2>
            <p className="text-gray-700 leading-relaxed">
              These Terms of Service set out the general terms governing your use of the Website. They apply
              as soon as you first use the Website, and you are deemed to have agreed to be bound by them
              upon your first use. If you do not agree, please stop using the Website immediately.
            </p>
          </section>

          {/* Section 2 */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">2. Intellectual Property</h2>
            <p className="text-gray-700 leading-relaxed">
              2.1 The Website may include text, graphics, images, logos, icons, sound clips, video clips, data
              compilations, and the Website’s layout, code, and software, collectively referred to as{" "}
              <strong>“Content”</strong>.
            </p>
            <p className="text-gray-700 leading-relaxed">
              2.2 All Content is the property of TSSRCT or its affiliates. Content is protected by intellectual property laws.
              You may not reproduce, distribute, or store any material from the Website unless expressly
              permitted by TSSRCT.
            </p>
          </section>

          {/* Section 3 */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">3. Relationship to Other Agreements</h2>
            <p className="text-gray-700 leading-relaxed">
              3.1 In addition to these Terms of Service, our <strong>Privacy Policy</strong> applies to your use of the Website. Both are
              referred to as the <strong>“Website Agreements”</strong>.
            </p>
            <p className="text-gray-700 leading-relaxed">
              3.2 You may also agree to <strong>Investment Agreements</strong> if you invest in a property via the Website. The Investment Agreements
              will govern your relationship with us and other parties.
            </p>
            <p className="text-gray-700 leading-relaxed">
              3.3 If there is a conflict between the Website Agreements and the Investment Agreements, the
              Investment Agreements will take precedence.
            </p>
          </section>

          {/* Section 4 */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">4. Disclaimers</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              4.1 Except as explicitly stated in the Investment Agreements, please be aware that:
            </p>
            <ul className="list-disc list-inside space-y-4 pl-5 text-gray-700 leading-relaxed">
              <li>4.1.1 No guarantee of specific investment results, including net income or capital return, is provided.</li>
              <li>4.1.2 Investments may not be suitable for all investors, and you should seek independent financial advice if in doubt.</li>
              <li>4.1.3 The Website does not provide investment or tax advice. Ensure you conduct your own due diligence.</li>
              <li>4.1.4 The Website is provided on an “as-is” basis with no warranties regarding its functionality or accuracy.</li>
              <li>4.1.5 We accept no liability for any losses or damages resulting from your use of the Website, to the fullest extent permitted by law.</li>
              <li>4.1.6 We are not responsible for disruptions to the Website caused by external factors such as network failures or natural events.</li>
            </ul>
          </section>

          {/* Remaining sections */}
          {/* Repeat similar structure for other sections */}

          {/* Section 10 - Definitions */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">10. Definitions</h2>
            <ul className="list-disc list-inside space-y-4 pl-5 text-gray-700 leading-relaxed">
              <li><strong>“Content”</strong> refers to the materials described in clause 2.1.</li>
              <li><strong>“Investment Agreements”</strong> refers to documents outlined in clause 3.2.</li>
              <li>
                <strong>“Privacy Policy”</strong> refers to the privacy policy available at{" "}
                <Link to="/privacy-policy" className="text-blue-500 hover:text-blue-700">tssrct.uk/privacy-policy</Link>.
              </li>
              <li><strong>“Website”</strong> refers to the TSSRCT website at <a href="https://tssrct.uk/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">tssrct.uk</a>.</li>
            </ul>
          </section>

          <div className="mt-10 text-center">
            <p className="text-gray-600 text-sm">If you have any questions, contact us at{" "}
              <a href="mailto:support@tssrct.uk" className="text-blue-500 hover:text-blue-700">support@tssrct.uk</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;

