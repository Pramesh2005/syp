import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Appointment from "./pages/Appointment";
import Doctors from "./pages/Doctors";
import Auth from "./pages/Auth";
import UpdateAppointment from "./pages/UpdateAppointment";
import History from "./pages/History";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  
  // Hide Header & Footer when user is on the Auth page
  const hideHeaderFooter = location.pathname === "/";

  return (
    <div className="flex flex-col min-h-screen">
      {!hideHeaderFooter && <Header />}
      <main className="flex-grow">{children}</main>
      {!hideHeaderFooter && <Footer />}
    </div>
  );
};

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Auth />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/history" element={<History />} />
          <Route path="/UpdateAppointment/:id" element={<UpdateAppointment />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
