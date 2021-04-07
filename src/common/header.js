import React, { Component } from 'react'
import SlimSelect from 'slim-select'

export default class header extends Component {
  constructor() {
    super()
      this.state = {

      }
  }
  
 
  // componentDidMount() {
  //   new SlimSelect({
  //     select: '#slim-select'
  //   });
  // }
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">


            <a className="navbar-brand" href="#">Logo</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              
            </div>
          </div>
        </nav>
      </div>
    )
  }
}
