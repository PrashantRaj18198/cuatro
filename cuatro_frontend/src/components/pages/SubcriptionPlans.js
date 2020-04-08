import React, { Component } from 'react'
import { Query, Subscription } from 'react-apollo'
import gql from 'graphql-tag'
import { Link, Redirect } from 'react-router-dom'
import ReactAudioPlayer from 'react-audio-player';
import { ApolloClient } from 'apollo-client';
import './css/main.css'
import './css/bootstrap.min.css'
import Payment from './Payment'

class SubscriptionPlans extends Component {

    constructor(props) {
        super(props)
        this.state = {
            plansPrice : [0, 299, 699, 999],
            colors : ['blue', 'green', 'orange', 'red'],
            loadPayment: false,
            orderPrice: 0
        }
    }

    handleSubmit(id) {
        console.log('in handleSubmit')
        const orderPrice = this.state.plansPrice[id]
        this.setState({
            orderPrice: orderPrice,
            loadPayment: true
        })
        return <Payment props={orderPrice} />
    }


    render() {

        const pricingTable = <section id="pricing-table">
        <div class="container">
            <div class="row">
                <div class="pricing">
                    <div class="col-md-3 col-sm-12 col-xs-12">
                        <div class="pricing-table">
                            <div class="pricing-header">
                                <p class="pricing-title">No-Charge Plan</p>
                                <p>INR</p>
                                <p class="pricing-rate">{this.state.plansPrice[0]}<span>/Mo.</span></p>
                                <a class="btn btn-custom" onClick={() => this.handleSubmit(0)}>And Get Free Month</a>
                            </div>

                            <div class="pricing-list">
                                <ul>
                                    <li><i class="fa fa-envelope"></i><span>1</span> Active Project</li>
                                    <li><i class="fa fa-signal"></i><span>3</span> collaborators</li>
                                    <li><i class="fa fa-user"></i><span>500 MB</span> storage</li>
                                    <li><i class="fa fa-smile-o"></i><span>100</span> Messages</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-3 col-sm-12 col-xs-12">
                        <div class="pricing-table">
                            <div class="pricing-header">
                                <p class="pricing-title">Business Plan</p>
                                <p>INR</p>
                                <p class="pricing-rate">{this.state.plansPrice[1]}<span>/Mo.</span></p>
                                <a class="btn btn-custom" onClick={() => this.handleSubmit(1)}>And Get Free Month</a>
                            </div>

                            <div class="pricing-list">
                                <ul>
                                    <li><i class="fa fa-envelope"></i><span>3</span> Active Project</li>
                                    <li><i class="fa fa-signal"></i><span>3</span> collaborators</li>
                                    <li><i class="fa fa-user"></i><span>1 GB</span> storage</li>
                                    <li><i class="fa fa-smile-o"></i><span>150</span> Messages</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-3 col-sm-12 col-xs-12">
                        <div class="pricing-table">
                            <div class="pricing-header">
                                <p class="pricing-title">Extended Plan</p>
                                <p>INR</p>
                                <p class="pricing-rate">{this.state.plansPrice[2]}<span>/Mo.</span></p>
                                <a class="btn btn-custom" onClick={() => this.handleSubmit(2)}>And Get Free Month</a>
                            </div>

                            <div class="pricing-list">
                                <ul>
                                    <li><i class="fa fa-envelope"></i><span>5</span> Active Project</li>
                                    <li><i class="fa fa-signal"></i><span>5</span> collaborators</li>
                                    <li><i class="fa fa-user"></i><span>2 GB</span> storage</li>
                                    <li><i class="fa fa-smile-o"></i><span>200</span> Messages</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-3 col-sm-12 col-xs-12">
                        <div class="pricing-table">
                            <div class="pricing-header">
                                <p class="pricing-title">Ultimate Plan</p>
                                <p>INR</p>
                                <p class="pricing-rate">{this.state.plansPrice[3]}<span>/Mo.</span></p>
                                <a class="btn btn-custom" onClick={() => this.handleSubmit(3)}>And Get Free Month</a>
                            </div>

                            <div class="pricing-list">
                                <ul>
                                    <li><i class="fa fa-envelope"></i><span>Unlimited</span> Active Projects</li>
                                    <li><i class="fa fa-signal"></i><span>Unlimited</span> collaborations</li>
                                    <li><i class="fa fa-user"></i><span>10 GB</span> storage</li>
                                    <li><i class="fa fa-smile-o" ></i><span>Unlimited</span> messages</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
        return (
            <div>
                {this.state.loadPayment ? <Payment orderPrice={this.state.orderPrice * 100} /> : pricingTable}
            </div>
        )

    }

}

export default SubscriptionPlans