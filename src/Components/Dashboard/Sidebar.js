import React, { useContext,useEffect,useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGripHorizontal, faCalendar, faHome, faSignOutAlt, faUserPlus, faUsers } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';

const Sidebar = () => {
    const [loggedInUser, setloggedInUser] = useContext(UserContext);
    const [isDoctor, setIsDoctor] = useState(false);

    useEffect(() => {
        fetch('http://localhost:5000/isDoctor', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setIsDoctor(true));
    }, [])
    return (
        <div className="sidebar pt-5 pl-3">
            <p> <FontAwesomeIcon icon={faGripHorizontal} /> Dashboard </p>
            <Link to="/home" className="text-decoration-none text-white d-block mb-3"> <FontAwesomeIcon icon={faHome} /> Back to Home </Link> 
            <Link to="/Appoinments by date" className="text-decoration-none text-white d-block mb-3"> <FontAwesomeIcon icon={faCalendar} /> Appoinments </Link> 
           { isDoctor && <Link to="/Patients" className="text-decoration-none text-white d-block mb-3"> <FontAwesomeIcon icon={faUsers} /> All Patients </Link> }
            { isDoctor && <Link to="/Add New Doctor" className="text-decoration-none text-white d-block mb-3"> <FontAwesomeIcon icon={faUserPlus} /> Add Doctor </Link>} 
            <p style={{cursor:'pointer'}} onClick={() => setloggedInUser('')}> <FontAwesomeIcon icon={faSignOutAlt} /> Log Out </p>
        </div>
    );
};

export default Sidebar;