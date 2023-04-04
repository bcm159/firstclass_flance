import React, { useState } from 'react';

const Weight_chage = () => {
    const [inputs,setInputs] = useState({
        input_gram:'',
        input_once:''
    })

    const {input_gram,input_once} = inputs;

    const onChange = (e) =>{
        const{value,name} = e.target;
        setInputs({
            ...inputs,
            [name]:value
        })
    }

    let input_gram_pound = 0;
    let input_once_gram = 0;

    if(input_gram != 0){
        input_gram_pound = input_gram * 0.00220462
    } 

    if(input_once != 0){
        input_once_gram = input_once * 28.3495;
    }

    return (
        <div className='weight_change'>
            <div className='input_gr_po' id='change_weight'>
                <input 
                    name="input_gram"
                    onChange={onChange}
                    value={input_gram}
                    className={input_gram}
                    size="2.5"
                />
                <span>gram =&gt; <b>{input_gram_pound.toFixed(5)}</b> pound</span>
            </div>
            
            <div className='input_on_gr' id='change_weight'>
                <input 
                    name="input_once"
                    onChange={onChange}
                    value={input_once}
                    className={input_once}
                    size="2.5"
                />
                <span>once =&gt; <b>{input_once_gram.toFixed(3)}</b> gram</span>
            </div>
            
        </div>
    );
};

export default Weight_chage;