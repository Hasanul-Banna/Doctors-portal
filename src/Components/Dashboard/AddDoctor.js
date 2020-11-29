import React, { useState } from 'react';
import Sidebar from './Sidebar';

const AddDoctor = () => {
    const [info, setInfo] = useState({});
    const [file, setFile] = useState(null);
    const handleBlur = e => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }

    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }

    const handleSubmit = () => {
        const formData = new FormData()
        console.log(info);
        formData.append('file', file);
        formData.append('name', info.name);
        formData.append('email', info.email);

        fetch('http://localhost:5000/addADoctor', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                // console.log(data)
            })
            .catch(error => {
                console.error(error)
            })
    }

    return (
        <section className="container-fluid row pl-0">
            <div className="col-md-2">
                <Sidebar />
            </div>
            <div className="col-md-10 p-5 ml-0">
                <h3 className="theme-text">Add a Doctor</h3>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label >Name</label>
                        <input onBlur={handleBlur} type="text" className="form-control" name="name" placeholder="Name" />
                    </div>
                    <div className="form-group">
                        <label >Email address</label>
                        <input onBlur={handleBlur} type="email" className="form-control" name="email" placeholder="Enter email" />
                    </div>
                    <div className="form-group">
                        <label >Upload a image</label>
                        <input onChange={handleFileChange} type="file" className="form-control" placeholder="Picture" />
                    </div>
                    <button type="submit" className="btn btn-main">Submit</button>
                </form>
            </div>
        </section>
    );
};

export default AddDoctor;