import React from "react";

const PaginationCard = ({ item }) => {
  return (
    <div className="border 1px m-2 w-45 h-90 p-1 overflow-hidden">
      <h2 className="font-bold">{item.title}</h2>
      <img src={item.thumbnail}></img>
      <h2 className="font-bold">Price : {item.price}</h2>
      <h2 className="text-xs">{item.description}</h2>
    </div>
  );
};

export default PaginationCard;
