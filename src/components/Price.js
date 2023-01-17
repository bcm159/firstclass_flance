import React, { useState } from 'react';

const Price = ({france_result_price_won,spain_result_price_won}) => {
    const [hidden,setHidden] = useState(true);
    const [inputs,setInputs] = useState({
        france_price:'',
        spain_price:'',
        france_deliv_price:'',
        spain_deliv_price:''
    })

    const exchange = 1400;
                     
    const {france_price,spain_price,france_deliv_price,spain_deliv_price} = inputs;

    const onChange = (e) =>{
        const { value,name} = e.target;
        setInputs({
            ...inputs,
            [name]:value
        });
        
    }
    let reuslt_france_price = france_price * exchange;
    let france_vat = (france_price/1.19).toFixed(2);
    let france_vat_won = ((france_price / 1.19) * exchange).toFixed(2);
    let vf_vt = (france_price - Number(france_vat)).toFixed(0);

    
    let france_fee = (france_price * 0.07).toFixed(0);
    let france_fee_won = 0;
    
    let middle_sum = (Number(france_vat) + Number(france_fee)).toFixed(2);
    let middle_sum_won = (Number(middle_sum) * exchange).toFixed(2);

   let france_deliv_won_rpl = ((Number(france_deliv_price) * exchange).toFixed(2)).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    let spain_deliv_won = (Number(spain_deliv_price) * exchange).toFixed(2);
    let spain_deliv_won_rpl = ((Number(spain_deliv_price) * exchange).toFixed(2)).replace(/\B(?=(\d{3})+(?!\d))/g, ',');

    let france_fee_won_reply;

    let result_sum = (Number(middle_sum_won) + Number(france_deliv_price));
    

    let reuslt_spain_price = ((Number(spain_price) / 1.21) * 1.11).toFixed(2); 
    let ex_result_spain_price = Math.ceil(Number(reuslt_spain_price) * exchange);
    let result_spain = String(ex_result_spain_price + (exchange*2) + Number(spain_deliv_won)).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    spain_result_price_won(Number(ex_result_spain_price + (exchange*2) + Number(spain_deliv_won)));
    let ex_france_prcie =  (Number(france_price) * exchange).toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    let ex_spain_prcie =  (Number(spain_price) * exchange).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');

    france_result_price_won(result_sum);
    
    
    return (
        <div>
           <div className='indiv'>
                <div className='france'>
                    <div className='info_box_left'>
                        <p>원가 : {france_price} ({ex_france_prcie})</p>
                        <p>vat 제외 : {france_vat} ({france_vat_won})</p>
                        <p>vat : {vf_vt} 유로</p>
                        <p>수수료 : {france_fee} 유로 ({france_fee_won_reply})</p>
                        <p>중간 가격 : {middle_sum} ({middle_sum_won.replace(/\B(?=(\d{3})+(?!\d))/g, ',')})</p>
                        <p>독일 부가세 : {france_deliv_price}</p>
                    </div>
                    <div className='price_box'>
                        <h1>G</h1>
                        <span>원가 입력 : </span>
                        <input 
                        name="france_price"
                        onChange={onChange}
                        value={france_price}
                        className ="france_price"
                        />
                        <br />
                        <span className='deliv_span'>부가세 : </span>
                        <input 
                        name="france_deliv_price"
                        onChange={onChange}
                        value={france_deliv_price}
                        className ="france_deliv_price"
                        />
                        <p>{result_sum}원</p>
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