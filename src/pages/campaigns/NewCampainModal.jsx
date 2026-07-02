import React, { useState } from "react";
import { Modal } from "antd";
import { FiPlus, FiX } from "react-icons/fi";

function Field({ label, required, placeholder, textarea, defaultValue }) {
  return (
    <div>
      <label className="block text-sm font-semibold text-gray-900 mb-2">
        {label}
        {required && <span className="text-red-500 ml-0.5">*</span>}
      </label>
      {textarea ? (
        <textarea
          rows={3}
          placeholder={placeholder}
          defaultValue={defaultValue}
          className="w-full text-sm border border-gray-200 rounded-lg px-3.5 py-2.5 text-gray-700 placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-gray-900/10 resize-none"
        />
      ) : (
        <input
          type="text"
          placeholder={placeholder}
          defaultValue={defaultValue}
          className="w-full text-sm border border-gray-200 rounded-lg px-3.5 py-2.5 text-gray-700 placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-gray-900/10"
        />
      )}
    </div>
  );
}

export default function NewCampaignModal() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => setIsModalOpen(true);
  const handleCancel = () => setIsModalOpen(false);
  const handleCreate = () => setIsModalOpen(false);

  return (
    <div>
      <button
        type="button"
        onClick={showModal}
        className="inline-flex items-center gap-1.5 bg-gray-900 text-white text-sm font-medium px-4 py-2.5 rounded-xl hover:bg-gray-800 transition-colors shrink-0"
      >
        <FiPlus size={14} />
        New campaign
      </button>

      <Modal
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
        closable={false}
        width={492}
        styles={{
          content: { padding: 0, borderRadius: 20, overflow: "hidden" },
        }}
      >
        {/* Header */}
        <div className="px-6 pt-6 pb-5 relative">
          <button
            onClick={handleCancel}
            className="absolute top-6 right-6 text-gray-300 hover:text-gray-500 transition-colors"
          >
            <FiX size={20} />
          </button>
          <h2 className="font-serif text-xl text-gray-900 mb-1">
            Create a campaign
          </h2>
          <p className="text-xs text-gray-400">
            You can refine the landing page and AI script after creating.
          </p>
        </div>

        {/* Body */}
        <div className="px-6 pb-6 flex flex-col gap-5 max-h-[60vh] overflow-y-auto">
          <Field
            label="Treatment / campaign name"
            required
            placeholder="e.g. Teeth Whitening"
          />
          <Field
            label="Landing page headline"
            placeholder="A brighter smile in one visit"
          />
          <Field
            label="Body copy"
            textarea
            defaultValue="Permanent, natural-looking dental implants placed by our award-winning Oxford team. Book your free consultation."
          />
          <Field
            label="Call-to-action button"
            placeholder="Request my free consultation"
          />
          <Field
            label="AI greeting (spoken under the clinic's name)"
            textarea
            defaultValue="Hi, this is Bright Smile Dental calling about your dental implant enquiry. Is now a good time for a quick chat?"
          />
        </div>

        {/* Footer */}
        <div className="flex justify-end gap-3 px-6 py-4 bg-gray-50 border-t border-gray-100">
          <button
            onClick={handleCancel}
            className="text-sm font-medium text-gray-600 px-5 py-2.5 rounded-xl border border-gray-200 hover:bg-gray-100 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleCreate}
            className="text-sm font-medium text-white bg-gray-900 px-5 py-2.5 rounded-xl hover:bg-gray-800 transition-colors"
          >
            Create campaign
          </button>
        </div>
      </Modal>
    </div>
  );
}