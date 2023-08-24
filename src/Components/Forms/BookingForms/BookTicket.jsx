import React from "react";
import { Form } from "react-router-dom";

function BookTicket() {
  return (
    <Form>
      <div className="container">
        <div className="row">
          <div className="col-12 d-flex justify-content-around">
            <label>Srearch Type</label>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio1"
                value="option1"
              />
              <label class="form-check-label" for="inlineRadio1">
                One way
              </label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio2"
                value="option2"
              />
              <label class="form-check-label" for="inlineRadio2">
                Return Trip
              </label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio3"
                value="option3"
              />
              <label class="form-check-label" for="inlineRadio3">
                Trip No
              </label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio3"
                value="option3"
              />
              <label class="form-check-label" for="inlineRadio3">
                Book Blocked Tickets
              </label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio3"
                value="option3"
              />
              <label class="form-check-label" for="inlineRadio3">
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
