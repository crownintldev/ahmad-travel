"use client"
import Tab from "@/components/Tabs";
import React, { useState } from "react";
import Flights from "../Flights";


const Booking = () => {
  
  return (
    <>
      <div className="container w-full shadow-md z-10 border rounded-lg p-2 sm:p-4 md:p-6 space-y-10">
      <Tab
        tabsData = {[
          {
            key: '1',
            title: 'Flights',
            content: <Flights/>,
          },
          {
            key: '2',
            title: 'Tours',
            content: 'Content of Tab Pane 2',
          },
        
        ]}
      />
      </div>
    </>
  );
};

export default Booking;