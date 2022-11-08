import React, { useEffect } from 'react';

const Deliv = ({franceWeight,franceVolume,spainWeight,spainVolume,france_price_result,spain_price_result}) => {
    let result_france_w = 0;
    let result_spain_w = 0;

    let france_deliv_num = 0;
    let spain_deliv_num = 0;

    useEffect(()=>{
    })

    //프랑스 가격 결정
    if(franceWeight > franceVolume){
        if(franceWeight <=0.5){
            result_france_w = 1;
        }
        else{
            result_france_w = (Math.ceil((franceWeight * 2)))/2;
        }
        france_deliv_num = result_france_w / 0.5;
    } else{
        if(franceVolume <= 0.5){
            result_france_w = 1;
        }
        else{
            result_france_w = (Math.ceil((franceVolume * 2)))/2;
        }
        france_deliv_num = result_france_w / 0.5;
    }

    let delivery_france_price = 2.5 * france_deliv_num;
    let delivery_france_price_won = delivery_france_price * 1410;
    //스페인 가격 결정
    if(spainWeight > spainVolume){
        result_spain_w = (Math.ceil((spainWeight * 2)))/2;
        spain_deliv_num = (result_spain_w / 0.5) - 1;
    } else{
        result_spain_w = (Math.ceil((spainVolume * 2)))/2;
        spain_deliv_num = (result_spain_w / 0.5) - 1;
    }

    let delivery_spain_price = 11 + (3 * spain_deliv_num);
    let delivery_spain_price_won = delivery_spain_price * 1410;

    let france_sum = Number(delivery_france_price_won) + Number(france_price_result) ;
    let france_sum_rpl = String(france_sum).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    let spain_sum = Number(delivery_spain_price_won) + Number(spain_price_result);
    let spain_sum_rpl = String(spain_sum).replace(/\B(?=(\d{3})+(?!\d))/g, ','); 
    return (
        <div>
            <div className='indiv'>
                <div className='france_deliv'>
                    <p>최종 무게 : {result_france_w}</p>
                    <p>배송비 : {delivery_france_price}</p>
                    <p>{delivery_france_price_won}원</p>
                    <p>최종 가격 : {france_sum_rpl}</p>
                </div>
                <div className='spain_deliv'>
                    <p>최종 무게 : {result_spain_w}</p>
                    <p>배송비 : {delivery_spain_price}</p>
                    <p>{delivery_spain_price_won}원</p>
                    <p>최종 가격 : {spain_sum_rpl}</p>
                </div>
            </div>
        </div>
    );
};

export default Deliv;