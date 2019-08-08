import React, { Component } from 'react';
import axios from 'axios';

import SliderWidget from '../Utils/Slider';
import Subscriptions from '../Utils/Subscribe';
import { URL_HOME } from '../Utils/paths';

import Blocks from './blocks';
import Poll from './poll';

class Home extends Component {
    state = {
        home: ''
    }

    componentDidMount() {
        axios.get(URL_HOME)
        .then(response => {
            console.log(response.data);
            this.setState({home:response.data})
        })
    }

    render() {
        const {slider, blocks} = this.state.home;
        return(
            <>
                <SliderWidget slides={slider} />
                <Subscriptions />
                <Blocks blocks={blocks} />
                <Poll />
            </>
        )
    }
} 

export default Home;