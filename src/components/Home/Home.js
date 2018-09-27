import React, { Component } from 'react';
import DealsGrid from '../../components/DealsGrid/DealsGrid';
import './Home.css';

class Home extends Component {
    render() {
        return (
            <div className="home-container">
                <DealsGrid />
            </div>
        );
    }
}

export default Home;
