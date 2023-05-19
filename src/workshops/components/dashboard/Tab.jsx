import React from "react";
import DashboardTable from "./DashboardTable";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSort } from "@fortawesome/free-solid-svg-icons";
import PaginationRow from "./PaginationRow";
 
export default function Tab(props) {
  const {
    jobId,
    partName,
    model,
    numberPlate,
    numberOfParts,
    completion,
    name,
    title,
  } = props.tab.table;
  const {
    jobId2,
    partName2,
    model2,
    numberPlate2,
    numberOfParts2,
    completion2,
    name2,
    title2,
  } = props.tab.table2;

console.log('props', props);

  return (
    <div>
      {/* <h3>{props.tab.title}</h3> */}
      {/* <p>{props.tab.table.name}</p> */}
      <>
        <div className="dashboard_table_head">
          <div className="w_3"></div>
          <div className="w_10">
            ID <FontAwesomeIcon icon={faSort} className="angle_down_icon" />
          </div>
          <div className="w_25">
            Aufträge{" "}
            <FontAwesomeIcon icon={faSort} className="angle_down_icon" />
          </div>
          <div className="w_17">
            Marke / MODEL{" "}
            <FontAwesomeIcon icon={faSort} className="angle_down_icon" />
          </div>
          <div className="w_14">
            NUMMERNSCHILD{" "}
            <FontAwesomeIcon icon={faSort} className="angle_down_icon" />
          </div>
          <div className="w_15">
            Anzahl der Teile{" "}
            <FontAwesomeIcon icon={faSort} className="angle_down_icon" />
          </div>
          <div className="w_15">
            Fertigstellung{" "}
            <FontAwesomeIcon icon={faSort} className="angle_down_icon" />
          </div>
        </div>
        <DashboardTable
          jobId={jobId}
          partName={partName}
          model={model}
          numberPlate={numberPlate}
          numberOfParts={numberOfParts}
          completion={completion}
          name={name}
          title={title}
        />
        <DashboardTable
          jobId={jobId2}
          partName={partName2}
          model={model2}
          numberPlate={numberPlate2}
          numberOfParts={numberOfParts2}
          completion={completion2}
          name={name2}
          title={title2}
        />
        <DashboardTable
          jobId={jobId2}
          partName={partName2}
          model={model2}
          numberPlate={numberPlate2}
          numberOfParts={numberOfParts2}
          completion={completion2}
          name={name2}
          title={title2}
        />
        <PaginationRow />
      </>
    </div>
  );
}
