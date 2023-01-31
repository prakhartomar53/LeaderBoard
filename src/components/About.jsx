import React from "react";
import logo_horizontal from "./logo_horizontal.png";

export default function About(){
    return (
        <section>
            <div className="w-full md:w-1/1 flex flex-col mb-16 mt-16 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">About</h1>
            <img className = "max-w-md" src = {logo_horizontal} />
            </div>
            <div className="mx-20">
            <div className="bg-gray-50 border-2 border-black p-8 flex md: flex-col sm:flex-col lg:flex-row">
            <p className="text-left text-xl">
                Google Developer Student Club, PEC was established in 2022 for some community tasks
            </p>
            <img src={logo_horizontal} className="w-1/1 lg: w-1/2" />
            </div>
            </div>
        </section>
    )
}