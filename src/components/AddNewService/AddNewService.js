import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import useFirebase from "../Hooks/useFirebase";
import "./AddNewService.css";

const AddNewService = () => {

    const { user } = useFirebase();
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        fetch("https://dry-ravine-95776.herokuapp.com/addnewservices", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data),
        })
        .then((res) => res.json())
        .then((result) => console.log(result));
        console.log(data);
    };

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h2 className="m-5 text-center">Add New Service</h2>

                        <form onSubmit={handleSubmit(onSubmit)}>

                        <div id="serviceAddForm" className="w-100">                          

                            <input type="text" id="serviceNameAddId" className="form-control mb-4" placeholder="Name"/>

                            <input type="text" id="serviceDesAddId" className="form-control mb-4" placeholder="Description" />

                            <input type="text" id="serviceDesAddId" className="form-control mb-4" placeholder="Price"/>

                            <input type="text" id="serviceImgAddId" className="form-control mb-4" placeholder="Image url link"/>
                        </div>
                        
                        <div className="text-center pt-2 pb-5">
                            <button id="serviceAddConfirmBtn" type="button" className="btn add-btn">Add New Service</button>
                        </div>

                        </form>

                        <div className="text-center">
                          <Link className="text-center notfound shadow mb-5" to="/dashboard">
                            Go To Dashboard
                        </Link>
                         </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddNewService;
