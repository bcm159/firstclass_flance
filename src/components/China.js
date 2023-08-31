import React, { useState } from 'react';


const China = () => {

    const exchange_cn_won = 300;
    const [inputs,setInputs] = useState({
        china_input_price:0,
        china_input_num:1,
        china_sell_price:0
		
    })

    const {china_input_price,china_input_num,china_sell_price} = inputs;

    const onChange = (e) =>{
        const { value,name} = e.target;
        setInputs({
            ...inputs,
            [name]:value
        });
        
    }

    
    const input_price_won = parseFloat(china_input_price) * 300;
    // input_price_won = 0;
    //if(isNaN(input_price_won)){

    //}

    const total_won = input_price_won * parseInt(china_input_num);

    const total_pure_buy = total_won + 2030;

    const product_margin = china_sell_price - input_price_won;
    const product_margin_per = (100 * (product_margin / china_sell_price)).toFixed(1);

    const sell_product_margin = (china_input_num * (china_sell_price - input_price_won)) - 2030;
    const sell_prodcut_margin_per = ((sell_product_margin / (china_sell_price * china_input_num)) * 100).toFixed(1);
    return (
        <div className='china_div'>
            <div className='china_input'>
                <div className='china_input_left'>
                    <span className='simple_china_input'>위안 입력 : </span>
                    <input
                            name="china_input_price"
                            onChange={onChange}
                            value={china_input_price}
                            className ="china_input_price"
                            />
                    <br/>
                    <span className='simple_price_left'>한화 : {String(input_price_won).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원</span>
                </div>	
                <div className='china_input_right'>
                    <span>갯수 : </span>
                    <input
                        name="china_input_num"
                        onChange={onChange}
                        value={china_input_num}
                        className ="china_input_price"
                    />
                    <br/>
                    <span>판매 가격 : </span>
                    <input
                        name="china_sell_price"
                        onChange={onChange}
                        value={china_sell_price}
                        className ="china_input_price"
                    />

                </div>	
            </div>
            <div className='china_info'>
                <p>총 비용 : {String(total_won).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</p>
                <p>배송비 : 2030원</p>
                <p>최종 원가 : {String(total_pure_buy).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원</p>
                <p>1개당 물건 마진 : {String(product_margin).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원({product_margin_per}%)</p>
                <p>판매 마진 : {china_input_num}개 팔면 {String(sell_product_margin).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원({sell_prodcut_margin_per}%)</p>
            </div>
        </div>
    );
};

export default China;