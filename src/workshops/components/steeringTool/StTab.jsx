import React from "react";
import StTable from "./StTable";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSort } from "@fortawesome/free-solid-svg-icons";
import '../../../stylesheets/steeringTool.scss';
// import PaginationRow from "./PaginationRow";

export default function StTab(props) {
    console.log('props', props);
  const {
    stId,
    insuranceCont,
    ageOfCar,
    workshop,
    partDealer,
    status,
    process,
    date,
  } = props.tab.table;
  const {
    stId2,
    insuranceCont2,
    ageOfCar2,
    workshop2,
    partDealer2,
    status2,
    process2,
    date2,
  } = props.tab.table2;

  const {
    stId3,
    insuranceCont3,
    ageOfCar3,
    workshop3,
    partDealer3,
    status3,
    process3,
    date3,
  } = props.tab.table3;

  const {
    stId4,
    insuranceCont4,
    ageOfCar4,
    workshop4,
    partDealer4,
    status4,
    process4,
    date4,
  } = props.tab.table4;



  return (
    <div>
      {/* <h3>{props.tab.title}</h3> */}
      {/* <p>{props.tab.table.name}</p> */}
      <>
        <div className="steering_table_head">
          <div className="w_3"></div>
          <div className="w_25">
          Insurance Contract
          </div>
          <div className="w_15">
          Age of Car
          </div>
          <div className="w_25">
          Workshop
          </div>
          <div className="w_10">
          Partdealer
          </div>
          <div className="w_15">
          STATUS
          </div>
          <div className="w_10">
          PROCESS
          </div>
          <div className="w_5">
          DATE
          </div>
          <div className="w_3"></div>
        </div>
        <StTable
          stId={stId}
          insuranceCont={insuranceCont}
          ageOfCar={ageOfCar}
          workshop={workshop}
          partDealer={partDealer}
          status={status}
          process={process}
          date={date}
        />
        <StTable
          stId={stId2}
          insuranceCont={insuranceCont2}
          ageOfCar={ageOfCar2}
          workshop={workshop2}
          partDealer={partDealer2}
          status={status2}
          process={process2}
          date={date2}
        />
        <StTable
         stId={stId3}
         insuranceCont={insuranceCont3}
         ageOfCar={ageOfCar3}
         workshop={workshop3}
         partDealer={partDealer3}
         status={status3}
         process={process3}
         date={date3}
        />

        <StTable
         stId={stId4}
         insuranceCont={insuranceCont4}
         ageOfCar={ageOfCar4}
         workshop={workshop4}
         partDealer={partDealer4}
         status={status4}
         process={process4}
         date={date4}
        />
        {/* <PaginationRow /> */}
      </>
    </div>
  );
}
