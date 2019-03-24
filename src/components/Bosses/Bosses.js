import React, { Component } from 'react'
import BossCard from '../BossCard/BossCard'

class Bosses extends Component {
  render() {
    return (
      <>
      <div style={{float: 'right', display: 'block'}}>
        <button type="button" className="btn btn-primary">Add Boss</button>
      </div>
      <div className="row mt-5 justify-content-center" >
        <BossCard />
      </div>
      </>
    )
  }
}

export default Bosses;