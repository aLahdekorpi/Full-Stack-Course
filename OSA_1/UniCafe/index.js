import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor() {
      super()
      this.state = {
        hyvä: 0,
        neutraali: 0,
        huono: 0,
        keskiarvo: 0,
        positiiviset: 0,
        kokonaismäärä: 0
      }
    }
    klikHyvä = () => {
        this.setState({
          hyvä: this.state.hyvä + 1,
          kokonaismäärä: this.state.kokonaismäärä +1,
          positiiviset : this.state.positiiviset +1,
          keskiarvo: this.state.keskiarvo +1
        })
      }
    klikNeu = () => {
        this.setState({
          neutraali: this.state.neutraali + 1,
          kokonaismäärä: this.state.kokonaismäärä +1
        })
      }
    klikHuono = () => {
        this.setState({
          huono: this.state.huono + 1,
          kokonaismäärä: this.state.kokonaismäärä +1,
          keskiarvo: this.state.keskiarvo -1
        })
      }
    render(){
      return (
        <div>
          <h1> Anna Palautetta </h1>
          <Button
          handleClick={this.klikHyvä}
          text="Hyvä"
        />
          <Button
          handleClick={this.klikNeu}
          text="Neutraali"
        />
          <Button
          handleClick={this.klikHuono}
          text="Huono"
        />
          <p></p>
          <h1>Stats : </h1>
          <Statistics tila={this.state}>
          </Statistics>
          
        </div>
      )
    }
  }
  const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>
      {text}
    </button>
  )
  const Statistics = ({ tila }) => (
    <div>  
    <Statistic text="Hyvä" tila={tila.hyvä}></Statistic>
    <Statistic text="Neutraali" tila={tila.neutraali}></Statistic>
    <Statistic text="Huono" tila={tila.huono}></Statistic>
    <Statistic text="Keskiarvo" tila = {parseFloat(tila.keskiarvo/tila.kokonaismäärä).toFixed(1)}> </Statistic>
    <Statistic text="Positiiviset" tila = {parseFloat((tila.positiiviset/tila.kokonaismäärä)*100).toFixed(1)}> %</Statistic>
    </div>
  )
  const Statistic = ({tila, text}) => (
    <div>
        <tr>
        <td>{text} : {tila}</td>
        </tr>
    </div>    
  )
  
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  )
