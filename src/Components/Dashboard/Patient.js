import React, { useState } from 'react';
import Sidebar from './Sidebar';

const Patient = () => {
    const [Appointment, setAppointment] = useState([]);

    fetch('http://localhost:5000/Allappointment', {
        method: 'GET',
        headers: { 'content-type': 'application/json' }
    })
        .then(res => res.json())
        .then(data => {
            setAppointment(data)
        })
    return (
        <div>
            <div className="container-fluid  pl-0">
                <div className="row">
                    <div className="col-md-2"><Sidebar /></div>
                    <div className="col-md-10 pt-5">
                        {Appointment.length ? <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Serial</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Service</th>
                                    <th scope="col">Date & Time</th>
                                    <th scope="col">Gender</th>
                                    <th scope="col">Age</th>
                                    <th scope="col">Weight</th>
                                    <th scope="col">Contact</th>

                                </tr>
                            </thead>
                            <tbody>

                                {
                                    Appointment.map((x, index) => {
                                        return (
                                            <tr key={x._id}>
                                                <th scope="row">{index + 1}</th>
                                                <td>{x.name}</td>
                                                <td>{x.service}</td>
                                                <td>{(x.date)}</td>
                                                <td>{x.gender}</td>
                                                <td>{x.age}</td>
                                                <td>{x.weight}kg</td>
                                                <td>{x.phone}</td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table> :
                         <div className="spinner-border text-info" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Patient;