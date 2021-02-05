import React from 'react';

function AreaStatisticsItem({areaName, activityOne, activityTwo, classNameOne, classNameTwo, colorCode}){
    return(
        <div className="areas-statistics__bar-item">
                <div className="areas-statistics__bar-item-category" style={{background: colorCode}}>
                  <h1>{areaName}</h1>
                </div>
                <div className="areas-statistics__bar-item-areas">
                  <div className={`areas-statistics__bar-item-areas-container ${classNameOne}`}>
                    <h3>{activityOne}</h3>
                  </div>
                  <div className={`areas-statistics__bar-item-areas-container ${classNameTwo}`}>
                    <h3>{activityTwo}</h3>
                  </div>
                </div>
              </div>
    )
}

export default AreaStatisticsItem;