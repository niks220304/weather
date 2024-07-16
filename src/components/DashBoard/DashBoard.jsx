import React from "react";
import Location from "../location/Location";
import Banner from "../banner/Banner";
import { InfoCard, TimeCard } from "../InfoCards/InfoCard";
import DateTime from "../DateTime/DateTime";

import "./DashBoard.css";
import SearchBar from "../searchbar/Searchbar";
const DashBoard = () => {
  return (
    <div>
      <SearchBar />
      <div className='dashboard'>
        <div className='locDate'>
          <Location />
          <div className='date'>
            <DateTime />
          </div>
        </div>
        <div className='mainside'>
          <div className='maincol'>
            <Banner
              max={30}
              min={20}
              temperature={25}
              status={"Amazing weather"}
            />
            <div className='stats'>
              <InfoCard
                field='humidity'
                value='100%'
              />
              <InfoCard
                field='wind'
                value='100%'
              />
              <InfoCard
                field='rain'
                value='100%'
              />
              <InfoCard
                field='feels like'
                value='100%'
              />
            </div>
          </div>
          <div className='sidecol'>
            <div className='s1'>
              <TimeCard
                time={"10:29"}
                amORpm={"AM"}
              />
            </div>
            <div className='s2'>
              <TimeCard
                time={"10:29"}
                amORpm={"AM"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
