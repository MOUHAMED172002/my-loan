import React from 'react'
import Img1 from "../../assets/images/ShubhBank.jpeg"
const Hero = () => {
  return (
    <div>
                <div
        className="hero min-h-screen"
        style={{
            backgroundImage:
            `url(${Img1})` ,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
        }}
        >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
            <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Hero
