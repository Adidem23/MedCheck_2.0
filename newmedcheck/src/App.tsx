import { ReactLenis, useLenis } from "lenis/react";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import { Routes, Route } from "react-router-dom";
import UserProfileO from "./components/UserProfileO";
import { NavbarNested } from './components/Dashbords/DocDash/NavbarNested'
import { NavbarNestedNew } from './components/Dashbords/PatientDash/NavbarNestedNew'

function App() {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.05,
        syncTouch: true,
      }}
    >
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/profile" element={<UserProfileO />} />
        <Route path="/DocDash" Component={NavbarNested} />
        <Route path="/PatientDash" Component={NavbarNestedNew} />
      </Routes>
    </ReactLenis>
  );
}

export default App;
