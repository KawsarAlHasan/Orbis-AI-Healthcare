import React from "react";
import { FiExternalLink, FiDownload } from "react-icons/fi";

// ---------- Fake data ----------
const invoices = [
  { id: "INV-2026-006", date: "1 Jun 2026", amount: "£2,396.40", status: "Paid" },
  { id: "INV-2026-005", date: "1 May 2026", amount: "£2,396.40", status: "Paid" },
  { id: "INV-2026-004", date: "1 Apr 2026", amount: "£1,796.40", status: "Paid" },
  { id: "INV-2026-003", date: "1 Mar 2026", amount: "£1,796.40", status: "Paid" },
];

const billingContact = [
  { label: "Name", value: "Dr. Amira Patel" },
  { label: "Email", value: "accounts@brightsmile.co.uk" },
  { label: "Company", value: "Bright Smile Ltd" },
  { label: "VAT", value: "GB 123 4567 89" },
];

// ---------- Sub components ----------
function StatusTag({ status }) {
  return (
    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-50 text-emerald-600">
      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
      {status}
    </span>
  );
}

function InfoBlock({ eyebrow, eyebrowColor, children }) {
  return (
    <div>
      <div
        className={`font-mono text-[11px] uppercase tracking-wider mb-2 ${eyebrowColor}`}
      >
        {eyebrow}
      </div>
      {children}
    </div>
  );
}

