import React, { Component } from 'react'
import BossCard from '../BossCard/BossCard'
import AddBossModal from "../AddBossModal/AddBossModal";
import { getBossesFromServer } from '../../actions/getAllBossesAction';
import { connect } from 'react-redux'

class Bosses extends Component {
  componentDidMount(){
    const { getBossesFromServer } = this.props;
    getBossesFromServer();
  };

  constructor(props){
    super(props);
    this.state = {
      show: false
    };
  };

  showModal = () => {
    this.setState({show: true});
  };

  hideModal = () => {
    this.setState({show: false});
  };

  render = () => {
    const { bosses } = this.props;
    return (
      <>
      <AddBossModal show={this.state.show} handleClose={this.hideModal} />
      <div style={{float: 'right', display: 'block'}}>
        <button type="button" onClick={ this.showModal } className="btn btn-primary" style={{borderRadius: 1+'rem'}}>Add Boss</button>
      </div>
      <div className="row mt-5 justify-content-center" >
        <BossCard bosses={bosses}/>
      </div>
      </>
    )
  }
}


const mapStateToProps = reduxStoreState => { 
  console.log(reduxStoreState)
  return {
    bosses: reduxStoreState.bosses.bosses
  }
}
export default connect(mapStateToProps , { getBossesFromServer })(Bosses);