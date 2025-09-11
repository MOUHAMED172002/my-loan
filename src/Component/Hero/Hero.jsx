import React from 'react'
import Img1 from "../../assets/images/ShubhBank.jpeg"
import HeroForm from './HeroForm'
const Hero = () => {
  return (
    <div className='relative'>
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
            <div className="max-w-[800px]">
            <h1 className="mb-5 text-5xl font-bold">MyLoan Simplifie votre demande de crédit en ligne</h1>
            <p className="mb-5 text-2xl">
                Accédez aux meilleures offres adaptées à votre situation via notre simulateur de crédit.Sélectionnez votre prêt, recevez une réponse de principe immédiate, puis souscrivez en temps réel.
            </p>
            <button className="btn btn-warning rounded-full text-black ">Je demande un crédit</button>

            <HeroForm className="absolute bottom-0"/>

            </div>
        </div>
        </div>

    </div>
  )
}

export default Hero