// ---------- Main component ----------
function Billing() {
  return (
    <div>
      <div>
        {/* Header */}
        <div className="lg:flex items-start justify-between mb-2">
          <div>
            <h1 className="font-serif text-3xl text-gray-900 mb-2">
              Billing &amp; Plan
            </h1>
            <p className="text-sm text-gray-500 max-w-xl leading-relaxed">
              Manage your subscription, payment method and invoices. Billing
              is handled securely by Stripe.
            </p>
          </div>
          <button className="inline-flex items-center gap-1.5 bg-white text-sm text-gray-700 font-medium px-4 py-2.5 rounded-xl border border-gray-200 hover:border-gray-300 transition-colors shrink-0">
            <FiExternalLink size={14} />
            Stripe customer portal
          </button>
        </div>

        {/* Plan card */}
        <div className="bg-white rounded-2xl border border-black/5 p-6 mb-6">
          <div className="flex items-start justify-between mb-5">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-violet-50 text-violet-600">
                Growth plan
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-600">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                Active
              </span>
            </div>
            <div className="flex items-center gap-2">
              <button className="inline-flex items-center gap-1.5 bg-white text-sm text-gray-700 font-medium px-4 py-2 rounded-xl border border-gray-200 hover:border-gray-300 transition-colors">
                <FiExternalLink size={13} />
                Update card
              </button>
              <button className="bg-gray-900 text-white text-sm font-medium px-4 py-2 rounded-xl hover:bg-gray-800 transition-colors">
                Change plan
              </button>
            </div>
          </div>

          <div className="flex items-baseline gap-2 mb-2">
            <span className="font-serif text-4xl text-gray-900">£1,997</span>
            <span className="text-sm text-gray-400">/month + VAT</span>
          </div>
          <div className="text-sm text-gray-500 mb-6">
            Next payment <span className="font-semibold text-gray-800">1 July 2026</span>{" "}
            · Visa ending 4242
          </div>

          <div className="border-t border-gray-100 pt-6 grid grid-cols-1 sm:grid-cols-3 gap-8">
            <InfoBlock eyebrow="Active Campaigns" eyebrowColor="text-blue-500">
              <div className="flex items-center justify-between mb-2">
                <span className="font-serif text-2xl text-gray-900">2 / 5</span>
                <span className="text-xs text-gray-400">3 remaining</span>
              </div>
              <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-blue-600 rounded-full"
                  style={{ width: "40%" }}
                />
              </div>
            </InfoBlock>

            <InfoBlock eyebrow="WhatsApp Channel" eyebrowColor="text-emerald-500">
              <div className="font-semibold text-emerald-600 text-sm">
                Included
              </div>
            </InfoBlock>

            <InfoBlock eyebrow="Postcode Exclusivity" eyebrowColor="text-violet-500">
              <div className="font-semibold text-gray-900 text-sm">
                OX1–OX4
              </div>
            </InfoBlock>
          </div>
        </div>

        {/* Two column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-6 items-start">
          {/* Invoices */}
          <div className="bg-white rounded-2xl border border-black/5 overflow-hidden">
            <div className="flex items-center justify-between px-6 py-5 border-b border-gray-50">
              <h2 className="font-serif text-xl text-gray-900">Invoices</h2>
              <button className="inline-flex items-center gap-1.5 bg-white text-sm text-gray-700 font-medium px-3.5 py-2 rounded-xl border border-gray-200 hover:border-gray-300 transition-colors">
                <FiDownload size={13} />
                Download all
              </button>
            </div>

            <div className="grid grid-cols-[1.4fr_1.2fr_1.2fr_1fr_0.4fr] px-6 py-3 border-b border-gray-100">
              {["Invoice", "Date", "Amount", "Status", ""].map((h) => (
                <div
                  key={h}
                  className="font-mono text-[11px] uppercase tracking-wider text-gray-400"
                >
                  {h}
                </div>
              ))}
            </div>

            {invoices.map((inv) => (
              <div
                key={inv.id}
                className="grid grid-cols-[1.4fr_1.2fr_1.2fr_1fr_0.4fr] items-center px-6 py-4 border-b border-gray-50 last:border-b-0 hover:bg-gray-50/60 transition-colors"
              >
                <div className="text-sm font-semibold text-gray-900">{inv.id}</div>
                <div className="text-sm text-gray-500">{inv.date}</div>
                <div className="text-sm font-mono text-gray-900">{inv.amount}</div>
                <div>
                  <StatusTag status={inv.status} />
                </div>
                <div className="flex justify-end">
                  <button className="text-gray-400 hover:text-gray-700 transition-colors">
                    <FiDownload size={15} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Right column */}
          <div className="flex flex-col gap-6">
            {/* Payment method */}
            <div className="bg-white rounded-2xl border border-black/5 p-6">
              <h2 className="font-serif text-xl text-gray-900 mb-4">
                Payment method
              </h2>
              <div className="flex items-center gap-3 bg-gray-50 border border-gray-100 rounded-xl px-4 py-3">
                <span className="w-9 h-6 rounded bg-gray-900 text-white text-[9px] font-bold flex items-center justify-center tracking-wide shrink-0">
                  VISA
                </span>
                <div className="flex-1">
                  <div className="text-sm font-semibold text-gray-900">
                    •••• 4242
                  </div>
                  <div className="text-xs text-gray-400">Expires 08/27</div>
                </div>
                <button className="bg-white text-sm text-gray-700 font-medium px-3.5 py-1.5 rounded-lg border border-gray-200 hover:border-gray-300 transition-colors shrink-0">
                  Update
                </button>
              </div>
            </div>

            {/* Billing contact */}
            <div className="bg-white rounded-2xl border border-black/5 p-6">
              <h2 className="font-serif text-xl text-gray-900 mb-4">
                Billing contact
              </h2>
              <div className="flex flex-col gap-3 mb-5">
                {billingContact.map((row) => (
                  <div
                    key={row.label}
                    className="flex items-center justify-between text-sm"
                  >
                    <span className="text-gray-400">{row.label}</span>
                    <span className="font-medium text-gray-900">{row.value}</span>
                  </div>
                ))}
              </div>
              <button className="w-full bg-white text-sm text-gray-700 font-medium py-2.5 rounded-xl border border-gray-200 hover:border-gray-300 transition-colors">
                Edit details
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Billing;