import React from 'react';
import { Link } from 'react-router-dom';
import "./MyOrders.css";


const MyOrders = () => {
    return (
      <div>
        <div className="container">
          <h2 className="text-center pt-5">My Orders</h2>
          <div className="row">
            <div className="col-md-12 p-5">
              <table
                id=""
                className="table table-striped table-bordered"
                cellspacing="0"
                width="100%"
              >
                <thead>
                  <tr>
                    <th className="th-sm">SL NO</th>
                    <th className="th-sm">ID</th>
                    <th className="th-sm">NAME</th>
                    <th className="th-sm">STATUS</th>
                    <th className="th-sm">DELETE</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="th-sm">01</td>
                    <td className="th-sm">101</td>
                    <td className="th-sm">Discover Depth of Beach</td>
                    <td className="th-sm pd-btn">Pending</td>
                    <td className="th-sm">
                      <Link to="/myorders" type="button" className="" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        <i className="fas fa-trash-alt d-btn"></i>
                      </Link>
                    </td>
                  </tr>

                  <tr>
                    <td className="th-sm">02</td>
                    <td className="th-sm">102</td>
                    <td className="th-sm">The Dark Forest Adventure</td>
                    <td className="th-sm pd-btn">Pending</td>
                    <td className="th-sm">
                      <Link to="/myorders" type="button" className="" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        <i className="fas fa-trash-alt d-btn"></i>
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td className="th-sm">03</td>
                    <td className="th-sm">103</td>
                    <td className="th-sm">Discover Depth of Beach</td>
                    <td className="th-sm pd-btn">Pending</td>
                    <td className="th-sm">
                      <Link to="/myorders" type="button" className="" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        <i className="fas fa-trash-alt d-btn"></i>
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td className="th-sm">04</td>
                    <td className="th-sm">104</td>
                    <td className="th-sm">Moscow Red City Land</td>
                    <td className="th-sm text-info">Approved</td>
                    <td className="th-sm">
                      <Link to="/myorders" type="button" className="" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        <i className="fas fa-trash-alt d-btn"></i>
                      </Link>
                    </td>
                  </tr>
                </tbody>
              </table>


              {/* <!-- Modal --> */}
              <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body text-center">
                      Are You Want To Delete?
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn btn-info" data-bs-dismiss="modal">Cancel</button>
                      <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Delete</button>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    );
};

export default MyOrders;