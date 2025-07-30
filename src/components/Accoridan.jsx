import React, { useEffect, useState } from "react";
import { AccodianCard } from "./AccodianCard";

export const Accoridan = () => {
  const [data, setData] = useState([]);
  const [index, setIndex] = useState(0);

  const fetchData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    setData(data);
  };

  useEffect(() => {
    fetchData();    
  }, []);

  return (
    <div className="flex flex-col justify-center items-center">
        <h1 className="font-bold">Accordian</h1>
      {data.map((item, key) => {
        return (
          <AccodianCard key={key}
            item={item}
            index={index == key}
            setIndex={() => setIndex(index == key ? index : key)}
          />
        );
      })}
    </div>
  );
};
