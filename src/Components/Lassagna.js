import React from "react"

const Lassagna = () => {
    return (
        <div className="h-screen w-screen pt-8">
            <div className="m-auto text-center font-semibold text-xl">Hello Lassagnas!</div>
            <img src="https://i.imgur.com/iXc8dk0.png"  className="mx-auto py-4" alt="coolSagna" />
            <div className="m-auto text-center my-4">
            <button className="bg-blue-500 hover:bg-blue-600 focus:ring-2 text-white rounded-md py-1 px-4" >Primary</button>
            </div>
        </div>
    )
}

export default Lassagna