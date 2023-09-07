import React from "react";
import { Form } from "react-router-dom";

function BookTicket() {
  return (
    <Form>
      <div className="container">
        <div className="row">
          <div className="col-12 d-flex justify-content-around">
            <label>Srearch Type</label>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio1"
                value="option1"
              />
              <label className="form-check-label" for="inlineRadio1">
                One way
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio2"
                value="option2"
              />
              <label className="form-check-label" for="inlineRadio2">
                Return Trip
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio3"
                value="option3"
              />
              <label className="form-check-label" for="inlineRadio3">
                Trip No
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio3"
                value="option3"
              />
              <label className="form-check-label" for="inlineRadio3">
                Book Blocked Tickets
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio3"
                value="option3"
              />
              <label className="form-check-label" for="inlineRadio3">
                Connected Service
              </label>
            </div>
          </div>
        </div>
      </div>
    </Form>
  );
}

export default BookTicket;
