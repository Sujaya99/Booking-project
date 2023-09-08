import React from "react";

function SideMenu() {
  return (
    <div class="flex-shrink-0 p-3 bg-white sidebar">
      <ul className="navbar-nav  flex-grow-1 pe-3 sidebar">
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
          <a className="nav-link link-text" aria-current="page" href="/booking">
            Booking
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link link-text" href="/cancel-refund">
            Cancellation Refund
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link link-text" href="/print-trip">
            Print Trip Sheet
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link  link-text" aria-current="page" href="/">
            Overview
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link  link-text" aria-current="page" href="/">
            Amenities
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link  link-text" aria-current="page" href="/">
            Favourites
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link link-text" aria-current="page" href="/">
            Calendar
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link  link-text" aria-current="page" href="/">
            Tax Slab
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link  link-text" aria-current="page" href="/">
            Push Notification
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link  link-text" aria-current="page" href="/">
            Notification
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link  link-text" aria-current="page" href="/">
            Coupon
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link link-text" aria-current="page" href="/">
            Rules and Regulations
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link  link-text" aria-current="page" href="/">
            Refer and Earn
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link  link-text" aria-current="page" href="/">
            Reports
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link  link-text" aria-current="page" href="/">
            Sales Dashboard
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link  link-text" aria-current="page" href="/">
            Access Management
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link  link-text" aria-current="page" href="/">
            Settings
          </a>
        </li>
      </ul>
    </div>
  );
}

export default SideMenu;
