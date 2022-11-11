import React, {useContext} from 'react';

import { AiFillPlayCircle } from 'react-icons/ai';
import { SiEthereum } from 'react-icons/si';
import { BsInfoCircle } from 'react-icons/bs';


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
        <div className="flex w-full justify-center items-center">
            <div className="flex mf:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
                <div className="flex flex-1 justify-start flex-col mf:mr-20">
                    <h1 className="text-3xl sm:text-5xl text-white text-gradient py-1">
                        Welcome To <br /> Crypto World !!
                    </h1>
                    <p className="text-left mt-5 text-white font-light mf:w-9/12 w-11/12 text-base">
                        Buy and Transfer Cryptocurrencies in a Second.
                    </p>
                    {!currentAccount && (
                    <button
                        type="button"
                        onClick={connectWallet}
                        className="flex flex-row justify-center items-center my-5 bg-[#3d4f79] p-3 rounded-full cursor-pointer hover:bg-[#3d4f]"
                    >
                        <p className="text-white text-base font-semibold">
                            Connect Wallet
                        </p>
                    </button>
                    )}

                    <div className="grid sm:grid-cols-3 grid-cols-2 w-full mt-10">
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
                </div>

                {/* Ethereum Card - The White Card Welcome View */}
                <div className="flex flex-col flex-1 items-center justify-start w-full mf:mt-0 mt-10">
                    <div className="p-3 justify-end items-start flex-col rounded-xl h-40 sm:w-72 w-full my-5 eth-card white-glassmorphism">
                        <div className="flex justify-between flex-col w-full h-full">
                            <div className="flex justify-between items-start">
                                <div className="w-10 h-10 rounded-full border-2 border-white flex justify-center items-center">
                                    <SiEthereum fontSize={21} color="#000000" />
                                </div>
                                <BsInfoCircle fontSize={17} color="#000000"/>
                            </div>
                            <div>
                                <p className="text-black font-light text-sm">
                                    {shortenAddress(currentAccount)}
                                </p>
                                <p className="text-black font-semibold text-lg mt-1">
                                    The White Card
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism">
                        <Input placeholder="Address To" name="addressTo" type="text" handleChange = {handleChange}/>
                        <Input placeholder="Amount (ETH)" name="amount" type="number" handleChange = {handleChange}/>
                        <Input placeholder="Keyword (GiF)" name="keyword" type="text" handleChange = {handleChange}/>
                        <Input placeholder="Enter Message" name="message" type="text" handleChange = {handleChange}/>

                        <div className="h-[1px] w-full bg-gray-400 my-2" />

                        {isLoading ? (
                            <Loader />
                        ) : (
                            <button
                                type="button"
                                onClick={handleSubmit}
                                className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f79] rounded-full cursor-pointer hover:bg-[#3d4f79]"
                            >
                                Send Now
                            </button>
                        )}

                    </div>


                </div>
                
            </div>

        </div>
    );
}

export default Welcome;