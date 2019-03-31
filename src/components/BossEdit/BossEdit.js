import React from 'react'
import { connect } from 'react-redux'
import { getBoss } from '../../actions/getBossAction'
import { updateBoss } from '../../actions/updateBossAction'
import { deleteBoss } from '../../actions/deleteBossAction'
import Validator from 'simple-react-validator'

class BossEdit extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      id : 0,
      name: '',
      description: '',
      img: ''
    };
    this.validator = new Validator();
  };

  onSubmit(e, updatedBoss){
    e.preventDefault();
    if(this.validator.allValid()){
      const {updateBoss} = this.props;
      updateBoss(updatedBoss);
      this.confirmUpdate()
    } else{
      this.validator.showMessages();
      this.forceUpdate();
    }
    
    
  }

  deleteBoss(e, bossId){
    e.preventDefault();
    const { deleteBoss } = this.props;
    deleteBoss(bossId).then(() => this.props.history.push('/bosses'));
  }

  fillState(){
    const { name, description, img } = this.props;
    const { id } = this.props.match.params;
    this.setState({
      id, name, description, img
    })
  }

  confirmUpdate(){
    alert('You\'ve succesfully updated this boss!')
  }

  render() {
    const { name, description, img } = this.state;
    const { id } = this.props.match.params
    if(this.state.id === 0) {
      const { getBoss } = this.props;
      getBoss(id).then(() => this.fillState()).then(() => Promise.resolve());
    }

    return (
      <>  
      <div className='row mt-5 justify-content-center'>
        <form style={{width: 40+'%'}} className='text-center'>
          <fieldset>
            <legend>Update boss information</legend>
            <div className='form-group' >
              <label className='col-form-label'>Name</label>
              <input type='text' value={name} onChange={e => this.setState({name: e.target.value})} className='form-control' style={{borderRadius: 1+'rem'}} />
              <strong  style={{color: '#DF691A'}}>{this.validator.message('Name', this.state.name, 'required|string')}</strong>
              <label>Description</label>
              <textarea className='form-control' onChange={e => this.setState({description: e.target.value})} value={description} rows='3' style={{borderRadius: 1+'rem'}}></textarea>
              <strong  style={{color: '#DF691A'}}>{this.validator.message('Description', this.state.description, 'required|string')}</strong>
              <label className='col-form-label'>URL to image</label>
              <input type='text'  onChange={e => this.setState({img: e.target.value})} value={img} className='form-control' style={{borderRadius: 1+'rem'}} />
              <strong  style={{color: '#DF691A'}}>{this.validator.message('Image', this.state.img, 'required|string')}</strong>
              <input type='submit' className='btn btn-primary' onClick={e => this.onSubmit(e, this.state)} value='Submit' style={{borderRadius: 1+'rem', marginTop: 10+'px',float: 'right'}} />
              <button className='btn btn-danger' style={{borderRadius: 1+'rem', marginTop: 10+'px', marginRight: 10+'px', float: 'right'}} onClick={e => this.deleteBoss(e, id)}> Delete boss</button> 
            </div>
          </fieldset>
        </form>
        
        <div className='col-md-4 col-lg-4'>
          <strong>Updated card will look like</strong>
          <div className='card border-primary mb-3 mx-2' style={{borderRadius: 1+'rem'}} >
            <img className='card-img-top img-fluid mx-auto' style={{width: 60+'%'}} src={img} alt='hero' />
            <div className='card-body'>
              <h3 className='card-title'>{name}</h3>
              <p className='card-text'>
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
      </>
    );
  };
}

const mapStateToProps = reduxStoreState => {
  return{
    id : reduxStoreState.bosses.boss.id,
    name: reduxStoreState.bosses.boss.name,
    description: reduxStoreState.bosses.boss.description,
    img: reduxStoreState.bosses.boss.img
  }
}
export default connect(mapStateToProps, { getBoss, updateBoss, deleteBoss })(BossEdit);