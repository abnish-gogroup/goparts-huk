import React from "react";
import "../../../stylesheets/dashboard.scss";
import '../../../stylesheets/steeringTool.scss';
import { TabPanel, useTabs } from "react-headless-tabs";
import { TabSelector } from "./TabSelector";
import { steeringTabContent } from "../../constants/tabContent";
// import { useNavigate } from "react-router-dom";
import StTable from "./StTable";

function SteeringTool(props) {
  const [selectedTab, setSelectedTab] = useTabs(["tool", "rules"]);
  const { expanded, setExpanded } = props;
//   const navigation = useNavigate();
//   const handleCreateANewOrder = () => {
//     navigation("/create-a-job");
//   };

  return (
    <div
      className={
        expanded
          ? "main_dashboard_container pd_240"
          : "main_dashboard_container pd_140"
      }
    >
      <div className="dashboard_text_cont">
        <div className="dashboard_text fs_30">SteeringTool</div>
      </div>

      <div className="py-4">
        <TabSelector
          isActive={selectedTab === "tool"}
          onClick={() => setSelectedTab("tool")}
        >
          Tool
        </TabSelector>
        <TabSelector
          isActive={selectedTab === "rules"}
          onClick={() => setSelectedTab("rules")}
        >
          Rules
        </TabSelector>
        {/* </nav> */}
        <div className="pt-4">
          <TabPanel hidden={selectedTab !== "tool"}>
            <div className="steering_table_head">
              <div className="w_3"></div>
              <div className="w_25">Insurance Contract</div>
              <div className="w_15">Age of Car</div>
              <div className="w_25">Workshop</div>
              <div className="w_10">Partdealer</div>
              <div className="w_15">STATUS</div>
              <div className="w_10">PROCESS</div>
              <div className="w_5">DATE</div>
              <div className="w_3"></div>
            </div>
            {steeringTabContent?.map(
              ({
                stId,
                insuranceCont,
                ageOfCar,
                workshop,
                partDealer,
                status,
                process,
                date,
              }) => (
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
              )
            )}
          </TabPanel>
          <TabPanel hidden={selectedTab !== "rules"}>Rules</TabPanel>
        </div>
      </div>
    </div>
  );
}

export default SteeringTool;
