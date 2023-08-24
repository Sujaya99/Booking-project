import React, { useState } from "react";
import ControlButton from "../Components/ControlButton/ControlButton";
import TitleAddButton from "../Components/TitleAddButton/TitleAddButton";
import Filters from "../Components/Filters/Filters";
function Booking() {
  const [controlButtons, setControlButtons] = useState([
    {
      id: 1,
      title: "Ticket Booking",
      activeState: true,
      addBtn: true,
      contentTitle: "Booked Tickets",
      addBtnTitle: "Book Ticket",
      ShowDataURL: "/ticket",
      AddDataURL: "/not-set",
      filterid: "bookTicketFilters",
    },
    {
      id: 2,
      title: "Tour Booking",
      activeState: false,
      addBtn: true,
      contentTitle: "Booked Tickets - Tour package",
      addBtnTitle: "Book Tour Package",
      ShowDataURL: "/ticket",
      AddDataURL: "/not-set",
      filterid: "bookTourFilters",
    },
    {
      id: 3,
      title: "Block Seats",
      activeState: false,
      addBtn: false,
      contentTitle: "Block Seats",
      addBtnTitle: "",
      ShowDataURL: "/ticket",
      AddDataURL: "/not-set",
      filterid: "blockSeatFilters",
    },
    {
      id: 4,
      title: "Unblock Seat",
      activeState: false,
      addBtn: false,
      contentTitle: "Blocked Seats",
      addBtnTitle: "",
      ShowDataURL: "/ticket",
      AddDataURL: "/not-set",
      filterid: "unblockSeatFilters",
    },
    {
      id: 5,
      title: "Club Service",
      activeState: false,
      addBtn: false,
      contentTitle: "Club Service",
      addBtnTitle: "",
      ShowDataURL: "/ticket",
      AddDataURL: "/not-set",
      filterid: "clubServiceFilters",
    },
    {
      id: 6,
      title: "TrackTicket",
      activeState: false,
      addBtn: false,
      contentTitle: "Track Tickets",
      addBtnTitle: "",
      ShowDataURL: "/ticket",
      AddDataURL: "/not-set",
      filterid: "trackTicketFilters",
    },
  ]);
  const [bookingFilters, setBookingFilters] = useState([
    {
      bookTicketFilters: [
        {
          filterTitle: "Service Category",
          type: "dropdown",
          options: ["AC Sleeper", "Non AC Sleeper"],
        },
        {
          filterTitle: "Service Name",
          type: "dropdown",
          options: ["kochi-Banglore", "TVM-Kochi"],
        },
        {
          filterTitle: "E Ticket ID",
          type: "input",
        },
        {
          filterTitle: "Name of Passenger",
          type: "input",
        },
      ],
    },
  ]);
  const setActiveButton = (buttonId) => {
    const updatedButtons = controlButtons.map((button) =>
      button.id === buttonId
        ? { ...button, activeState: true }
        : { ...button, activeState: false }
    );

    setControlButtons(updatedButtons);
  };
  return (
    <>
      <div className="row border-bottom border-secondary">
        <div className="col-auto">
          <ControlButton
            controlButtons={controlButtons}
            setActiveButton={setActiveButton}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-12 ">
          {controlButtons.map(
            (Items) =>
              Items.activeState && (
                <TitleAddButton
                  contentTitle={Items.contentTitle}
                  addBtn={Items.addBtn}
                  addBtnTitle={Items.addBtnTitle}
                />
              )
          )}
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <Filters filterContent={bookingFilters} />
        </div>
      </div>
    </>
  );
}

export default Booking;
