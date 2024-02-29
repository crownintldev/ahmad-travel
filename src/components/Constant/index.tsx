import { FcConferenceCall } from "react-icons/fc"
import brand1 from "../../../public/assets/images/brand1.svg"
import brand2 from "../../../public/assets/images/brand2.svg"
import brand3 from "../../../public/assets/images/brand3.svg"
import brand4 from "../../../public/assets/images/brand4.svg"
import brand5 from "../../../public/assets/images/brand5.svg"
import brand6 from "../../../public/assets/images/brand6.svg"
import brand7 from "../../../public/assets/images/brand7.svg"
import tra1 from "../../../public/assets/images/tra1.jpg"
import tra2 from "../../../public/assets/images/tra1.jpg"
import tra3 from "../../../public/assets/images/tra1.jpg"
import tra4 from "../../../public/assets/images/abouthead.jpg"
import tra5 from "../../../public/assets/images/servicehead.jpg"
import tra6 from "../../../public/assets/images/ceohead.jpg"
import tra7 from "../../../public/assets/images/contacthead.jpg"




import { AiOutlineGlobal, AiOutlineProject } from "react-icons/ai"
import { PiPersonArmsSpreadBold } from "react-icons/pi"
import { SiSocialblade } from "react-icons/si"
import { FaBook, FaCcVisa, FaMapMarkedAlt, FaPray } from "react-icons/fa"
import { FaPlaneDeparture, FaVanShuttle } from "react-icons/fa6"
import { TbTournament } from "react-icons/tb"
import { IoCarSport } from "react-icons/io5"

export const serviceimages=[
  {id:1, image:tra1},
  {id:2, image:tra2},
  {id:3, image:tra3},
  {id:4, image:tra4},
  {id:5, image:tra5},
  {id:6, image:tra6},
  {id:7, image:tra7},
]
export const overviewDetail=[
  {text:"Malaysia is a vibrant and diverse country located in Southeast Asia, known for its stunning natural landscapes, rich cultural heritage, and modern cities. It is a melting pot of various cultures, including Malay, Chinese, Indian, and indigenous groups. Malaysia is home to numerous attractions, including beautiful beaches, lush rainforests, and impressive architecture, such as the iconic Petronas Twin Towers in Kuala Lumpur."},
  {text:"The country is also known for its delicious cuisine, which is a fusion of various culinary traditions. Popular dishes include nasi lemak, satay, and laksa. Additionally, Malaysia is a shopper’s paradise, with an abundance of shopping malls and markets offering everything from luxury brands to unique local handicrafts."},
  {text:"In terms of tourism, Malaysia is a popular destination for both leisure and business travelers, with a well-developed tourism industry that offers a range of services and experiences. From exploring the historic sites of Malacca to scuba diving in the waters of Sipadan Island, there is something for everyone in Malaysia."},
  {text:"To make the most of your trip to Malaysia, it is recommended to plan ahead and book accommodation, transportation, and activities in advance. With its friendly locals, stunning scenery, and vibrant culture, Malaysia is truly a destination worth experiencing."},


]
export const Aboutcore = {
    Category: [{ cat: "Core Services" }],
    service: [
      {
        id: "1",
        title: "Malaysia Drop Box",
        para: " Redefining the Digital Empowering Global Progress.",
        ref: "/servicedetail",
      },
      {
        id: "2",
        title: "Vitenam Drop Box",
        para: " Redefining the Digital Empowering Global Progress.",
        ref: "/servicedetail",
       
      },
      {
        id: "3",
        title: "Indonesia Drop Box",
        para: " Redefining the Digital Empowering Global Progress.",
        ref: "/servicedetail",
       
      },
  
      {
        id: "4",
  
        title: "Malaysia Visa",
        para: " Redefining the Digital Empowering Global Progress.",
        ref: "/servicedetail",
        
      },
      {
        id: "5",
  
        title: "Thailand Visa",
        para: " Redefining the Digital Empowering Global Progress.",
        ref: "/servicedetail",
       
      },
      {
        id: "6",
        title: "Indonesia Visa",
        para: " Redefining the Digital Empowering Global Progress.",
        ref: "/servicedetail",

      },
  
  
      // Add more objects here if needed
    ],
  };

