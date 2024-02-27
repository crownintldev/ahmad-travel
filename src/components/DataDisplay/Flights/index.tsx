"use client"
import React from "react";
import { FaPlaneArrival, FaPlaneDeparture } from "react-icons/fa6";
import VisaData from "./VisaData";
import type { DatePickerProps } from 'antd';
import { DatePicker } from 'antd';
import Passenger from "./Passenger";
import { CiCalendarDate } from "react-icons/ci";
import { FaPerson } from "react-icons/fa6";

   
const onChange: DatePickerProps['onChange'] = (date, dateString) => {
    console.log(date, dateString);
  };

const Flights:React.FC = () => {
 
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <VisaData
          title="From"
          icon={<FaPlaneDeparture size={25} />}
          location={[
            { option: "Malaysia" },
            { option: "United Kingdom" },
            { option: "United Arab Emirates" },
            { option: "Tajikistan" },
            { option: "Thailand" },
            { option: "Azerbaijan" },
        ]}
        />
         <VisaData
          title="From"
          icon={<FaPlaneArrival  size={25} />}
          location={[
            { option: "Malaysia" },
            { option: "United Kingdom" },
            { option: "United Arab Emirates" },
            { option: "Tajikistan" },
            { option: "Thailand" },
            { option: "Azerbaijan" },
        ]}
        />
        <VisaData
          title="Journey date"
          icon={<CiCalendarDate  size={25} />}
          location={[]}
          datepick={
            <DatePicker className="w-full text-black h-11 bg-transparent hover:bg-transparent outline-none focus:outline-none"  onChange={onChange} />
          }
        />
        <VisaData
          title="Passenger, Class"
          icon={<FaPerson  size={25} />}
          location={[]}
          Passenger={
            <>
            <Passenger
                userAgent={[
                    {title:"Adult" , age:"+18"},
                    {title:"Children" , age:"less then 12 years"},
                    {title:"Adult" , age:"Less then 2 years"},
                ]}
            />
            </>
          }
        />
      </div>
    </>
  );
};

export default Flights;
