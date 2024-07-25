import React from "react";
import galaxy from "../assets/galaxy2.jpg"

const Cards2 = ({ story }) => {
  console.log(story, 4)
  return (

    <>
      <div className="px-[2px]"  >
        <div id="aaa" className="bg-white shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] rounded-md p-2 max-w-sm font-[sans-serif] overflow-hidden mx-auto mt-4">
          <div className="min-h-[25px]" >
            <img
              src={galaxy}
              className="w-full h-48 rounded-md"
            />
          </div>
          <div className="p-1 text-center ">
            <p className="mt-3 text-xs text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>

          </div>
        </div>
      </div>

    </>
  );
};

export default Cards2;
