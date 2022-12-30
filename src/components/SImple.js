import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import Deliver_price from './Deliver_price';
import Deliver_price_america from './Deliver_price_america';
import Deliver_price_france from './Deliver_price_france';
import Deliver_price_itary from './Deliver_price_italt';
import Deliver_price_australia from './Deliver_price_australia';


const SImple = () => {
   
    //환율
    const exchange_won = 1400;
	const exchange_au_won = 920;
	

    const [inputs,setInputs] = useState({
        simple_price:'',
        simple_volume_germany:'',
		simple_volume_america:'',
		simple_volume_france:'',
		simple_volume_italy:'',
		simple_volume_australia:''
		
    })
    const [country,setCountry] = useState("germany");
    const [germany_volume_price,setGermany_volume_price] = useState('');
    const [america_volume_price,setAmerica_volume_price] = useState('');
    const [france_volume_price,setFrance_volume_price] = useState('');
    const [italy_volume_price,setItaly_volume_price] = useState('');
    const [australia_volume_price,setAustralia_volume_price] = useState('');

    const {simple_price,simple_volume_germany,simple_volume_america,simple_volume_france,simple_volume_italy,simple_volume_australia} = inputs;

	
	
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
	const italy_deliver_price = (v) =>{
		setItaly_volume_price(v);
	}
	const australia_deliver_price = (v) =>{
		setAustralia_volume_price(v);
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
	} else if(country ==='italy'){
		simple_volume = simple_volume_italy;
		volume_up= (Math.ceil(parseFloat(simple_volume) * 2))/2;
		simple_deliv = italy_volume_price;
	} else if(country ==='australia'){
		simple_volume = simple_volume_australia;
		volume_up= (Math.ceil(parseFloat(simple_volume)));
		simple_deliv = australia_volume_price;
	}
	
	
    

	let simple_au_price_won = simple_price *exchange_au_won;
	let simple_au_price_won_point = String(simple_au_price_won.toFixed(2)).replace(/\B(?=(\d{3})+(?!\d))/g, ',');

    let simple_price_won = simple_price * exchange_won;
	let simple_price_won_point = String(simple_price_won.toFixed(2)).replace(/\B(?=(\d{3})+(?!\d))/g, ',');

	let simple_sum_price  = parseFloat(simple_price_won.toFixed(2)) + parseFloat(simple_deliv);
	let simple_au_sum_price  = parseFloat(simple_au_price_won.toFixed(2)) + parseFloat(simple_deliv);

	let twn_price_won = (simple_sum_price)*1.2;
	let twn_price_won_point = String(twn_price_won.toFixed(2)).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
	let twn_au_price_won = (simple_au_sum_price)*1.2;
	let twn_au_price_won_point = String(twn_au_price_won.toFixed(2)).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
	
	let price_include_fee = twn_price_won * 1.06;
	let price_include_fee_point = String(price_include_fee.toFixed(2)).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
	let au_price_include_fee = twn_au_price_won * 1.06;
	let au_price_include_fee_point = String(au_price_include_fee.toFixed(2)).replace(/\B(?=(\d{3})+(?!\d))/g, ',');


    return (
        <div className='simple_div'>
			<div className={country ==='australia'? 'australia_price' : 'simple_display'}>
				<span>가격 입력 : </span>
				<input
					name="simple_price"
					onChange={onChange}
					value={simple_price}
					className ="simple_price"
				/>
				<p>한화 : {(simple_au_price_won_point)}</p>
			</div>
			<div className={country !=='australia'? 'australia_price' : 'simple_display'}>
				<span>가격 입력 : </span>
				<input
					name="simple_price"
					onChange={onChange}
					value={simple_price}
					className ="simple_price"
				/>
				<p>한화 : {(simple_price_won_point)}</p>
			</div>
            <select onChange={changeCountry} value = {country} className="simple_selectBox">
                <option value="germany">germany</option>
                <option value="america">america</option>
                <option value="france">france</option>
                <option value="italy">italy</option>
                <option value="australia">australia</option>
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
			<div className={country ==='italy'? 'simple_vol_div' : 'simple_display'}>

				<span>무게 입력 : </span>
				<input 
					name="simple_volume_italy"
					onChange={onChange}
					value={simple_volume_italy}
					className ="simple_volume_italy"
				/>
				<span> kg</span>
			</div>
			<div className={country ==='australia'? 'simple_vol_div' : 'simple_display'}>

				<span>무게 입력 : </span>
				<input 
					name="simple_volume_australia"
					onChange={onChange}
					value={simple_volume_australia}
					className ="simple_volume_australia"
				/>
				<span> kg</span>
			</div>
			<Deliver_price exchange_won={exchange_won} country={country} volume_up={volume_up} germany_deliver_price={germany_deliver_price} />
			<Deliver_price_america exchange_won={exchange_won} country={country} volume_up={volume_up} america_deliver_price={america_deliver_price} />
            <Deliver_price_france exchange_won={exchange_won} country={country} volume_up={volume_up} france_deliver_price={france_deliver_price}/>
            <Deliver_price_itary exchange_won={exchange_won} country={country} volume_up={volume_up} italy_deliver_price={italy_deliver_price}/>
            <Deliver_price_australia exchange_au_won={exchange_au_won} country={country} volume_up={volume_up} australia_deliver_price={australia_deliver_price}/>
			<div className={country !=='australia'? 'australia_price' : 'simple_display'}>
				<p>비용 + 배송비 : {simple_sum_price}</p> 
				<p>20% 비용 : {twn_price_won_point}</p> 
				<p>네이버 수수료 포함 : {price_include_fee_point}</p>
			</div>
			<div className={country ==='australia'? 'australia_price' : 'simple_display'}>
				<p>비용 + 배송비 : {simple_au_sum_price}</p> 
				<p>20% 비용 : {twn_au_price_won_point}</p> 
				<p>네이버 수수료 포함 : {au_price_include_fee_point}</p>
			</div>
        </div>
    );
};

export default SImple;