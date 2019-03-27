import React from 'react'
import { addBoss } from '../../actions/addBossAction'
import { connect } from 'react-redux';

class AddBossForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      name : '',
      description : '',
      img : ''
    }
  }

  validate(hero){
    if(hero.name === ''){return false}
    if(hero.description === ''){return false}
    if(hero.img === ''){return false}

    return true;
  }

  onSubmit = (e, newHero) =>{
    e.preventDefault();
    if(this.validate(newHero)){
      addBoss(newHero);
    } else {
      console.log('validation failed')
    }
    
  }
  render() {
    const {name, description, img } = this.state
    return(
      <form className='text-center'>
        <fieldset>
          <div className='form-group' >
            <label className='col-form-label'>Name</label>
            <input type='text' value={name} onChange={e => this.setState({name: e.target.value})} className='form-control' style={{borderRadius: 1+'rem'}}/>
            <label>Description</label>
            <textarea className='form-control' onChange={e => this.setState({description: e.target.value})} value={description} rows='3' style={{borderRadius: 1+'rem'}}></textarea>
            <label className='col-form-label'>URL to image</label>
            <input type='text' onChange={e => this.setState({img: e.target.value})} value={img} className='form-control' style={{borderRadius: 1+'rem'}}/>
            <input type='submit' className='btn btn-primary' onClick={e => this.onSubmit(e, this.state)} value='Add boss' style={{borderRadius: 1+'rem', marginTop: 10+'px',float: 'right'}} /> 
          </div>
        </fieldset>
      </form>
    )
  }
}
export default connect(null, {addBoss})(AddBossForm);