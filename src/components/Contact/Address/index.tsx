"use client"
import { HeadingH4, HeadingH6 } from "@/components/Common/Heading";
import { Para14 } from "@/components/Common/Paragraph";
import Link from "next/link";
import React from "react";

const addressinfo = [

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
<HeadingH4 className="text-center font-fam mb-5" title={"Crown International Travels Pvt Ltd"}/>
  <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center gap-2 md:gap-5">
    
    <div className="border-4 border-dotted border-primary-orange-200 w-full rounded-md p-2 sm:p-4 md:p-6 space-y-3" >
        <div className="space-y-1">
        <HeadingH6 title={"Rawalpindi Head Office"} />
          <Para14 title={"Office No. 406 , 4th Floor Rizwan Arcade I, Adam Jee Road Saddar, Rawalpindi, Punjab, Pakistan"}/>

          <HeadingH6 title={"Phone Number"} />
          <div>
          <Link href={"tel:+923135000666"}>+92 313 5000 666 ( UAN )</Link>
          </div>
          <div>
          <Link href={"tel:+92515511155/56-57"}>+92 51 5511 155 / 56-57</Link>
          </div>
          <div>
          <Link href={"tel:111143111"}>111 143 111 ( UAN )</Link>
          </div>
          <HeadingH6 title={"Email"} />
          <div>
          <Link href={"mailto:Crownintltravels@gmail.com"}>Crownintltravels@gmail.com</Link>
          </div>
          <div>
          <Link href={"mailto:info@crownintltravels.com"}>info@crownintltravels.com</Link>
          </div>
          <HeadingH6 title={"Location"} />
          <Link href={"https://maps.app.goo.gl/4N4kFDrmyYDrH6Ek7"}>https://maps.app.goo.gl/4N4kFDrmyYDrH6Ek7</Link>
        </div>
 
    </div>
    <div className="border-4 border-dotted border-primary-orange-200 w-full rounded-md p-2 sm:p-4 md:p-6 space-y-3" >
        <div className="space-y-1">
        <HeadingH6 title={"Karachi Main Office"} />
          <Para14 title={"Plot # 38-C, Office No 1, Main Saba Avenue, Bader Commercial, Phase V, DHA, Karachi, Sindh, Pakistan"}/>
          <HeadingH6 title={"Phone Number"} />
          <div>
          <Link href={"tel:031350006000"}>0313 50006000</Link>
          </div>
          <div>
          <Link href={"tel:+922135244461"}>+92 2135244461</Link>
          </div>
          <div>
          <Link href={"tel:+922135244462"}>+92 2135244462</Link>
          </div>
          <div>
          <Link href={"tel:111 143 111"}>111 143 111 ( UAN )</Link>
          </div>
          <HeadingH6 title={"Email"} />
          <div>
          <Link href={"mailto:Crownintltravels@gmail.com"}>Crownintltravels@gmail.com</Link>
          </div>
          <div>
          <Link href={"mailto:info@crownintltravels.com"}>info@crownintltravels.com</Link>
          </div>
          <HeadingH6 title={"Location"} />
          <Link href={"https://maps.app.goo.gl/csKKhU6c6Qy56hsC8"}>https://maps.app.goo.gl/csKKhU6c6Qy56hsC8</Link>
        </div>

    </div>

  </div>
</div>


    </>
  );
};

export default Address;
