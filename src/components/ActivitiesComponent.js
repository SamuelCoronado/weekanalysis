import React from 'react';

function Activities(){
    return(
        <div className="glass-container activities-container">
          <div className="dashboard-container__header">
            <h1 className="dashboard-container__title">Lo que hiciste esta semana</h1>
            <hr />
          </div>
          <div className="activities-container-flex">
            <div className="activity-item activity social">
              <h2>Social</h2>
              <i className="fas fa-users" />
            </div>
            <div className="activity-item activity ejercicio">
              <h2>Deportes</h2>
              <i className="fas fa-dumbbell" />
            </div>
            <div className="activity-item activity programar">
              <h2>Programación</h2>
              <i className="fas fa-code" />
            </div>
            <div className="activity-item activity escuela">
              <h2>Escuela</h2>
              <i className="fas fa-school" />
            </div>
            <div className="activity-item activity comer">
              <h2>Comida</h2>
              <i className="fas fa-utensils" />
            </div>
            <div className="activity-item activity aseo">
              <h2>Aseo personal</h2>
              <i className="fas fa-shower" />
            </div>
            <div className="activity-item activity entretenimiento">
              <h2>Entretenimiento</h2>
              <i className="fas fa-film" />
            </div>
            <div className="activity-item activity dormir">
              <h2>Dormir</h2>
              <i className="fas fa-bed" />
            </div>
            <div className="activity-item activity deberes">
              <h2>Deberes</h2>
              <i className="fas fa-list-alt" />
            </div>
          </div>
      </div>
    )
}

export default Activities;