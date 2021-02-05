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
        </div>
      </div>
    )
}

export default Hours;