import React, { useState } from 'react';
import Deliver_price from './Deliver_price';

const Germany_buy = () => {
    const exchange_ger = 1430;
    const [inputs,setInputs] = useState({
        germany_price:'',
        germany_deliv_price:'',
        germany_weight_unit:'',
        germany_weight:'',
        germany_L_unit:'',
        germany_L:'',
        germany_W:'',
        germany_H:''
    })

    const {germany_price,germany_deliv_price,germany_weight_unit,germany_weight,germany_L_unit,germany_L,germany_W,germany_H} = inputs;

    const onChange = (e) =>{
        const{value,name} = e.target;
        setInputs({
            ...inputs,
            [name]:value
        })
    }

    const ex_germany_prcie = germany_price * exchange_ger;

    const germany_after = germany_price / 1.19;
    const return_price = germany_after * 0.09;
    const return_price_won = return_price * exchange_ger;
    const germany_vat_after = germany_after + return_price;
    const germany_vat_after_won = germany_vat_after * exchange_ger;
    const germany_vt = germany_price - germany_vat_after;

    const result_sum_won = germany_vat_after_won + Number(germany_deliv_price);


    // weight 무게 입력
    const g_kg = 0.001;
    const o_kg = 0.0283495;
    const p_kg = 0.453592;

    let germany_result_weight = 0;

    if(germany_weight_unit === 'o'){
        germany_result_weight = (germany_weight * o_kg).toFixed(2);
    }
    else if(germany_weight_unit ==='p'){
        germany_result_weight = (germany_weight * p_kg).toFixed(2);
    }
    else if(germany_weight_unit ==='g'){
        germany_result_weight = (germany_weight * g_kg).toFixed(2);
    }
    else{
        germany_result_weight = germany_weight;
    }

    // 실 무게 입력
    const in_cm = 2.54;
    const ft_cm = 30.48;
    const mm_cm = 0.1;

    let germany_unit_L = 0
    let germany_unit_W = 0
    let germany_unit_H = 0

    let germany_result_v = 0;

    if(germany_L_unit === 'ft'){
        germany_unit_L = (germany_L * ft_cm).toFixed(2);
        germany_unit_W = (germany_W * ft_cm).toFixed(2);
        germany_unit_H = (germany_H * ft_cm).toFixed(2);
        germany_result_v = (Number(germany_unit_L)*Number(germany_unit_W)*Number(germany_unit_H)/6000).toFixed(2);
    }
    else if(germany_L_unit === 'in'){
        germany_unit_L = (germany_L * in_cm).toFixed(2);
        germany_unit_W = (germany_W * in_cm).toFixed(2);
        germany_unit_H = (germany_H * in_cm).toFixed(2);
        germany_result_v = (Number(germany_unit_L)*Number(germany_unit_W)*Number(germany_unit_H)/6000).toFixed(2);
    }
    else if(germany_L_unit === 'mm'){
        germany_unit_L = (germany_L * mm_cm).toFixed(2);
        germany_unit_W = (germany_W * mm_cm).toFixed(2);
        germany_unit_H = (germany_H * mm_cm).toFixed(2);
        germany_result_v = (Number(germany_unit_L)*Number(germany_unit_W)*Number(germany_unit_H)/6000).toFixed(2);
    }
    else{
        germany_unit_L = germany_L;
        germany_unit_W = germany_W;
        germany_unit_H = germany_H;
        germany_result_v = (Number(germany_unit_L)*Number(germany_unit_W)*Number(germany_unit_H)/6000).toFixed(2);
    }

    // 무게 비교
    let result_germain_W = 0;
    let germain_deliv_num = 0;

    if(Number(germany_result_weight) > germany_result_v){
        if(Number(germany_result_weight) <=0.5){
            result_germain_W = 1;
        }
        else{
            result_germain_W = (Math.ceil((Number(germany_result_weight) * 2)))/2;
        }
        germain_deliv_num = result_germain_W;
    } else{
        if(germany_result_v <= 0.5){
            result_germain_W = 1;
        }
        else{
            result_germain_W = (Math.ceil((germany_result_v * 2)))/2;
        }
        germain_deliv_num = result_germain_W;
    }

    //테이블 값 가져오기
    const [germany_volume_price,setGermany_volume_price] = useState('');
   
    const germany_deliver_price = (v) =>{
		setGermany_volume_price(v);
	}

    //최종값 입력
    const germany_sum = result_sum_won + Number(germany_volume_price);
    const germany_sum_20per = germany_sum / 0.8;
    const germany_sum_20per_fee = germany_sum / 0.74;


    return (
        <div>
            <div className='simple_center_ger'>
                <div className='input_ger_calc_price'>
                    <p>원가 : {germany_price} ({String(ex_germany_prcie).replace(/\B(?=(\d{3})+(?!\d))/g, ',')})</p>
                    <p>vat,수수료 제외 : {germany_vat_after.toFixed(2)} ({germany_vat_after_won.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')})</p>
                    <p>vat : {return_price.toFixed(2)} 유로 ({return_price_won.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원)</p>
                    <p>독일 부가세 : {germany_deliv_price}</p>
                </div>
                <div className='input_ger_price_origin'>
                    <h1>G</h1>
                    <span>원가 입력 : </span>
                    <input 
                        name="germany_price"
                        onChange={onChange}
                        value={germany_price}
                        className ="germany_price"
                        size={3}
                    />
                    <br />
                    <span className='deliv_span'>부가세 : </span>
                    <input 
                        name="germany_deliv_price"
                        onChange={onChange}
                        value={germany_deliv_price}
                        className ="germany_deliv_price"
                        size={3}
                    />
                    <p>{result_sum_won.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원</p>
                </div>
            </div>
            <div>
                <p>온스 : o, 파운드 : p, 그램 : g</p>
                <div className='weight_indiv'>
                
                    <div className='germany_weight'>
                        <span>실 무게 입력 : </span>
                        <input 
                            name="germany_weight_unit"
                            onChange={onChange}
                            value={germany_weight_unit}
                            maxlength='1'
                            className='germany_weight_unit'
                        />
                        <input 
                        name="germany_weight"
                        onChange={onChange}
                        value={germany_weight}
                        />
                        
                        <p>{germany_result_weight}kg</p>
                    </div>
                </div>
            </div>
            <div>
                <p>피트 : ft, 인치 : in, 미리미터 : mm, 센티미터 : cm</p>
                <div className='france_len_vol'>
                    <span>단위 입력</span>
                    <input 
                    name="germany_L_unit"
                    onChange={onChange}
                    value={germany_L_unit}
                    className="len_unit"
                    />
                    <div>
                        <span className='length_sp'>길이 입력</span>
                        <input 
                            name="germany_L"
                            onChange={onChange}
                            value={germany_L}
                            className="L_input"
                        />
                        <span>x</span>
                        <input 
                            name="germany_W"
                            onChange={onChange}
                            value={germany_W}
                            className="L_input"
                        />
                        <span>x</span>
                        <input 
                            name="germany_H"
                            onChange={onChange}
                            value={germany_H}
                            className="L_input"
                        />
                    </div>
                    <p>{germany_unit_L}x{germany_unit_W}x{germany_unit_H}</p>
                    <h4>{germany_result_v}</h4>
                </div>
            </div>
            <div className='last_result'>
                <p>최종 무게 : {germain_deliv_num}</p>
                <Deliver_price exchange_won={exchange_ger} country="germany" volume_up={germain_deliv_num} germany_deliver_price={germany_deliver_price} />
                
                <div className='germany_deliv'>
                    <p>최종 가격 : {germany_sum.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</p>
                    <p>20% 가격 : {germany_sum_20per.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원</p>
                    <p>수수료 포함 가격 : {germany_sum_20per_fee.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원</p>
                </div>

            </div>

    </div>
    );
};

export default Germany_buy;