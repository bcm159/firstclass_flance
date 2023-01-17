import logo from './logo.svg';
import './App.css';
import './css/style.css';
import Price from './components/Price'
import Volume from './components/Volume';
import Weight from './components/Weight';
import Deliv from './components/Deliv';
import Simple from './components/SImple';
import Etc from './components/Etc';
import { useEffect, useState } from 'react';


function App() {
  const [franceWeight,setFranceWeight] = useState('');
  const [spainWeight,setSpainWeight] = useState('');
  const [franceVolume,setFranceVolume] = useState('');
  const [spainVolume,setSpainVolume] = useState('');
  const [france_price_result,setFrance_price_result] = useState(0);
  const [spain_price_result,setSpain_price_result] = useState(0);
 
  const france_w = (w) =>{
    setFranceWeight(w);
  }

  const spain_w = (w) => {
    setSpainWeight(w);
  }

  const france_v = (v) =>{
    setFranceVolume(v);
  }

  const spain_v =(v) =>{
    setSpainVolume(v);
  }

  const france_result_price_won =(p) =>{
    setFrance_price_result(p);
  }
  const spain_result_price_won =(p) =>{
    setSpain_price_result(p);
  }

  return (
    <div className="App">
      <Price france_result_price_won={france_result_price_won}
            spain_result_price_won={spain_result_price_won}/>
      <Weight france_w={france_w} spain_w={spain_w}/>
      <Volume france_v={france_v} spain_v={spain_v}/>
      <Deliv franceWeight={franceWeight} franceVolume={franceVolume}
        spainWeight={spainWeight} spainVolume={spainVolume}
        france_price_result={france_price_result} spain_price_result={spain_price_result}/>
      <Etc /> 
      <Simple />
    </div>
  );
}

export default App;
