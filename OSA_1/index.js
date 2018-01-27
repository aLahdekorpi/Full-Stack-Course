import React from 'react'
import ReactDOM from 'react-dom'

const Otsikko = (kurssi) => {
    return(
    <div>
      <p>{kurssi.nimi}</p>
    </div>
    )
}
const Sisalto = (props) => {
    return(
    <div>
        <Osa osa={props.osa} tehtavia={props.tehtavia} />
    </div>
    )

}
const Yhteensa = (yht) => {
    return(
    <div>
        <p>yhteensä : {yht.maara}</p>
    </div>
    )
}
const Osa = (osa) =>{
    return (
        <div>
            <p>{osa.osa} {osa.tehtavia}</p>
        </div>    
    )
}


const App = () => {
  const kurssi = 'Half Stack -sovelluskehitys'
  const osa1 = 'Reactin perusteet'
  const tehtavia1 = 10
  const osa2 = 'Tiedonvälitys propseilla'
  const tehtavia2 = 7
  const osa3 = 'Komponenttien tila'
  const tehtavia3 = 14
  const yht = tehtavia1 + tehtavia2 + tehtavia3

  return (
    <div>
      <Otsikko nimi={kurssi} />
      <Sisalto osa={osa1} tehtavia ={tehtavia1} />
      <Sisalto osa={osa2} tehtavia ={tehtavia2} />
      <Sisalto osa={osa3} tehtavia ={tehtavia3} />
      <Yhteensa maara = {yht} />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)