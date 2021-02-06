import React from 'react';

function Hours({statsData}){
    return(
        <div className="glass-container hours-container">
        <div className="dashboard-container__header">
            <h1 className="dashboard-container__title">Tus actividades en horas</h1>
            <hr/>
        </div>
        <div className="hours-container__hours">
          {
            statsData() 
          }
          <div class="hours-container__item">
          <h3>Total</h3>
          <div class="hours-container__item-bar">
            <div class="meter">
              <span style={{width: `100%`}}></span>
              <p className="percentage">{100}%</p> 
            </div>
            <h3>168 horas</h3>
          </div>
        </div>
        </div>
      </div>
    )
}

export default Hours;