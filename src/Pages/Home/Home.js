import React, { PureComponent } from 'react'
import home from "../../images/amazon_home.jpg"
import "./Home.scss"

export class Home extends PureComponent {
    render() {
        return (
            <div className="home-container">
                <img className="home-image" src={home}/>
            </div>
        )
    }
}

export default Home
