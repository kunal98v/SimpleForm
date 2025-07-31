import React, { useEffect, useState } from "react";
import PaginationCard from "./PaginationCard";

const Pagination = () => {
  const [data, setData] = useState([]);
  const [perPage, setPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);

  const lastPage = currentPage * perPage;
  const firstPage = lastPage - perPage;
  const currentData = data?.slice(firstPage, lastPage);
  const totalPages = Math.ceil(data?.length / perPage);

  const fetchData = async () => {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    setData(data.products);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return data.length == 0 ? <h2 className="text-center font-bold text-2xl m-2">Loading..</h2>:(
    <div className="flex flex-col">
      <div className="flex flex-wrap">
        {currentData.map((item, key) => {
          return <PaginationCard key={key} item={item} />;
        })}
      </div>
      <div className="flex items-center justify-center">
        {currentPage > 1 && (
          <button
            className="bg-gray-300 m-2 p-2 cursor-pointer"
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            Back
          </button>
        )}
        {Array.from({ length: totalPages }, (_, index) => {
          return (
            <button key={index}
              className={`w-12 h-10 m-1 cursor-pointer ${
                index+1 === currentPage
                  ? "bg-gray-600 text-white"
                  : "bg-gray-400"
              }`}
              onClick={() => setCurrentPage(index + 1)}
            >
              {index + 1}
            </button>
          );
        })}
        {currentPage != totalPages && (
          <button
            className="bg-gray-300 m-2 p-2 cursor-pointer"
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default Pagination;
