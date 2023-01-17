import React, { useState } from 'react';

const Volume = ({france_v,spain_v}) => {
    const [inputs,setInputs] = useState({
        france_L_unit:'',
        france_L:'',
        france_W:'',
        france_H:'',
        spain_L_unit:'',
        spain_L:'',
        spain_W:'',
        spain_H:''
    })

    const {france_L_unit,france_L,france_W,france_H,spain_L_unit,spain_L,spain_W,spain_H} = inputs;

    const onChange = (e) =>{
        const { value,name} = e.target;
        setInputs({
            ...inputs,
            [name]:value
        })
    }

    const in_cm = 2.54;
    const ft_cm = 30.48;
    const mm_cm = 0.1;

    let france_unit_L = 0
    let france_unit_W = 0
    let france_unit_H = 0
    let spain_unit_L = 0
    let spain_unit_W = 0
    let spain_unit_H = 0

    let france_result_v = 0;
    let spain_result_v = 0;

    //프랑스 단위변환
    if(france_L_unit === 'ft'){
        france_unit_L = (france_L * ft_cm).toFixed(2);
        france_unit_W = (france_W * ft_cm).toFixed(2);
        france_unit_H = (france_H * ft_cm).toFixed(2);
        france_result_v = (Number(france_unit_L)*Number(france_unit_W)*Number(france_unit_H)/6000).toFixed(2);
    }
    else if(france_L_unit === 'in'){
        france_unit_L = (france_L * in_cm).toFixed(2);
        france_unit_W = (france_W * in_cm).toFixed(2);
        france_unit_H = (france_H * in_cm).toFixed(2);
        france_result_v = (Number(france_unit_L)*Number(france_unit_W)*Number(france_unit_H)/6000).toFixed(2);
    }
    else if(france_L_unit === 'mm'){
        france_unit_L = (france_L * mm_cm).toFixed(2);
        france_unit_W = (france_W * mm_cm).toFixed(2);
        france_unit_H = (france_H * mm_cm).toFixed(2);
        france_result_v = (Number(france_unit_L)*Number(france_unit_W)*Number(france_unit_H)/6000).toFixed(2);
    }
    else{
        france_unit_L = france_L;
        france_unit_W = france_W;
        france_unit_H = france_H;
        france_result_v = (Number(france_unit_L)*Number(france_unit_W)*Number(france_unit_H)/6000).toFixed(2);
    }


    france_v(france_result_v);

    //스페인 단위변환
    if(spain_L_unit === 'ft'){
        spain_unit_L = (spain_L * ft_cm).toFixed(2);
        spain_unit_W = (spain_W * ft_cm).toFixed(2);
        spain_unit_H = (spain_H * ft_cm).toFixed(2);
        spain_result_v = (Number(spain_unit_L)*Number(spain_unit_W)*Number(spain_unit_H)/6000).toFixed(2);
    }
    else if(spain_L_unit === 'in'){
        spain_unit_L = (spain_L * in_cm).toFixed(2);
        spain_unit_W = (spain_W * in_cm).toFixed(2);
        spain_unit_H = (spain_H * in_cm).toFixed(2);
        spain_result_v = (Number(spain_unit_L)*Number(spain_unit_W)*Number(spain_unit_H)/6000).toFixed(2);
    }
    else if(spain_L_unit === 'mm'){
        spain_unit_L = (spain_L * mm_cm).toFixed(2);
        spain_unit_W = (spain_W * mm_cm).toFixed(2);
        spain_unit_H = (spain_H * mm_cm).toFixed(2);
        spain_result_v = (Number(spain_unit_L)*Number(spain_unit_W)*Number(spain_unit_H)/6000).toFixed(2);
    }
    else{
        spain_unit_L = spain_L;
        spain_unit_W = spain_W;
        spain_unit_H = spain_H;
        spain_result_v = (Number(spain_unit_L)*Number(spain_unit_W)*Number(spain_unit_H)/6000).toFixed(2);
    }
    
    spain_v(spain_result_v);
    

    return (
        <div>
            <p>피트 : ft, 인치 : in, 미리미터 : mm, 센티미터 : cm</p>
            <div className='indiv'> 
                <div className='france_len_vol'>
                        <span>단위 입력</span>
                        <input 
                        name="france_L_unit"
                        onChange={onChange}
                        value={france_L_unit}
                        className="len_unit"
                        />
                        <div>
                            <span className='length_sp'>길이 입력</span>
                            <input 
                                name="france_L"
                                onChange={onChange}
                                value={france_L}
                                className="L_input"
                            />
                            <span>x</span>
                            <input 
                                name="france_W"
                                onChange={onChange}
                                value={france_W}
                                className="L_input"
                            />
                            <span>x</span>
                            <input 
                                name="france_H"
                                onChange={onChange}
                                value={france_H}
                                className="L_input"
                            />
                        </div>
                        <p>{france_unit_L}x{france_unit_W}x{france_unit_H}</p>
                        <h4>{france_result_v}</h4>
                </div>
                <div className='spain_len_vol'>
                        <span>단위 입력</span>
                        <input 
                        name="spain_L_unit"
                        onChange={onChange}
                        value={spain_L_unit}
                        className="len_unit"
                        />
                        <div>
                            <span className='length_sp'>길이 입력</span>
                            <input 
                                name="spain_L"
                                onChange={onChange}
                                value={spain_L}
                                className="L_input"
                            />
                            <span>x</span>
                            <input 
                                name="spain_W"
                                onChange={onChange}
                                value={spain_W}
                                className="L_input"
                            />
                            <span>x</span>
                            <input 
                                name="spain_H"
                                onChange={onChange}
                                value={spain_H}
                                className="L_input"
                            />
                        </div>
                        <p>{spain_unit_L}x{spain_unit_W}x{spain_unit_H}</p>
                        <h4>{spain_result_v}</h4>
                </div>
            </div>
        </div>
    );
};

export default Volume;