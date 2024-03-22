"use client"
import { HeadingH6 } from "@/components/Common/Heading";
import { Para14 } from "@/components/Common/Paragraph";
import React from "react";

const addressinfo = [
  [
    { title: "Email", des1: "Crownintltravels@gmail.com", des2: "info@crownintltravels.com" },
    { title: "Phone Number", des1: "+92 313 5000 666", des2: "+92 51 5511 155 / 56-57" },
    { title: "Address", des1: "Office No. 406 , 4th Floor Rizwan Arcade I, Adam Jee Road Saddar, Rawalpindi, Punjab, Pakistan", }
  ],
  [
    { title: "Email", des1: "Crownintltravels@gmail.com", des2: "info@crownintltravels.com" },
    {

      title: "Phone Number",
      des1: "111 143 111 ( UAN )",
    },
    {
      title: "Address",
      des1: "Office # 02, G-6 Block D, ground floor, potohar plaza, blue area, fazal e Haq road, Islamabad",
    },
  ],
];

const Address = () => {
  return (
    <>

<div className="mt-10 md:mt-20 container">
  <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center gap-2 md:gap-5">
  {
  addressinfo.map((array, uniqueKey) => (
    <div 
      className="border-4 border-dotted border-primary-orange-200 w-full rounded-md p-2 sm:p-4 md:p-6 space-y-3" 
      key={uniqueKey}
    >
      {array.map((item, itemIndex) => (
        <div key={`${uniqueKey}-${itemIndex}`}>
          <HeadingH6 title={item.title} />
          <Para14 title={item.des1} />
          <Para14 title={item.des2} />
        </div>
      ))}
    </div>
  ))
}



  </div>
</div>

    {/* <div className="mt-10 md:mt-20 container">
    <Tab  className={"justify-center"}
        tabsData = {[
          {
            key: '1',
            title: 'Rawalpindi Head Office',
            content: <div className="mt-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3  gap-5 justify-items-center p-5">
            {addressinfo.map((array, index) => (
              <div
                key={index}
                className="rounded-md shadow hover:scale-95 bg-primary-orange-300 hover:bg-primary-orange-400 duration-300 transition text-white p-4 pb-10 space-y-4 relative mt-5 w-full"
              >
                <div className="border flex items-center justify-center shadow rounded-full w-14 h-14 absolute -top-6 -left-4 backdrop-blur-md">
                  {array.icon}
                </div>
                <HeadingH6 title={array.title} />
                <div>
                  <Para14 title={array.des1} />
                  <Para14 title={array.des2} />
                </div>
              </div>
            ))}
          </div>
          </div>,
          },
          {
            key: '2',
            title: 'Islamabad Branch Office',
            content: <div className="mt-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3  gap-5 justify-items-center p-5">
            {isbinfo.map((array, index) => (
              <div
                key={index}
                className="rounded-md shadow hover:scale-95 bg-primary-orange-300 hover:bg-primary-orange-400 duration-300 transition text-white p-4 pb-10 space-y-4 relative mt-5 w-full"
              >
                <div className="border flex items-center justify-center shadow rounded-full w-14 h-14 absolute -top-6 -left-4 backdrop-blur-md">
                  {array.icon}
                </div>
                <HeadingH6 title={array.title} />
                <div>
                  <Para14 title={array.des1} />
                  <Para14 title={array.des2} />
                </div>
              </div>
            ))}
          </div>
          </div>,
          },
          {
            key: '3',
            title: 'Karachi Head Office',
            content: <div className="mt-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3  gap-5 justify-items-center p-5">
            {karachiinfo.map((array, index) => (
              <div
                key={index}
                className="rounded-md shadow hover:scale-95 bg-primary-orange-300 hover:bg-primary-orange-400 duration-300 transition text-white p-4 pb-10 space-y-4 relative mt-5 w-full"
              >
                <div className="border flex items-center justify-center shadow rounded-full w-14 h-14 absolute -top-6 -left-4 backdrop-blur-md">
                  {array.icon}
                </div>
                <HeadingH6 title={array.title} />
                <div>
                  <Para14 title={array.des1} />
                  <Para14 title={array.des2} />
                </div>
              </div>
            ))}
          </div>
          </div>,
          },
        ]}
      />
    </div>
      */}


    </>
  );
};

export default Address;
