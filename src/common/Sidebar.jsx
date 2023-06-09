import React, { useState } from 'react';
import '../stylesheets/sidebar.scss';
import 'bootstrap/dist/css/bootstrap.css';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faDashboard, faGear, faList, faSlidersH } from '@fortawesome/free-solid-svg-icons';
import Header from '../common/Header';

function Sidebar(props) {
	const { expanded, handleToggleSidebar } = props;
	const [showSubMenu, setShowSubMenu] = useState(false);
	const navigate = useNavigate();
	const goToDashboard = () => {
		navigate('/dashboard');
	}

	const goToInsuranceDashboard = () => {
		navigate('/insurance-dashboard');
	}

	const goToCreateJob = () => {
		navigate('/parts-checker');
	}

	const goToSteeringTool = () => {
		navigate('/steering-tool');
	}

	const handleShowSubmenu = () => {
		setShowSubMenu(!showSubMenu);
	}

	return (
		<div>
			<Header expanded={expanded} />
			<div className={expanded ? 'main_side_bar' : 'w_50'} id='main_side_bar'>
				<nav className='navbar navbar-default' role='navigation'>
					<div className='navbar-header'>
						<FontAwesomeIcon icon={faBars} className="icon" id='collapse_expand_btn' onClick={handleToggleSidebar} />
					</div>
					<div className='side-menu-container'>
						{window.location.pathname.includes('insurance') ?
							<ul className='nav navbar-nav'>
								<li className="menu-item" onClick={goToInsuranceDashboard}><FontAwesomeIcon icon={faDashboard} className='icon' />dashboard</li>
								<li className="menu-item" onClick={handleShowSubmenu}><img src='http://static-assets-goparts.s3.amazonaws.com/static-images/control_tool.png' className='icon tool' /> Steuerungs tool</li>
								{showSubMenu ? <ul>
									<li className="menu-item pdl_15">Regeln managen</li>
									<li className="menu-item pdl_15">Neue Regel definieren</li>
									<li className="menu-item pdl_15">Regelwerk</li>
									<li className="menu-item pdl_15">Analytics</li>
									<li className="menu-item pdl_15">Import / Export</li>
								</ul> : ''}
								<li className="menu-item"><FontAwesomeIcon icon={faGear} className='icon' />Einstellungen</li>
							</ul> :
							<ul className='nav navbar-nav'>
								<li className="menu-item" onClick={goToDashboard}><FontAwesomeIcon icon={faDashboard} className='icon' />Dashboard</li>
								<li className="menu-item" onClick={goToCreateJob}><FontAwesomeIcon icon={faList} className='icon' />Aufträge</li>
								<li className="menu-item"><FontAwesomeIcon icon={faGear} className='icon' />Einstellungen</li>
								<li className="menu-item" onClick={goToSteeringTool}><FontAwesomeIcon icon={faSlidersH} className='icon' />steuerungsmodul</li>
							</ul>}
					</div>
				</nav>
			</div>
		</div>
	)
}

export default Sidebar;
