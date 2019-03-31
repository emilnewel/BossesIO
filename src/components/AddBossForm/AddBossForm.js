import React from 'react'
import { addBoss } from '../../actions/addBossAction'
import { connect } from 'react-redux';
import Validator from 'simple-react-validator';

class AddBossForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      name : '',
      description : '',
      img : ''
    }
    this.validator = new Validator();
  }

  onSubmit = (e, newHero) =>{
    e.preventDefault();
    const { hide } = this.props;
    if(this.validator.allValid()){
      const { addBoss } = this.props;
      addBoss(newHero).then(() => this.clearFields()).then(() => hide());
    } else {
      this.validator.showMessages();
      this.forceUpdate();
    }
    
  }

  //Reset state to make form fields empty - Used on submit
  clearFields = () => {
    this.setState({name:'', description:'', img:''})
  }

  
  render() {
    const {name, description, img } = this.state
    return(
      <form className='text-center'>
        <fieldset>
          <div className='form-group' >
            <label className='col-form-label'>Name</label>
            <input type='text' value={name} onChange={e => this.setState({name: e.target.value})} className='form-control' style={{borderRadius: 1+'rem'}}/>
            <strong  style={{color: '#DF691A'}}>{this.validator.message('Name', this.state.name, 'required|string')}</strong>
            <label>Description</label>
            <textarea className='form-control' onChange={e => this.setState({description: e.target.value})} value={description} rows='3' style={{borderRadius: 1+'rem'}}></textarea>
            <strong  style={{color: '#DF691A'}}>{this.validator.message('Description', this.state.description, 'required|string')}</strong>
            <label className='col-form-label'>URL to image</label>
            <input type='text' onChange={e => this.setState({img: e.target.value})} value={img} className='form-control' style={{borderRadius: 1+'rem'}}/>
            <strong style={{color: '#DF691A'}}>{this.validator.message('Img', this.state.img, 'required|string')}</strong>
            <input type='submit' className='btn btn-primary' onClick={e => this.onSubmit(e, this.state)} value='Add boss' style={{borderRadius: 1+'rem', marginTop: 10+'px',float: 'right'}} /> 
          </div>
        </fieldset>
      </form>
    )
  }
}
export default connect(null, {addBoss})(AddBossForm);