import React, { useState } from "react";
import Group from "./Group";

const HeroSec = () => {
  const [key, setKey] = useState();
  return (
    <div >
      <div className="text-5xl font-bold  text-white text-center mt-16 ">
        Science Fiction Stories
      </div>
      <div className="font-[sans-serif] space-x-12 space-y-4 text-center mt-16 ">
        <button
          value="New"
          onClick={(e) => setKey(e.target.value)}
          type="button"
          className="bg-blue-600 w-[15%] p-2 rounded-2xl text-white"
        >
          New
        </button>

        <button
          value="In Progress"
          onClick={(e) => setKey(e.target.value)}
          type="button"
          className="bg-yellow-400 w-[15%] p-2 rounded-2xl text-white"
        >
          In Progress
        </button>
        <button
          value="Completed"
          onClick={(e) => setKey(e.target.value)}
          type="button"
          className="bg-green-400 w-[15%] p-2 rounded-2xl text-white"
        >
          Completed
        </button>
        <button
          type="button"
          onClick={() => setKey("")} // Clear the filter
          className="clrbtn w-[15%] p-2 rounded-2xl text-white"
        >
          Clear All
        </button>
        <Group value={key} />
      </div>
    </div>
  );
};

export default HeroSec;
