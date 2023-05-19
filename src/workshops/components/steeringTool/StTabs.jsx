import React from 'react';
import StNavigation from './StNavigation';
import StTab from './StTab';

export default function StTabs(props) {
    console.log("props", props);
  const [activeTabId, setActiveTab] = React.useState(props.tabs[0].stId);

  const activeTab = React.useMemo(() => (
    props.tabs.find((tab) => (
      tab.stId === activeTabId
    ))
  ), [activeTabId, props.tabs]);

  return (
    <div className={`tabs`}>
      <StNavigation tabs={props.tabs} onNavClick={setActiveTab}
        activeTabId={activeTabId} />
      <StTab tab={activeTab} />
    </div>
  );
}
