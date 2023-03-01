import React from 'react';

const Deliver_price_france = ({exchange_won,country,volume_up,france_deliver_price}) => {
    const france_table = [
        {"euro":0.5,"price":9800,"price2":9600,"price3":9400},
        {"euro":1.0,"price":13300,"price2":12700,"price3":12400},
        {"euro":1.5,"price":16800,"price2":16000,"price3":15300},
        {"euro":2.0,"price":20300,"price2":19400,"price3":18500},
        {"euro":2.5,"price":24000,"price2":22900,"price3":21900},
        {"euro":3.0,"price":27500,"price2":26300,"price3":25100},
        {"euro":3.5,"price":30800,"price2":29500,"price3":28200},
        {"euro":4.0,"price":34200,"price2":32700,"price3":31200},
        {"euro":4.5,"price":37500,"price2":35900,"price3":34300},
        {"euro":5.0,"price":40900,"price2":39100,"price3":37300},
        {"euro":5.5,"price":44200,"price2":42300,"price3":40400},
        {"euro":6.0,"price":47500,"price2":45500,"price3":43400},
        {"euro":6.5,"price":50900,"price2":48700,"price3":46500},
        {"euro":7.0,"price":54200,"price2":51900,"price3":49500},
        {"euro":7.5,"price":57600,"price2":55100,"price3":52600},
        {"euro":8.0,"price":60900,"price2":58300,"price3":55600},
        {"euro":8.5,"price":64200,"price2":61500,"price3":58700},
        {"euro":9.0,"price":67600,"price2":64700,"price3":61700},
        {"euro":9.5,"price":70900,"price2":67800,"price3":64800},
        {"euro":10.0,"price":74300,"price2":71000,"price3":67800},
        {"euro":10.5,"price":77600,"price2":74200,"price3":70900},
        {"euro":11.0,"price":81000,"price2":77400,"price3":73900},
        {"euro":11.5,"price":84300,"price2":80600,"price3":77000},
        {"euro":12.0,"price":87600,"price2":83800,"price3":80000},
        {"euro":12.5,"price":91000,"price2":87000,"price3":83100},
        {"euro":13.0,"price":94300,"price2":90200,"price3":86100},
        {"euro":13.5,"price":97700,"price2":93400,"price3":89200},
        {"euro":14.0,"price":101000,"price2":96600,"price3":92200},
        {"euro":14.5,"price":104300,"price2":99800,"price3":95300},
        {"euro":15.0,"price":107700,"price2":103000,"price3":98300},
        {"euro":15.5,"price":111000,"price2":106200,"price3":101400},
        {"euro":16.0,"price":114400,"price2":109400,"price3":104400},
        {"euro":16.5,"price":117700,"price2":112600,"price3":107500},
        {"euro":17.0,"price":121000,"price2":115800,"price3":110500},
        {"euro":17.5,"price":124400,"price2":119000,"price3":113600},
        {"euro":18.0,"price":127700,"price2":122200,"price3":116600},
        {"euro":18.5,"price":131100,"price2":125400,"price3":119700},
        {"euro":19.0,"price":134400,"price2":128600,"price3":122700},
        {"euro":19.5,"price":137700,"price2":131800,"price3":125800},
        {"euro":20.0,"price":141100,"price2":135000,"price3":128800},
        {"euro":20.5,"price":144400,"price2":138100,"price3":131900},
        {"euro":21.0,"price":147800,"price2":141300,"price3":134900},
        {"euro":21.5,"price":151100,"price2":144500,"price3":138000},
        {"euro":22.0,"price":154400,"price2":147700,"price3":141000},
        {"euro":22.5,"price":157800,"price2":150900,"price3":144100},
        {"euro":23.0,"price":161100,"price2":154100,"price3":147100},
        {"euro":23.5,"price":164500,"price2":157300,"price3":150200},
        {"euro":24.0,"price":167800,"price2":160500,"price3":153200},
        {"euro":24.5,"price":171200,"price2":163700,"price3":156300},
        {"euro":25.0,"price":174500,"price2":166900,"price3":159300},
        {"euro":25.5,"price":177800,"price2":170100,"price3":162400},
        {"euro":26.0,"price":181200,"price2":173300,"price3":165400},
        {"euro":26.5,"price":184500,"price2":176500,"price3":168500},
        {"euro":27.0,"price":187900,"price2":179700,"price3":171500},
        {"euro":27.5,"price":191200,"price2":182900,"price3":174600},
        {"euro":28.0,"price":194500,"price2":186100,"price3":177600},
        {"euro":28.5,"price":197900,"price2":189300,"price3":180700},
        {"euro":29.0,"price":201200,"price2":192500,"price3":183700},
        {"euro":29.5,"price":204600,"price2":195700,"price3":186800},
        {"euro":30.0,"price":207900,"price2":198900,"price3":189800},
        {"euro":30.5,"price":211200,"price2":202100,"price3":192900},
        {"euro":31.0,"price":214600,"price2":205300,"price3":195900},
        {"euro":31.5,"price":217900,"price2":208500,"price3":199000},
        {"euro":32.0,"price":221300,"price2":211600,"price3":202000},
        {"euro":32.5,"price":224600,"price2":214800,"price3":205100},
        {"euro":33.0,"price":227900,"price2":218000,"price3":208100},
        {"euro":33.5,"price":231300,"price2":221200,"price3":211200},
        {"euro":34.0,"price":234600,"price2":224400,"price3":214200},
        {"euro":34.5,"price":238000,"price2":227600,"price3":217300},
        {"euro":35.0,"price":241300,"price2":230800,"price3":220300},
        {"euro":35.5,"price":244600,"price2":234000,"price3":223400},
        {"euro":36.0,"price":248000,"price2":237200,"price3":226400},
        {"euro":36.5,"price":251300,"price2":240400,"price3":229500},
        {"euro":37.0,"price":254700,"price2":243600,"price3":232500},
        {"euro":37.5,"price":258000,"price2":246800,"price3":235600},
        {"euro":38.0,"price":261400,"price2":250000,"price3":238600},
        {"euro":38.5,"price":264700,"price2":253200,"price3":241700},
        {"euro":39.0,"price":268000,"price2":256400,"price3":244700},
        {"euro":39.5,"price":271400,"price2":259600,"price3":247800},
        {"euro":40.0,"price":274700,"price2":262800,"price3":250800},
        {"euro":40.5,"price":278100,"price2":266000,"price3":253900},
        {"euro":41.0,"price":281400,"price2":269200,"price3":256900},
        {"euro":41.5,"price":284700,"price2":272400,"price3":260000},
        {"euro":42.0,"price":288100,"price2":275600,"price3":263000},
        {"euro":42.5,"price":291400,"price2":278800,"price3":266100},
        {"euro":43.0,"price":294800,"price2":281900,"price3":269100},
        {"euro":43.5,"price":298100,"price2":285100,"price3":272200},
        {"euro":44.0,"price":301400,"price2":288300,"price3":275200},
        {"euro":44.5,"price":304800,"price2":291500,"price3":278300},
        {"euro":45.0,"price":308100,"price2":294700,"price3":281300},
        {"euro":45.5,"price":311500,"price2":297900,"price3":284400},
        {"euro":46.0,"price":314800,"price2":301100,"price3":287400},
        {"euro":46.5,"price":318100,"price2":304300,"price3":290500},
        {"euro":47.0,"price":321500,"price2":307500,"price3":293500},
        {"euro":47.5,"price":324800,"price2":310700,"price3":296600},
        {"euro":48.0,"price":328200,"price2":313900,"price3":299600},
        {"euro":48.5,"price":331500,"price2":317100,"price3":302700},
        {"euro":49.0,"price":334800,"price2":320300,"price3":305700},
        {"euro":49.5,"price":338200,"price2":323500,"price3":308800},
        {"euro":50.0,"price":341500,"price2":326700,"price3":311800},
        {"euro":50.5,"price":344900,"price2":329900,"price3":314900},
        {"euro":51.0,"price":348200,"price2":333100,"price3":317900},
        {"euro":51.5,"price":351600,"price2":336300,"price3":321000},
        {"euro":52.0,"price":354900,"price2":339500,"price3":324000},
        {"euro":52.5,"price":358200,"price2":342700,"price3":327100},
        {"euro":53.0,"price":361600,"price2":345900,"price3":330100},
        {"euro":53.5,"price":364900,"price2":349100,"price3":333200},
        {"euro":54.0,"price":368300,"price2":352200,"price3":336200},
        {"euro":54.5,"price":371600,"price2":355400,"price3":339300},
        {"euro":55.0,"price":374900,"price2":358600,"price3":342300},
        {"euro":55.5,"price":378300,"price2":361800,"price3":345400},
        {"euro":56.0,"price":381600,"price2":365000,"price3":348400},
        {"euro":56.5,"price":385000,"price2":368200,"price3":351500},
        {"euro":57.0,"price":388300,"price2":371400,"price3":354500},
        {"euro":57.5,"price":391600,"price2":374600,"price3":357600},
        {"euro":58.0,"price":395000,"price2":377800,"price3":360600},
        {"euro":58.5,"price":398300,"price2":381000,"price3":363700},
        {"euro":59.0,"price":401700,"price2":384200,"price3":366700},
        {"euro":59.5,"price":405000,"price2":387400,"price3":369800},
        {"euro":60.0,"price":408300,"price2":390600,"price3":372800},
        {"euro":60.5,"price":411700,"price2":393800,"price3":375900},
        {"euro":61.0,"price":415000,"price2":397000,"price3":378900},
        {"euro":61.5,"price":418400,"price2":400200,"price3":382000},
        {"euro":62.0,"price":421700,"price2":403400,"price3":385000},
        {"euro":62.5,"price":425000,"price2":406600,"price3":388100},
        {"euro":63.0,"price":428400,"price2":409800,"price3":391100},
        {"euro":63.5,"price":431700,"price2":413000,"price3":394200},
        {"euro":64.0,"price":435100,"price2":416200,"price3":397200},
        {"euro":64.5,"price":438400,"price2":419400,"price3":400300},
        {"euro":65.0,"price":441800,"price2":422500,"price3":403300},
        {"euro":65.5,"price":445100,"price2":425700,"price3":406400},
        {"euro":66.0,"price":448400,"price2":428900,"price3":409400},
        {"euro":66.5,"price":451800,"price2":432100,"price3":412500},
        {"euro":67.0,"price":455100,"price2":435300,"price3":415500},
        {"euro":67.5,"price":458500,"price2":438500,"price3":418600},
        {"euro":68.0,"price":461800,"price2":441700,"price3":421600},
        {"euro":68.5,"price":465100,"price2":444900,"price3":424700},
        {"euro":69.0,"price":468500,"price2":448100,"price3":427700},
        {"euro":69.5,"price":471800,"price2":451300,"price3":430800},
        {"euro":70.0,"price":475200,"price2":454500,"price3":433800},
        {"euro":70.5,"price":478500,"price2":457700,"price3":436900},
        {"euro":71.0,"price":481800,"price2":460900,"price3":439900},
        {"euro":71.5,"price":485200,"price2":464100,"price3":443000},
        {"euro":72.0,"price":488500,"price2":467300,"price3":446000},
        {"euro":72.5,"price":491900,"price2":470500,"price3":449100},
        {"euro":73.0,"price":495200,"price2":473700,"price3":452100},
        {"euro":73.5,"price":498500,"price2":476900,"price3":455200},
        {"euro":74.0,"price":501900,"price2":480100,"price3":458200},
        {"euro":74.5,"price":505200,"price2":483300,"price3":461300},
        {"euro":75.0,"price":508600,"price2":486500,"price3":464300},
        {"euro":75.5,"price":511900,"price2":489700,"price3":467400},
        {"euro":76.0,"price":515200,"price2":492800,"price3":470400},
        {"euro":76.5,"price":518600,"price2":496000,"price3":473500},
        {"euro":77.0,"price":521900,"price2":499200,"price3":476600},
        {"euro":77.5,"price":525300,"price2":502400,"price3":479600},
        {"euro":78.0,"price":528600,"price2":505600,"price3":482700},
        {"euro":78.5,"price":532000,"price2":508800,"price3":485700},
        {"euro":79.0,"price":535300,"price2":512000,"price3":488800},
        {"euro":79.5,"price":538600,"price2":515200,"price3":491800},
        {"euro":80.0,"price":542000,"price2":518400,"price3":494900},
        {"euro":80.5,"price":545300,"price2":521600,"price3":497900},
        {"euro":81.0,"price":548700,"price2":524800,"price3":501000},
        {"euro":81.5,"price":552000,"price2":528000,"price3":504000},
        {"euro":82.0,"price":555300,"price2":531200,"price3":507100},
        {"euro":82.5,"price":558700,"price2":534400,"price3":510100},
        {"euro":83.0,"price":562000,"price2":537600,"price3":513200},
        {"euro":83.5,"price":565400,"price2":540800,"price3":516200},
        {"euro":84.0,"price":568700,"price2":544000,"price3":519300},
        {"euro":84.5,"price":572000,"price2":547200,"price3":522300},
        {"euro":85.0,"price":575400,"price2":550400,"price3":525400},
        {"euro":85.5,"price":578700,"price2":553600,"price3":528400},
        {"euro":86.0,"price":582100,"price2":556800,"price3":531500},
        {"euro":86.5,"price":585400,"price2":560000,"price3":534500},
        {"euro":87.0,"price":588700,"price2":563200,"price3":537600},
        {"euro":87.5,"price":592100,"price2":566300,"price3":540600},
        {"euro":88.0,"price":595400,"price2":569500,"price3":543700},
        {"euro":88.5,"price":598800,"price2":572700,"price3":546700},
        {"euro":89.0,"price":602100,"price2":575900,"price3":549800},
        {"euro":89.5,"price":605500,"price2":579100,"price3":552800},
        {"euro":90.0,"price":608800,"price2":582300,"price3":555900},
        {"euro":90.5,"price":612100,"price2":585500,"price3":558900},
        {"euro":91.0,"price":615500,"price2":588700,"price3":562000},
        {"euro":91.5,"price":618800,"price2":591900,"price3":565000},
        {"euro":92.0,"price":622200,"price2":595100,"price3":568100},
        {"euro":92.5,"price":625500,"price2":598300,"price3":571100},
        {"euro":93.0,"price":628800,"price2":601500,"price3":574200},
        {"euro":93.5,"price":632200,"price2":604700,"price3":577200},
        {"euro":94.0,"price":635500,"price2":607900,"price3":580300},
        {"euro":94.5,"price":638900,"price2":611100,"price3":583300},
        {"euro":95.0,"price":642200,"price2":614300,"price3":586400},
        {"euro":95.5,"price":645500,"price2":617500,"price3":589400},
        {"euro":96.0,"price":648900,"price2":620700,"price3":592500},
        {"euro":96.5,"price":652200,"price2":623900,"price3":595500},
        {"euro":97.0,"price":655600,"price2":627100,"price3":598600},
        {"euro":97.5,"price":658900,"price2":630300,"price3":601600},
        {"euro":98.0,"price":662200,"price2":633500,"price3":604700},
        {"euro":98.5,"price":665600,"price2":636600,"price3":607700},
        {"euro":99.0,"price":668900,"price2":639800,"price3":610800},
        {"euro":99.5,"price":672300,"price2":643000,"price3":613800},
        {"euro":100.0,"price":675600,"price2":646200,"price3":616900},
        {"euro":100.5,"price":678900,"price2":649400,"price3":619900},
        {"euro":101.0,"price":682300,"price2":652600,"price3":623000},
        {"euro":101.5,"price":685600,"price2":655800,"price3":626000},
        {"euro":102.0,"price":689000,"price2":659000,"price3":629100},
        {"euro":102.5,"price":692300,"price2":662200,"price3":632100},
        {"euro":103.0,"price":695700,"price2":665400,"price3":635200},
        {"euro":103.5,"price":699000,"price2":668600,"price3":638200},
        {"euro":104.0,"price":702300,"price2":671800,"price3":641300},
        {"euro":104.5,"price":705700,"price2":675000,"price3":644300},
        {"euro":105.0,"price":709000,"price2":678200,"price3":647400},
        {"euro":105.5,"price":712400,"price2":681400,"price3":650400},
        {"euro":106.0,"price":715700,"price2":684600,"price3":653500},
        {"euro":106.5,"price":719000,"price2":687800,"price3":656500},
        {"euro":107.0,"price":722400,"price2":691000,"price3":659600},
        {"euro":107.5,"price":725700,"price2":694200,"price3":662600},
        {"euro":108.0,"price":729100,"price2":697400,"price3":665700},
        {"euro":108.5,"price":732400,"price2":700600,"price3":668700},
        {"euro":109.0,"price":735700,"price2":703800,"price3":671800},
        {"euro":109.5,"price":739100,"price2":706900,"price3":674800},
        {"euro":110.0,"price":742400,"price2":710100,"price3":677900},
        {"euro":110.5,"price":745800,"price2":713300,"price3":680900},
        {"euro":111.0,"price":749100,"price2":716500,"price3":684000},
        {"euro":111.5,"price":752400,"price2":719700,"price3":687000},
        {"euro":112.0,"price":755800,"price2":722900,"price3":690100},
        {"euro":112.5,"price":759100,"price2":726100,"price3":693100},
        {"euro":113.0,"price":762500,"price2":729300,"price3":696200},
        {"euro":113.5,"price":765800,"price2":732500,"price3":699200},
        {"euro":114.0,"price":769100,"price2":735700,"price3":702300},
        {"euro":114.5,"price":772500,"price2":738900,"price3":705300},
        {"euro":115.0,"price":775800,"price2":742100,"price3":708400},
        {"euro":115.5,"price":779200,"price2":745300,"price3":711400},
        {"euro":116.0,"price":782500,"price2":748500,"price3":714500},
        {"euro":116.5,"price":785900,"price2":751700,"price3":717500},
        {"euro":117.0,"price":789200,"price2":754900,"price3":720600},
        {"euro":117.5,"price":792500,"price2":758100,"price3":723600},
        {"euro":118.0,"price":795900,"price2":761300,"price3":726700},
        {"euro":118.5,"price":799200,"price2":764500,"price3":729700},
        {"euro":119.0,"price":802600,"price2":767700,"price3":732800},
        {"euro":119.5,"price":805900,"price2":770900,"price3":735800},
        {"euro":120.0,"price":809200,"price2":774100,"price3":738900},
        {"euro":120.5,"price":812600,"price2":777200,"price3":741900},
        {"euro":121.0,"price":815900,"price2":780400,"price3":745000},
        {"euro":121.5,"price":819300,"price2":783600,"price3":748000},
        {"euro":122.0,"price":822600,"price2":786800,"price3":751100},
        {"euro":122.5,"price":825900,"price2":790000,"price3":754100},
        {"euro":123.0,"price":829300,"price2":793200,"price3":757200},
        {"euro":123.5,"price":832600,"price2":796400,"price3":760200},
        {"euro":124.0,"price":836000,"price2":799600,"price3":763300},
        {"euro":124.5,"price":839300,"price2":802800,"price3":766300},
        {"euro":125.0,"price":842600,"price2":806000,"price3":769400},
        {"euro":125.5,"price":846000,"price2":809200,"price3":772400},
        {"euro":126.0,"price":849300,"price2":812400,"price3":775500},
        {"euro":126.5,"price":852700,"price2":815600,"price3":778500},
        {"euro":127.0,"price":856000,"price2":818800,"price3":781600},
        {"euro":127.5,"price":859300,"price2":822000,"price3":784600},
        {"euro":128.0,"price":862700,"price2":825200,"price3":787700},
        {"euro":128.5,"price":866000,"price2":828400,"price3":790700},
        {"euro":129.0,"price":869400,"price2":831600,"price3":793800},
        {"euro":129.5,"price":872700,"price2":834800,"price3":796800},
        {"euro":130.0,"price":876100,"price2":838000,"price3":799900},
        {"euro":130.5,"price":879400,"price2":841200,"price3":802900},
        {"euro":131.0,"price":882700,"price2":844400,"price3":806000},
        {"euro":131.5,"price":886100,"price2":847600,"price3":809000},
        {"euro":132.0,"price":889400,"price2":850700,"price3":812100},
        {"euro":132.5,"price":892800,"price2":853900,"price3":815100},
        {"euro":133.0,"price":896100,"price2":857100,"price3":818200},
        {"euro":133.5,"price":899400,"price2":860300,"price3":821200},
        {"euro":134.0,"price":902800,"price2":863500,"price3":824300},
        {"euro":134.5,"price":906100,"price2":866700,"price3":827300},
        {"euro":135.0,"price":909500,"price2":869900,"price3":830400},
        {"euro":135.5,"price":912800,"price2":873100,"price3":833400},
        {"euro":136.0,"price":916100,"price2":876300,"price3":836500},
        {"euro":136.5,"price":919500,"price2":879500,"price3":839500},
        {"euro":137.0,"price":922800,"price2":882700,"price3":842600},
        {"euro":137.5,"price":926200,"price2":885900,"price3":845600},
        {"euro":138.0,"price":929500,"price2":889100,"price3":848700},
        {"euro":138.5,"price":932800,"price2":892300,"price3":851700},
        {"euro":139.0,"price":936200,"price2":895500,"price3":854800},
        {"euro":139.5,"price":939500,"price2":898700,"price3":857800},
        {"euro":140.0,"price":942900,"price2":901900,"price3":860900},
        {"euro":140.5,"price":946200,"price2":905100,"price3":863900},
        {"euro":141.0,"price":949500,"price2":908300,"price3":867000},
        {"euro":141.5,"price":952900,"price2":911500,"price3":870000},
        {"euro":142.0,"price":956200,"price2":914700,"price3":873100},
        {"euro":142.5,"price":959600,"price2":917900,"price3":876100},
        {"euro":143.0,"price":962900,"price2":921000,"price3":879200},
        {"euro":143.5,"price":966300,"price2":924200,"price3":882200},
        {"euro":144.0,"price":969600,"price2":927400,"price3":885300},
        {"euro":144.5,"price":972900,"price2":930600,"price3":888300},
        {"euro":145.0,"price":976300,"price2":933800,"price3":891400},
        {"euro":145.5,"price":979600,"price2":937000,"price3":894400},
        {"euro":146.0,"price":983000,"price2":940200,"price3":897500},
        {"euro":146.5,"price":986300,"price2":943400,"price3":900500},
        {"euro":147.0,"price":989600,"price2":946600,"price3":903600},
        {"euro":147.5,"price":993000,"price2":949800,"price3":906600},
        {"euro":148.0,"price":996300,"price2":953000,"price3":909700},
        {"euro":148.5,"price":999700,"price2":956200,"price3":912700},
        {"euro":149.0,"price":1003000,"price2":959400,"price3":915800},
        {"euro":149.5,"price":1006300,"price2":962600,"price3":918800},
        {"euro":150.0,"price":1009700,"price2":965800,"price3":921900},
        {"euro":150.5,"price":1013000,"price2":969000,"price3":924900},
        {"euro":151.0,"price":1016400,"price2":972200,"price3":928000},
        {"euro":151.5,"price":1019700,"price2":975400,"price3":931000},
        {"euro":152.0,"price":1023000,"price2":978600,"price3":934100},
        {"euro":152.5,"price":1026400,"price2":981800,"price3":937100},
        {"euro":153.0,"price":1029700,"price2":985000,"price3":940200},
        {"euro":153.5,"price":1033100,"price2":988200,"price3":943200},
        {"euro":154.0,"price":1036400,"price2":991300,"price3":946300},
        {"euro":154.5,"price":1039700,"price2":994500,"price3":949300},
        {"euro":155.0,"price":1043100,"price2":997700,"price3":952400},
        {"euro":155.5,"price":1046400,"price2":1000900,"price3":955400},
        {"euro":156.0,"price":1049800,"price2":1004100,"price3":958500},
        {"euro":156.5,"price":1053100,"price2":1007300,"price3":961500},
        {"euro":157.0,"price":1056500,"price2":1010500,"price3":964600},
        {"euro":157.5,"price":1059800,"price2":1013700,"price3":967600},
        {"euro":158.0,"price":1063100,"price2":1016900,"price3":970700},
        {"euro":158.5,"price":1066500,"price2":1020100,"price3":973700},
        {"euro":159.0,"price":1069800,"price2":1023300,"price3":976800},
        {"euro":159.5,"price":1073200,"price2":1026500,"price3":979800},
        {"euro":160.0,"price":1076500,"price2":1029700,"price3":982900},
        {"euro":160.5,"price":1079800,"price2":1032900,"price3":985900},
        {"euro":161.0,"price":1083200,"price2":1036100,"price3":989000},
        {"euro":161.5,"price":1086500,"price2":1039300,"price3":992000},
        {"euro":162.0,"price":1089900,"price2":1042500,"price3":995100},
        {"euro":162.5,"price":1093200,"price2":1045700,"price3":998100},
        {"euro":163.0,"price":1096500,"price2":1048900,"price3":1001200},
        {"euro":163.5,"price":1099900,"price2":1052100,"price3":1004200},
        {"euro":164.0,"price":1103200,"price2":1055300,"price3":1007300},
        {"euro":164.5,"price":1106600,"price2":1058500,"price3":1010300},
        {"euro":165.0,"price":1109900,"price2":1061600,"price3":1013400},
        {"euro":165.5,"price":1113200,"price2":1064800,"price3":1016400},
        {"euro":166.0,"price":1116600,"price2":1068000,"price3":1019500},
        {"euro":166.5,"price":1119900,"price2":1071200,"price3":1022500},
        {"euro":167.0,"price":1123300,"price2":1074400,"price3":1025600},
        {"euro":167.5,"price":1126600,"price2":1077600,"price3":1028600},
        {"euro":168.0,"price":1129900,"price2":1080800,"price3":1031700},
        {"euro":168.5,"price":1133300,"price2":1084000,"price3":1034700},
        {"euro":169.0,"price":1136600,"price2":1087200,"price3":1037800},
        {"euro":169.5,"price":1140000,"price2":1090400,"price3":1040800},
        {"euro":170.0,"price":1143300,"price2":1093600,"price3":1043900},
        {"euro":170.5,"price":1146700,"price2":1096800,"price3":1046900},
        {"euro":171.0,"price":1150000,"price2":1100000,"price3":1050000},
        {"euro":171.5,"price":1153300,"price2":1103200,"price3":1053000},
        {"euro":172.0,"price":1156700,"price2":1106400,"price3":1056100},
        {"euro":172.5,"price":1160000,"price2":1109600,"price3":1059100},
        {"euro":173.0,"price":1163400,"price2":1112800,"price3":1062200},
        {"euro":173.5,"price":1166700,"price2":1116000,"price3":1065200},
        {"euro":174.0,"price":1170000,"price2":1119200,"price3":1068300},
        {"euro":174.5,"price":1173400,"price2":1122400,"price3":1071300},
        {"euro":175.0,"price":1176700,"price2":1125600,"price3":1074400},
        {"euro":175.5,"price":1180100,"price2":1128800,"price3":1077400},
        {"euro":176.0,"price":1183400,"price2":1131900,"price3":1080500},
        {"euro":176.5,"price":1186700,"price2":1135100,"price3":1083600},
        {"euro":177.0,"price":1190100,"price2":1138300,"price3":1086600},
        {"euro":177.5,"price":1193400,"price2":1141500,"price3":1089700},
        {"euro":178.0,"price":1196800,"price2":1144700,"price3":1092700},
        {"euro":178.5,"price":1200100,"price2":1147900,"price3":1095800},
        {"euro":179.0,"price":1203400,"price2":1151100,"price3":1098800},
        {"euro":179.5,"price":1206800,"price2":1154300,"price3":1101900},
        {"euro":180.0,"price":1210100,"price2":1157500,"price3":1104900},
        {"euro":180.5,"price":1213500,"price2":1160700,"price3":1108000},
        {"euro":181.0,"price":1216800,"price2":1163900,"price3":1111000},
        {"euro":181.5,"price":1220100,"price2":1167100,"price3":1114100},
        {"euro":182.0,"price":1223500,"price2":1170300,"price3":1117100},
        {"euro":182.5,"price":1226800,"price2":1173500,"price3":1120200},
        {"euro":183.0,"price":1230200,"price2":1176700,"price3":1123200},
        {"euro":183.5,"price":1233500,"price2":1179900,"price3":1126300},
        {"euro":184.0,"price":1236900,"price2":1183100,"price3":1129300},
        {"euro":184.5,"price":1240200,"price2":1186300,"price3":1132400},
        {"euro":185.0,"price":1243500,"price2":1189500,"price3":1135400},
        {"euro":185.5,"price":1246900,"price2":1192700,"price3":1138500},
        {"euro":186.0,"price":1250200,"price2":1195900,"price3":1141500},
        {"euro":186.5,"price":1253600,"price2":1199100,"price3":1144600},
        {"euro":187.0,"price":1256900,"price2":1202300,"price3":1147600},
        {"euro":187.5,"price":1260200,"price2":1205400,"price3":1150700},
        {"euro":188.0,"price":1263600,"price2":1208600,"price3":1153700},
        {"euro":188.5,"price":1266900,"price2":1211800,"price3":1156800},
        {"euro":189.0,"price":1270300,"price2":1215000,"price3":1159800},
        {"euro":189.5,"price":1273600,"price2":1218200,"price3":1162900},
        {"euro":190.0,"price":1276900,"price2":1221400,"price3":1165900},
        {"euro":190.5,"price":1280300,"price2":1224600,"price3":1169000},
        {"euro":191.0,"price":1283600,"price2":1227800,"price3":1172000},
        {"euro":191.5,"price":1287000,"price2":1231000,"price3":1175100},
        {"euro":192.0,"price":1290300,"price2":1234200,"price3":1178100},
        {"euro":192.5,"price":1293600,"price2":1237400,"price3":1181200},
        {"euro":193.0,"price":1297000,"price2":1240600,"price3":1184200},
        {"euro":193.5,"price":1300300,"price2":1243800,"price3":1187300},
        {"euro":194.0,"price":1303700,"price2":1247000,"price3":1190300},
        {"euro":194.5,"price":1307000,"price2":1250200,"price3":1193400},
        {"euro":195.0,"price":1310300,"price2":1253400,"price3":1196400},
        {"euro":195.5,"price":1313700,"price2":1256600,"price3":1199500},
        {"euro":196.0,"price":1317000,"price2":1259800,"price3":1202500},
        {"euro":196.5,"price":1320400,"price2":1263000,"price3":1205600},
        {"euro":197.0,"price":1323700,"price2":1266200,"price3":1208600},
        {"euro":197.5,"price":1327100,"price2":1269400,"price3":1211700},
        {"euro":198.0,"price":1330400,"price2":1272600,"price3":1214700},
        {"euro":198.5,"price":1333700,"price2":1275700,"price3":1217800},
        {"euro":199.0,"price":1337100,"price2":1278900,"price3":1220800},
        {"euro":199.5,"price":1340400,"price2":1282100,"price3":1223900},
        {"euro":200.0,"price":1343800,"price2":1285300,"price3":1226900},
        {"euro":200.5,"price":1347100,"price2":1288500,"price3":1230000},
        {"euro":201.0,"price":1350400,"price2":1291700,"price3":1233000},
        {"euro":201.5,"price":1353800,"price2":1294900,"price3":1236100},
        {"euro":202.0,"price":1357100,"price2":1298100,"price3":1239100},
        {"euro":202.5,"price":1360500,"price2":1301300,"price3":1242200},
        {"euro":203.0,"price":1363800,"price2":1304500,"price3":1245200},
        {"euro":203.5,"price":1367100,"price2":1307700,"price3":1248300},
        {"euro":204.0,"price":1370500,"price2":1310900,"price3":1251300},
        {"euro":204.5,"price":1373800,"price2":1314100,"price3":1254400},
        {"euro":205.0,"price":1377200,"price2":1317300,"price3":1257400},
        {"euro":205.5,"price":1380500,"price2":1320500,"price3":1260500},
        {"euro":206.0,"price":1383800,"price2":1323700,"price3":1263500},
        {"euro":206.5,"price":1387200,"price2":1326900,"price3":1266600},
        {"euro":207.0,"price":1390500,"price2":1330100,"price3":1269600},
        {"euro":207.5,"price":1393900,"price2":1333300,"price3":1272700},
        {"euro":208.0,"price":1397200,"price2":1336500,"price3":1275700},
        {"euro":208.5,"price":1400500,"price2":1339700,"price3":1278800},
        {"euro":209.0,"price":1403900,"price2":1342900,"price3":1281800},
        {"euro":209.5,"price":1407200,"price2":1346000,"price3":1284900},
        {"euro":210.0,"price":1410600,"price2":1349200,"price3":1287900},
        
        ]

        let volume_deliv = 0;
        let volume_deliv_won = '0';
    
        if(country === 'france'){ 
            for(let i of france_table){
                if(i['euro'] ===  volume_up){
                    //setGermany_volume_price(i['price']);
                    // volume_deliv = String(i['price']);
                    volume_deliv_won = String(i['price'] + 3000);
                    
                }
            }
        }
        // let volume_deliv_won = (parseFloat(volume_deliv) * exchange_won).toFixed(2);
        let volume_deliv_won_point = (volume_deliv_won).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        france_deliver_price(volume_deliv_won);
    return (
        <div className={country === 'france' ? '':'simple_display'}>
            {/* <p>{volume_deliv}유로</p> */}
            <p>{volume_deliv_won_point}원</p>
        </div>
    );
};


export default Deliver_price_france;