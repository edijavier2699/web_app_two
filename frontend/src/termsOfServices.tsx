import { Link } from "react-router-dom";

const TermsOfService = () => {
  return (
    <div>
        <div className="flex flex-col items-center justify-center mx-auto my-10">
        <div className="max-w-4xl p-5">
            <h1 className="text-2xl md:text-3xl underline font-bold mb-6">Terms of Service</h1>
            <p className="mb-4">
            These Terms of Service constitute a legal agreement between you, as the user of the Website, and
            TSSRCT, as the owner of the Website. Throughout these Terms of Service references to <strong>“we”/”our”/”us”</strong>
            are to TSSRCT and references to <strong>“you”/”your”</strong> are to you as the user of the Website.
            </p>
            <h2 className="text-xl md:text-2xl font-semibold mt-6 mb-4">1 APPLICATION</h2>
            <p>These Terms of Service set out the general terms governing your use of the Website. They apply
                to you as soon as you first use the Website, and you are deemed to have agreed to be bound by
                them upon your first use of the Website. If you do not wish to continue to be bound by these Terms
                of Service then please stop using the Website immediately.
            </p>
            
            {/* Additional sections */}
            <h2 className="text-xl md:text-2xl font-semibold mt-6 mb-4">2 INTELLECTUAL PROPERTY</h2>
            <p className="mb-4">2.1 The Website may include at any given time text, graphics, images, logos, icons, sound
            clips, video clips and data compilations, and together with the Website’s page layout,
            underlying code and software, are referred to as <strong>“Content”</strong>.
            </p>
            <p>2.2 All of the Content is the property of TSSRCT, our affiliates or third parties with whom we
            do business. As such, the Content is protected by the United Kingdom and international
            intellectual property laws, and other relevant laws. All such rights are reserved. In addition
            and except as provided by Part 1, Chapter 3 of the UK Copyright, Designs and Patents
            Act 1998 (which contains what are generally known as the “fair use” provisions for
            copyright materials), you may not reproduce, copy, distribute, store or in any other fashion
            re-use material from the Website unless otherwise indicated on the Website or unless
            given express written permission to do so by TSSRCT
            </p>


            <h2 className="text-xl md:text-2xl font-semibold mt-6 mb-4">3 RELATIONSHIP TO OTHER AGREEMENTS</h2>
            <p className="mb-4">
            3.1 In addition to these Terms of Service, our Privacy Policy applies to you and everyone else
            who uses the Website. Both the Terms of Service and Privacy Policy are together referred
            to as the <strong>“Website Agreements”</strong>.
            </p>
            <p className="mb-4">
            3.2 There are a number of other documents that you may choose to be bound by during the
            course of your use of the Website. For example, if you wish to invest in a property on the
            Website you will need to agree a set of investment documents that include: (i) Investor
            Terms of Service, (ii) Shareholders’ Agreement, (iii) Articles of Association and (iv)
            Management Services Agreement. We refer to these documents as the <strong>“Investment
            Agreements”</strong>. The Investment Agreements set out the terms that govern your investment
            in a property on the Website and your relationship with us, and our affiliates, when you
            invest in a property on our Website. These Terms of Service however govern your
            technical use of the Website.
                    </p>
            <p>
            3.3 The Website Agreements will continue to apply to you even after you have agreed to the
            Investment Agreements. If there is a conflict between the Investment Agreements that you
            have agreed to and the Website Agreements, the Investment Agreements will take
            precedence.
            </p>
            <h2 className="text-xl md:text-2xl font-semibold mt-6 mb-4">4 DISCLAIMERS</h2>
            <p className="mb-4">4.1 Except as explicitly stated in the Investment Agreements, you need to be aware that:</p>
            <ul className="list-disc list-inside">
            <li className="mb-4">4.1.1 We make no guarantee of any specific results from entering into an investment
                in a property on the Website including any net income and/or the capital return
                realised.</li>
            <li className="mb-4">4.1.2 The investments on this Website may not be suitable for all investors and if
                you are in any doubt as to the suitability of the investments, you should seek
                independent financial advice.</li>
            <li className="mb-4">4.1.3 No part of this Website is intended to constitute investment or tax advice, and
                it is your responsibility to ensure that you have undertaken all the necessary
                due diligence prior to making an investment.</li>
            <li className="mb-4">4.1.4 The Website is provided “as is” and on an “as available” basis, and we give no
                warranty that it will be free of defects and/or faults.</li>
            <li className="mb-4">4.1.5 We make no warranty or representation (express or implied) that the Website
                will meet your requirements, that it will be of satisfactory quality, that it will be
                fit for a particular purpose, that it will not infringe the rights of third parties, that
                it will be compatible with all systems, that it will be secure or that all information
                provided will be accurate.</li>
            <li className="mb-4">4.1.6 We accept no liability for any direct or indirect loss or damage, foreseeable or
                otherwise, including any indirect, consequential, special or exemplary
                damages arising from your use of the Website or any information contained in
                it, to the maximum extent permitted by law.</li>
            <li className="mb-4">4.1.7 You use the Website and its Content at your own risk.</li>
            <li className="mb-4">4.1.8 We accept no liability for any disruption or non-availability of the Website
                resulting from external causes including, but not limited to, communications
                network failure, power failure, host equipment failure, ISP (internet service
                provider) equipment failure, natural events, acts of war, or legal restrictions
                and censorship.</li>
            </ul>
            <h2 className="text-xl md:text-2xl font-semibold mt-6 mb-4">5 REVISIONS</h2>
            <p>
            We may update these Terms of Service from time to time to reflect any changes in law or for any
            other reason. If we do update these Terms of Service, we will upload a new version to the Website
            and as soon as you use the Website after they have been uploaded, you will be deemed to have
            agreed to the updated version. You will still be bound by the previous Terms of Service that you
            have, or deemed to have, agreed to. If there is a conflict between any versions of the Terms of
            Service to which you have agreed, or deemed to have agreed to, the most recent version shall take
            precedence unless it is expressly stated otherwise.
            </p>
            <h2 className="text-xl md:text-2xl font-semibold mt-6 mb-4">6 SEVERABILITY</h2>
            <p>
            We have made every effort to ensure that these Terms of Service adhere with the relevant
            provisions of the UK Unfair Contract Terms Act 1977 and other applicable laws. However, if any of
            the provisions or clauses are found to be unlawful, invalid or otherwise unenforceable, that provision
            or clause is deemed to be severed from these Terms of Service and shall not affect the validity and
            enforceability of the remaining Terms of Service. This clause 6 shall only apply within the
            jurisdictions where a particular term is illegal.
            </p>
            <h2 className="text-xl md:text-2xl font-semibold mt-6 mb-4">7 NO WAIVER</h2>
            <p>
            In the event that either you or we fail to exercise any right or remedy contained in these Terms of
            Service, that does not mean that you or we have waived that right or remedy and so shall not be
            construed as a waiver.
            </p>
            <h2 className="text-xl md:text-2xl font-semibold mt-6 mb-4">8 COMMUNICATIONS</h2>
            <p>
            If you wish to contact us about these Terms of Service, you may do so by sending us an email
            to <a href="mailto:support@tssrct.uk" className="text-blue-500 hover:text-blue-700">support@tssrct.uk</a>.
            </p>
            <h2 className="text-xl md:text-2xl font-semibold mt-6 mb-4">9 GOVERNING LAW AND JURISDICTION</h2>
            <p>
            This agreement and any disputes or claims arising out of or in connection with it or its subject matter
            or formation (including non-contractual disputes or claims) shall be governed by and construed in
            accordance with the law of England. In addition, you and we hereby submit to the exclusive
            jurisdiction of the courts of England and Wales to settle any dispute or claim arising out of or in
            connection with this agreement or its subject matter or formation (including non-contractual disputes
            and claims).
            </p>
            <h2 className="text-xl md:text-2xl font-semibold mt-6 mb-4">10 DEFINITIONS</h2>
            <p className="mb-4">10.1 In this Terms of Service, unless the context otherwise requires, the following words and
            expressions shall have the following meanings:</p>
            <ul className="list-disc list-inside">
            <li className="mb-4">10.1.1 <strong>“Content”</strong> has the meaning given in clause 2.1.</li>
            <li className="mb-4">10.1.2 <strong>“Investment Agreements”</strong> has the meaning given in clause 3.2.</li>
            <li className="mb-4">10.1.3 <strong>“Privacy Policy”</strong> means the privacy policy of the Website (available at
                <Link to="/privacy-policy" className="text-blue-500 hover:text-blue-700" onClick={() => {window.scroll(0, 0);}}> tssrct.uk/privacy-policy</Link>).</li>
            <li className="mb-4">10.1.4 <strong>“Services”</strong> means the services that TSSRCT or its affiliates may make
                available from time to time.</li>
            <li className="mb-4">10.1.5 <strong>“Terms of Service”</strong> means this agreement, including any schedule,
                addendum, appendix, document, material, and information attached hereto
                and/or incorporated by reference from time to time, in each case as may be
                amended, supplemented or replaced from time to time.</li>
            <li className="mb-4">10.1.6 <strong>“TSSRCT”</strong> means TSSRCT TECHNOLOGIES LIMITED, a private company
                registered in England and Wales under registration number 15647097 and at
                registered office 65 Waverley Crescent, London, RM3 8AJ.</li>
            <li className="mb-4">10.1.7 <strong>“user”</strong> means any individual, corporation, legal person, entity or other
                organisation who is using the Services.</li>
            <li className="mb-4">10.1.8 <strong>“Website”</strong> means TSSRCT’s website at <a href="https://tssrct.uk/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700"> tssrct.uk</a></li>
            <li className="mb-4">10.1.9 <strong>“Website Agreements”</strong> has the meaning given in clause 3.1.</li>
            </ul>
        </div>
        </div>
    </div>
  );
};

export default TermsOfService;
