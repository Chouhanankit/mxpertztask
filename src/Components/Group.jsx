import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { data } from "autoprefixer";
import { CiUnread } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { getStories } from "../features/science/scienceSlice";

const Group = ({ value }) => {
  const data = value;
  const { stories, isLoading } = useSelector((state) => state.science);
  const dispatch = useDispatch();

  const filterDataNew = stories.filter((ex) => ex?.Status === "New");
  const filterDataPro = stories.filter((ex) => ex?.Status === "In Progress");
  const filterDataComp = stories.filter((ex) => ex?.Status === "Completed");

  useEffect(() => {
    dispatch(getStories());
  }, []);

  return (
    <>
      <div className="relative right-12 top-10 w-full ">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#1A163D"
            fillOpacity="1"
            d="M0,160L80,138.7C160,117,320,75,480,90.7C640,107,800,181,960,176C1120,171,1280,85,1360,42.7L1440,0L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
        <div id="cardBg" className=" mt-[-100px] flex flex-col justify-evenly gap-4 ">
          <div className="">
            {data == "New" ? (
              <>
                <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 px-6 ">
                  {filterDataNew.map((story) => (
                    <Cards key={story._id} story={story} />
                  ))}
                </div>
              </>
            ) : (
              <>
                {data == "In Progress" ? (
                  <>
                    <div className="grid lg:grid-cols-4  md:grid-cols-2 sm:grid-cols-1 ">
                      {filterDataPro.map((story) => (
                        <Cards key={story._id} story={story} />
                      ))}
                    </div>
                  </>
                ) : (
                  <>
                    {data == "Completed" ? (
                      <>
                        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-2">
                          {filterDataComp.map((story) => (
                            <Cards key={story._id} story={story} />
                          ))}
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 px-6">
                          {stories.map((story) => (
                            <Cards key={story._id} story={story} />
                          ))}
                        </div>
                      </>
                    )}
                  </>
                )}
              </>
            )}
          </div>
          <ul className="font-[sans-serif] flex justify-between mx-auto w-full rounded">
            <li
              id="text"
              className="py-2.5 flex items-center justify-center shrink-0 cursor-pointer text-sm  text-white min-w-[10px]"
            >
              <FaAngleLeft className="text-blue-600 " />
              <h4 className="text-blue-300" > Previous</h4>
            </li>
            <li
              id="text"
              className="py-2.5 flex items-center justify-center shrink-0 cursor-pointer text-sm font-semibold min-w-[110px]"
            >
              <Link to={"/screen2"} className="flex justify-center items-center " >
                <h4 className="text-blue-300" > Next</h4>
                <FaAngleRight className="text-blue-600 " />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Group;
