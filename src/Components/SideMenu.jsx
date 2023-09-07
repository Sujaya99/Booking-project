import React from "react";

function SideMenu() {
  return (
    <div class="flex-shrink-0 p-3 bg-white sidebar">
      <ul className="navbar-nav  flex-grow-1 pe-3 sidebar">
        <li className="nav-item">
          <a className="nav-link active link-text" aria-current="page" href="/">
            Overview
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link link-text" aria-current="page" href="/booking">
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
            Cancellation Refund
          </a>
        </li>
      </ul>
    </div>
  );
}

export default SideMenu;
