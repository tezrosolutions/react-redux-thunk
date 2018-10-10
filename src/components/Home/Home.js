import React, { Component } from 'react';
import DealsGrid from '../../components/DealsGrid/DealsGrid';
import './Home.css';
import PageDealGrid from '../../contianers/PageDealGrid';

class Home extends Component {
    render() {
        return (
            <div className="home-container">
                <PageDealGrid />
            </div>
        );
    }
}

export default Home;
