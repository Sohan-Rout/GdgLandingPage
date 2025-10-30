"use client";
import React, { useState } from "react";

const WhatsappOverlay = () => {
  const [showModal, setShowModal] = useState(false);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    skill: "",
    branch: "",
    year: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const getWhatsAppLink = () => {
    const { branch, year } = formData;
    const links: Record<string, Record<string, string>> = {
      "Core CSE": {
        1: "https://chat.whatsapp.com/KTU84RwtDr0FacgwusSZrU?mode=wwt",
        2: "https://chat.whatsapp.com/DHrDPlR6nx63D2Xst6mz7t?mode=wwt",
        3: "https://chat.whatsapp.com/KCsbFuPHKDJ0khnv8gfLUK?mode=wwt",
        4: "https://chat.whatsapp.com/ClcAhYNKC3q3PYsKeWwMCH?mode=wwt",
      },
      "CSIT": {
        1: "https://chat.whatsapp.com/KTU84RwtDr0FacgwusSZrU?mode=wwt",
        2: "https://chat.whatsapp.com/DHrDPlR6nx63D2Xst6mz7t?mode=wwt",
        3: "https://chat.whatsapp.com/KCsbFuPHKDJ0khnv8gfLUK?mode=wwt",
        4: "https://chat.whatsapp.com/ClcAhYNKC3q3PYsKeWwMCH?mode=wwt",
      },
      "CSE IOT": {
        1: "https://chat.whatsapp.com/KTU84RwtDr0FacgwusSZrU?mode=wwt",
        2: "https://chat.whatsapp.com/DHrDPlR6nx63D2Xst6mz7t?mode=wwt",
        3: "https://chat.whatsapp.com/KCsbFuPHKDJ0khnv8gfLUK?mode=wwt",
        4: "https://chat.whatsapp.com/ClcAhYNKC3q3PYsKeWwMCH?mode=wwt",
      },
      "AI/ML": {
        1: "https://chat.whatsapp.com/BNhnt2iNCGN2NqEQkxRH7k?mode=wwt",
        2: "https://chat.whatsapp.com/KFog5xMga7K8j7Em59oBEL?mode=wwt",
        3: "https://chat.whatsapp.com/Kz64MhkDNGOKViigu4lssp?mode=wwt",
        4: "https://chat.whatsapp.com/GriluYhX23C1X78zZFqKq2?mode=wwt",
      },
      "ECE": {
        1: "https://chat.whatsapp.com/BNhnt2iNCGN2NqEQkxRH7k?mode=wwt",
        2: "https://chat.whatsapp.com/KFog5xMga7K8j7Em59oBEL?mode=wwt",
        3: "https://chat.whatsapp.com/Kz64MhkDNGOKViigu4lssp?mode=wwt",
        4: "https://chat.whatsapp.com/GriluYhX23C1X78zZFqKq2?mode=wwt",
      },
      "ECS": {
        1: "https://chat.whatsapp.com/BNhnt2iNCGN2NqEQkxRH7k?mode=wwt",
        2: "https://chat.whatsapp.com/KFog5xMga7K8j7Em59oBEL?mode=wwt",
        3: "https://chat.whatsapp.com/Kz64MhkDNGOKViigu4lssp?mode=wwt",
        4: "https://chat.whatsapp.com/GriluYhX23C1X78zZFqKq2?mode=wwt",
      },
    };
    return links[branch]?.[year] || "#";
  };

  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        className="bg-neutral-200 text-sm px-4 font-semibold rounded-sm"
      >
        Join Us
      </button>

      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white w-[90%] max-w-md rounded-lg p-6 shadow-xl relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-3 right-3 text-gray-600 hover:text-black"
            >
              ✕
            </button>

            {step === 1 && (
              <div>
                <h2 className="text-xl mb-3">
                  What skill are you interested in?
                </h2>
                <select
                  name="skill"
                  value={formData.skill}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md p-2 mb-4"
                >
                  <option value="">Select a role</option>
                  <option>Frontend</option>
                  <option>UI/UX</option>
                  <option>Backend</option>
                  <option>Software Engineering</option>
                </select>
                <button
                  onClick={handleNext}
                  disabled={!formData.skill}
                  className="bg-black text-white px-4 py-2 rounded-md disabled:opacity-50"
                >
                  Next
                </button>
              </div>
            )}

            {step === 2 && (
              <div>
                <h2 className="text-xl font-semibold mb-3">
                  What branch are you from?
                </h2>
                <select
                  name="branch"
                  value={formData.branch}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md p-2 mb-4"
                >
                  <option value="">Select a branch</option>
                  <option>Core CSE</option>
                  <option>CSIT</option>
                  <option>CSE IOT</option>
                  <option>AI/ML</option>
                  <option>ECE</option>
                  <option>ECS</option>
                </select>
                <div className="flex justify-between">
                  <button
                    onClick={handleBack}
                    className="text-gray-600 border border-gray-300 px-4 py-2 rounded-md"
                  >
                    Back
                  </button>
                  <button
                    onClick={handleNext}
                    disabled={!formData.branch}
                    className="bg-black text-white px-4 py-2 rounded-md disabled:opacity-50"
                  >
                    Next
                  </button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div>
                <h2 className="text-xl font-semibold mb-3">Which year are you in?</h2>
                <select
                  name="year"
                  value={formData.year}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md p-2 mb-4"
                >
                  <option value="">Select year</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
                <div className="flex justify-between">
                  <button
                    onClick={handleBack}
                    className="text-gray-600 border border-gray-300 px-4 py-2 rounded-md"
                  >
                    Back
                  </button>
                  <a
                    href={getWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`px-4 py-2 rounded-md text-white ${
                      formData.year
                        ? "bg-black"
                        : "bg-gray-400 cursor-not-allowed"
                    }`}
                  >
                    {formData.year ? "Join WhatsApp Group" : "Select Year"}
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default WhatsappOverlay;