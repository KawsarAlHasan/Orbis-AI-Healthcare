import React, { useState } from "react";
import {
  FiUpload,
  FiEye,
  FiPlus,
  FiSettings,
  FiShield,
  FiCalendar,
} from "react-icons/fi";
import { FaMeta } from "react-icons/fa6";
import { FaGoogle, FaWhatsapp, FaTwitter } from "react-icons/fa";

// ---------- Fake data ----------
const tabs = ["Branding", "Integrations", "Team & roles"];

const team = [
  {
    name: "Dr. Amira Patel",
    email: "amira@brightsmile.co.uk",
    role: "Clinic admin",
    roleStyle: "bg-violet-50 text-violet-600",
    twoFA: true,
    you: true,
    palette: { bg: "#0F3B3D", color: "#fff" },
  },
  {
    name: "Rachel Cho",
    email: "rachel@brightsmile.co.uk",
    role: "Staff",
    roleStyle: "bg-emerald-50 text-emerald-600",
    twoFA: true,
    palette: { bg: "#16324F", color: "#fff" },
  },
  {
    name: "Jordan Miles",
    email: "jordan@brightsmile.co.uk",
    role: "Staff",
    roleStyle: "bg-emerald-50 text-emerald-600",
    twoFA: false,
    palette: { bg: "#6B4FA6", color: "#fff" },
  },
];

const integrations = [
  {
    name: "CareStack",
    desc: "Two-way calendar sync for bookings",
    icon: <FiCalendar size={18} className="text-blue-500" />,
    iconBg: "bg-blue-50",
    status: "Connected",
  },
  {
    name: "Twilio",
    desc: "SMS & AI voice calling",
    icon: <FaTwitter size={16} className="text-blue-500" />,
    iconBg: "bg-blue-50",
    status: "Connected",
  },
  {
    name: "WhatsApp Business",
    desc: "Nurture on WhatsApp",
    icon: <FaWhatsapp size={18} className="text-emerald-500" />,
    iconBg: "bg-emerald-50",
    status: "setup",
  },
  {
    name: "Meta",
    desc: "",
    icon: <FaMeta size={16} className="text-blue-500" />,
    iconBg: "bg-blue-50",
    status: "Connected",
  },
  {
    name: "Google",
    desc: "",
    icon: <FaGoogle size={15} className="text-[#4285F4]" />,
    iconBg: "bg-gray-50",
    status: "Connected",
  },
];

// ---------- Sub components ----------
function TabButton({ label, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`relative pb-3 text-sm font-medium transition-colors ${
        active ? "text-gray-900" : "text-gray-400 hover:text-gray-600"
      }`}
    >
      {label}
      {active && (
        <span className="absolute left-0 right-0 -bottom-px h-0.5 bg-gray-900 rounded-full" />
      )}
    </button>
  );
}

function TextField({ label, value }) {
  return (
    <div>
      <label className="block text-sm text-gray-700 mb-2">{label}</label>
      <input
        type="text"
        readOnly
        defaultValue={value}
        className="w-full text-sm border border-gray-200 rounded-lg px-3.5 py-2.5 text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-900/10"
      />
    </div>
  );
}

function ColorField({ label, swatch, value }) {
  return (
    <div>
      <label className="block text-sm text-gray-700 mb-2">{label}</label>
      <div className="flex items-center gap-3">
        <span
          className="w-9 h-9 rounded-lg border border-black/5 shrink-0"
          style={{ backgroundColor: swatch }}
        />
        <input
          type="text"
          readOnly
          defaultValue={value}
          className="flex-1 text-sm border border-gray-200 rounded-lg px-3.5 py-2.5 text-gray-700 font-mono focus:outline-none focus:ring-2 focus:ring-gray-900/10"
        />
      </div>
    </div>
  );
}

// ---------- Panel: Branding ----------
function BrandingPanel() {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl border border-black/5 p-6">
          <h2 className="text-base font-semibold text-gray-900 mb-1">
            Clinic identity
          </h2>
          <p className="text-xs text-gray-400 mb-6">
            Applied to every landing page and patient message.
          </p>

          <div className="flex flex-col gap-5">
            <TextField label="Clinic name" value="Bright Smile Dental" />

            <div>
              <label className="block text-sm text-gray-700 mb-2">Logo</label>
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-teal-700 text-white flex items-center justify-center font-serif text-lg">
                  B
                </div>
                <button className="inline-flex items-center gap-1.5 text-sm text-gray-700 font-medium border border-gray-200 rounded-lg px-3.5 py-2 hover:border-gray-300 transition-colors">
                  <FiUpload size={14} />
                  Upload new
                </button>
              </div>
            </div>

            <TextField
              label="Contact phone (shown to patients)"
              value="01865 000 000"
            />
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-black/5 p-6">
          <h2 className="text-base font-semibold text-gray-900 mb-1">
            Brand colors
          </h2>
          <p className="text-xs text-gray-400 mb-6">
            Used on landing pages and email headers.
          </p>

          <div className="flex flex-col gap-5">
            <ColorField label="Primary colour" swatch="#1C6168" value="#1C6168" />
            <ColorField label="Accent colour" swatch="#7BB6BB" value="#7BB6BB" />
            <TextField label="Patient-facing sender name" value="Bright Smile Dental" />

            <div className="flex items-start gap-2.5 bg-blue-50 border border-blue-100 rounded-xl px-4 py-3">
              <FiEye className="text-blue-500 shrink-0 mt-0.5" size={15} />
              <p className="text-xs text-blue-900 leading-relaxed">
                Patients never see the Orbis name — pages and messages are
                fully white-labelled as your clinic.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-end mt-6">
        <button className="bg-gray-900 text-white text-sm font-medium px-5 py-2.5 rounded-xl hover:bg-gray-800 transition-colors">
          Save branding
        </button>
      </div>
    </>
  );
}

