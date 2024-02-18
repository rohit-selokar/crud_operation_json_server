import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
const Update = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [data, setData] = useState({
    id: id,
    name: "",
    email: "",
  });

  useEffect(() => {
    axios
      .get(`http://localhost:3000/user/${id}`)
      .then((res) => {
        setData({ ...data, name: res.data.name, email: res.data.email });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleUpdate = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:3000/user/${id}`, data)
    .then((res) => {
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        }
      });
      Toast.fire({
        icon: "success",
        title: "Data updated successfully"
      });
      navigate("/");
    })
    .catch((err)=>{
        console.log("Error",err);
    });
  };

  return (
    <div className="h-screen justify-center flex flex-col items-center">
      <form
        className="p-2 m-2 border shadow-md w-[70%] md:w-[50%] lg:w-[40%] xl:w-[30%]"
        onSubmit={handleUpdate}
      >
        <p className="text-center text-[23px] my-2 font-semibold">Login Form</p>
        <div className="mt-4">
          <label className="font-semibold">Name </label>
          <br />
          <input
            type="text"
            placeholder="Enter name"
            value={data.name}
            onChange={(e) => setData({ ...data, name: e.target.value })}
          />
        </div>

        <div className="my-2">
          <label className="font-semibold">Email </label>
          <br />
          <input
            type="email"
            placeholder="Enter Email"
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />
        </div>

        <div className="mt-4 text-center">
          <button className="bg-green-800 text-white p-1 px-4 rounded-md my-1 md:w-[30%] lg:w-[25%] xl:w-[25%]">
            Update
          </button>

          <Link to="/">
            <button className="bg-green-800 text-white p-1 mx-2 px-6 rounded-md my-1 md:w-[30%] lg:w-[25%] xl:w-[25%]">
              Back
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Update;
