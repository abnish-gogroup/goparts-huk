import React from "react";
import "../../../stylesheets/dashboardDropdown.scss";
import "../../../stylesheets/dashboard.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faBackwardStep,
  faAngleRight,
  faAngleLeft,
  faForwardStep,
} from "@fortawesome/free-solid-svg-icons";

export default function PaginationRow(props) {
  return (
    <>
      <div className="job_row_cont">
        <div className="job_row_class clr_8692A6">
          <div>
            <span>
              Artikel pro Seite: 10{" "}
              <FontAwesomeIcon icon={faAngleDown} className="angle_down_icon" />
            </span>
            <span className="pdlr_10">1 von 2</span>
            <span className="pdlr_10">
              <FontAwesomeIcon icon={faBackwardStep} className="pdl_3" />
              <FontAwesomeIcon icon={faAngleLeft} className="pdl_3" />
              <FontAwesomeIcon icon={faAngleRight} className="pd_l" />
              <FontAwesomeIcon icon={faForwardStep} className="pdl_3" />
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
