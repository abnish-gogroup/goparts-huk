import React from 'react';

export default function StNavigation(props) {

  return (
    <ul className={`tabs__nav`}>
      {props.tabs.map((item) => (
        <li key={item.stId} className={`tabs__item`}>
          <button className={`tabs__button ${(props.activeTabId === item.stId) ? 'active fw_600' : ''}`}
            onClick={() => props.onNavClick(item.stId)}>
            {item.name}
          </button>
        </li>
      ))}
    </ul>
  );
}
