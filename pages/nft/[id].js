import React from "react";
import { useAddress, useDisconnect, useMetamask } from "@thirdweb-dev/react";


function NFTDropPage() {

    // Authentication

    const connectWithMetamask = useMetamask();
    const address = useAddress();
    const disconnect = useDisconnect();



    //-----

    return (
        <div className="flex h-screen flex-col lg:grid lg:grid-cols-10">
            {/* left  */}
            <div className="bg-gradient-to-br from-cyan-800 to-rose-500 lg:col-span-4">
                <div className="flex flex-col items-center justify-center py-2 lg:min-h-screen ">
                    <div className="rounded-xl bg-gradient-to-br from-yellow-400 to-purple-600 hover:scale-105 transition duration-300 ease-in-out ">
                        <img className="w-44 p-2 rounded-xl object-cover  lg:h-96 lg:w-72 " src="https://links.papareact.com/8sg" alt="" />

                    </div>
                    <div className="p-5 text-center space-y-2 ">
                        <h1 className="text-4xl font-bold text-white">PAPAFAM Apes</h1>
                        <h2 className="text-xl text-gray-300 ">A collection of PAPAFAM Apes who live & breathe React!</h2>
                    </div>

                </div>
            </div>

            {/* Right  */}
            <div className="flex flex-1 flex-col p-12 lg:col-span-6">
                {/* Header  */}

                <header className=" flex items-center justify-between ">
                    <h1 className="w-52 cursor-pointer text-lg lg:text-xl font-extralight sm:w-80  ">
                        The  {' '}
                        <span className="font-extrabold  underline decoration-rose-200">
                            PAPAFAM
                        </span> 
                        {'  '}
                        NFT Market Place
                        </h1>
                    <button onClick={() => address ? disconnect() : connectWithMetamask()} className="rounded-lg bg-rose-300 py-2 px-4 font-bold text-sm text-rose-500 hover:bg-rose-500 hover:text-rose-200 trasnsition duration-300 lg:px-5 lg:py-3 lg:text-base">
                        {address ? 'Disconnect Wallet' : 'Connect Wallet'}
                    </button>
                </header>

                <hr className="my-4 border-1 border-rose-500 " />
                {address && (
                    <p className="text-center font-normal text-sm lg:text-md my-4 "> You are Logged In with Wallet
                        {'  '}
                        <span className="text-sm lg:text-lg font-bold text-rose-600 ml-2 bg-rose-200 px-2 py-1 rounded-xl">

                            {address.substring(0, 5)}...
                            {address.substring(address.length - 4)}
                        </span>
                        {' '}
                    </p>
                )}

                {/* Content  */}
                <div className="mt-10 flex flex-1 flex-col items-center space-y-6 text-center lg:justify-center lg:space-y-0  ">
                    <img className="w-80 object-cover pb-10 lg:h-40" src="https://links.papareact.com/bdy" alt="" />
                    <h1 className="text-3xl font-bold lg:text-4xl lg:font-extrabold">
                        The PAPAFAM APE's Coding Club | NFT Club 
                        </h1>

                    <p className="pt-2 text-xl text-green-500">13/21 NFT's claimed</p>

                </div>


                {/* Mint Button  */}

                <button className="h-16 font-bold text-lg w-full rounded-lg bg-red-500 text-rose-200 hover:bg-rose-200 hover:text-rose-500 transition duration-300 ">
                    Mint NFT (0.01 ETH)
                </button>
            </div>
        </div>
    )
}

export default NFTDropPage;