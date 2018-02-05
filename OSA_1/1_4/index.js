import React from 'react'
import ReactDOM from 'react-dom'

const Otsikko = (kurssi) => {
    return(
    <div>
      <p>{kurssi.nimi}</p>
    </div>
    )
}
const Sisalto = (osat) => {
    return(
    <div>
        <p>{osat.osat[0].nimi}: {osat.osat[0].tehtavia} </p>
        <p>{osat.osat[1].nimi}: {osat.osat[1].tehtavia} </p>
        <p>{osat.osat[2].nimi}: {osat.osat[2].tehtavia} </p>
    </div>
    )

}
const Yhteensa = (osat) => {
    return(
    <div>
        <p>yhteensä : {osat.osat[0].tehtavia + osat.osat[1].tehtavia + osat.osat[2].tehtavia} </p>
    </div>
    )
}


const App = () => {
    const kurssi = 'Half Stack -sovelluskehitys'
    const osat = [
      {
        nimi: 'Reactin perusteet',
        tehtavia: 10
      },
      {
        nimi: 'Tiedonvälitys propseilla',
        tehtavia: 7
      },
      {
        nimi: 'Komponenttien tila',
        tehtavia: 14
      }
    ]

  return (
    <div>
      <Otsikko nimi={kurssi} />
      <Sisalto osat={osat} />
      <Yhteensa osat = {osat} />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)