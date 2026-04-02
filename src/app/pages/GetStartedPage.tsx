import { useState } from "react";

/* ------------------------------------------------------------------ */
/*  Sub-components                                                     */
/* ------------------------------------------------------------------ */

function HeroBanner() {
  return (
    <section
      className="w-full py-10 lg:pt-40"
      style={{ background: "linear-gradient(135deg, #003865 0%, #00507a 100%)" }}
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-12">
        <p className="text-white/70 text-[13px] font-[600] uppercase tracking-widest mb-2">
          For Healthcare Professionals
        </p>
        <h1 className="text-white text-[22px] md:text-[28px] lg:text-[34px] font-[800] leading-tight mb-3">
          Request an ICLUSIG<sup className="text-[60%]">&reg;</sup> (ponatinib) Representative
        </h1>
        <p className="text-white/80 text-[15px] md:text-[17px] font-[400] leading-snug max-w-2xl">
          Connect with a Takeda sales representative to learn more about ICLUSIG and how it may benefit your patients.
        </p>
      </div>
    </section>
  );
}

function FormField({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-[#1B2430] text-[13px] font-[600]">
        {label}
        {required && <span className="text-red-500 ml-0.5">*</span>}
      </label>
      {children}
    </div>
  );
}

const inputClass =
  "w-full border border-[#CBD5E1] rounded-md px-3 py-2.5 text-[14px] text-[#1B2430] placeholder-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#0A8FFF] focus:border-transparent transition-all bg-white";

const selectClass =
  "w-full border border-[#CBD5E1] rounded-md px-3 py-2.5 text-[14px] text-[#1B2430] focus:outline-none focus:ring-2 focus:ring-[#0A8FFF] focus:border-transparent transition-all bg-white appearance-none";

/* ------------------------------------------------------------------ */
/*  Main page                                                          */
/* ------------------------------------------------------------------ */

export function GetStartedPage() {
  const [submitted, setSubmitted] = useState(false);
  const [consent1, setConsent1] = useState(false);
  const [consent2, setConsent2] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  if (submitted) {
    return (
      <div className="flex-1 bg-white min-w-0">
        <HeroBanner />
        <section className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-12 py-12 md:py-16">
          <div className="max-w-2xl">
            <div className="bg-[#E6F4F1] border border-[#00A67E] rounded-lg p-8 text-center">
              <div className="w-12 h-12 rounded-full bg-[#00A67E] flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-[#003865] text-[22px] font-[800] mb-2">Thank You!</h2>
              <p className="text-[#374151] text-[15px] leading-relaxed">
                Your request has been received. A Takeda ICLUSIG representative will be in touch with you shortly.
              </p>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="flex-1 bg-white min-w-0">
      <HeroBanner />

      <section className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-12 py-10 md:py-14">
        <div className="max-w-4xl grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* ── Form ── */}
          <div className="lg:col-span-2">
            <p className="text-[#374151] text-[14px] md:text-[15px] leading-relaxed mb-6">
              Are you an HCP ready to connect with an ICLUSIG<sup className="text-[60%]">&reg;</sup> (ponatinib) sales representative?
              Complete the form below and a representative will reach out to you.
            </p>
            <p className="text-[12px] text-[#94A3B8] mb-6">
              This form is for healthcare providers only. Patients and caregivers should contact{" "}
              <a
                href="https://www.here2assist.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#237EBF] underline hover:text-[#003865] transition-colors"
              >
                Here2Assist
              </a>{" "}
              for support.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FormField label="First Name" required>
                  <input className={inputClass} type="text" placeholder="Jane" required />
                </FormField>
                <FormField label="Last Name" required>
                  <input className={inputClass} type="text" placeholder="Smith" required />
                </FormField>
              </div>

              {/* Title */}
              <FormField label="Title" required>
                <div className="relative">
                  <select className={selectClass} required defaultValue="">
                    <option value="" disabled>Select title</option>
                    <option>Dr.</option>
                    <option>Mr.</option>
                    <option>Mrs.</option>
                    <option>Ms.</option>
                  </select>
                  <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#94A3B8]">
                    ▾
                  </span>
                </div>
              </FormField>

              {/* Contact info row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FormField label="Phone Number" required>
                  <input className={inputClass} type="tel" placeholder="(555) 000-0000" required />
                </FormField>
                <FormField label="ZIP Code" required>
                  <input className={inputClass} type="text" placeholder="00000" maxLength={10} required />
                </FormField>
              </div>

              {/* Email */}
              <FormField label="Email Address" required>
                <input className={inputClass} type="email" placeholder="jane.smith@clinic.com" required />
              </FormField>

              {/* Best time */}
              <FormField label="Best Time to Contact You">
                <div className="relative">
                  <select className={selectClass} defaultValue="">
                    <option value="">No preference</option>
                    <option>8 AM – Noon</option>
                    <option>Noon – 3 PM</option>
                    <option>3 PM – 5 PM</option>
                  </select>
                  <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#94A3B8]">
                    ▾
                  </span>
                </div>
              </FormField>

              {/* Specialty */}
              <FormField label="Specialty">
                <div className="relative">
                  <select className={selectClass} defaultValue="">
                    <option value="">Select specialty</option>
                    <option>Hematology / Oncology</option>
                    <option>Medical Oncology</option>
                    <option>Internal Medicine</option>
                    <option>Other</option>
                  </select>
                  <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#94A3B8]">
                    ▾
                  </span>
                </div>
              </FormField>

              {/* Consent checkboxes */}
              <div className="bg-[#F5F7FA] border border-[#E3E8EF] rounded-lg p-5 space-y-4 mt-2">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    className="mt-0.5 flex-shrink-0 accent-[#003865] w-4 h-4"
                    checked={consent1}
                    onChange={(e) => setConsent1(e.target.checked)}
                  />
                  <span className="text-[#374151] text-[12px] md:text-[13px] leading-relaxed">
                    I consent to Takeda contacting me about ICLUSIG<sup className="text-[60%]">&reg;</sup> (ponatinib) and related disease-state information. I understand I may opt out at any time. See{" "}
                    <a href="https://www.takeda.com/en-us/privacy-notice/" target="_blank" rel="noopener noreferrer" className="text-[#237EBF] underline hover:text-[#003865] transition-colors">
                      Takeda's Privacy Notice
                    </a>.
                  </span>
                </label>
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    className="mt-0.5 flex-shrink-0 accent-[#003865] w-4 h-4"
                    checked={consent2}
                    onChange={(e) => setConsent2(e.target.checked)}
                  />
                  <span className="text-[#374151] text-[12px] md:text-[13px] leading-relaxed">
                    I would like to receive information about ICLUSIG<sup className="text-[60%]">&reg;</sup> product updates, clinical data, and educational resources from Takeda.
                  </span>
                </label>
              </div>

              <button
                type="submit"
                disabled={!consent1}
                className="w-full sm:w-auto bg-[#003865] text-white font-[700] text-[15px] px-8 py-3 rounded-md hover:bg-[#00507a] disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              >
                Submit Request
              </button>

              <p className="text-[11px] text-[#94A3B8] leading-relaxed">
                <span className="text-red-500">*</span> Required fields. Consent to contact is required to submit.
              </p>
            </form>
          </div>

          {/* ── Sidebar ── */}
          <div className="space-y-5">
            <div className="bg-[#003865] rounded-lg p-6 text-white">
              <h3 className="text-[16px] font-[800] mb-3">Why Connect With a Rep?</h3>
              <ul className="space-y-3 text-[13px] text-white/85 leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="text-[#0A8FFF] font-bold mt-0.5">✓</span>
                  Get the latest clinical data on ICLUSIG efficacy and safety
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0A8FFF] font-bold mt-0.5">✓</span>
                  Learn about REMS program requirements
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0A8FFF] font-bold mt-0.5">✓</span>
                  Patient access and financial support options
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0A8FFF] font-bold mt-0.5">✓</span>
                  Dosing and administration resources
                </li>
              </ul>
            </div>

            <div className="bg-[#F5F7FA] border border-[#E3E8EF] rounded-lg p-6">
              <h3 className="text-[#003865] text-[15px] font-[700] mb-2">Medical Information</h3>
              <p className="text-[#374151] text-[13px] leading-relaxed mb-3">
                For medical information inquiries, contact Takeda Medical Information directly:
              </p>
              <a
                href="tel:18007688081"
                className="text-[#003865] font-[700] text-[15px] hover:text-[#237EBF] transition-colors"
              >
                1-800-768-8081
              </a>
              <p className="text-[#94A3B8] text-[12px] mt-1">Mon – Fri, 8 AM – 8 PM ET</p>
            </div>

            <div className="bg-[#F5F7FA] border border-[#E3E8EF] rounded-lg p-6">
              <h3 className="text-[#003865] text-[15px] font-[700] mb-2">Patient Support</h3>
              <p className="text-[#374151] text-[13px] leading-relaxed mb-3">
                Takeda Oncology Here2Assist<sup className="text-[60%]">&reg;</sup> can help your patients with coverage, financial assistance, and more.
              </p>
              <a
                href="https://www.here2assist.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#237EBF] text-[13px] font-[600] underline hover:text-[#003865] transition-colors"
              >
                www.Here2Assist.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Indication */}
      <section className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-12 pb-10">
        <div className="max-w-4xl border-t border-[#E3E8EF] pt-6">
          <p className="text-[#374151] text-[12px] leading-relaxed">
            <strong>INDICATION:</strong> ICLUSIG<sup className="text-[60%]">&reg;</sup> (ponatinib) is indicated for the treatment of adults with T315I-positive chronic myeloid leukemia (CML) (chronic phase, accelerated phase, or blast phase) or T315I-positive Philadelphia chromosome–positive acute lymphoblastic leukemia (Ph+ ALL); adults with chronic phase, accelerated phase, or blast phase CML or Ph+ ALL for whom no other kinase inhibitor therapy is indicated; and in combination with low-intensity chemotherapy in adults with newly diagnosed Ph+ ALL.
          </p>
        </div>
      </section>
    </div>
  );
}
