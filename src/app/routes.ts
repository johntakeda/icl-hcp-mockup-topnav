import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { HomePage } from "./pages/HomePage";
import { PatientSupportPage } from "./pages/PatientSupportPage";
import { CmlUnmetNeedsPage } from "./pages/CmlUnmetNeedsPage";
import { CmlT315iMutationPage } from "./pages/CmlT315iMutationPage";
import { MechanismOfActionPage } from "./pages/MechanismOfActionPage";
import { CmlOpticEfficacyPage } from "./pages/CmlOpticEfficacyPage";
import { CmlPaceEfficacyPage } from "./pages/CmlPaceEfficacyPage";
import { PhAllUnmetNeedsPage } from "./pages/PhAllUnmetNeedsPage";
import { PhAllFirstLinePage } from "./pages/PhAllFirstLinePage";
import { PhAllPaceEfficacyPage } from "./pages/PhAllPaceEfficacyPage";
import { CmlOpticSafetyPage } from "./pages/CmlOpticSafetyPage";
import { CmlPaceSafetyPage } from "./pages/CmlPaceSafetyPage";
import { PhAllPaceSafetyPage } from "./pages/PhAllPaceSafetyPage";
import { DosingOverviewPage } from "./pages/DosingOverviewPage";
import { CmlOptimizedDosingPage } from "./pages/CmlOptimizedDosingPage";
import { Here2AssistPage } from "./pages/Here2AssistPage";
import { ResourcesPage } from "./pages/ResourcesPage";
import { GetStartedPage } from "./pages/GetStartedPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: HomePage },
      { path: "patient-support", Component: PatientSupportPage },
      { path: "cml/unmet-needs", Component: CmlUnmetNeedsPage },
      { path: "cml/t315i-mutation", Component: CmlT315iMutationPage },
      { path: "cml/mechanism-of-action", Component: MechanismOfActionPage },
      { path: "efficacy/cml-optic-trial", Component: CmlOpticEfficacyPage },
      { path: "efficacy/cml-pace-trial", Component: CmlPaceEfficacyPage },
      { path: "ph-all/unmet-needs", Component: PhAllUnmetNeedsPage },
      { path: "ph-all/first-line", Component: PhAllFirstLinePage },
      { path: "efficacy/ph-all-pace-trial", Component: PhAllPaceEfficacyPage },
      { path: "safety/cml-optic-trial", Component: CmlOpticSafetyPage },
      { path: "safety/cml-pace-trial", Component: CmlPaceSafetyPage },
      { path: "safety/ph-all-pace-trial", Component: PhAllPaceSafetyPage },
      { path: "dosing", Component: DosingOverviewPage },
      { path: "dosing/cml-optimized", Component: CmlOptimizedDosingPage },
      { path: "support/here2assist", Component: Here2AssistPage },
      { path: "support/resources", Component: ResourcesPage },
      { path: "get-started", Component: GetStartedPage },
    ],
  },
]);
