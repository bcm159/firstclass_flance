import React, { useState } from 'react';

const Price = ({france_result_price_won,spain_result_price_won}) => {
    const [hidden,setHidden] = useState(true);
    const [inputs,setInputs] = useState({
        france_price:'',
        spain_price:'',
        france_deliv_price:'',
        spain_deliv_price:''
    })
                     
    const {france_price,spain_price,france_deliv_price,spain_deliv_price} = inputs;

    const onChange = (e) =>{
        const { value,name} = e.target;
        setInputs({
            ...inputs,
            [name]:value
        });
        
    }

    let france_vat = 0;
    let france_vat_won = 0;
    let france_fee = 0;
    let france_fee_won = 0;
    let reuslt_france_price = 0;

    let france_deliv_won = (Number(france_deliv_price) * 1410).toFixed(2);
    let france_deliv_won_rpl = ((Number(france_deliv_price) * 1410).toFixed(2)).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    let spain_deliv_won = (Number(spain_deliv_price) * 1410).toFixed(2);
    let spain_deliv_won_rpl = ((Number(spain_deliv_price) * 1410).toFixed(2)).replace(/\B(?=(\d{3})+(?!\d))/g, ',');

    let france_vat_won_reply;
    let france_fee_won_reply;

    if(0 < Number(france_price) && Number(france_price) < 85){
        france_vat = (Number(france_price)/1.2).toFixed(2);
        france_vat_won = (Number(france_vat) * 1410).toFixed(2);
        france_vat_won_reply = ((Number(france_vat) * 1410).toFixed(2)).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        france_fee = 7;
        france_fee_won = 7 * 1410;
        france_fee_won_reply =String(7 * 1410).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        console.log(Number(france_vat_won));
        reuslt_france_price = (Number(france_vat_won) + france_fee_won+ Number(france_deliv_won)).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','); 
        france_result_price_won(Number(Number(france_vat_won) + france_fee_won + Number(france_deliv_won)).toFixed(2));

    }else if(Number(france_price) > 85 && Number(france_price)<1500){
        france_vat = (Number(france_price)/1.2).toFixed(2);
        france_vat_won = ((Number(france_vat) * 1410).toFixed(2));
        france_vat_won_reply = ((Number(france_vat) * 1410).toFixed(2)).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        france_fee = (Number(france_vat) * 0.1).toFixed(2);
        france_fee_won = Number(france_fee) * 1410;
        france_fee_won_reply = (Number(france_fee) * 1410).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        reuslt_france_price = String((Number(france_vat_won) + france_fee_won + Number(france_deliv_won)).toFixed(2)).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        france_result_price_won(Number((Number(france_vat_won) + france_fee_won + Number(france_deliv_won)).toFixed(2)));
        
    }else{
        france_vat = (Number(france_price)/1.2).toFixed(2);
        france_vat_won = ((Number(france_vat) * 1410).toFixed(2));
        france_vat_won_reply = ((Number(france_vat) * 1410).toFixed(2)).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        france_fee = (Number(france_vat) * 0.08).toFixed(2);
        france_fee_won = Number(france_fee) * 1410;
        france_fee_won_reply = (Number(france_fee) * 1410).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        reuslt_france_price = String((Number(france_vat_won) + france_fee_won + Number(france_deliv_won)).toFixed(2)).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        france_result_price_won(Number((Number(france_vat_won) + france_fee_won + Number(france_deliv_won)).toFixed(2)));
    }

    let reuslt_spain_price = ((Number(spain_price) / 1.21) * 1.11).toFixed(2); 
    let ex_result_spain_price = Math.ceil(Number(reuslt_spain_price) * 1410);
    let result_spain = String(ex_result_spain_price + (1410*2) + Number(spain_deliv_won)).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    spain_result_price_won(Number(ex_result_spain_price + (1410*2) + Number(spain_deliv_won)));
    let ex_france_prcie =  (Number(france_price) * 1410).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    let ex_spain_prcie =  (Number(spain_price) * 1410).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');

    
    
    return (
        <div>
           <div className='indiv'>
                <div className='france'>
                    <div className='info_box_left'>
                        <p>원가 : {france_price} ({ex_france_prcie})</p>
                        <p>vat 제외 : {france_vat} ({france_vat_won_reply})</p>
                        <p>수수료 : {france_fee} ({france_fee_won_reply})</p>
                        <p>프랑스 배송비 : {france_deliv_price}</p>
                        <p>({france_deliv_won}원)</p>
                    </div>
                    <div className='price_box'>
                        <h1>f</h1>
                        <span>원가 입력 : </span>
                        <input 
                        name="france_price"
                        onChange={onChange}
                        value={france_price}
                        className ="france_price"
                        />
                        <br />
                        <span className='deliv_span'>프랑스 배송비 : </span>
                        <input 
                        name="france_deliv_price"
                        onChange={onChange}
                        value={france_deliv_price}
                        className ="france_deliv_price"
                        />
                        <p>{reuslt_france_price}원</p>
                    </div>
                    
                    
                </div>
                <div className='spain'>
                    <div className='price_box'>
                        <h1>s</h1>
                        <span>원가 입력 : </span>
                        <input 
                            name="spain_price"
                            onChange={onChange}
                            value={spain_price}
                            className="spain_price"
                        />
                        <br />
                        <span className='deliv_span'>스페인 배송비 : </span>
                        <input 
                        name="spain_deliv_price"
                        onChange={onChange}
                        value={spain_deliv_price}
                        className ="spain_deliv_price"
                        />
                        <p>{result_spain}원</p>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
                    </div>
                    <div className='info_box_right'>
                        <p>원가 : {spain_price} ({ex_spain_prcie})</p>
                        <p>vat,수수료 제외 : {reuslt_spain_price} ({ex_result_spain_price})</p>
                        <p>일반통관 : 2유로 (2820)</p>
                        <p>스페인 배송비 : {spain_deliv_price}</p>
                        <p>({spain_deliv_won}원)</p>
                    </div>
                </div>
            </div> 
        </div>
  
    )
};

export default Price;