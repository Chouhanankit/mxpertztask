import React from "react";

const BigCards = ({ title }) => {

  return (

    <>
      <div id="qqq" className="w-[50%] rounded-lg text-white p-2 mt-4 mx-4" >
        <span className="flex items-center gap-2"  >
          <h1 className="text-blue-400 text-2xl" >Connection</h1>
          <p>(Noun)</p>
        </span>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.  reiciendis officia minima omnis maxime!</p>
        <img className="rounded-lg" src="https://st2.depositphotos.com/2309453/11593/i/950/depositphotos_115938586-stock-photo-young-father-teaching-his-little.jpg" alt="" />
        <span>
          <span className="flex items-center gap-4 mt-2" >
            <h2 className="text-green-500" >Synonyms:</h2>
            <p>Dicta nobis neque accusamus.</p>
          </span>
          <span className="flex items-center gap-4 mb-4">
            <h2 className="text-pink-600" >Antonyms:</h2>
            <p> Dicta nobis neque accusamus.</p>
          </span>
        </span>
      </div>

    </>

  );
};

export default BigCards;
