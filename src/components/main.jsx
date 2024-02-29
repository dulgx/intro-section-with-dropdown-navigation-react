import React from 'react';
import audioPhile from '../assets/client-audiophile.svg'
import clientDatabiz from '../assets/client-databiz.svg'
import clientMaker from '../assets/client-maker.svg'
import clientMeet from '../assets/client-meet.svg'
import imageDesktop from '../assets/image-hero-desktop.png'
import imageMobile from '../assets/image-hero-mobile.png'

const Main = () => {
    return (
        <section>
            <div className='sec-1'>
                <h1>Make </h1>
                <h1>remote work</h1>
                <p>Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.</p>
                <button>Learn more</button>
                <div className='clients'>
                    <img src={clientDatabiz} alt="client" />
                    <img src={audioPhile} alt="client" />
                    <img src={clientMeet} alt="client" />
                    <img src={clientMaker} alt="client" />
                </div>
            </div>
            <div>
                <img id='HeroDesktop' src={imageDesktop} alt="hero" />
            </div>
        </section>

    )
}

export default Main;