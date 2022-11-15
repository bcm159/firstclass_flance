import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import Deliver_price from './Deliver_price';
import Deliver_price_america from './Deliver_price_america';
import Deliver_price_france from './Deliver_price_france';

const SImple = () => {
   
    //환율
    const exchange_won = 1400;

    const [inputs,setInputs] = useState({
        simple_price:'',
        simple_volume_germany:'',
		simple_volume_america:'',
		simple_volume_france:''
    })
    const [country,setCountry] = useState("germany");
    const [germany_volume_price,setGermany_volume_price] = useState('');
    const [america_volume_price,setAmerica_volume_price] = useState('');
    const [france_volume_price,setFrance_volume_price] = useState('');

    const {simple_price,simple_volume_germany,simple_volume_america,simple_volume_france} = inputs;

    const onChange = (e) =>{
        const { value,name} = e.target;
        setInputs({
            ...inputs,
            [name]:value
        });
        
    }

    const changeCountry = (e) =>{
        setCountry(e.target.value);
    }

	const germany_deliver_price = (v) =>{
		setGermany_volume_price(v);
	}
	const america_deliver_price = (v) =>{
		setAmerica_volume_price(v);
	}
	const france_deliver_price = (v) =>{
		setFrance_volume_price(v);
	}
	let simple_volume = 0;
	let volume_up = 0;
	let simple_deliv = 0;
	if(country ==='germany'){
		simple_volume = simple_volume_germany;
		volume_up= (Math.ceil(parseFloat(simple_volume) * 2))/2;
		simple_deliv = germany_volume_price;
	} else if(country ==='america'){
		simple_volume = simple_volume_america;
		volume_up= (Math.ceil(parseFloat(simple_volume)));
		simple_deliv = america_volume_price;
	} else if(country ==='france'){
		simple_volume = simple_volume_france;
		volume_up= (Math.ceil(parseFloat(simple_volume) * 2))/2;
		simple_deliv = france_volume_price;
	}
	
	
    

	

    let simple_price_won = simple_price * exchange_won;
	let simple_price_won_point = String(simple_price_won).replace(/\B(?=(\d{3})+(?!\d))/g, ',');

	let simple_sum_price  = parseFloat(simple_price_won) + parseFloat(simple_deliv);
    return (
        <div className='simple_div'>
            <h1></h1>
            <span>가격 입력 : </span>
            <input
                name="simple_price"
                onChange={onChange}
                value={simple_price}
                className ="simple_price"
            />
            <p>한화 : {simple_price_won_point}</p>
            <select onChange={changeCountry} value = {country} className="simple_selectBox">
                <option value="germany">germany</option>
                <option value="america">america</option>
                <option value="france">france</option>
            </select>
			<div className={country ==='germany'? 'simple_vol_div' : 'simple_display'}>

				<span>무게 입력 : </span>
				<input 
					name="simple_volume_germany"
					onChange={onChange}
					value={simple_volume_germany}
					className ="simple_volume_germany"
				/>
				<span> kg</span>
			</div>
			<div className={country ==='america'? 'simple_vol_div' : 'simple_display'}>

				<span>무게 입력 : </span>
				<input 
					name="simple_volume_america"
					onChange={onChange}
					value={simple_volume_america}
					className ="simple_volume_america"
				/>
				<span> pound</span>
			</div>
			<div className={country ==='france'? 'simple_vol_div' : 'simple_display'}>

				<span>무게 입력 : </span>
				<input 
					name="simple_volume_france"
					onChange={onChange}
					value={simple_volume_france}
					className ="simple_volume_france"
				/>
				<span> kg</span>
			</div>
			<Deliver_price exchange_won={exchange_won} country={country} volume_up={volume_up} germany_deliver_price={germany_deliver_price} />
			<Deliver_price_america exchange_won={exchange_won} country={country} volume_up={volume_up} america_deliver_price={america_deliver_price} />
            <Deliver_price_france exchange_won={exchange_won} country={country} volume_up={volume_up} france_deliver_price={france_deliver_price}/>
			<span>비용 + 배송비 : {simple_sum_price}</span> 

        </div>
    );
};

export default SImple;