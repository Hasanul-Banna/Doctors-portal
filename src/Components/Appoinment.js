import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import banner from '../images/banner.png';
import { BookingData } from '../ScheduleData';
import Navibar from './Navibar';
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
                    <Navibar />
                    <div style={{ height: "80vh" }} className="row d-flex align-content-center">
                        <div className="col-md-5">
                            <h2 className="text-dark">Select Appoinment Date</h2>
                            <Calendar onChange={handleDate} value={selectedDate} />
                        </div>
                        <div className="col-md-7">
                            <img className="w-100" src={banner} alt="" />
                        </div>
                    </div>
                </div >
            </div>
            <div style={{ marginTop: "-100px" }} className="bg-white">
                <div className="container ">
                    <h1 className="theme-text text-center py-3">Available Appoinments On {selectedDate.toDateString()}</h1>
                    <div className="row">
                        {
                            BookingData.map(x => <Schedule selectedDate={selectedDate} key={x.id} card={x} />)
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default Appoinment;