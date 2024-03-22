import { HeadingH6 } from "@/components/Common/Heading";
import { Para14 } from "@/components/Common/Paragraph";
import React from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaAddressCard } from "react-icons/fa6";
import { MdMail } from "react-icons/md";

const addressinfo = [
  {
    id: 1,
    icon: <MdMail className="text-primary-orange-300" size={25} />,
    heading: "",
    title: "Email",
    des1: "Crownintltravels@gmail.com ",
    des2: "info@crownintltravels.com",
  },
  {
    id: 2,
    icon: <BsFillTelephoneFill className="text-primary-orange-300" size={25} />,
    title: "Phone Number",
    heading: "Rawalpindi Office",
    des1: "+92 334 5000 666 ( CEO )",
    des2: "+92 51 5511 155 / 56-57   ",
    heading2:"Karachi Office ",
    des3:"+92 21 3524 4461",
    des4:"+92 21 3524 4462",
  },
  {
    id: 3,
    icon: <FaAddressCard className="text-primary-orange-300" size={25} />,
    title: "Address",
    heading: "Rawalpindi Head Office",
    des1: "Office No. 406 , 4th Floor Rizwan Arcade I, Adam Jee Road Saddar, Rawalpindi, Punjab, Pakistan",
    heading2:"Karachi Main Office ",
    des3:"Plot # 38-C, Office No 1, Main Saba Avenue, Bader Commercial, Phase V, DHA, Karachi, Sindh, Pakistan"
  },
];

const karachiaddress=[
  {
    id: 2,
    icon: <BsFillTelephoneFill className="text-primary-orange-300" size={25} />,
    title: "Phone Number",
    heading2:"Karachi Office ",
    des3:"+92 21 3524 4461",
    des4:"+92 21 3524 4462",
  },
  {
    id: 3,
    icon: <FaAddressCard className="text-primary-orange-300" size={25} />,
    title: "Address",
    heading2:"Karachi Main Office ",
    des3:"Plot # 38-C, Office No 1, Main Saba Avenue, Bader Commercial, Phase V, DHA, Karachi, Sindh, Pakistan"
  },
]
const Address = () => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 container  gap-5 justify-items-center p-5 mt-10 lg:mt-32">
        {addressinfo.map((item, index) => {
          return (
            <div
              key={index}
              className=" rounded-md shadow hover:scale-95  bg-primary-orange-300 hover:bg-primary-orange-400 duration-300 transition text-white  p-4 pb-10  space-y-4 relative mt-5 w-full "
            >
              <div className="border flex  items-center justify-center shadow rounded-full w-14 h-14 absolute -top-6 -left-4 backdrop-blur-md ">
                {item.icon}
              </div>
              <HeadingH6 title={item.title} />
              <div>
                <Para14 className=" font-bold" title={item.heading} />
                <Para14 title={item.des1} />
                <Para14 title={item.des2} />
              </div>
          
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2  container gap-2 md:gap-8 justify-items-center p-5 ">
        {karachiaddress.map((array, index) => {
          return (
            <div
              key={index}
              className=" rounded-md shadow  bg-primary-orange-300 hover:scale-95 hover:bg-primary-orange-400 duration-300 transition text-white  p-4 pb-10  space-y-4 relative mt-5 mb-5 w-full "
            >
              <div className="border flex items-center justify-center shadow rounded-full w-14 h-14 absolute -top-6 -left-4 backdrop-blur-md ">
                {array.icon}
              </div>
              <HeadingH6 title={array.title} />
              <div>
                <Para14 className=" font-bold" title={array.heading2} />
                <Para14 title={array.des3} />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Address;
