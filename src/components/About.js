import React, { Component } from "react"
import "../styles/about.css"
import { Link } from "react-router-dom"

class About extends Component {
  render() {
    return (
      <div id="about">
        <div>Find out about:</div>
        <div>
          {this.props.items.map((i, index) => {
            return (
              <Link to={`/directory/${i}`} key={`about-${index}`}>
                <div>{i}</div>
              </Link>
            )
          })}
        </div>
      </div>
    )
  }
}

export default About
