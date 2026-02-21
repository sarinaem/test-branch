import React, { Component } from 'react'
import './style.css'
import Loader from 'react-loader-spinner'
import Info from './Info'
import getInfo from '../Services/getInfo'

export default class IpInfo extends Component {


    constructor(props) {
        super(props);

        this.state = {
            info: null,
            isLoading: true
        }
    }

    componentDidMount() {
        getInfo().then(data => {
            this.setState({
                info: data,
                isLoading: false
            })
        });
    }


    render() {
        const isLoading = this.state.isLoading;
        return (
            <>
                {isLoading ?
                    <Loader
                        type="Puff"
                        color="#00BFFF"
                        height={100}
                        width={100}
                    /> :
                    <Info data={this.state.info} />}

            </>
        )
    }
}
