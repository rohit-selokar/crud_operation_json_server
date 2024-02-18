import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Read = () => {
  const { id } = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:3000/user/${id}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return (
    <div className=" mt-[20%] lg:mt-[15%] xl:mt-[10%] justify-center flex flex-col items-center">
      <form className="p-2 m-2 border rounded-lg shadow-md w-[70%] md:w-[50%] lg:w-[40%] xl:w-[30%]">
        <p className="text-center text-[23px] my-2 font-semibold">Login Form</p>
        <div className="mt-4">
          <label className="font-semibold">Name </label>
          <br />
          <input type="text" placeholder="Enter name" value={data.name} />
        </div>

        <div className="my-2">
          <label className="font-semibold">Email </label>
          <br />
          <input type="email" placeholder="Enter Email" value={data.email} />
        </div>

        <div className="mt-4 text-center">
          <Link to={`/update/${id}`}>
            <button className="bg-green-800 text-white p-1 px-4 rounded-md my-1 md:w-[30%] lg:w-[25%] xl:w-[25%]">
              Edit
            </button>
          </Link>

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

export default Read;
