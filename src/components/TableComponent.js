import React from 'react';

function Table({tableData}){

    return(
    <div className="glass-container table-container">
        <div className="dashboard-container__header">
          <h1 className="dashboard-container__title">Actividad Semanal</h1>
          <hr />
        </div>
        <div className="table-container__table">
          <table className="table table-borderless">
            <thead>
              <tr>
                <th scope="col">Dia</th>
                <th scope="col">00:00-00:01</th>
                <th scope="col">00:01-00:02</th>
                <th scope="col">00:02-00:03</th>
                <th scope="col">00:03-00:04</th>
                <th scope="col">00:04-00:05</th>
                <th scope="col">00:05-00:06</th>
                <th scope="col">00:06-00:07</th>
                <th scope="col">00:07-00:08</th>
                <th scope="col">00:08-00:09</th>
                <th scope="col">09:00-10:00</th>
                <th scope="col">10:00-11:00</th>
                <th scope="col">11:00-12:00</th>
                <th scope="col">11:00-12:00</th>
                <th scope="col">13:00-14:00</th>
                <th scope="col">14:00-15:00</th>
                <th scope="col">15:00-16:00</th>
                <th scope="col">16:00-17:00</th>
                <th scope="col">17:00-18:00</th>
                <th scope="col">18:00-19:00</th>
                <th scope="col">19:00-20:00</th>
                <th scope="col">20:00-21:00</th>
                <th scope="col">21:00-22:00</th>
                <th scope="col">22:00-23:00</th>
                <th scope="col">23:00-23:59</th>
              </tr>
            </thead>
            <tbody>
              {
                  tableData()
              }
            </tbody>
          </table> 
        </div>
      </div>
      )
}

export default Table;