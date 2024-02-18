import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const Form = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:3000/user',{name,email});
      Swal.fire("Login Successfully");
      navigate("/");

    } catch (error) {
      console.log("error found", error);
    }
    setName('');
    setEmail('');
  };

  return (
    <div className="h-screen justify-center flex flex-col items-center">
      <form
        className="p-2 m-2 border shadow-md w-[70%] md:w-[50%] lg:w-[40%] xl:w-[30%]"
        onSubmit={handleSubmit}
      >
        <p className="text-center text-[23px] my-2 font-semibold">Login Form</p>
        <div className="mt-4">
          <label className="font-semibold">Name </label>
          <br />
          <input
            type="text"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="my-2">
          <label className="font-semibold">Email </label>
          <br />
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mt-4 text-center">
          <button className="bg-green-800 text-white p-1 px-2 rounded-md my-1 w-[60%] md:w-[42%] lg:w-[40%] xl:w-[30%]">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
