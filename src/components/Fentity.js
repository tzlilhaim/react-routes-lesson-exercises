import React, { Component } from "react"
import { Link, Redirect } from "react-router-dom"
import "../styles/fentity.css"

class Fentity extends Component {
  render() {
    const fentitiesCategory = this.props.match.params.fentities
    const fentities = this.props.state[fentitiesCategory]
    const fentity = fentities.find(
      (f) => f.name === this.props.match.params.name
    )
    return fentity ? (
      <div id="creature-container">
        <Link className="back" to={`/directory/${fentitiesCategory}`}>
          {"< Back"}
        </Link>
        <h1>{fentity.name}</h1>
        <img src={fentity.imgUrl} alt="" />
        <div className="title">Power:</div>
        <div className="power text"> {fentity.power}</div>
        <div className="other text">{fentity.other}</div>
      </div>
    ) : (
      <Redirect to={`/directory/${fentitiesCategory}`} />
    )
  }
}

export default Fentity
