import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export function ISIContent() {
  const [refsOpen, setRefsOpen] = useState(false);

  return (
    <div className="text-[13px] sm:text-[14px] text-[#444]">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-6 lg:gap-8">
        {/* Left: Safety Content */}
        <div className="space-y-5">
          {/* Boxed Warning */}
          <div className="border-2 border-[#333] rounded-lg p-4 sm:p-5">
            <h3 className="text-[12px] sm:text-[13px] font-[700] uppercase tracking-wider text-[#333] mb-2">
              WARNING: ARTERIAL OCCLUSIVE EVENTS, VENOUS THROMBOEMBOLIC EVENTS, HEART FAILURE, and HEPATOTOXICITY
            </h3>
            <p className="italic font-[700] mb-3">
              See full prescribing information for complete boxed warning.
            </p>
            <ul className="list-disc pl-5 space-y-2 font-[700]">
              <li>
                Arterial occlusive events (AOEs), including fatalities, have occurred in ICLUSIG-treated patients. AOEs included fatal myocardial infarction, stroke, stenosis of large arterial vessels of the brain, severe peripheral vascular disease, and the need for urgent revascularization procedures. Patients with and without cardiovascular risk factors, including patients age 50 years or younger, experienced these events. Monitor for evidence of AOEs. Interrupt or discontinue ICLUSIG based on severity. Consider benefit-risk to guide a decision to restart ICLUSIG.
              </li>
              <li>
                Venous thromboembolic events (VTEs) have occurred in ICLUSIG-treated patients. Monitor for evidence of VTEs. Interrupt or discontinue ICLUSIG based on severity.
              </li>
              <li>
                Heart failure, including fatalities, occurred in ICLUSIG-treated patients. Monitor for heart failure and manage patients as clinically indicated. Interrupt or discontinue ICLUSIG for new or worsening heart failure.
              </li>
              <li>
                Hepatotoxicity, liver failure and death have occurred in ICLUSIG-treated patients. Monitor liver function tests. Interrupt or discontinue ICLUSIG based on severity.
              </li>
            </ul>
          </div>

          {/* Warnings and Precautions */}
          <div>
            <h3 className="text-[14px] sm:text-[15px] font-[700] text-[#333] mb-3 uppercase">
              Warnings and Precautions
            </h3>
            <div className="space-y-3">
              <p>
                <strong>Arterial Occlusive Events (AOEs): </strong>AOEs, including fatalities, have occurred in patients who received ICLUSIG. These included cardiovascular, cerebrovascular, and peripheral vascular events, and occurred in patients with and without cardiovascular risk factors. Monitor for evidence of AOEs. Interrupt, then resume at the same or decreased dose, or discontinue ICLUSIG based on recurrence/severity. Consider benefit-risk before restarting ICLUSIG.
              </p>
              <p>
                <strong>Venous Thromboembolic Events (VTEs): </strong>Serious or severe VTEs have occurred in patients who received ICLUSIG, including events such as deep vein thrombosis, embolism, pulmonary embolism, superficial vein thrombosis, thrombosis, jugular vein thrombosis, superficial thrombophlebitis, retinal vein occlusion, and retinal vein thrombosis with vision loss. Monitor for evidence of VTEs. Interrupt, then resume at the same or decreased dose, or discontinue ICLUSIG based on recurrence/severity.
              </p>
              <p>
                <strong>Heart Failure: </strong>Fatal, serious, or severe heart failure events have occurred, including increased brain natriuretic peptide (BNP), left ventricular hypertrophy, left ventricular dysfunction, congestive cardiac failure, cardiac failure, left atrial dilatation, and decreased ejection fraction. Monitor for signs or symptoms of heart failure and manage as clinically indicated. Interrupt, then resume at reduced dose, or discontinue ICLUSIG for new or worsening heart failure.
              </p>
              <p>
                <strong>Hepatotoxicity: </strong>ICLUSIG can cause hepatotoxicity, including liver failure and death. Fulminant hepatic failure leading to death has occurred. The most frequent hepatotoxic events were elevations of ALT, AST, GGT, bilirubin, and alkaline phosphatase, and decreased albumin and blood fibrinogen. Monitor liver function tests at baseline, then at least monthly or as clinically indicated. Interrupt, then resume at a reduced dose, or discontinue ICLUSIG based on recurrence/severity.
              </p>
              <p>
                <strong>Hypertension: </strong>Serious or severe hypertension, including hypertensive crisis, has occurred. Patients may require urgent intervention for hypertension with confusion, headache, chest pain, or shortness of breath. Monitor blood pressure at baseline and as clinically indicated and manage as clinically indicated. Interrupt, dose reduce, or discontinue ICLUSIG if hypertension is not medically controlled. For significant worsening, labile or treatment-resistant hypertension, interrupt ICLUSIG and consider evaluating for renal artery stenosis.
              </p>
              <p>
                <strong>Pancreatitis: </strong>Serious or severe pancreatitis has occurred. Elevations of lipase and amylase also occurred. In the majority of cases that led to dose modification or treatment discontinuation, pancreatitis resolved within 2-3 weeks. Monitor serum lipase every 2 weeks for the first 2 months and then monthly or as clinically indicated. Consider additional serum lipase monitoring in patients with a history of pancreatitis or alcohol abuse. Interrupt, then resume at the same or reduced dose, or discontinue ICLUSIG based on severity. Evaluate for pancreatitis when lipase elevation is accompanied by abdominal symptoms.
              </p>
              <p>
                <strong>Increased Toxicity in Newly Diagnosed Chronic Phase CML: </strong>In a prospective randomized clinical trial in the first-line treatment of newly diagnosed patients with CP-CML, single agent ICLUSIG increased the risk of serious adverse reactions. The trial was halted for safety. ICLUSIG is not indicated and is not recommended for the treatment of patients with newly diagnosed CP-CML.
              </p>
              <p>
                <strong>Neuropathy: </strong>Peripheral and cranial neuropathy occurred in ICLUSIG-treated patients, including Grade 3 or 4 events. Monitor for symptoms such as hypoesthesia, hyperesthesia, paresthesia, discomfort, a burning sensation, neuropathic pain, or weakness. Interrupt, then resume at the same or reduced dose, or discontinue ICLUSIG based on recurrence/severity.
              </p>
              <p>
                <strong>Ocular Toxicity: </strong>Serious or severe ocular toxicities leading to blindness and blurred vision have occurred. The most frequent ocular toxicities were dry eye, blurred vision, and eye pain. Retinal toxicities included retinal vein occlusion, retinal hemorrhage, age-related macular degeneration, arteriosclerotic retinopathy, retinal vascular disorder, macular edema, and vitreous floaters. Conduct comprehensive eye exams at baseline and periodically during treatment.
              </p>
              <p>
                <strong>Hemorrhage: </strong>Fatal and serious hemorrhages have occurred. Intracranial hemorrhage, gastrointestinal hemorrhage, and subdural hematoma were the most frequently reported serious hemorrhages. Most hemorrhages occurred in patients with Grade 4 thrombocytopenia. Monitor for hemorrhage and manage as clinically indicated. Interrupt, then resume at the same or reduced dose, or discontinue ICLUSIG based on recurrence/severity.
              </p>
              <p>
                <strong>Fluid Retention: </strong>Fatal and serious events, including one instance of fatal brain edema and serious events of pleural effusion, pericardial effusion, angioedema have occurred. The most frequent occurrences of fluid retention in patients who received ICLUSIG were peripheral edema, pleural effusion, hydrothorax, pericardial effusion, and peripheral swelling. Monitor for fluid retention and manage as clinically indicated. Interrupt, then resume at the same or reduced dose, or discontinue ICLUSIG based on recurrence/severity.
              </p>
              <p>
                <strong>Cardiac Arrhythmias: </strong>Cardiac arrhythmias, including ventricular and atrial arrhythmias, tachycardia, bradycardia, cardio-respiratory arrest, syncope, atrial fibrillation, and supraventricular tachycardia, have occurred, including some patients with serious or severe (Grade 3 or 4) events leading to hospitalization. Monitor for signs and symptoms suggestive of slow heart rate (fainting, dizziness) or rapid heart rate (chest pain, palpitations, or dizziness) and manage patients as clinically indicated. Interrupt, then resume at the same or reduced dose, or discontinue ICLUSIG based on recurrence/severity.
              </p>
              <p>
                <strong>Myelosuppression: </strong>Grade 3 or 4 neutropenia, thrombocytopenia, and anemia have occurred. Obtain complete blood counts every 2 weeks for the first 3 months and then monthly or as clinically indicated. Interrupt ICLUSIG if ANC &lt;1 × 10⁹/L or platelets &lt;50 × 10⁹/L, and resume when ANC ≥1.5 × 10⁹/L and platelets ≥75 × 10⁹/L, at same or reduced dose.
              </p>
              <p>
                <strong>Tumor Lysis Syndrome (TLS): </strong>Serious TLS has occurred. Ensure adequate hydration and treat elevated uric acid prior to initiating ICLUSIG.
              </p>
              <p>
                <strong>Reversible Posterior Leukoencephalopathy Syndrome (RPLS): </strong>RPLS has been reported. Patients can present with hypertension, seizure, headache, decreased alertness, altered mental functioning, vision loss, and other visual and neurological disturbances. MRI is necessary to confirm diagnosis. Interrupt ICLUSIG until resolution. The safety of resumption of ICLUSIG upon resolution of RPLS is unknown.
              </p>
              <p>
                <strong>Impaired Wound Healing and Gastrointestinal Perforation: </strong>Impaired wound healing occurred in patients receiving ICLUSIG. Withhold ICLUSIG for at least 1 week before elective surgery and for at least 2 weeks after major surgery until adequate wound healing. Gastrointestinal perforation or fistula have occurred. Permanently discontinue ICLUSIG in patients with gastrointestinal perforation.
              </p>
              <p>
                <strong>Embryo-Fetal Toxicity: </strong>ICLUSIG can cause fetal harm when administered to pregnant women. Advise pregnant women of the potential risk to the fetus. Females of reproductive potential should use effective contraception during treatment with ICLUSIG and for 3 weeks after the last dose.
              </p>
            </div>
          </div>

          {/* Adverse Reactions */}
          <div>
            <h3 className="text-[14px] sm:text-[15px] font-[700] text-[#333] mb-3 uppercase">
              Adverse Reactions
            </h3>
            <p className="mb-2">The most common adverse reactions (occurring in &gt;20% of patients) are:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>ICLUSIG as a single agent:</strong> rash and related conditions, arthralgia, abdominal pain, fatigue, headache, constipation, hypertension, dry skin, hepatotoxicity, fluid retention and edema, pyrexia, pancreatitis/lipase elevation, nausea, hemorrhage, anemia, AOEs, and cardiac arrhythmias. The most common Grade 3 or 4 laboratory abnormalities (&gt;20%) are platelet count decreased, neutrophil cell count decreased, and white blood cell decreased.
              </li>
              <li>
                <strong>ICLUSIG in combination with chemotherapy:</strong> hepatotoxicity, arthralgia, rash and related conditions, headache, pyrexia, abdominal pain, constipation, fatigue, nausea, oral mucositis, hypertension, pancreatitis/lipase elevation, neuropathy peripheral, hemorrhage, febrile neutropenia, fluid retention and edema, vomiting, paresthesia, and cardiac arrhythmias. The most common Grade 3 or 4 laboratory abnormalities (&gt;20%) are decreased white blood cell count, decreased neutrophil cell count, decreased platelet count, decreased lymphocyte cell count, decreased hemoglobin, increased lipase, and increased alanine aminotransferase.
              </li>
            </ul>
          </div>

          {/* Report Adverse Reactions */}
          <p className="font-[700]">
            To report SUSPECTED ADVERSE REACTIONS, contact Takeda Pharmaceuticals at 1-844-817-6468 or FDA at 1-800-FDA-1088 or{" "}
            <a
              href="https://www.fda.gov/safety/medwatch-fda-safety-information-and-adverse-event-reporting-program"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2C6FA3] underline"
            >
              www.fda.gov/medwatch
            </a>
            .
          </p>

          {/* Drug Interactions */}
          <div>
            <h3 className="text-[14px] sm:text-[15px] font-[700] text-[#333] mb-3 uppercase">
              Drug Interactions
            </h3>
            <p>
              <strong><u>Strong CYP3A Inhibitors</u>:</strong> Avoid coadministration or reduce ICLUSIG dose if coadministration cannot be avoided.
            </p>
            <p className="mt-2">
              <strong><u>Strong CYP3A Inducers</u>:</strong> Avoid coadministration.
            </p>
          </div>

          {/* Use in Specific Populations */}
          <div>
            <h3 className="text-[14px] sm:text-[15px] font-[700] text-[#333] mb-3 uppercase">
              Use in Specific Populations
            </h3>
            <div className="space-y-3">
              <p>
                <strong>Lactation:</strong> Advise women not to breastfeed during treatment with ICLUSIG and for 1 week following last dose.
              </p>
              <p>
                <strong>Females and Males of Reproductive Potential:</strong> Verify pregnancy status of females of reproductive potential prior to initiating ICLUSIG. Ponatinib may impair fertility in females, and it is not known if these effects are reversible.
              </p>
              <p>
                <strong>Pre-existing Hepatic Impairment:</strong> For patients with CP-CML, AP-CML, BP-CML, and Ph+ ALL receiving monotherapy, reduce the starting dose of ICLUSIG to 30 mg orally once daily for patients with pre-existing hepatic impairment. For patients with newly diagnosed Ph+ ALL, no dosage adjustment is recommended when administering ICLUSIG to patients with mild hepatic impairment.
              </p>
            </div>
          </div>

          {/* Prescribing Information Link */}
          <p className="font-[700]">
            Please see full{" "}
            <a
              href="https://www.iclusig.com/hcp/sites/default/files/2022-10/ICLUSIG-Prescribing-Information.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2C6FA3] underline"
            >
              Prescribing Information
            </a>
            , including Boxed Warning.
          </p>
        </div>

        {/* Right: Indications and Usage */}
        <div>
          <h3 className="text-[14px] sm:text-[15px] font-[700] text-[#333] mb-3 uppercase">
            Indications and Usage
          </h3>
          <p className="mb-3">
            ICLUSIG<sup>&reg;</sup> is indicated for the treatment of adult patients with:
          </p>

          <p className="underline mb-2">
            Philadelphia Chromosome-Positive Acute Lymphoblastic Leukemia (Ph+ ALL)
          </p>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li>
              Newly diagnosed Ph+ ALL, in combination with chemotherapy.
              <br />
              This indication is approved under accelerated approval based on minimal residual disease (MRD)-negative complete remission (CR) at the end of induction. Continued approval for this indication may be contingent upon verification of clinical benefit in a confirmatory trial(s).
            </li>
            <li>
              As monotherapy in Ph+ ALL for whom no other kinase inhibitors are indicated or T315I-positive Ph+ ALL.
            </li>
          </ul>

          <p className="underline mb-2">
            Chronic Myeloid Leukemia (CML)
          </p>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li>
              Chronic phase (CP) CML with resistance or intolerance to at least two prior kinase inhibitors.
            </li>
            <li>
              Accelerated phase (AP) or blast phase (BP) CML for whom no other kinase inhibitors are indicated.
            </li>
            <li>
              T315I-positive CML (chronic phase, accelerated phase, or blast phase).
            </li>
          </ul>

          <p className="italic">
            <u>Limitations of Use</u>: ICLUSIG is not indicated and is not recommended for the treatment of patients with newly diagnosed CP-CML.
          </p>
        </div>
      </div>

      {/* References */}
      <div className="mt-5 pt-4 border-t border-[#E3E3E3]">
        <button
          onClick={() => setRefsOpen(!refsOpen)}
          className="flex items-center gap-2 text-[#2C6FA3] text-[14px] font-[600] hover:underline"
        >
          {refsOpen ? "Hide References" : "Show References"}
          {refsOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </button>
        {refsOpen && (
          <div className="mt-3 text-[12px] sm:text-[13px] text-[#444]">
            <strong>References: 1. </strong>ICLUSIG (ponatinib). Prescribing information. Takeda Pharmaceuticals U.S.A., Inc. 10/2025.{" "}
            <strong>2. </strong>Cortes JE, Kim D-W, Pinilla-Ibarz J, et al. <em>Blood</em>. 2018;132(4):393-404.{" "}
            <strong>3. </strong>Referenced with permission from the NCCN Clinical Practice Guidelines in Oncology (NCCN Guidelines&reg;) for Chronic Myeloid Leukemia V.1.2026. &copy; National Comprehensive Cancer Network, Inc. 2025. All rights reserved. Accessed August 4, 2025. To view the most recent and complete version of the guideline, go online to NCCN.org. NCCN makes no warranties of any kind whatsoever regarding their content, use or application and disclaims any responsibility for their application or use in any way.
          </div>
        )}
      </div>
    </div>
  );
}
