import React from "react";
// import $ from "jquery";
import "../../../stylesheets/dashboardDropdown.scss";
import "../../../stylesheets/dashboard.scss";

export default function StTable(props) {
  const {
    stId,
    insuranceCont,
    ageOfCar,
    workshop,
    partDealer,
    status,
    process,
    date,
  } = props;

  return (
    <>
      <div className="job_row_cont">
        <div className="job_row_class">
          <div className="w_3"></div>
          {/* <div className="w_10">{stId}</div> */}
          <div className="w_25">{insuranceCont} </div>
          <div className="w_15 fw_600">{ageOfCar}</div>
          <div className="w_25">{workshop}</div>
          <div className="w_10">{partDealer}</div>
          <div className="w_15 theme_clr">{status}</div>
          <div className="w_10">{process}</div>
          <div className="w_5">{date}</div>
          <div className="w_3"></div>
        </div>
      </div>
    </>
  );
}
