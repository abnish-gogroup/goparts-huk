import React from 'react';
import '../../../stylesheets/dashboard.scss';
import StTabs from './StTabs';
import { steeringTabContent } from '../../constants/tabContent';
import { useNavigate } from 'react-router-dom';

function SteeringTool(props) {
  const { expanded, setExpanded } = props;
  const navigation = useNavigate();
  const handleCreateANewOrder = () => {
    navigation('/create-a-job');
  }

  return ( 
    <div className={expanded ? "main_dashboard_container pd_240" : 'main_dashboard_container pd_140'}>
      <div className="dashboard_text_cont">
        <div className="dashboard_text fs_30">
        SteeringTool
        </div>
        {/* <button className="create_new_order_btn_cont" onClick={handleCreateANewOrder}>Neuen Auftrag erstellen</button> */}
      </div>

      {/* navbar container  */}
      <div className='container'>
        <StTabs tabs={steeringTabContent} />
      </div>
    </div>
  )
}

export default SteeringTool;
