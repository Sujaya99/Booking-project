import React from "react";
import { NavLink } from "react-router-dom";
function TitleAddButton({ contentTitle, addBtn, addBtnTitle }) {
  return (
    <div className="w-100 d-flex justify-content-between mt-4 pb-4 border-bottom border-secondary">
      <h5>{contentTitle}</h5>
      {addBtn && (
        <NavLink to="/bookticket" className="add-btn ps-5 pe-5 pt-2 pb-2">
          {addBtnTitle}
        </NavLink>
        // <button className="add-btn ps-5 pe-5 pt-2 pb-2">{addBtnTitle}</button>
      )}
    </div>
  );
}

export default TitleAddButton;
