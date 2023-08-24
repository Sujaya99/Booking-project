import "./App.css";
import { Route, Routes } from "react-router-dom";
import {
  Booking,
  CancellationAndRefund,
  ErrorPage,
  FleetManagement,
  Overview,
  Pricing,
  PrintTripSheet,
  RouteManagement,
  Services,
} from "./Pages";
import Navbar from "./Components/NavBar/Navbar";
import Footer from "./Components/Footer/Footer";
import BookTicket from "./Components/Forms/BookingForms/BookTicket";
import TitleAddButton from "./Components/TitleAddButton/TitleAddButton";
function App() {
  return (
    <div className="App">
      {/* NAVBAR */}
      <Navbar />

      {/* CONTENTS */}
      <div className="page-content">
        <Routes>
          <Route path="/fleet" element={<FleetManagement />} />
          <Route path="/route" element={<RouteManagement />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/service" element={<Services />} />
          <Route path="/print-trip" element={<PrintTripSheet />} />
          <Route path="/cancel-refund" element={<CancellationAndRefund />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/" element={<Overview />} />
          <Route path="/*" element={<ErrorPage />} />
          <Route path="/bookticket" element={<TitleAddButton />} />
        </Routes>
      </div>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}

export default App;
