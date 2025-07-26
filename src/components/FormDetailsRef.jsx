import React, { useState, useRef } from "react";

export const FormDetailsRef = () => {
  const [dataList, setDataList] = useState([]);

  const name = useRef(null);
  const email = useRef(null);
  const age = useRef(null);
  const location = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
        name : name.current.value,
        email : email.current.value,
        age : age.current.value,
        location : location.current.value
    }
    setDataList([...dataList, formData]);
  };

  return (
    <div onSubmit={handleSubmit}>
      <h2 className="text-center">Form - useRef</h2>
      <form className="flex flex-col justify-center items-center m-10">
        <input
          ref={name}
          className="border-b 1px m-2 w-5/12 "
          name="name"
          type="text"
          placeholder="Enter name"
        ></input>
        <input
          ref={email}
          className="border-b 1px m-2 w-5/12"
          type="email"
          placeholder="Enter email"
        ></input>
        <input
          ref={age}
          className="border-b 1px m-2 w-5/12"
          type="number"
          placeholder="Enter age"
        ></input>
        <input
          ref={location}
          className="border-b 1px m-2 w-5/12"
          type="text"
          placeholder="Enter location"
        ></input>
        <button className="bg-blue-500 p-1 w-3/12 rounded-xl text-white hover:bg-blue-700 cursor-pointer">
          Submit
        </button>
      </form>
      {dataList.length != 0 && (
        <div className="flex flex-col items-center justify-center">
          <table className="table-auto border border-black w-4/12">
            <thead>
              <tr>
                <td className="border border-black px-4 py-2">Name</td>
                <td className="border border-black px-4 py-2">Email</td>
                <td className="border border-black px-4 py-2">Age</td>
                <td className="border border-black px-4 py-2">Location</td>
              </tr>
            </thead>
            <tbody>
              {dataList.map((item, key) => (
                <tr key={key}>
                  <td className="border border-black px-4 py-2">{item.name}</td>
                  <td className="border border-black px-4 py-2">
                    {item.email}
                  </td>
                  <td className="border border-black px-4 py-2">{item.age}</td>
                  <td className="border border-black px-4 py-2">
                    {item.location}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button
            className="bg-yellow-500 p-1 w-3/12 rounded-xl m-2 text-white hover:bg-yellow-600 cursor-pointer"
            onClick={() => setDataList([])}
          >
            Clear
          </button>
        </div>
      )}
    </div>
  );
};
