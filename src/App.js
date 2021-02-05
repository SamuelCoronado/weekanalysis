import logo from './logo.svg';
import React, {useState, useEffect} from 'react';
import {dayOne, dayTwo, dayThree, dayFour, dayFive, daySix, daySeven} from './data';
import Table from './components/TableComponent';
import Activities from './components/ActivitiesComponent';
import AreaItem from './components/AreaItem';
import Hours from './components/HoursComponent';
import AreaStatisticsItem from './components/AreaStatisticsItem';
import {Pie, Doughnut} from 'react-chartjs-2';
import Data from './components/img/data.png';
import Insurance from './components/img/insurance.png';
import Sport from './components/img/sport.png';
import Taxes from './components/img/taxes.png';
import Team from './components/img/team.png';
import './App.css';

function App() {


  const [days, setDays] = useState([dayOne, dayTwo, dayThree, dayFour, dayFive, daySix, daySeven]);

  const calcPercentage = (hours) => {
    return ((hours / 168) * 100).toFixed(1);
  }

  const activitiesStats = (days) => {
    let socialHours = 0,
        sportHours = 0,
        programmingHours = 0,
        schoolHours = 0,
        mealHours = 0,
        cleanHours = 0,
        entertainmentHours = 0,
        sleepHours = 0,
        choresHours = 0
      ;
    
    days.forEach(day => {
      day.forEach((hour, index) =>{
        if(index > 0){
          switch(hour){
            case 'programar':
              programmingHours++;
            break;
            case 'ejercicio':
              sportHours++;
            break;
            case 'social':
              socialHours++;
            break;
            case 'aseo':
              cleanHours++;
            break;
            case 'dormir':
              sleepHours++;
            break;
            case 'escuela':
              schoolHours++;
            break;
            case 'entretenimiento':
              entertainmentHours++;
            break;
            case 'comer':
              mealHours++;
            break;
            case 'deberes':
              choresHours++;
            break;
          }
        }
      })
    });


    let statsObject = [
       {
        hours: programmingHours,
        percentage: calcPercentage(programmingHours),
        spanishName: 'Programación',
        colorCode: '#3440C5'
        
      },
      {
        hours: sportHours,
        percentage: calcPercentage(sportHours),
        spanishName: 'Ejercicio',
        colorCode: '#5C2ADA'
      },
       {
        hours: socialHours,
        percentage: calcPercentage(socialHours),
        spanishName: 'Social',
        colorCode: '#26196E'
      },
      {
        hours: cleanHours,
        percentage: calcPercentage(cleanHours),
        spanishName: 'Aseo personal',
        colorCode: '#57AFF1'
      },
       {
        hours: sleepHours,
        percentage: calcPercentage(sleepHours),
        spanishName: 'Dormir',
        colorCode: '#23D7E0'
      },
       {
        hours: schoolHours,
        percentage: calcPercentage(schoolHours),
        spanishName: 'Escuela',
        colorCode: '#1349D1'
      },
      {
        hours: entertainmentHours,
        percentage: calcPercentage(entertainmentHours),
        spanishName: 'Entretenimiento',
        colorCode: '#219BCA'
      },
      {
        hours: mealHours,
        percentage: calcPercentage(mealHours),
        spanishName: 'Comida',
        colorCode: '#0989EB'
      },
      {
        hours: choresHours,
        percentage: calcPercentage(choresHours),
        spanishName: 'Deberes',
        colorCode: '#23EBE7'
      }
    ]

    return statsObject;
  }

  const fillGraphicData = () => {
    let graphicData = {
      labels: [
  
      ],
      datasets: [{
        data: [
  
        ],
        backgroundColor: [
  
        ],
        hoverBackgroundColor: [
  
        ]
      }]
    }

    activitiesStats(days).forEach((day) => {
      const {hours, percentage, spanishName, colorCode} = day;
      graphicData.labels.push(spanishName);
      graphicData.datasets[0].data.push(percentage);
      graphicData.datasets[0].backgroundColor.push(colorCode);
      graphicData.datasets[0].hoverBackgroundColor.push(colorCode);

    })

    return graphicData;
  }

  const fillAreaGraphicData = (days) => {

      let professionalHours = 0,
          healthHours = 0,
          personalHours = 0,
          economyHours = 0,
          socialHours = 0
        ;

      days.forEach(day => {
        day.forEach(hour => {
          switch(hour){
            case 'programar':
            case 'escuela':
              professionalHours++;
              economyHours++;
              break;
            case 'dormir':
            case 'comer':
              healthHours++;
              break;
            case 'social':
            case 'deberes':
              socialHours++;
              break;
            case 'ejercicio':
            case 'aseo':
              personalHours++;
          }
        });
      });
    

    let areasStatsArr = [
      {
        hours: professionalHours,
        percentage: calcPercentage(professionalHours),
        spanishName: 'Profesional',
        colorCode: '#227B9C'
      },
      {
        hours: healthHours,
        percentage: calcPercentage(healthHours),
        spanishName: 'Salud',
        colorCode: '#1754BD'
      },
      {
        hours: personalHours,
        percentage: calcPercentage(personalHours),
        spanishName: 'Personal',
        colorCode: '#064E5E'
      },
      {
        hours: economyHours,
        percentage: calcPercentage(economyHours),
        spanishName: 'Económica',
        colorCode: '#2C0B8F'
      },
      {
        hours: socialHours,
        percentage: calcPercentage(socialHours),
        spanishName: 'Social',
        colorCode: '#0473DB'
      } 
    ]

    let graphicData = {
      labels: [
        
      ],
      datasets: [{
        data: [
          
        ],
        backgroundColor: [
  
        ],
        hoverBackgroundColor: [
  
        ]
      }]
    }

    areasStatsArr.forEach((area) => {
      const {hours, percentage, spanishName, colorCode} = area;
      graphicData.labels.push(spanishName);
      graphicData.datasets[0].data.push(percentage);
      graphicData.datasets[0].backgroundColor.push(colorCode);
      graphicData.datasets[0].hoverBackgroundColor.push(colorCode);

    });

    return graphicData;
  }


  let activityIcon = (activity) =>  {
    let className = 'fas fa-';
    let faClassName = '';
    switch(activity){
      case 'programar':
        faClassName = 'code';
      break;
      case 'ejercicio':
        faClassName = 'dumbbell';
      break;
      case 'social':
        faClassName = 'users';
      break;
      case 'aseo':
        faClassName = 'shower';
      break;
      case 'dormir':
        faClassName = 'bed';
      break;
      case 'escuela':
        faClassName = 'school';
      break;
      case 'entretenimiento':
        faClassName = 'film';
      break;
      case 'comer':
        faClassName = 'utensils';
      break;
      case 'deberes':
        faClassName = 'list-alt';
      break;
    }

    className+=faClassName;

    return <i className={className}></i>;
  }
  const activityText = (activity) =>  <p className={`activity ${activity} text-center`}>{activityIcon(activity)}</p>

  const renderTableData = () => {
    const daysOb = days.map(day =>{
      return(
        <tr>
          {day.map((hour, index) =>  index == 0? <td><p className='activity dia'>{hour}</p></td> : <td>{activityText(hour)}</td>)}
        </tr>
      )
    })

    return daysOb;
  }

  const renderStatsData = () => {
     const activityItems =  activitiesStats(days).map(activity => {
      const {hours, percentage, spanishName} = activity;
      return (
        <div class="hours-container__item">
          <h3>{spanishName}</h3>
          <div class="hours-container__item-bar">
            <div class="meter">
              <span style={{width: `${percentage}%`}}></span>
              <p className="percentage">{percentage}%</p> 
            </div>
            <h3>{hours} horas</h3>
          </div>
        </div>
      )
    });
    return activityItems;
  }


  return (
    <>

    <header>
      <ul>
        <li> <a href="#parteA">Parte A</a></li>
        <li> <a href="#parteB">Parte B</a></li>
        <li> <a href="#parteC">Parte C</a></li>
        <li> <a href="#parteD">Parte D</a></li>
      </ul>
    </header>

    <div className="wrapper" id="parteA">
    <div className="greetings-container">
      <h1>Valoración de mi tiempo</h1>
      <h2>Samuel Coronado</h2>
    </div> 
    <div className="dashboard-grid">
      <Table tableData={renderTableData} />
      <Activities/>
      <Hours statsData={renderStatsData}/>
      <div className="glass-container graphic-container">
        <div className="dashboard-container__header">
              <h1 className="dashboard-container__title">Representación gráfica</h1>
              <hr/>
        </div>
        <div className="graphic">
          <Pie data={fillGraphicData()} />
        </div>
      </div>
    </div>
  </div>

  <section className="areas" id="parteB">
      <div className="areas__description">
        <h1>Áreas que me gustaría desarrollar</h1>
        <p>Los aspectos mas importantes en este momento de mi vida</p>
      </div>
      <div className="development-areas">
        <AreaItem Icon={Data} number={1} areaName={'Profesional'} areaActivities={['Escuela', 'Programacion']} />
        <AreaItem Icon={Taxes} number={2} areaName={'Económica'} areaActivities={['Escuela', 'Programacion']} />
        <AreaItem Icon={Insurance} number={3} areaName={'Salud'} areaActivities={['Dormir', 'Comida', 'Entretenimiento']} />
        <AreaItem Icon={Team} number={4} areaName={'Social'} areaActivities={['Social', 'Deberes']} />
        <AreaItem Icon={Sport} number={5} areaName={'Personal'} areaActivities={['Deportes', 'Aseo personal']} />
      </div>
  </section>

      <section className="areas-statistics" id="parteC">
        <div className="areas-statistics__container">
          <div className="areas-statistics__bars">
            <div className="areas-statistics__bars-header">
              <h1>Áreas según mis actividades</h1>
              <p>Clasificación de las tareas/actividades que realizo de manera cotidiana</p>
            </div>
            <div className="areas-statistics__bars-bars">
              <AreaStatisticsItem areaName={'Profesional'} activityOne={'Programación'} activityTwo={'Escuela'} classNameOne={'programar'} classNameTwo={'escuela'} colorCode={'#227B9C'} /> 
              <AreaStatisticsItem areaName={'Económica'} activityOne={'Programación'} activityTwo={'Escuela'} classNameOne={'programar'} classNameTwo={'escuela'} colorCode={'#2C0B8F'}/> 
              <AreaStatisticsItem areaName={'Salud'} activityOne={'Dormir, Ent.'} activityTwo={'Comida'}  classNameOne={'dormir'} classNameTwo={'comer'} colorCode={'#1754BD'}/> 
              <AreaStatisticsItem areaName={'Social'} activityOne={'Social'} activityTwo={'Deberes'} classNameOne={'social'} classNameTwo={'deberes'} colorCode={'#0473DB'}/> 
              <AreaStatisticsItem areaName={'Personal'} activityOne={'Deportes'} activityTwo={'Aseo personal'} classNameOne={'ejercicio'} classNameTwo={'aseo'} colorCode={'#064E5E'}/> 
            </div>
          </div>
          <div className="areas-statistics__graphic">
            <div className="areas-statistics__graphic-header">
              <h1>Representación gráfica de áreas</h1>
            </div>
            <Doughnut data={fillAreaGraphicData(days)} />
          </div>
        </div>
      </section>

      <section className="reflection" id="parteD">
        <div className="reflection-title">
          <h1>Una breve <br /> reflexión.</h1>
        </div>
        <div className="reflection-description">
          <div className="reflection-description-content">
            <p>
             Tras haber realizado este ejercicio, y conforme pasaban los días, pude ser mucho más consciente de la forma en la que estoy
             invirtiendo (o gastando) mi tiempo, y por consiguiente, mi vida. O sea que, más allá de los resultados crudos o la estadística obtenida,
             fue muy interesante sentir en realidad el tiempo, no sólo hacer las cosas por hacerlas, sino poner mi atención a mis actividades y 
             de esta forma, realizarlas de una mejor manera, o bien, detenerme en caso de que no sea el momento de estar realizando algo, como lo podría ser 
             ver una película cuando no he terminado mis tareas, por poner un ejemplo. En términos generales, creo que reparto bien mis tiempos,
             pues las áreas donde dedico más tiempo son profesional, económica y salud. Por ahora, el único ajuste que probablemente haré,
             será el dedicar un poco menos de tiempo al entretenimiento o al estar con mis amigos, pues estoy gastando tiempo de más, cuando debería estarlo 
             invirtiendo mejor. Por último, me gustaría mencionar que fue un gran ejercicio, ya que me ayudó a reflexionar sobre mi tiempo
             de una manera que no lo había hecho antes.
            </p>
          </div>
        </div>
      </section>

      <footer>
        <p>Samuel Coronado. All rights reserved 2021</p>
      </footer>
  </>
  );
}

export default App;
