import { BiAlignLeft } from "react-icons/bi";
import { RiSearchLine } from "react-icons/ri";
import "./Navbar.css";
import logo from "../../Assets/Images/logo.png";
import bell from "../../Assets/Images/Bell.png";
import dot from "../../Assets/Images/red-dot.png";
import profile from "../../Assets/Images/Ellipse 3.png";
import { useEffect, useState } from "react";

function Navbar() {
  const [currentDate, setCurrentDatr] = useState("");
  useEffect(() => {
    const today = new Date();
    const day = today.getDate();
    const month = today.toLocaleDateString("default", { month: "short" });
    const year = today.getFullYear();
    const formattedDate = `${day} ${month} ${year}`;
    setCurrentDatr(formattedDate);
  }, []);
  return (
    <div>
      {/* NAVBAR */}
      <nav
        className="navbar navbar  sticky-top "
        aria-label="Dark offcanvas navbar">
        <div className="container-fluid">
          <button
            className="navbar-toggler nav-toggle-btn me-0"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbarLight"
            aria-controls="offcanvasNavbarLight"
            aria-label="Toggle navigation">
            <BiAlignLeft />
          </button>
          <div className="d-flex">
            <img src={logo} alt="logo" className="pe-0" />
            <span className="booking text-white ps-2">
              Booking<span className="booking">Engine.com</span>
            </span>
          </div>
          <div className="select-layout text-white ">
            <div className="selectOperator text-white pb-0">
              Select Operator
            </div>
            <div className="dropdown ps-0 pt-0">
              <a
                className="btn btn-lg dropdown-toggle dropdown-link border-0 text-white operatorName"
                href="/"
                role="button"
                id="dropdownMenuLink"
                data-bs-toggle="dropdown"
                aria-expanded="false">
                Operator Name
              </a>

              <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <li>
                  <a className="dropdown-item" href="/">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    Another action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    Something else here
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="input-container pe-0">
            <RiSearchLine className="search" />
            <input
              className="form-control input-search rounded-pill"
              value="search"
            />
          </div>
          <div className="bell-icon">
            <img className="bell" src={bell} />
            <img className="dot" src={dot} />
          </div>
          <div className="select-layout">
            <select
              className="form-select text-secondary"
              aria-label="Default select example">
              <option value="Eng" selected>
                Eng
              </option>
              <option value="Ger">Ger</option>
            </select>
          </div>
          <div className="navbar-brand text-white pe-0 d-flex" href="/">
            <div>
              <span className=" welcome">welcome </span>
              <span className="username">Jhon Albert</span>
              <div className="userdate welcome">{currentDate}</div>
            </div>
            <div className="ps-2">
              <img src={profile} className="profilePic ps-0" />
            </div>
          </div>

          <div
            className="offcanvas offcanvas-start bg-white"
            tabIndex="-1"
            id="offcanvasNavbarLight"
            aria-labelledby="offcanvasNavbarLightLabel">
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLightLabel">
                MENU
              </h5>
              <button
                type="button"
                className="btn-close btn-close-black"
                data-bs-dismiss="offcanvas"
                aria-label="Close"></button>
            </div>
            {/* <hr /> */}
            <div className="offcanvas-body bg-white">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-link">
                  <div className="select-layout text-white ">
                    <div className="selectOperator text-white pb-0">
                      Select Operator
                    </div>
                    <div className="dropdown ps-0 pt-0">
                      <a
                        className="btn btn-lg dropdown-toggle dropdown-link border-0 text-white operatorName"
                        href="/"
                        role="button"
                        id="dropdownMenuLink"
                        data-bs-toggle="dropdown"
                        aria-expanded="false">
                        Operator Name
                      </a>

                      <ul
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenuLink">
                        <li>
                          <a className="dropdown-item" href="/">
                            Action
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="/">
                            Another action
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="/">
                            Something else here
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li className="nav-item">
                  <div className="select-layout">
                    <select
                      className="form-select text-secondary"
                      aria-label="Default select example">
                      <option value="Eng" selected>
                        Eng
                      </option>
                      <option value="Ger">Ger</option>
                    </select>
                  </div>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link active link-text"
                    aria-current="page"
                    href="/">
                    Overview
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link link-text"
                    aria-current="page"
                    href="/booking">
                    Booking
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link link-text" href="/fleet">
                    Fleet Management
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link link-text" href="/route">
                    Route Management
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link link-text" href="/pricing">
                    Pricing
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link link-text" href="/service">
                    Service
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link link-text" href="/print-trip">
                    Print Trip Sheet
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link link-text" href="/cancel-refund">
                    Cancellation or Refund
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
