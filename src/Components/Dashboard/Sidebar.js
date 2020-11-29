import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGripHorizontal, faCalendar, faHome, faSignOutAlt, faUserPlus, faUsers } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';

const Sidebar = () => {
    const [loggedInUser, setloggedInUser] = useContext(UserContext);
    return (
        <div className="sidebar pt-5 pl-3">
            <p> <FontAwesomeIcon icon={faGripHorizontal} /> Dashboard </p>
            <Link to="/home" className="text-decoration-none text-white"> <FontAwesomeIcon icon={faHome} /> Back to Home </Link> <br /> <br />
            <Link to="/Appoinments by date" className="text-decoration-none text-white"> <FontAwesomeIcon icon={faCalendar} /> Appoinments </Link> <br /> <br />
            <Link to="/Patients" className="text-decoration-none text-white"> <FontAwesomeIcon icon={faUsers} /> All Patients </Link> <br /> <br />
            <Link to="/Add New Doctor" className="text-decoration-none text-white"> <FontAwesomeIcon icon={faUserPlus} /> Add Doctor </Link> <br /> <br />
            <p style={{cursor:'pointer'}} onClick={() => setloggedInUser('')}> <FontAwesomeIcon icon={faSignOutAlt} /> Log Out </p>
        </div>
    );
};

export default Sidebar;