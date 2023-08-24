import { BiAlignLeft } from "react-icons/bi";
import './Navbar.css';

function Navbar() {
  return (
    <div>
        {/* NAVBAR */}
      <nav
        className="navbar navbar-light text-bg-light text-dark sticky-top"
        aria-label="Dark offcanvas navbar"
      >
        <div className="container-fluid">
          <button
            className="navbar-toggler nav-toggle-btn"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbarLight"
            aria-controls="offcanvasNavbarLight"
            aria-label="Toggle navigation"
          >
            <BiAlignLeft />
          </button>
          <a className="navbar-brand" href="/">
            BOOKING NAVBAR
          </a>
          <div
            className="offcanvas offcanvas-start text-bg-light"
            tabIndex="-1"
            id="offcanvasNavbarLight"
            aria-labelledby="offcanvasNavbarLightLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLightLabel">
                MENU
              </h5>
              <button
                type="button"
                className="btn-close btn-close-black"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <hr />
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">
                    Overview
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="/booking">
                    Booking
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/fleet">
                    Fleet Management
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/route">
                    Route Management
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/pricing">
                    Pricing
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/service">
                    Service
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/print-trip">
                    Print Trip Sheet
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/cancel-refund">
                    Cancellation or Refund
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar