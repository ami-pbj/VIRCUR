import React from "react";

import { BsShieldFillCheck  } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import { RiHeart2Fill } from "react-icons/ri";


// import { MdOutlineSecurity  } from "react-icons/bs";
// import { FcPrivacy  } from "react-icons/bs";




const ServiceCard = ({ color, title, icon, subtitle }) => (
    <div className="flex flex-row justify-start items-start white-glassmorphism p-3 m-2 cursor-pointer style-hover-bg hover:shadow-xl">
        <div className={`w-10 h-10 rounded-full flex justify-center items-center ${color}`}>{icon}</div>
        <div className="ml-5 flex flex-col flex-1 style-hover">
            <h3 className="mt-2 text-white text-xl style-hover">{title}</h3>
            <p className="mt-1 text-white text-sm md:w-9/12 justify-center items-center style-hover">{subtitle}</p>
        </div>
    </div>
);
  
const Services = () => (
    <div className="flex w-full justify-center items-center gradient-bg-services style-hover p-20 pl-20">
        <div className="flex mf:flex-row flex-col items-center justify-between md:p-20 py-0 px-4 style-hover">
            <div className="flex-1 flex flex-col justify-start items-start px-20 style-hover ">
                <ServiceCard
                    color="bg-[#2952E3] "
                    title="Security Is The Priority !!"
                    icon={<BsShieldFillCheck fontSize={20} className="text-white style-hover" />}
                    subtitle="Our Priority is Your Security. Your Data will Remain Safe and Secure Because It's Only Your."
                />
                <ServiceCard
                    color="bg-[#8945F8] "
                    title="Fastest Transactions Done !!"
                    icon={<BiSearchAlt fontSize={20} className="text-white style-hover" />}
                    subtitle="Transactions Done within a Second. Send Anywhere Anytime to Anyone without Any Hassle."
                />
                <ServiceCard
                    color="bg-[#F84550] "
                    title="Round The Clock Service !!"
                    icon={<RiHeart2Fill fontSize={20} className="text-white style-hover" />}
                    subtitle="No Need to Worry About Anything. Any Doubt or Problem Feel Free to Contact Me. 24/7 User Support Available"
                />
            </div>

            <div className="flex-1 flex flex-col justify-start items-start">
                <h1 className="text-left text-white text-4xl sm:text-4xl font-bold px-0 py-5 text-gradient gradient__text_e">
                    FOCUSED TO PRIORITIZE
                    <br />
                    TO KEEP SAFE & SECURE
                    <br />
                    YOUR DATA...
                    <br />
                    YOUR TRANSACTIONS...
                </h1>
                <p className="text-left my-2 text-white text-lg px-0 md:w-9/12 w-11/12 text-base gradient__text_d">
                    Most Ever Secure Platform In The World.<br />Your Privacy is Our Priority to Safe and Secure.
                </p>
            </div>
        </div>
    </div>
);


export default Services;