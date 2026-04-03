export interface NavItem {
  label: string;
  shortLabel?: string;
  children: { text: string; href?: string }[];
  accentColor?: string;
}

export const cmlItem: NavItem = {
  label: "CML",
  accentColor: "#0A8FFF",
  children: [
    { text: "Unmet Needs in CML", href: "/cml/unmet-needs" },
    { text: "T315I Mutation", href: "/cml/t315i-mutation" },
    { text: "Mechanism of Action", href: "/cml/mechanism-of-action" },
    { text: "CML PACE Study Data", href: "/efficacy/cml-pace-trial" },
    { text: "CML OPTIC Study Data", href: "/efficacy/cml-optic-trial" },
  ],
};

export const phAllItem: NavItem = {
  label: "Ph+ ALL",
  accentColor: "#00C853",
  children: [
    { text: "Unmet Needs in Ph+ ALL", href: "/ph-all/unmet-needs" },
    { text: "Ph+ ALL PhALLCON 1L Study Data", href: "/ph-all/first-line" },
    { text: "Ph+ ALL PACE Study Data", href: "/efficacy/ph-all-pace-trial" },
    { text: "Mechanism of Action", href: "/cml/mechanism-of-action" },
  ],
};

export const navItems: NavItem[] = [
  {
    label: "Efficacy",
    children: [
      { text: "CML OPTIC Trial Efficacy", href: "/efficacy/cml-optic-trial" },
      { text: "CML PACE Trial Efficacy", href: "/efficacy/cml-pace-trial" },
      { text: "Ph+ ALL PhALLCON Trial Efficacy in Newly Diagnosed", href: "/ph-all/first-line#efficacy" },
      { text: "Ph+ ALL PACE Trial Efficacy", href: "/efficacy/ph-all-pace-trial" },
    ],
  },
  {
    label: "Safety Profile",
    shortLabel: "Safety",
    children: [
      { text: "Safety in CML OPTIC Trial", href: "/safety/cml-optic-trial" },
      { text: "Safety in CML PACE Trial", href: "/safety/cml-pace-trial" },
      { text: "Safety in Newly Diagnosed Ph+ ALL PhALLCON Trial", href: "/ph-all/first-line#safety" },
      { text: "Safety in Ph+ ALL PACE Trial", href: "/safety/ph-all-pace-trial" },
    ],
  },
  {
    label: "Dosing and Administration",
    shortLabel: "Dosing",
    children: [
      { text: "Dosing Overview", href: "/dosing" },
      { text: "CP-CML Optimized Dosing", href: "/dosing/cml-optimized" },
      { text: "Newly Diagnosed Ph+ ALL Dosing", href: "/ph-all/first-line#dosing" },
    ],
  },
  {
    label: "Access",
    shortLabel: "Access",
    children: [
      { text: "Patient Access", href: "/patient-support" },
      { text: "Here2Assist", href: "/patient-support#here2assist" },
      { text: "Formulary Kit", href: "/patient-support#formulary-kit" },
      { text: "Financial Support", href: "/patient-support#financial" },
      { text: "Coverage", href: "/patient-support#coverage" },
      { text: "Ordering", href: "/patient-support#foundation-care" },
      { text: "Pharmacists", href: "/patient-support#pharmacist" },
    ],
  },
  {
    label: "Resources and Expert Perspectives",
    shortLabel: "Resources",
    children: [
      { text: "Download Resources", href: "/support/resources" },
    ],
  },
];
