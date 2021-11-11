import React from 'react';
import "./AddNewService.css";

const AddNewService = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div id="serviceAddForm" className="w-100">
                            <h2 className="m-5 text-center">Add New Service</h2>
                            <input type="text" id="serviceNameAddId" className="form-control mb-4" placeholder="Name"/>
                            <input type="text" id="serviceDesAddId" className="form-control mb-4" placeholder="Description" />
                            <input type="text" id="serviceDesAddId" className="form-control mb-4" placeholder="Price"/>
                            <input type="text" id="serviceImgAddId" className="form-control mb-4" placeholder="Image url link"/>
                        </div>
                        <div className="text-end pt-2 pb-5">
                            <button id="serviceAddConfirmBtn" type="button" className="btn add-btn">Add New Service</button>
                        </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default AddNewService;