import React, { useState } from "react";
import { HiChevronDown } from "react-icons/hi";

const faqs = [
  {
    q: "How does the AI Call Agent sound?",
    a: "Our AI uses native British voices trained specifically for healthcare. Most patients can't tell the difference — and that's exactly the point. You can listen to a demo on our website.",
  },
  {
    q: "Does it integrate with my existing PMS?",
    a: "Yes. Orbis integrates natively with CareStack for two-way syncing of appointments, patient records, and treatment history. Additional PMS integrations are on the roadmap.",
  },
  {
    q: "Is patient data secure and compliant?",
    a: "Absolutely. We are fully GDPR-compliant and follow strict NHS data standards. All patient data is encrypted at rest and in transit. We never sell or share patient data with third parties.",
  },
  {
    q: "How long does it take to set up?",
    a: "Most clinics are live within 5–7 business days. Our dedicated onboarding team handles all the technical setup, so you don't need any technical knowledge.",
  },
  {
    q: "Can I use it for multiple clinic locations?",
    a: "Yes. Growth plans support up to 3 locations, and Enterprise plans include unlimited locations with custom configuration and dedicated support for each site.",
  },
];

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState(null);

  return (
    <section id="faq" className="bg-[#170e21] py-16">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="cormorantFont text-[38px] font-semibold secondColor mb-2">
            Frequently Asked Questions
          </h2>
          <p className="subTitleText text-[18px]">
            Got questions? We've got answers.
          </p>
        </div>

        <div className="flex flex-col bg-[#251636] border border-[#3A2750] rounded-2xl p-6">
          {faqs.map((faq, i) => {
            const isOpen = openIdx === i;
            return (
              <div key={i} className="border-b border-[#3A2750]">
                <button
                  className="cursor-pointer w-full flex items-center justify-between py-5 text-left gap-4 bg-transparent border-none"
                  onClick={() => setOpenIdx(isOpen ? null : i)}
                >
                  <span className="secondColor text-[16px] font-normal">
                    {faq.q}
                  </span>
                  <HiChevronDown
                    size={18}
                    className={`secondColor flex-shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-48 opacity-100" : "max-h-0 opacity-0"}`}
                >
                  <p className="text-white/60 text-[14px] leading-relaxed pb-5">
                    {faq.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
