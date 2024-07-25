import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getSingleStories } from "../features/science/scienceSlice";
import galaxy from "../assets/galaxy2.jpg"

const Cards = ({ story }) => {
  const dispatch = useDispatch()

  return (


    <>
      <div>
        <div className="crd  w-full max-w-sm  border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img className="galaxyimg p-4 rounded-t-lg" src={galaxy} alt="product image" />
          </a>
          <div className="px-5 pb-5">
            <a href="#">
              <h5 className="text-xl tracking-tight text-white dark:text-white">{story?.Title}</h5>
            </a>
            <div className="flex items-center justify-between mt-4 w-full ">
                <Link to={"/screen2"} href="#"  onClick={() => dispatch(getSingleStories(story?._id))} className={story?.Status === "New" ? "bg-white   text-blue-400 w-full rounded-2xl  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm px-5 py-2.5 text-center dark:focus:ring-blue-800" : story?.Status === "Completed" ? "bg-white text-green-400 w-full rounded-2xl  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm px-5 py-2.5 text-center dark:focus:ring-green-800" : "bg-white text-yellow-400 w-full rounded-2xl  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm px-5 py-2.5 text-center dark:focus:ring-green-800  "} >{story?.Status}</Link>
            </div>
          </div>
        </div>
      </div>

    </>


  );
};

export default Cards;
