import React, { useState } from 'react';

const Weight = ({france_w,spain_w}) => {
    const [inputs,setInputs] = useState({
        france_weight_unit:'',
        france_weight:0,
        spain_weight_unit:'',
        spain_weight:0
    })

    const {france_weight_unit,france_weight,spain_weight_unit,spain_weight} = inputs;
    
    const onChange = (e) =>{
        const { value,name} = e.target;
        setInputs({
            ...inputs,
            [name]:value
        })
    }

    const g_kg = 0.001;
    const o_kg = 0.0283495;
    const p_kg = 0.453592;

    let france_result_weight = 0;
    let spain_result_weight = 0;

    if(france_weight_unit === 'o'){
        france_result_weight = (france_weight * o_kg).toFixed(2);
    }
    else if(france_weight_unit ==='p'){
        france_result_weight = (france_weight * p_kg).toFixed(2);
    }
    else if(france_weight_unit ==='g'){
        france_result_weight = (france_weight * g_kg).toFixed(2);
    }
    else{
        france_result_weight = france_weight;
    }

    france_w(france_result_weight);
    
    if(spain_weight_unit === 'o'){
        spain_result_weight = (spain_weight * o_kg).toFixed(2);
    }
    else if(spain_weight_unit ==='p'){
        spain_result_weight = (spain_weight * p_kg).toFixed(2);
    }
    else if(spain_weight_unit ==='g'){
        spain_result_weight = (spain_weight * g_kg).toFixed(2);
    }
    else{
        spain_result_weight = spain_weight;
    }

    spain_w(spain_result_weight);

    return (
        <div>
            <p>온스 : o, 파운드 : p, 그램 : g</p>
            <div className='weight_indiv'>
            
                <div className='france_weight'>
                    <span>실 무게 입력 : </span>
                    <input 
                       name="france_weight_unit"
                       onChange={onChange}
                       value={france_weight_unit}
                       maxlength='1'
                       className='weight_france_unit'
                    />
                    <input 
                       name="france_weight"
                       onChange={onChange}
                       value={france_weight}
                    />
                    
                    <p>{france_result_weight}kg</p>
                </div>
                <div className='spain_weight'>
                    <span>실 무게 입력 : </span>
                    <input 
                       name="spain_weight_unit"
                       onChange={onChange}
                       value={spain_weight_unit}
                       maxlength='1'
                       className='weight_spain_unit'
                    />
                    <input 
                       name="spain_weight"
                       onChange={onChange}
                       value={spain_weight}
                    />
                    
                    <p>{spain_result_weight}kg</p>
                </div>
                
            </div>
        </div>
    );
};

export default Weight;