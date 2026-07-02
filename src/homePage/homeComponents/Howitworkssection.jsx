import React from "react";
import {
  BsSearch,
  BsChatDots,
  BsFilter,
  BsCalendarCheck,
  BsStars,
} from "react-icons/bs";

const steps = [
  {
    step: "Step 1",
    title: "Find",
    icon: <BsSearch size={22} />,
    desc: "AI-powered campaigns attract the right patients to your clinic.",
  },
  {
    step: "Step 2",
    title: "Nurture",
    icon: <BsChatDots size={22} />,
    desc: "Automated calls, SMS, email & WhatsApp build trust and engagement.",
  },
  {
    step: "Step 3",
    title: "Qualify",
    icon: <BsFilter size={22} />,
    desc: "AI qualifies intent and surfaces your highest-value leads.",
  },
  {
    step: "Step 4",
    title: "Convert",
    icon: <BsCalendarCheck size={22} />,
    desc: "Seamless CareStack booking fills your appointment book.",
  },
  {
    step: "Step 5",
    title: "Retain",
    icon: <BsStars size={22} />,
    desc: "Ongoing automation turns patients into loyal advocates.",
  },
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="bg-[#160D20] py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#C9A0631A] border border-[#C9A06333] text-[#C9A063] text-xs px-4 py-2 rounded-full mb-6">
            ✦ The Orbis System
          </div>
          <h2 className="text-3xl sm:text-[48px] cormorantFont font-semibold secondColor mb-4">
            How it Works
          </h2>
          <p className="subTitleText text-[18px] max-w-3xl mx-auto leading-relaxed">
            Find. Nurture. Convert — Automatically. Five steps that turn
            marketing spend into a fully booked appointment diary.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-4">
          {steps.map((s, i) => (
            <div
              key={s.title}
              className="relative flex flex-col items-center text-center gap-4"
            >
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-[2.2rem] left-[calc(50%+2rem)] right-[-50%] h-px bg-gradient-to-r from-[#c9a84c]/40 to-[#c9a84c]/10" />
              )}

              {/* Icon circle */}
              <div className="relative z-10 w-[4.5rem] h-[4.5rem] rounded-full bg-[#1c1332] border-2 hover:border-[#c9a84c]/30 flex items-center justify-center text-[#c9a84c] border-[#c9a84c] shadow-[0_0_20px_rgba(201,168,76,0.2)] hover:shadow-none transition-all duration-300 cursor-default">
                {s.icon}
              </div>

              <div>
                <p className="text-[#C9A063] font-semibold text-[12px] uppercase tracking-[0.18em] mb-1">
                  {s.step}
                </p>
                <p className="secondColor font-semibold text-[18px] mb-2">
                  {s.title}
                </p>
                <p className="subTitleText text-[14px] leading-relaxed">
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
