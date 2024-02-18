import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Home = () => {
  // const navigate = useNavigate();
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/user")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleDelete = (id) => {
    const check = window.confirm("Do you want to delete");

    if (check) {
      setData((prevData) => prevData.filter((item) => item.id !== id));
      axios
        .delete(`http://localhost:3000/user/${id}`)
        .then((res) => {
          Swal.fire({
            title: "Data Deleted Successfully",
            text: "You clicked the button!",
            icon: "success",
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <div>
      <div className=" flex flex-col items-center mx-4 mt-3">
        <div className="flex my-5">
          <p className="text-[20px] font-semibold mx-4">Candidate List</p>
          <Link to="/form">
            <p className="bg-green-500 text-white p-1 px-3 rounded-md">New</p>
          </Link>
        </div>
        <table>
          <thead>
            <tr>
              <th className="border py-2">ID</th>
              <th className="border py-2">Name</th>
              <th className="border py-2">Email</th>
              <th className="border py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((list) => (
              <tr key={list.id}>
                <td className="border px-2 py-2 md:px-7 lg:px-9 xl:px-12">
                  {list.id}
                </td>
                <td className="border px-2 py-2 md:px-7 lg:px-9 xl:px-12">
                  {list.name}
                </td>
                <td className="border px-2 py-2 md:px-7 lg:px-9 xl:px-12">
                  {list.email}
                </td>
                <tr className="border">
                  <td className="py-2">
                    <Link to={`/read/${list.id}`}>
                      <i className="fa-solid fa-eye px-1 md:px-2"></i>
                    </Link>
                  </td>
                  <td className="py-2">
                    <Link to={`/update/${list.id}`}>
                      <i className="fa-regular fa-pen-to-square px-1 md:px-2"></i>
                    </Link>
                  </td>
                  <td className="py-2">
                    <i
                      className="fa-solid fa-trash px-1 md:px-2"
                      onClick={() => handleDelete(list.id)}
                    />
                  </td>
                </tr>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