export const Brandimg =[
  {id:1 , image:brand1},
  {id:2 , image:brand2},
  {id:3 , image:brand3},
  {id:4 , image:brand4},
  {id:5 , image:brand5},
  {id:6 , image:brand6},
  {id:6 , image:brand7},
]

export const Aboutchallenge = [
  {
    id: "1",
    icon:<SiSocialblade size={40}/>,
    className:"bg-primary-orange-300 text-white",
    link: "Social followers",
    start: "0",
    end: "40",
    duration: "3",
  },
  {
    id: "2",
    icon: <PiPersonArmsSpreadBold size={40}/>,
    link: "Happy Clients",
    start: "0",
    end: "100",
    duration: "4",
  },
  {
    id: "3",
    icon: <AiOutlineProject size={40}/>,
    link: "Project Done",
    start: "0",
    end: "39",
    duration: "4",
  },
  {
    id: "4",
    icon: <AiOutlineGlobal size={40}/>,
    link: "Global branch",
    start: "0",
    end: "2",
    duration: "1",
  },
  {
    id: "5",
    icon: <FcConferenceCall size={40}/>,
    className:"bg-primary-orange-200 text-white",
    link: "Conference",
    start: "0",
    end: "20",
    duration: "3",
  },
];


export const Services=[
  {id:1, icon:<FaPlaneDeparture className="text-primary-orange-200 transition duration-300 group-hover:text-white" size={30} />, title:"Air Tickets", dec:"We are a leading online ticketing agency that specializes in both domestic and international flights. Our agency offers the best prices on flights departing from major cities across Pakistan to any destination worldwide. Whether you’re traveling for business or leisure, we have the perfect flight options for you."},
  {id:2, icon:<FaPray className="text-primary-orange-200 transition duration-300 group-hover:text-white" size={30} />, title:"Hajj & Umrah", dec:"At Crown Intl Travels, we offer the best Umrah packages for the current year and beyond. Our goal is to meet all of your needs and requirements, ensuring that your Umrah experience is unforgettable in every way possible."},
  {id:3, icon:<FaMapMarkedAlt  className="text-primary-orange-200 transition duration-300 group-hover:text-white" size={30} />, title:"Tour & Holiday", dec:"Crown International Holiday is our specialist leisure travel division, staffed by a team of experienced and dedicated consultants. We offer our clients a full range of customizable holiday packages tailored to their unique needs and preferences."},
  {id:4, icon:<TbTournament  className="text-primary-orange-200 transition duration-300 group-hover:text-white" size={30} />, title:"Domestic Tours", dec:"Domestic Tours At Crown International Travels, we are a Rawalpindi and Islamabad-based travel agency known for our exceptional domestic tour services throughout Pakistan. Our team is committed to providing you with the highest quality service and ensuring that your travels are as enjoyable and comfortable as possible."},
  {id:5, icon:<FaCcVisa className="text-primary-orange-200 transition duration-300 group-hover:text-white" size={30} />, title:"Visa", dec:"Crown International Travels (Private) Ltd. offers an online platform for submitting your visa application and browsing the requirements for various countries. Simply visit our website, select the country you wish to visit, and view the corresponding visa requirements."},
  {id:6, icon:<FaBook className="text-primary-orange-200 transition duration-300 group-hover:text-white" size={30} />, title:"Travel Insurance", dec:"While most travelers spend a significant amount of time and effort planning their perfect vacation, many tend to overlook the importance of securing a good travel insurance policy."},
  {id:7, icon:<IoCarSport className="text-primary-orange-200 transition duration-300 group-hover:text-white" size={30} />, title:"Rent A Car", dec:"We are a 100% nationally owned car rental company that takes advantage of the growing demand for hire vehicles, fueled by increased business activities."},
  {id:8, icon:<FaVanShuttle className="text-primary-orange-200 transition duration-300 group-hover:text-white" size={30} />, title:"Cargo & Courier", dec:"Crown Courier & Cargo (Pvt) Ltd Services provides fast and reliable courier & Cargo  services to clients and agents worldwide.We have official cargo services now in days pakistan. so, we can deliver your parcel or delivery box to your desire destination."},

]


