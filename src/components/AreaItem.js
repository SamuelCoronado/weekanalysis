import React from 'react';

function AreaItem({Icon, number, areaName, areaActivities}){
    return(
        <div className="custom-card">
        <div className="face face-1">
          <div className="custom-content">
            <h1>{number}</h1>
            <img src={Icon} alt="" />
            <h3>{areaName}</h3>
          </div>
        </div>
        <div className="face face-2">
          <div className="custom-content">
              <ul>
                  <li>{areaActivities[0]}</li>
                  <li>{areaActivities[1]}</li>
              </ul>
          </div>
        </div>
      </div>
    )
}

export default AreaItem;