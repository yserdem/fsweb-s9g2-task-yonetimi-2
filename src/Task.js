import React from "react";
import { formatDistanceToNow, differenceInDays } from "date-fns";
import { tr } from "date-fns/locale";

const Task = ({ taskObj, onComplete }) => {

  const deadline = new Date(taskObj.deadline);
  const toNow = formatDistanceToNow(deadline, {addSuffix: true, locale: tr });
  const daysLeft = differenceInDays(deadline, new Date());

  return (
    <div className="task p-6 bg-white rounded leading-normal mt-4">
      <h3 className="text-lg text-yellow-700">{taskObj.title}</h3>
      <div className="deadline">son teslim: <span className={`${daysLeft < 3 ? "bg-[#ffd9d4]" : ""}`}>{toNow}</span></div>
      <p className="text-sm">{taskObj.description}</p>
      <div>
        {taskObj.people.map((p) => (
          <span className="pill" key={p}>{p}</span>
        ))}
      </div>
      {onComplete && <button className="block ml-auto bg-orange-300 rounded-sm cursor-pointer" onClick={() => onComplete(taskObj.id)}>Tamamlandı</button>}
    </div>
  );
};

export default Task;