// ---------- Panel: Integrations ----------
function IntegrationsPanel() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
      {integrations.map((it) => (
        <div
          key={it.name}
          className="bg-white rounded-2xl border border-black/5 px-5 py-5 flex items-center justify-between gap-3"
        >
          <div className="flex items-center gap-3 min-w-0">
            <span
              className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${it.iconBg}`}
            >
              {it.icon}
            </span>
            <div className="min-w-0">
              <div className="font-serif text-sm text-gray-900 truncate">
                {it.name}
              </div>
              {it.desc && (
                <div className="text-xs text-gray-400 truncate">{it.desc}</div>
              )}
            </div>
          </div>

          {it.status === "Connected" ? (
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-600 shrink-0">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              Connected
            </span>
          ) : (
            <button className="bg-orange-500 text-white text-xs font-medium px-3.5 py-2 rounded-lg hover:bg-orange-600 transition-colors shrink-0">
              Finish setup
            </button>
          )}
        </div>
      ))}
    </div>
  );
}

// ---------- Panel: Team & roles ----------
function TeamPanel() {
  return (
    <>
      <div className="bg-white rounded-2xl border border-black/5 overflow-hidden">
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-50">
          <div>
            <h2 className="text-base font-semibold text-gray-900">
              Team members
            </h2>
            <p className="text-xs text-gray-400 mt-0.5">
              Control who can see leads and change settings
            </p>
          </div>
          <button className="inline-flex items-center gap-1.5 bg-gray-900 text-white text-sm font-medium px-4 py-2.5 rounded-xl hover:bg-gray-800 transition-colors shrink-0">
            <FiPlus size={14} />
            Invite
          </button>
        </div>

        <div className="grid grid-cols-[2fr_2fr_1.2fr_0.8fr_0.4fr] px-6 py-3 border-b border-gray-100">
          {["Member", "Email", "Role", "2FA", ""].map((h) => (
            <div
              key={h}
              className="font-mono text-[11px] uppercase tracking-wider text-gray-400"
            >
              {h}
            </div>
          ))}
        </div>

        {team.map((m) => (
          <div
            key={m.name}
            className="grid grid-cols-[2fr_2fr_1.2fr_0.8fr_0.4fr] items-center px-6 py-4 border-b border-gray-50 last:border-b-0 hover:bg-gray-50/60 transition-colors"
          >
            <div className="flex items-center gap-3">
              <span
                className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold shrink-0"
                style={{ backgroundColor: m.palette.bg, color: m.palette.color }}
              >
                {m.name
                  .split(" ")
                  .map((w) => w[0])
                  .filter((_, i, arr) => i === 0 || i === arr.length - 1)
                  .join("")
                  .toUpperCase()
                  .slice(0, 2)}
              </span>
              <span className="text-sm font-semibold text-gray-900">
                {m.name}
              </span>
            </div>
            <div className="text-sm text-gray-500">{m.email}</div>
            <div>
              <span
                className={`inline-flex px-2.5 py-0.5 rounded-full text-xs font-medium ${m.roleStyle}`}
              >
                {m.role}
              </span>
            </div>
            <div>
              <span
                className={`inline-flex items-center gap-1.5 text-xs font-medium ${
                  m.twoFA ? "text-emerald-600" : "text-red-500"
                }`}
              >
                <span
                  className={`w-1.5 h-1.5 rounded-full ${
                    m.twoFA ? "bg-emerald-500" : "bg-red-500"
                  }`}
                />
                {m.twoFA ? "On" : "Off"}
              </span>
            </div>
            <div className="flex justify-end">
              {m.you ? (
                <span className="text-xs text-gray-400">You</span>
              ) : (
                <button className="text-gray-400 hover:text-gray-700 transition-colors">
                  <FiSettings size={15} />
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-start gap-2.5 bg-blue-50 border border-blue-100 rounded-xl px-4 py-3 mt-6">
        <FiShield className="text-blue-500 shrink-0 mt-0.5" size={15} />
        <p className="text-sm text-blue-900 leading-relaxed">
          <span className="font-semibold">Roles:</span> Clinic admins manage
          billing, settings and team. Staff can see and work leads but can't
          change billing or integrations.
        </p>
      </div>
    </>
  );
}

// ---------- Main component ----------
function Settings() {
  const [tab, setTab] = useState("Branding");

  return (
    <div>
      <div className="">
        {/* Header */}
        <div className="mb-6">
          <h1 className="font-serif text-3xl text-gray-900 mb-2">Settings</h1>
          <p className="text-sm text-gray-500">
            Manage your clinic profile, branding, integrations and team.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex items-center gap-7 border-b border-gray-200 mb-6">
          {tabs.map((t) => (
            <TabButton key={t} label={t} active={tab === t} onClick={() => setTab(t)} />
          ))}
        </div>

        {/* Panels */}
        {tab === "Branding" && <BrandingPanel />}
        {tab === "Integrations" && <IntegrationsPanel />}
        {tab === "Team & roles" && <TeamPanel />}
      </div>
    </div>
  );
}

export default Settings;