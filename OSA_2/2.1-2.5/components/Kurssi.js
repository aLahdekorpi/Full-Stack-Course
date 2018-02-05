import React from 'react'


const Kurssi = ({ kurssi }) => {

    return (
        <div>
          <ul>{Otsikko(kurssi)}</ul>
          <ul>{Sisalto(kurssi)}</ul>
          <ul>{Yhteensa(kurssi)}</ul>
        </div>    
      

    )
}
    const Otsikko = (kurssi) => {
        return(
        <div>
          <h1>{kurssi.nimi}</h1>
        </div>
        )
    }
    const Sisalto = (kurssi) => {

        return(
            <div>
              <ul>{lista(kurssi)}</ul>
            </div>
            )
    
            
    }
    const Yhteensa = (kurssi)=>{
        return (
            <div>
                <ul>{summa(kurssi)}</ul>
            </div>    
        )
    }
    const lista = (kurssi) => kurssi.osat.map(osa => 
        <li key={osa.id}>{osa.nimi} : {osa.tehtavia}</li>
    )
    const summa = (kurssi) => {
        var sum = 0;
        kurssi.osat.forEach(osa => {
            sum = sum +osa.tehtavia
        });
        return (
            <div>
                <ul>Yhteensä:{sum}</ul>
            </div> 
        )
        
    }

export default Kurssi
