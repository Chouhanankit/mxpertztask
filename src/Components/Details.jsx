import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const Details = () => {

  const { store } = useSelector((state) => state.science)

  return (
    <div>
      <div defaultActiveKey="Word Explorer" id="story-tabs" className=" mt-24">
        <div eventKey="Story Adventure" title="Details">

        </div>
        <div eventKey="image" title="Image">
        </div>
        <div eventKey="Word Explorer" clas Title="Wordexplore">
          <h2>Title:-</h2>
          <p> Status :-</p>
        </div>
      </div>
    </div>
  )
}

export default Details