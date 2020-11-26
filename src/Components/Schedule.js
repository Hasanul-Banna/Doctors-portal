import React from 'react';

const Schedule = ({ card }) => {
    return (
        <div className="col-md-4 p-3">
            <div className="shedule p-4">
            <h3>{card.service}</h3>
            <h6>{card.visitingHour}</h6>
            <p>{card.totalSpace} Space avaiable</p>
            <button className="btn btn-main">Book Appoinment</button>
            </div>
        </div>
    );
};

export default Schedule;