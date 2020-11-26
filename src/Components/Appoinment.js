import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import banner from '../images/banner.png';
import { BookingData } from '../ScheduleData';
import Schedule from './Schedule';

const Appoinment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const handleDate = (date) => {
        setSelectedDate(date);
        console.log(date)
    }

    return (
        <>
            <div className="header-container ">
                < div className="container " >
                    <div style={{ height: "100vh" }} className="row d-flex align-content-center">
                        <div className="col-md-5">
                            <Calendar onChange={handleDate} value={selectedDate} />
                        </div>
                        <div className="col-md-7">
                            <img className="w-100" src={banner} alt="" />
                        </div>
                    </div>
                </div >
            </div>
            <div className="container ">
                <div className="row">
                    {
                        BookingData.map(x => <Schedule key={x.id} card={x} />)
                    }
                </div>
            </div>

        </>
    );
};

export default Appoinment;