import React, { useState } from "react";

export const FormDetails = () => {
  const [dataList, setDataList] = useState([]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    location: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setDataList([...dataList, formData]);
  };

  return (
    <div onSubmit={handleSubmit}>
      <form className="flex flex-col justify-center items-center m-10">
        <input
          className="border-b 1px m-2 w-5/12 "
          name="name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          type="text"
          placeholder="Enter name"
        ></input>
        <input
          className="border-b 1px m-2 w-5/12"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          type="email"
          placeholder="Enter email"
        ></input>
        <input
          className="border-b 1px m-2 w-5/12"
          value={formData.age}
          onChange={(e) => setFormData({ ...formData, age: e.target.value })}
          type="number"
          placeholder="Enter age"
        ></input>
        <input
          className="border-b 1px m-2 w-5/12"
          value={formData.location}
          onChange={(e) => setFormData({ ...formData, location: e.target.value })}
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
        <button className="bg-yellow-500 p-1 w-3/12 rounded-xl m-2 text-white hover:bg-yellow-600 cursor-pointer"
        onClick={() => setDataList([])}>
          Clear
        </button>
        </div>
      )}
    </div>
  );
};
