import React, { useEffect } from 'react';

const Deliv = ({franceWeight,franceVolume,spainWeight,spainVolume,france_price_result,spain_price_result}) => {
    const germany_table = [
        {"volume:":0.5,"price":13800},
        {"volume":1,"price":13800},
        {"volume":1.5,"price":16740},
        {"volume":2,"price":19680},
        {"volume":2.5,"price":22620},
        {"volume":3,"price":25560},
        {"volume":3.5,"price":28500},
        {"volume":4,"price":31440},
        {"volume":4.5,"price":34380},
        {"volume":5,"price":37320},
        {"volume":5.5,"price":40260},
        {"volume":6,"price":43200},
        {"volume":6.5,"price":46140},
        {"volume":7,"price":49080},
        {"volume":7.5,"price":52020},
        {"volume":8,"price":54960},
        {"volume":8.5,"price":57900},
        {"volume":9,"price":60840},
        {"volume":9.5,"price":63780},
        {"volume":10,"price":66720},
        {"volume":10.5,"price":69660},
        {"volume":11,"price":72600},
        {"volume":11.5,"price":75540},
        {"volume":12,"price":78480},
        {"volume":12.5,"price":81420},
        {"volume":13,"price":84360},
        {"volume":13.5,"price":87300},
        {"volume":14,"price":90240},
        {"volume":14.5,"price":93180},
        {"volume":15,"price":96120},
        {"volume":15.5,"price":99060},
        {"volume":16,"price":102000},
        {"volume":16.5,"price":104940},
        {"volume":17,"price":107880},
        {"volume":17.5,"price":110820},
        {"volume":18,"price":113760},
        {"volume":18.5,"price":116700},
        {"volume":19,"price":119640},
        {"volume":19.5,"price":122580},
        {"volume":20,"price":125520},
        {"volume":20.5,"price":128460},
        {"volume":21,"price":131400},
        {"volume":21.5,"price":134340},
        {"volume":22,"price":137280},
        {"volume":22.5,"price":140220},
        {"volume":23,"price":143160},
        {"volume":23.5,"price":146100},
        {"volume":24,"price":149040},
        {"volume":24.5,"price":151980},
        {"volume":25,"price":154920},
        {"volume":25.5,"price":157860},
        {"volume":26,"price":160800},
        {"volume":26.5,"price":163740},
        {"volume":27,"price":166680},
        {"volume":27.5,"price":169620},
        {"volume":28,"price":172560},
        {"volume":28.5,"price":175500},
        {"volume":29,"price":178440},
        {"volume":29.5,"price":181380},
        {"volume":30,"price":184320},
        {"volume":30.5,"price":187260},
        {"volume":31,"price":190200},
        {"volume":31.5,"price":193140},
        {"volume":32,"price":196080},
        {"volume":32.5,"price":199020},
        {"volume":33,"price":201960},
        {"volume":33.5,"price":204900},
        {"volume":34,"price":207840},
        {"volume":34.5,"price":210780},
        {"volume":35,"price":213720},
        {"volume":35.5,"price":216660},
        {"volume":36,"price":219600},
        {"volume":36.5,"price":222540},
        {"volume":37,"price":225480},
        {"volume":37.5,"price":228420},
        {"volume":38,"price":231360},
        {"volume":38.5,"price":234300},
        {"volume":39,"price":237240},
        {"volume":39.5,"price":240180},
        {"volume":40,"price":243120},
        {"volume":40.5,"price":246060},
        {"volume":41,"price":249000},
        {"volume":41.5,"price":251940},
        {"volume":42,"price":254880},
        {"volume":42.5,"price":257820},
        {"volume":43,"price":260760},
        {"volume":43.5,"price":263700},
        {"volume":44,"price":266640},
        {"volume":44.5,"price":269580},
        {"volume":45,"price":272520},
        {"volume":45.5,"price":275460},
        {"volume":46,"price":278400},
        {"volume":46.5,"price":281340},
        {"volume":47,"price":284280},
        {"volume":47.5,"price":287220},
        {"volume":48,"price":290160},
        {"volume":48.5,"price":293100},
        {"volume":49,"price":296040},
        {"volume":49.5,"price":298980},
        {"volume":50,"price":301920},
        {"volume":50.5,"price":304860},
        {"volume":51,"price":307800},
        {"volume":51.5,"price":310740},
        {"volume":52,"price":313680},
        {"volume":52.5,"price":316620},
        {"volume":53,"price":319560},
        {"volume":53.5,"price":322500},
        {"volume":54,"price":325440},
        {"volume":54.5,"price":328380},
        {"volume":55,"price":331320},
        {"volume":55.5,"price":334260},
        {"volume":56,"price":337200},
        {"volume":56.5,"price":340140},
        {"volume":57,"price":343080},
        {"volume":57.5,"price":346020},
        {"volume":58,"price":348960},
        {"volume":58.5,"price":351900},
        {"volume":59,"price":354840},
        {"volume":59.5,"price":357780},
        {"volume":60,"price":360720},
        {"volume":60.5,"price":363660},
        {"volume":61,"price":366600},
        {"volume":61.5,"price":369540},
        {"volume":62,"price":372480},
        {"volume":62.5,"price":375420},
        {"volume":63,"price":378360},
        {"volume":63.5,"price":381300},
        {"volume":64,"price":384240},
        {"volume":64.5,"price":387180},
        {"volume":65,"price":390120},
        {"volume":65.5,"price":393060},
        {"volume":66,"price":396000},
        {"volume":66.5,"price":398940},
        {"volume":67,"price":401880},
        {"volume":67.5,"price":404820},
        {"volume":68,"price":407760},
        {"volume":68.5,"price":410700},
        {"volume":69,"price":413640},
        {"volume":69.5,"price":416580},
        {"volume":70,"price":419520},
        {"volume":70.5,"price":422460},
        {"volume":71,"price":425400},
        {"volume":71.5,"price":428340},
        {"volume":72,"price":431280},
        {"volume":72.5,"price":434220},
        {"volume":73,"price":437160},
        {"volume":73.5,"price":440100},
        {"volume":74,"price":443040},
        {"volume":74.5,"price":445980},
        {"volume":75,"price":448920},
        {"volume":75.5,"price":451860},
        {"volume":76,"price":454800},
        {"volume":76.5,"price":457740},
        {"volume":77,"price":460680},
        {"volume":77.5,"price":463620},
        {"volume":78,"price":466560},
        {"volume":78.5,"price":469500},
        {"volume":79,"price":472440},
        {"volume":79.5,"price":475380},
        {"volume":80,"price":478320},
        {"volume":80.5,"price":481260},
        {"volume":81,"price":484200},
        {"volume":81.5,"price":487140},
        {"volume":82,"price":490080},
        {"volume":82.5,"price":493020},
        {"volume":83,"price":495960},
        {"volume":83.5,"price":498900},
        {"volume":84,"price":501840},
        {"volume":84.5,"price":504780},
        {"volume":85,"price":507720},
        {"volume":85.5,"price":510660},
        {"volume":86,"price":513600},
        {"volume":86.5,"price":516540},
        {"volume":87,"price":519480},
        {"volume":87.5,"price":522420},
        {"volume":88,"price":525360},
        {"volume":88.5,"price":528300},
        {"volume":89,"price":531240},
        {"volume":89.5,"price":534180},
        {"volume":90,"price":537120},
        {"volume":90.5,"price":540060},
        {"volume":91,"price":543000},
        {"volume":91.5,"price":545940},
        {"volume":92,"price":548880},
        {"volume":92.5,"price":551820},
        {"volume":93,"price":554760},
        {"volume":93.5,"price":557700},
        {"volume":94,"price":560640},
        {"volume":94.5,"price":563580},
        {"volume":95,"price":566520},
        {"volume":95.5,"price":569460},
        {"volume":96,"price":572400},
        {"volume":96.5,"price":575340},
        {"volume":97,"price":578280},
        {"volume":97.5,"price":581220},
        {"volume":98,"price":584160},
        {"volume":98.5,"price":587100},
        {"volume":99,"price":590040},
        {"volume":99.5,"price":592980},
        {"volume":100,"price":595920}
        
        ]
    
    let result_france_w = 0;
    let result_spain_w = 0;

    let france_deliv_num = 0;
    let spain_deliv_num = 0;

    useEffect(()=>{
    })

    //프랑스 가격 결정
    if(Number(franceWeight) > Number(franceVolume)){
        if(Number(franceWeight) <=0.5){
            result_france_w = 1;
        }
        else{
            result_france_w = (Math.ceil((Number(franceWeight) * 2)))/2;
        }
        france_deliv_num = result_france_w;
    } else{
        if(Number(franceVolume) <= 0.5){
            result_france_w = 1;
        }
        else{
            result_france_w = (Math.ceil((Number(franceVolume) * 2)))/2;
        }
        france_deliv_num = result_france_w;
    }


    let delivery_france_price = 0;
    let delivery_france_price_won = '0';
    
    for(let i of germany_table){
        if(i['volume'] === france_deliv_num){
            //setGermany_volume_price(i['price']);
            delivery_france_price_won = String(i['price'] + 1500);
            
        }
    }
    
    
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

    let per_20_germany = france_sum / 0.8;
    let per_20_germany_rpl = (per_20_germany.toFixed(1)).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    
    let per_fee_germany = per_20_germany / 0.94;
    let per_fee_germany_rpl = (per_fee_germany.toFixed(1)).replace(/\B(?=(\d{3})+(?!\d))/g, ',');



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
                    <p>20% 가격 : {per_20_germany_rpl}원</p>
                    <p>수수료 가격 : {per_fee_germany_rpl}원</p>
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