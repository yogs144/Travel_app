import React from 'react'
import Fade from 'react-reveal/Fade'

import ImageHero from 'assets/images/img-hero.jpg'
import ImageHero_ from 'assets/images/img-hero-frame.jpg'
import IconCities from 'assets/images/icons/ic-cities.svg'
import IconTraveler from 'assets/images/icons/ic-traveler.svg'
import IconTreasure from 'assets/images/icons/ic-treasure.svg'

import Button from 'elements/button'

import formatNumber from 'utils/formatNumber'

export default function Hero(props) {

    function showMostPicked() {
        window.scrollTo({
            top: props.refMostPicked.current.offsetTop - 30,
            behavior: "smooth"
        });
    }

    return (
        <Fade bottom>
        <section className="container pt-4">
            <div className="row align-items-center">
                <div className="col-auto pr-3" style={{width: 530 }}>
                    <h1 className="font-weight-bold line-height-1 mb-3">
                        Forget Busy Work, <br />
                        Start Next Vacation
                    </h1>
                    <p className="mb-4 font-weight-light text-gray-500 w-75">
                    We provide what you need to enjoy your holiday.
make another memorable moments. your money can be 
return but not for your time. 
                    </p>
                    <Button className="btn px-5 btn-shadow" hasShadow isPrimary onClick={showMostPicked}>
                        Show me now
                    </Button>                   

                    <div className="row" style={{marginTop: 80}}>
                        <div className="col-auto" style={{marginRight: 35}}>
                            <img width="36" height="36" src={IconTraveler} alt={`${props.data.travelers} Travelers`}/>
                            <h6 className="mt-3">
                                {formatNumber(props.data.travelers)}{" "} <span className="text-gray-500 font-weight-light">Travelers</span>
                            </h6>
                        </div>
                        <div className="col-auto" style={{marginRight: 35}}>
                            <img width="36" height="36" src={IconCities} alt={`${props.data.treasures} Treasure`}/>
                            <h6 className="mt-3">
                                {formatNumber(props.data.cities)}{" "} <span className="text-gray-500 font-weight-light">Cities</span>
                            </h6>
                        </div>
                        <div className="col-auto">
                            <img width="36" height="36" src={IconTreasure} alt={`${props.data.cities} Cities`}/>
                            <h6 className="mt-3">
                                {formatNumber(props.data.treasures)}{" "} <span className="text-gray-500 font-weight-light">treasures</span>
                            </h6>
                        </div>
                    </div>
                </div>
                <Fade bottom delay={400}>
                    <div className="col-6 pl-5">
                        <div style={{width: 540, height: 410}}>
                            <img src={ImageHero} alt="Santorini Stay" className="img-fluid position-absolute" style={{margin: "-30px 0 0 -30px", zIndex: 1}}/>
                            <img src={ImageHero_} alt="Santorini Stay Frame" className="img-fluid position-absolute" style={{margin: "0 -15px -15px 0"}}/>
                        </div>
                    </div>
                </Fade>
            </div>
        </section>
        </Fade>
    )
}
