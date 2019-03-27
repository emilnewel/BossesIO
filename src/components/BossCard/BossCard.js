import React from 'react'

const BossCard = (props) => {
  const { bosses } = props;
  return(
    <>
    { Object.keys(bosses).map(b => 
        <div key={ b } className="col-md-4 col-lg-4">
          <div className="card border-primary mb-3 mx-2" style={{borderRadius: 1+'rem'}}>
            <img className="card-img-top img-fluid mx-auto" style={{width: 60+'%'}} src={ bosses[b].img} alt="" />
            <div className="card-body">
              <h3 className="card-title">{ bosses[b].name }</h3>
              <p className="card-text">
                {bosses[b].description}
              </p>
            </div>
          </div>
        </div>
      )}
    
    </>
    
  )
}

export default BossCard