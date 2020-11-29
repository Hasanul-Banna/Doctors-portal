import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
// import { UserContext } from '../../App';

const AppoinmentsByDate = () => {
    // const [loggedInUser, setloggedInUser] = useContext(UserContext);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [Appointment, setAppointment] = useState([]);

    const handleDate = (date) => {
        setSelectedDate(date);
    }
    useEffect(() => {
        fetch('http://localhost:5000/appointmentByDate', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ date: selectedDate })
        })
            .then(res => res.json())
            .then(data => {
                setAppointment(data)
            })

    }, [selectedDate])

    return (
        <div>
            <div className="container-fluid  pl-0">
                <div className="row">
                    <div className="col-md-2"><Sidebar /></div>
                    <div className="col-md-4 pt-5">
                        <h2 className="text-dark">Appoinments by Date</h2>
                        <Calendar onChange={handleDate} value={selectedDate} />
                    </div>
                    <div className="col-md-6 pt-5">
                        {Appointment.length ? <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Serial</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Age</th>
                                    <th scope="col">Contact</th>
                                </tr>
                            </thead>
                            <tbody>

                                {
                                    Appointment.map((x, index) => {
                                        return (
                                            <tr key={x._id}>
                                                {/* <th scope="row">{Appointment.findIndex(obj => obj.name === x.name && obj.age === x.age)}</th> */}
                                                <th scope="row">{index + 1}</th>
                                                <td>{x.name}</td>
                                                <td>{x.age}</td>
                                                <td>{x.phone}</td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table> : <h2>No Appoinments on This Date</h2>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppoinmentsByDate;