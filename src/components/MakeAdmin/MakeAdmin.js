import React from "react";
import "./MakeAdmin.css";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
const MakeAdmin = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    fetch("https://dry-ravine-95776.herokuapp.com/makeadmin", {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
    console.log(data);
  };
  return (
    <div className="text-center mt-5">
      <h2 className="mb-4">Make Admin</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="input-field form-admim w-25"
          name="email"
          placeholder="Email"
          type="email"
          {...register("email", { required: true })}
        />
        <br />

        <input
          className="make-btn btn btn-danger mt-4 mb-4"
          type="submit"
          value="Make As Admin"
        />
      </form>
      <Link className="text-center notfound shadow mb-5" to="/dashboard">
        Go To Dashboard
      </Link>
    </div>
  );
};

export default MakeAdmin;
