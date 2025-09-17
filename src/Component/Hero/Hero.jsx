import React from 'react'
import Img1 from "../../assets/images/ShubhBank.jpeg"
import HeroForm from './HeroForm'
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <div className='relative'>
      <div
        className="hero min-h-screen"
        style={{
            backgroundImage: `url(${Img1})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-[800px]">
            <h1 className="mb-5 text-5xl font-bold">
              {t('hero.title')}
            </h1>
            <p className="mb-5 text-2xl">
              {t('hero.description')}
            </p>
            <button className="btn btn-warning rounded-full text-black ">
              {t('hero.button')}
            </button>

            <HeroForm className="absolute bottom-0"/>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
