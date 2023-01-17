import React, {useContext} from 'react';

import { AiFillPlayCircle } from 'react-icons/ai';
import { SiEthereum } from 'react-icons/si';
import { BsInfoCircle } from 'react-icons/bs';

import { SiMastercard } from 'react-icons/si';

import { GiBatMask } from 'react-icons/gi';

import discount from './discount.svg';
import cost from './cost copy 7.svg';


// import { Icon } from "react-crypto-icons";


import {TransactionsContext} from '../context/TransactionsContext';

import { Loader } from './';

import { shortenAddress } from '../utils/shortenAddress';

const commonStyles = "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";

const Input = ({ placeholder, name, type, value, handleChange }) => (
    <input
        placeholder = { placeholder }
        type = {type}
        step = "0.0001"
        value = {value}
        onChange = {(e) => handleChange(e, name)}
        className = "my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
    />
)

const Welcome = () => {

    const { connectWallet, currentAccount, formData, sendTransaction, handleChange, isLoading } = useContext(TransactionsContext);

    // console.log(value);

    // const connectWallet = () => {

    // }

    const handleSubmit = (e) => {
        const { addressTo, amount, keyword, message } = formData;

        e.preventDefault();

        if(!addressTo || !amount || !keyword || !message) return;

        sendTransaction();

    }


    return (



        <div className="flex w-full justify-center items-center gradient-bg-welcome pt-10 pl-20">
            
            <div className="flex mf:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">

                <div className="flex flex-1 justify-start flex-col mt-10 mf:mr-20 px-10 ">
                    <div className="flex flex-row items-center py-[6px] px-4 bg-style-gradient-b rounded-[10px] mb-2">
                    <img src={discount} alt="discount" className="w-[32px] h-[32px]"/>
                    
                    <p className="flex flex-1 justify-center items-center discount-color">
                        100% SECURE
                    </p>
                    

                </div>
                
                    <h1 className="text-6xl font-extrabold sm:text-6xl text-white text-gradient gradient__text_a mt-9 py-2 -px-10">
                        VIRCUR<br/>
                    </h1>
                    <h2 className="text-4xl font-semibold sm:text-4xl text-white text-gradient gradient__text_c py-2 -px-10">
                        THE NEXT GENERATION<br/>CRYPTOCURRENCY<br/>TRANSFER PLATFORM
                    </h2>
                    <p className="text-left mt-6 flex justify-start items-start text-white gradient__text_b font-bold mf:w-9/12 w-11/12 text-base -px-10">
                        Transfer Cryptocurrencies<br/>within a Second.
                    </p>

                    <div className="grid sm:grid-cols-3 grid-cols-2 w-full my-10 style-hover">
                        <div className={`rounded-tl-2xl ${commonStyles}`}>
                            Blockchain
                        </div>
                        <div className={commonStyles}>
                            Web 3.0
                        </div>
                        <div className={`rounded-tr-2xl ${commonStyles}`}>
                            24/7 Support
                        </div>
                        <div className={`rounded-bl-2xl ${commonStyles}`}>
                            Security
                        </div>
                        <div className={commonStyles}>
                            Ethereum
                        </div>
                        <div className={`rounded-br-2xl ${commonStyles}`}>
                            Zero Cost
                        </div>
                    </div>

                    {!currentAccount && (
                    <button
                        type="button"
                        onClick={connectWallet}
                        className="flex flex-row justify-center items-center my-1 bg-[#326ba8] p-2 rounded-full cursor-pointer hover:bg-[#3d4f]"
                    >
                        <p className="text-white text-base">
                            CONNECT WALLET
                        </p>
                    </button>
                    )}
                </div>

                {/* Ethereum Card - The White Card Welcome View */}
                <div className="flex flex-col flex-1 items-center justify-start w-full mf:mt-0 mt-10">
                    

                <div className="flex flex-1 justify-start flex-col mt-10 mf:mr-20 px-10 cost-icon-color"> 
                    <div className="flex flex-row items-center py-[6px] px-4 bg-style-gradient-a rounded-[10px] mb-6 cost-icon-color">
                        
                    
                    
                    <p className="flex flex-1 justify-center items-center discount-color">
                        0₹ FEES
                    </p>

                    <img src={cost} alt="cost" className="w-[26px] h-[32px] cost-icon-color"/>
                </div>


                    <div className="p-3 justify-end items-start flex-col rounded-xl h-40 sm:w-72 w-full my-7 mx-11 mt-10 eth-card white-glassmorphism">
                        <div className="flex justify-between flex-col w-full h-full">
                            <div className="flex justify-between items-start">
                                <div className="w-10 h-10 rounded-full border-2 border-white flex justify-center items-center">
                                    <SiEthereum fontSize={20} color="#000000" />
                                </div>
                                <div className="w-10 h-10 rounded-full border-2 border-white flex justify-center items-center">
                                    <GiBatMask name='ada' style={{ fontSize: 22, color: '#000' }}/>
                                </div>
                                
                            </div>
                            <div>
                                <p className="text-black font-light text-sm">
                                    {shortenAddress(currentAccount)}
                                </p>
                                <p className="text-black font-semibold text-lg mt-1">
                                    The Mom's Card&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;♥️
                                    {/* <div className="w-10 h-10 rounded-full border-2 border-white flex content-end items-center">
                                        <SiMastercard name='ada' style={{ fontSize: 22, color: '#000' }}/>
                                    </div> */}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="p-5 my-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism">
                        <Input placeholder="Address To" name="addressTo" type="text" handleChange = {handleChange}/>
                        <Input placeholder="Amount (ETH)" name="amount" type="number" handleChange = {handleChange}/>
                        <Input placeholder="Keyword (GiF)" name="keyword" type="text" handleChange = {handleChange}/>
                        <Input placeholder="Enter Message" name="message" type="text" handleChange = {handleChange}/>

                        <div className="h-[1px] w-full bg-gray-400 my-4" />

                        {isLoading ? (
                            <Loader />
                        ) : (
                            <button
                                type="button"
                                onClick={handleSubmit}
                                className="text-white w-full mt-0 border-[1px] p-2 border-[#000] bg-[#326ba8] rounded-full cursor-pointer hover:bg-[#3d4f]"
                            >
                                SEND CRYPTO
                            </button>
                        )}

                    </div>


                </div>
                
            </div>

        </div>
        </div>
    );
}

export default Welcome;