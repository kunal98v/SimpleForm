import React, { useState } from "react";

export const AccodianCard = ({ item, index, setIndex }) => {
  return (
    <div className="border 1px m-2 w-7/12">
      <div className="font-bold flex justify-between px-2 cursor-pointer" onClick={()=> setIndex(!index)}>
        {item.title}
        <span>▼</span>
      </div>
      {index && <div className="px-2">{item.body}</div>}
    </div>
  );
};      
