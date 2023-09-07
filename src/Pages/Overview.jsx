import React, { useState, useRef, useEffect } from "react";
import { BsInfoCircle } from "react-icons/bs";
import { GrRefresh } from "react-icons/gr";
import { AiOutlineClose } from "react-icons/ai";
import { FaSort } from "react-icons/fa";
import sort from "../Assets/Images/sort.png";
import twoLine from "../Assets/Images/twoline.png";
import prev from "../Assets/Images/prev.png";
import next from "../Assets/Images/next.png";
import start from "../Assets/Images/start.png";
import end from "../Assets/Images/end.png";
import calender from "../Assets/Images/calendar.svg";
import companyName from "../Assets/Images/Company.png";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useTable, useSortBy } from "react-table";

function Overview() {
  const [isActive, setIsActive] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  const data = React.useMemo(
    () => [
      {
        id: 1,
        district: "Ernakulam",
        districtCode: "EKM",
        stopPlaceName: "Vytila",
        stopPlaceCode: "VTLA",
        stopType: "Hub Station",
        googleMap: "Google map",
        status: "active",
        view: "view",
      },

      // Add more data rows here
    ],
    []
  );
  const [checkboxes, setCheckboxes] = useState(Array(data.length).fill(false));
  const columns = React.useMemo(
    () => [
      {
        Header: () => (
          <input
            type="checkbox"
            checked={checkboxes.every((val) => val)}
            onChange={toggleAllCheckboxes}
          />
        ),
        accessor: "checkbox", // This accessor is arbitrary and won't match your data
        Cell: ({ row }) => (
          <input
            type="checkbox"
            checked={checkboxes[row.index]}
            onChange={() => toggleCheckbox(row.index)}
          />
        ),
      },
      {
        Header: () => (
          <>
            <FaSort column="district" />
            District
            <img src={twoLine} alt="lines" className="lines ps-2" />
          </>
        ),

        accessor: "district", // The data field for this column
      },
      {
        Header: () => (
          <>
            <FaSort column="District Code" />
            District Code
            <img src={twoLine} alt="lines" className="lines ps-2" />
          </>
        ),
        accessor: "districtCode",
      },
      {
        Header: () => (
          <>
            <FaSort column="Stop Place Name" />
            Stop Place Name
            <img src={twoLine} alt="lines" className="lines ps-2" />
          </>
        ),
        accessor: "stopPlaceName",
      },
      {
        Header: () => (
          <>
            <FaSort column="Stop Place Code" />
            Stop Place Code
            <img src={twoLine} alt="lines" className="lines ps-2" />
          </>
        ),
        accessor: "stopPlaceCode",
      },
      {
        Header: () => (
          <>
            <FaSort column="Stop Type" />
            Stop Type
            <img src={twoLine} alt="lines" className="lines ps-2" />
          </>
        ),
        accessor: "stopType",
      },
      {
        Header: () => (
          <>
            <FaSort column="Google Map" />
            Google Map
            <img src={twoLine} alt="lines" className="lines ps-2" />
          </>
        ),
        accessor: "googleMap",
      },
      {
        Header: () => (
          <>
            <FaSort column="Status" />
            Status
            <img src={twoLine} alt="lines" className="lines ps-2" />
          </>
        ),
        accessor: "status",
      },
      {
        Header: () => (
          <>
            <FaSort column="View" />
            View
            <img src={twoLine} alt="lines" className="lines ps-2" />
          </>
        ),
        accessor: "view",
      },
    ],
    [checkboxes]
  );

  // Toggle the checkbox state for a specific row
  const toggleCheckbox = (index) => {
    const newCheckboxes = [...checkboxes];
    newCheckboxes[index] = !newCheckboxes[index];
    setCheckboxes(newCheckboxes);
  };
  const toggleAllCheckboxes = () => {
    const allChecked = checkboxes.every((val) => val);
    const newCheckboxes = checkboxes.map(() => !allChecked);
    setCheckboxes(newCheckboxes);
  };
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  const options = [
    "EKM-Ernakulam",
    "ALP-Alappuzha",
    "KLM-Kollam",
    "VKM-Vaikom",
  ]; // Replace with your own options

  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleToggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((item) => item !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };
  const handleToggle = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="ml-0 p-5 pt-1">
      <div className="grid-item col">
        <div className="place pt-4 pb-2 border-bottom">
          Place Master <BsInfoCircle className="infoCircle" />
          <GrRefresh className="refresh" />
        </div>
        <table {...getTableProps()} className="table">
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()} className="thead">
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()} className="tbody">
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <td {...cell.getCellProps()} className="td ">
                      {cell.render("Cell")}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
        {/* <div className="table-responsive">
          <table className="table table-stripe  table-responsive">
            <thead className="placeMaster">
              <tr>
                <th scope="col">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                </th>
                <th scope="col">
                  <span className="pe-1">
                    <img src={sort} alt="sort" />
                  </span>
                  District
                  <img src={twoLine} alt="lines" className="lines ps-2" />
                </th>
                <th scope="col">
                  <span className="pe-1">
                    <img src={sort} alt="sort" />
                  </span>
                  District Code
                  <img src={twoLine} alt="lines" className="lines ps-2" />
                </th>
                <th scope="col">
                  <span className="pe-1">
                    <img src={sort} alt="sort" />
                  </span>
                  Stop Place Name
                  <img src={twoLine} alt="lines" className="lines ps-2" />
                </th>
                <th scope="col">
                  <span className="pe-1">
                    <img src={sort} alt="sort" />
                  </span>
                  Stop Place Code
                  <img src={twoLine} alt="lines" className="lines ps-2" />
                </th>
                <th scope="col">
                  <span className="pe-1">
                    <img src={sort} alt="sort" />
                  </span>
                  Stop Type
                  <img src={twoLine} alt="lines" className="lines ps-2" />
                </th>
                <th scope="col">
                  <span className="pe-1">
                    <img src={sort} alt="sort" />
                  </span>
                  Google Map
                  <img src={twoLine} alt="lines" className="lines ps-2" />
                </th>
                <th scope="col">
                  <span className="pe-1">
                    <img src={sort} alt="sort" />
                  </span>
                  Status
                  <img src={twoLine} alt="lines" className="lines ps-2" />
                </th>
                <th scope="col">
                  <span className="pe-1">
                    <img src={sort} alt="sort" />
                  </span>
                  View
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                </td>
                <td className="ps-4">Ernakulam</td>
                <td className="ps-4">EKM</td>
                <td className="ps-4">Vytila</td>
                <td className="ps-4">VTLA</td>
                <td className="ps-4">Hub Station</td>
                <td className="ps-4">Google Map</td>
                <td className="ps-4">Active</td>
                <td>
                  <a href="/" className="view ps-4">
                    View
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                </td>
                <td className="ps-4">Ernakulam</td>
                <td className="ps-4">EKM</td>
                <td className="ps-4">Vytila</td>
                <td className="ps-4">VTLA</td>
                <td className="ps-4">Hub Station</td>
                <td className="ps-4">Google Map</td>
                <td className="ps-4">Active</td>
                <td>
                  <a href="/" className="view ps-4">
                    View
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                </td>
                <td className="ps-4">Ernakulam</td>
                <td className="ps-4">EKM</td>
                <td className="ps-4">Vytila</td>
                <td className="ps-4">VTLA</td>
                <td className="ps-4">Hub Station</td>
                <td className="ps-4">Google Map</td>
                <td className="ps-4">Active</td>
                <td className="ps-4">
                  <a href="/" className="view">
                    View
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                </td>
                <td className="ps-4">Ernakulam</td>
                <td className="ps-4">EKM</td>
                <td className="ps-4">Vytila</td>
                <td className="ps-4">VTLA</td>
                <td className="ps-4">Hub Station</td>
                <td className="ps-4">Google Map</td>
                <td className="ps-4">Active</td>
                <td className="ps-4">
                  <a href="/" className="view">
                    View
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div> */}
        <div className="place pt-4 pb-2 border-bottom">
          Place Master <BsInfoCircle className="infoCircle" />
          <GrRefresh className="refresh" />
        </div>
        <div className="table-responsive">
          <table class="table table-stripe text-center">
            <thead className="placeMaster">
              <tr>
                <th scope="col">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                </th>
                <th scope="col">
                  <span className="pe-1">
                    <img src={sort} alt="sort" />
                  </span>
                  District
                  <img src={twoLine} alt="lines" className="lines ps-2" />
                </th>
                <th scope="col">
                  <span className="pe-1">
                    <img src={sort} alt="sort" />
                  </span>
                  District Code
                  <img src={twoLine} alt="lines" className="lines ps-2" />
                </th>
                <th scope="col">
                  <span className="pe-1">
                    <img src={sort} alt="sort" />
                  </span>
                  Stop Place Name
                  <img src={twoLine} alt="lines" className="lines ps-2" />
                </th>
                <th scope="col">
                  <span className="pe-1">
                    <img src={sort} alt="sort" />
                  </span>
                  Stop Place Code
                  <img src={twoLine} alt="lines" className="lines ps-2" />
                </th>
                <th scope="col">
                  <span className="pe-1">
                    <img src={sort} alt="sort" />
                  </span>
                  Stop Type
                  <img src={twoLine} alt="lines" className="lines ps-2" />
                </th>
                <th scope="col">
                  <span className="pe-1">
                    <img src={sort} alt="sort" />
                  </span>
                  Google Map
                  <img src={twoLine} alt="lines" className="lines ps-2" />
                </th>
                <th scope="col">
                  <span className="pe-1">
                    <img src={sort} alt="sort" />
                  </span>
                  Status
                  <img src={twoLine} alt="lines" className="lines ps-2" />
                </th>
                <th scope="col">
                  <span className="pe-1">
                    <img src={sort} alt="sort" />
                  </span>
                  View
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                </td>
                <td className="ps-4">Ernakulam</td>
                <td className="ps-4">EKM</td>
                <td className="ps-4">Vytila</td>
                <td className="ps-4">VTLA</td>
                <td className="ps-4">Hub Station</td>
                <td className="ps-4">Google Map</td>
                <td className="ps-4">Active</td>
                <td className="ps-4">
                  <a href="/" className="view">
                    View
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                </td>
                <td className="ps-4">Ernakulam</td>
                <td className="ps-4">EKM</td>
                <td className="ps-4"> Vytila</td>
                <td className="ps-4">VTLA</td>
                <td className="ps-4">Hub Station</td>
                <td className="ps-4">Google Map</td>
                <td className="ps-4">Active</td>
                <td className="ps-4">
                  <a href="/" className="view">
                    View
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                </td>
                <td className="ps-4">Ernakulam</td>
                <td className="ps-4">EKM</td>
                <td className="ps-4">Vytila</td>
                <td className="ps-4">VTLA</td>
                <td className="ps-4">Hub Station</td>
                <td className="ps-4">Google Map</td>
                <td className="ps-4">Active</td>
                <td className="ps-4">
                  <a href="/" className="view">
                    View
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                </td>
                <td className="ps-4">Ernakulam</td>
                <td className="ps-4">EKM</td>
                <td className="ps-4">Vytila</td>
                <td className="ps-4">VTLA</td>
                <td className="ps-4">Hub Station</td>
                <td className="ps-4">Google Map</td>
                <td className="ps-4">Active</td>
                <td className="ps-4">
                  <a href="/" className="view">
                    View
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <nav aria-label="Page navigation">
          <ul className="pagination justify-content-end">
            <div className="me-2">
              <li className="page-item">
                <a className="page-link" href="/" aria-label="start">
                  <span aria-hidden="true" className="me-2">
                    <img src={start} alt="start" />
                  </span>
                </a>
              </li>
            </div>
            <div className="me-2">
              <li className="page-item">
                <a className="page-link" href="/" aria-label="Previous">
                  <span aria-hidden="true" className="me-2">
                    <img src={prev} alt="prev" />
                  </span>
                </a>
              </li>
            </div>
            <div className="me-2">
              <li className="page-item me-2">
                <a className="page-link" href="/">
                  1
                </a>
              </li>
            </div>
            <div className="me-2">
              <li className="page-item me-2">
                <a className="page-link" href="/">
                  2
                </a>
              </li>
            </div>
            <div className="me-2">
              <li className="page-item pe-2">
                <a className="page-link" href="/">
                  3
                </a>
              </li>
            </div>
            <div className="me-2">
              <li className="page-item pe-2">
                <a className="page-link" href="/">
                  4
                </a>
              </li>
            </div>
            <div className="me-2">
              <li className="page-item pe-2">
                <a className="page-link" href="#" aria-label="Next">
                  <span aria-hidden="true" className="border-0">
                    <img src={next} alt="prev" />
                  </span>
                </a>
              </li>
            </div>
            <div className="me-2">
              <li className="page-item pe-2">
                <a className="page-link" href="#" aria-label="end">
                  <span aria-hidden="true" className="border-0">
                    <img src={end} alt="end" />
                  </span>
                </a>
              </li>
            </div>
          </ul>
        </nav>

        <div className="box bg-white p-3">
          <div className="row p-3">
            <div className="col">
              <div>State</div>
              <div className="fw-bold">Keralam</div>
            </div>
            <div className="col">
              <div>State Code</div>
              <div className="fw-bold">KL</div>
            </div>
            <div className="col">
              <div>District</div>
              <div className="fw-bold">Ernakulam</div>
            </div>
            <div className="col">
              <div>District Code</div>
              <div className="fw-bold">EKM</div>
            </div>
          </div>
          <div className="row p-3">
            <div className="col col-3">
              <div>Stop Place name</div>
              <div className="fw-bold">Vyttila</div>
            </div>
            <div className="col col-3">
              <div>Stop Place code</div>
              <div className="fw-bold">VTLA</div>
            </div>
          </div>
          <div className="row p-3">
            <div className="col ">
              Hub Station (Fare change station)
              <a href="/" className="ps-2">
                google map
              </a>
            </div>
          </div>
          <hr />
          <div className="d-flex justify-content-between">
            <div className="d-flex">
              <button className="btn  delete">Delete</button>
              <span>
                <div className="switches-container ms-4">
                  <input
                    type="radio"
                    id="switchActive"
                    name="switchPlan"
                    value="active"
                    checked={isActive}
                    onChange={handleToggle}
                  />
                  <input
                    type="radio"
                    id="switchInactive"
                    name="switchPlan"
                    value="inactive"
                    checked={!isActive}
                    onChange={handleToggle}
                  />
                  <label htmlFor="switchActive">Active</label>
                  <label htmlFor="switchInactive">Inactive</label>
                  <div className="switch-wrapper">
                    <div className="switch">
                      <div>Active</div>
                      <div>Inactive</div>
                    </div>
                  </div>
                </div>
              </span>
            </div>
            <div className="d-flex float-right">
              <button className="btn rectangle231 me-4">cancel</button>
              <button className="btn rectangle231">Edit</button>
            </div>
          </div>
        </div>
        <div>
          <div className="place pt-4 pb-2 border-bottom">
            Multi Select Chips <BsInfoCircle className="infoCircle" />
            <GrRefresh className="refresh" />
          </div>
        </div>
        <div className="row pt-3 lastRow justify-content-between">
          <div className="col col-6">
            <label className="destination pb-2">Destination</label>
            <div className="dropdown-select">
              <div
                className={`dropdown1 ${isOpen ? "open" : ""}`}
                onClick={handleToggleDropdown}
                ref={dropdownRef}>
                <div className="form-select selectDest">{options[0]}</div>
                {isOpen && (
                  <ul className="listItem">
                    {options.map((option) => (
                      <li
                        className={`listOption ${
                          selectedOptions.includes(option) ? "selected" : ""
                        }`}
                        key={option}
                        onClick={() => handleOptionClick(option)}>
                        {option}
                      </li>
                    ))}
                  </ul>
                )}
                <div className="selected-options">
                  <div className="selected-options-row">
                    {selectedOptions.map((option) => (
                      <div key={option} className="selected-option">
                        {option}
                        <button
                          class="btn"
                          onClick={() => handleOptionClick(option)}>
                          <AiOutlineClose />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col col-5">
            <label className="destination pb-2">Date Selection</label>
            <div className="date-picker">
              <DatePicker
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                dateFormat="dd/MM/yyyy"
                placeholderText="Select a date"
                customInput={
                  <div className="date-picker-input">
                    <input
                      className="date-picker-input-field"
                      value={
                        selectedDate ? selectedDate.toLocaleDateString() : ""
                      }
                      readOnly
                    />
                    <img src={calender} className="calendar-icon" />
                  </div>
                }
              />
            </div>
          </div>
        </div>
        <div className="p-0 m-0">
          <div className="arc">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="699"
              height="797"
              className="arcImage"
              viewBox="0 0 699 797"
              fill="none">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M699 797H0C0 797 686.168 588.808 695.549 0C698.446 0 699 797 699 797Z"
                fill="url(#paint0_linear_3772_994)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_3772_994"
                  x1="961.574"
                  y1="709.397"
                  x2="775.912"
                  y2="110.715"
                  gradientUnits="userSpaceOnUse">
                  <stop stopColor="#C6DAFF" />
                  <stop offset="1" stopColor="white" stopOpacity="0.01" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>

        {/* <div className="d-flex justify-content-between">
          <div>
            <span className="bottom-text pe-3">Powered by</span>
            <span>
              <img
                className="Company_name"
                src={companyName}
                alt="company_name"
              />
            </span>
          </div>
          <div>
            <span className="bottom-text">
              Copyright © 2023-2024 Matrimore. All Rights Reserved
            </span>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Overview;
