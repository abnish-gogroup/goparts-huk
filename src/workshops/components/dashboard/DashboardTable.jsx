import React from "react";
// import $ from "jquery";
import "../../../stylesheets/dashboardDropdown.scss";
import "../../../stylesheets/dashboard.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

export default function DashboardTable(props) {
  const {
    jobId,
    partName,
    model,
    numberPlate,
    numberOfParts,
    completion,
  } = props;

  return (
    <>
      <div className="job_row_cont">
        <div className="job_row_class">
          <div className="w_3">
            <div className="circle pdt_1" id="angleDown">
              <FontAwesomeIcon
                icon={faAngleRight}
                className="angle_down_icon"
              />
            </div>
          </div>
          <div className="w_10">{jobId}</div>
          <div className="w_25">{partName} </div>
          <div className="w_17">{model}</div>
          <div className="w_14 clr_8692A6">{numberPlate}</div>
          <div className="w_15 clr_8692A6">{numberOfParts}</div>
          <div className="w_15">{completion}</div>
        </div>
      </div>
    </>
  );
}
