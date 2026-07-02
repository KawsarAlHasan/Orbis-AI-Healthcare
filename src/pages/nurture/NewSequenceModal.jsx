import React, { useState } from "react";
import { Modal, Select } from "antd";
import { FiPlus, FiX } from "react-icons/fi";

const campaignOptions = [
  { value: "Dental Implants", label: "Dental Implants" },
  { value: "Invisalign", label: "Invisalign" },
  { value: "Facial Aesthetics", label: "Facial Aesthetics" },
];

export default function NewSequenceModal() {
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
        New sequence
      </button>

      <Modal
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
        closable={false}
        width={438}
        styles={{
          content: { padding: 0, borderRadius: 20, overflow: "hidden" },
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 pt-6 pb-5">
          <h2 className="font-serif text-xl text-gray-900">New sequence</h2>
          <button
            onClick={handleCancel}
            className="text-gray-300 hover:text-gray-500 transition-colors"
          >
            <FiX size={20} />
          </button>
        </div>

        {/* Body */}
        <div className="px-6 pb-6 flex flex-col gap-5">
          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-2">
              Sequence name
            </label>
            <input
              type="text"
              placeholder="e.g. Whitening — default"
              className="w-full text-sm border border-gray-200 rounded-lg px-3.5 py-2.5 text-gray-700 placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-gray-900/10"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-2">
              Apply to campaign
            </label>
            <Select
              defaultValue="Dental Implants"
              options={campaignOptions}
              className="w-full"
              size="large"
            />
          </div>
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
            Create
          </button>
        </div>
      </Modal>
    </div>
  );
}