import React from "react";
import { Avatar, Table } from "antd";
import { FiPhone, FiMail, FiMinusCircle, FiArrowUp } from "react-icons/fi";
import ViewDetails from "./ViewDetails";

// ---------- Fake data ----------
const stats = [
  {
    label: "Total lead",
    value: "2000",
    delta: "+40% vs last 12 month",
    deltaIcon: <FiArrowUp className="text-emerald-600" size={12} />,
  },
  {
    label: "Calls Today",
    value: "38",
    delta: "Avg 4m 02s to first call",
    deltaIcon: <FiPhone className="text-emerald-600" size={12} />,
  },
  {
    label: "Answer Rate",
    value: "76%",
    delta: "+4% this week",
    deltaIcon: <FiArrowUp className="text-emerald-600" size={12} />,
  },
  {
    label: "Avg Call Length",
    value: "2m 51s",
    delta: null,
  },
];

const sourceStyles = {
  Meta: "bg-blue-50 text-blue-600 border-blue-100",
  Organic: "bg-emerald-50 text-emerald-600 border-emerald-100",
  Google: "bg-sky-50 text-sky-600 border-sky-100",
};

const stageStyles = {
  Qualified: { dot: "bg-violet-500", text: "text-violet-600", bg: "bg-violet-50" },
  Booked: { dot: "bg-orange-500", text: "text-orange-600", bg: "bg-orange-50" },
  New: { dot: "bg-slate-400", text: "text-slate-600", bg: "bg-slate-50" },
};

const outcomeStyles = {
  Answered: { text: "text-emerald-600", icon: <FiPhone size={11} /> },
  Voicemail: { text: "text-amber-500", icon: <FiMail size={11} /> },
  "No answer": { text: "text-gray-400", icon: <FiMinusCircle size={11} /> },
};

const avatarPalette = [
  { bg: "#FDE8D7", color: "#C2703D" },
  { bg: "#DCEAFB", color: "#3B6FB6" },
  { bg: "#E4F5E9", color: "#3E9160" },
  { bg: "#F3E3F7", color: "#8B4FA6" },
  { bg: "#FCE4E4", color: "#C24848" },
];

const names = [
  { name: "Sarah Whitman", phone: "07700 900 412" },
  { name: "Daniel Ferreira", phone: "07700 900 118" },
  { name: "Priya Anand", phone: "07700 900 561" },
  { name: "Michael Osei", phone: "07700 900 233" },
  { name: "Lucy Bennett", phone: "07700 900 874" },
  { name: "Tomasz Nowak", phone: "07700 900 305" },
  { name: "Aisha Rahman", phone: "07700 900 690" },
  { name: "Ethan Clarke", phone: "07700 900 447" },
];

const sources = ["Meta", "Meta", "Meta", "Meta", "Organic", "Meta", "Google", "Meta"];
const stages = ["Qualified", "Qualified", "Booked", "Booked", "Booked", "Qualified", "Qualified", "Qualified"];
const outcomes = ["Answered", "Answered", "Voicemail", "Voicemail", "No answer", "No answer", "No answer", "No answer"];

const leads = names.map((n, i) => ({
  key: i,
  ...n,
  initials: n.name
    .split(" ")
    .map((w) => w[0])
    .join(""),
  treatment: "Dental Implants",
  source: sources[i],
  stage: stages[i],
  outcome: outcomes[i],
  revenue: "$200",
  length: "3m 12s",
  palette: avatarPalette[i % avatarPalette.length],
}));

// ---------- Sub components ----------
function StatCard({ label, value, delta, deltaIcon }) {
  return (
    <div className="flex-1 bg-white rounded-2xl border border-black/5 px-6 py-5 shadow-[0_1px_2px_rgba(0,0,0,0.03)]">
      <div className="font-mono text-[11px] uppercase tracking-wider text-gray-400 mb-3">
        {label}
      </div>
      <div className="font-serif text-4xl text-gray-900 mb-2">{value}</div>
      {delta && (
        <div className="flex items-center gap-1 text-xs text-emerald-600 font-medium">
          {deltaIcon}
          <span>{delta}</span>
        </div>
      )}
    </div>
  );
}

