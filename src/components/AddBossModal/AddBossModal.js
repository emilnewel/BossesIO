import React from 'react';
import AddBossForm from '../AddBossForm/AddBossForm'

const AddBossModal = ({handleClose, show}) =>{
  
  return(
    <div className="modal" style={{display: show ? 'block' : 'none' }}>
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Add boss</h5>
            <button type="button" className="close" onClick={handleClose} aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <AddBossForm />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddBossModal