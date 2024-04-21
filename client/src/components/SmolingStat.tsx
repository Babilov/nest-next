import React from "react";
import { IDay, IDays } from "@/interfaces/days.interface";
import { FaCheck, FaTimes } from "react-icons/fa";

const SmokingStat = ({ days }: IDays) => {
  return (
    <div>
      {days.map((dayItem: IDay) => (
        <div key={dayItem.id} className={"flex items-center"}>
          <div>{String(dayItem.day)}</div>
          <div>{dayItem.smoked ? <FaTimes /> : <FaCheck />}</div>
        </div>
      ))}
    </div>
  );
};

export default SmokingStat;
