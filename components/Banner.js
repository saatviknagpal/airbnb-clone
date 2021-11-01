import React from 'react'
import Image from 'next/image'

function Banner() {
    return (
        <div className = "relative h-[300px] sm:h-[400px] lg:h-[500px] 2xl:h-[70vh] w-full">
            <Image src= "https://links.papareact.com/0fm" 
                layout= "fill"
                objectFit= "fill"
            />
        <div className= "absolute top-1/2 w-full text-center">
            <p className= "text-sm sm:text-lg text-black font-medium my-3">Not sure where to go? Perfect.</p>
            <button className= "text-purple-600 bg-white px-10 py-4 font-semibold shadow-md rounded-full hover:shadow-xl active:scale-90 transition duration-150">I'm flexible</button>
        </div>
        
        </div>
    )
}

export default Banner