function SourceTag({ source }) {
  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-md border text-xs font-medium ${sourceStyles[source]}`}
    >
      {source}
    </span>
  );
}

function StageTag({ stage }) {
  const s = stageStyles[stage] || stageStyles.New;
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium ${s.bg} ${s.text}`}
    >
      <span className={`w-1.5 h-1.5 rounded-full ${s.dot}`} />
      {stage}
    </span>
  );
}

function OutcomeTag({ outcome }) {
  const o = outcomeStyles[outcome];
  return (
    <span className={`inline-flex items-center gap-1.5 text-xs font-medium ${o.text}`}>
      {o.icon}
      {outcome}
    </span>
  );
}

// ---------- antd Table column definitions ----------
const columns = [
  {
    title: "Lead",
    dataIndex: "name",
    key: "name",
    render: (_, lead) => (
      <div className="flex items-center gap-3">
        <Avatar
          style={{
            backgroundColor: lead.palette.bg,
            color: lead.palette.color,
            fontWeight: 600,
            fontSize: 12,
          }}
        >
          {lead.initials}
        </Avatar>
        <div>
          <div className="text-sm font-semibold text-gray-900">{lead.name}</div>
          <div className="text-xs text-gray-400 font-mono">{lead.phone}</div>
        </div>
      </div>
    ),
  },
  {
    title: "Treatment",
    dataIndex: "treatment",
    key: "treatment",
    render: (treatment) => <span className="text-sm text-gray-600">{treatment}</span>,
  },
  {
    title: "Source",
    dataIndex: "source",
    key: "source",
    render: (source) => <SourceTag source={source} />,
  },
  {
    title: "Stage",
    dataIndex: "stage",
    key: "stage",
    render: (stage) => <StageTag stage={stage} />,
  },
  {
    title: "Outcome",
    dataIndex: "outcome",
    key: "outcome",
    render: (outcome) => <OutcomeTag outcome={outcome} />,
  },
  {
    title: "Revenue",
    dataIndex: "revenue",
    key: "revenue",
    render: (revenue) => <span className="text-sm font-mono text-gray-900">{revenue}</span>,
  },
  {
    title: "Length",
    dataIndex: "length",
    key: "length",
    render: (length) => <span className="text-sm font-mono text-gray-500">{length}</span>,
  },
  {
    title: "",
    key: "actions",
    align: "right",
    render: () => (
      <div className="flex justify-end">
        <ViewDetails />
      </div>
    ),
  },
];

// ---------- Main component ----------
function Leads() {
  return (
    <div className="min-h-screen w-full">
      <style>{`
        .leads-table .ant-table {
          background: transparent;
        }
        .leads-table .ant-table-thead > tr > th {
          background: transparent;
          border-bottom: 1px solid #f3f4f6;
          font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: #9ca3af;
          font-weight: 500;
          padding: 12px 24px;
        }
        .leads-table .ant-table-thead > tr > th::before {
          display: none;
        }
        .leads-table .ant-table-tbody > tr > td {
          border-bottom: 1px solid #f9fafb;
          padding: 16px 24px;
        }
        .leads-table .ant-table-tbody > tr:last-child > td {
          border-bottom: none;
        }
        .leads-table .ant-table-tbody > tr:hover > td {
          background: rgba(249, 250, 251, 0.6) !important;
        }
      `}</style>

      <div className="">
        {/* Header */}
        <div className="mb-8">
          <h1 className="font-serif text-3xl text-gray-900 mb-2">
            Leads &amp; Pipeline
          </h1>
          <p className="text-sm text-gray-500 max-w-xl leading-relaxed">
            Every enquiry, from first contact to converted patient. Drag a
            card to move it through the journey.
          </p>
        </div>

        {/* Stat cards */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-8">
          {stats.map((s) => (
            <StatCard key={s.label} {...s} />
          ))}
        </div>

        {/* Table */}
        <div className="bg-white rounded-2xl border border-black/5 overflow-hidden leads-table">
          <Table
            columns={columns}
            dataSource={leads}
            pagination={false}
            rowKey="key"
          />
        </div>
      </div>
    </div>
  );
}

export default Leads;