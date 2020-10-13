import React from 'react'
import {Product} from "../../components/index"
import home from "../../images/amazon_home.jpg"
import "./Home.scss"

function Home() {
    return (
        <div className="home-container">
            <img className="home-image" src={home}/>
            <div className="home-row">
                <Product 
                id="123"
                title="Apple Air Pods"
                price={119.99}
                rating={5}
                image="https://images.unsplash.com/photo-1504274066651-8d31a536b11a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80"/>

                <Product 
                id="123"
                title="Apple Air Pods"
                price={119.99}
                rating={5}
                image="https://images.unsplash.com/photo-1504274066651-8d31a536b11a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80"/>
            </div>

            <div className="home-row">
                <Product 
                id="123"
                title="Apple Air Pods"
                price={119.99}
                rating={5}
                image="https://images.unsplash.com/photo-1504274066651-8d31a536b11a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80"/>

                <Product 
                id="123"
                title="Apple Air Pods"
                price={119.99}
                rating={5}
                image="https://images.unsplash.com/photo-1504274066651-8d31a536b11a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80"/>

                <Product 
                id="123"
                title="Apple Air Pods"
                price={119.99}
                rating={5}
                image="https://images.unsplash.com/photo-1504274066651-8d31a536b11a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80"/>
            </div>

            <div className="home-row">
                <Product 
                id="123"
                title="Apple Air Pods"
                price={119.99}
                rating={5}
                image="https://images.unsplash.com/photo-1504274066651-8d31a536b11a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80"/>
            </div>
           
        </div>
    )
}

export default Home
