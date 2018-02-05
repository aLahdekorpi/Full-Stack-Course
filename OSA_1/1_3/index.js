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
    const osa1 = {
      nimi: 'Reactin perusteet',
      tehtavia: 10
    }
    const osa2 = {
      nimi: 'Tiedonvälitys propseilla',
      tehtavia: 7
    }
    const osa3 = {
      nimi: 'Komponenttien tila',
      tehtavia: 14
    }

  return (
    <div>
      <Otsikko nimi={kurssi} />
      <Sisalto osa={osa1.nimi} tehtavia ={osa1.tehtavia} />
      <Sisalto osa={osa2.nimi} tehtavia ={osa2.tehtavia} />
      <Sisalto osa={osa3.nimi} tehtavia ={osa3.tehtavia} />
      <Yhteensa maara = {osa1.tehtavia + osa2.tehtavia +osa3.tehtavia} />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)