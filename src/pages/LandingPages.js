import React, { Component } from 'react'

import Header from 'parts/Header';
import Hero from 'parts/Hero';
import MostPicked from 'parts/MostPicked'
import Categories from 'parts/Categories'
import Testimony from 'parts/Testimony'
import Footer from 'parts/Footer'

import landingPages from 'json/landingPage.json';
export default class LandingPages extends Component {
    constructor (props){
        super(props);
        this.refMostPicked = React.createRef();
    }

    componentDidMount(){
        window.title="Staycation | Home";
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <>
                <Header {...this.props}></Header>
                <Hero refMostPicked={this.refMostPicked} data={landingPages.hero}/>
                <MostPicked refMostPicked={this.refMostPicked} data={landingPages.mostPicked}/>
                <Categories data={landingPages.categories}/>
                <Testimony data={landingPages.testimonial}/>
                <Footer/>
            </>
        );
    }
}
