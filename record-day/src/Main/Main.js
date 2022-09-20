import React, {useEffect} from "react";
import "./Main.css"
import Main_img from "../img/main.png"
import { Container } from "react-bootstrap";

const Main = () =>{

    useEffect(()=>{
    const mainGroup = document.querySelector('.svg-main')
    const mainPaths = mainGroup.querySelectorAll('path')
    mainPaths.forEach((path,index)=>{
        const length = path.getTotalLength()
        path.style.setProperty('--length',length)
        path.style.setProperty('--delay',index*100 + 'ms')
        path.style.setProperty('--duration',length*1+'ms')
    })
})

    return(
        <div className="main_container">

            <div className="main_img">
                <svg className="main_svg" viewBox="0 0 1928 1233" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g className="svg-main">    
                        <path d="M0 1228.5H362.5L342 1167.5L323.5 1121L303 1083L298.5 1072L294.5 1037.5L342 962.5L374 926L391 913L407 907H417M417 907L407 930L391 951.5L374 973.5L348.5 1000.5M417 907V913V930L411.416 951.5M348.5 1000.5L331.5 1011.5V1018.5L342 1011.5L348.5 1000.5ZM411.416 951.5L407 968.5L391 1000.5L387 1011.5V1018.5H396L407 1000.5L411.5 981.5L411.416 951.5ZM411.416 951.5L427.5 886.5L439.5 848L451.5 830.5L470 827H487.5H493L489.58 838M489.58 838L474.5 886.5L470 917V955.5L474.5 973.5H480L483 959.5V870L489.58 838ZM489.58 838L502 812.5L513.25 810M577.5 827L572.5 818L552.5 807.5H524.5L513.25 810M577.5 827V856.5M577.5 827V807.5L589.5 792L599.5 782H614.5L623 788.5L627.5 807.5L634.5 830.5L643 852L654 870L661 877.5V959.5L665.5 987.5V1022V1043H931L1017.5 1035.5L1065 1020L1047.5 1032.5L1017.5 1048.5L963 1063H654L645 1106.5L627.5 1150.5L609.5 1188L601.5 1208.5L598 1227L631.5 1169L661 1114.5L677 1072L683 1058L691.5 1018.5L814.5 1022H926.5H986.5L1065 1003L1067.5 998.5L1062.5 906L1056 799.5L1052 722L1048 640L1041.5 557L1037 467L1031 387L1025.5 310L1019.5 231.5L1016 136L1026.5 124.5L1041 114.5L1057.5 104.5L1074 96L1095 88.5L1118.5 83.5L1150.5 78.5H1180.5M577.5 856.5L572.5 913V959.5V981.5H577.5L585 973.5V946.5V917L589.5 913L593 902V892L585 877.5L577.5 856.5ZM1180.5 78.5H1188L1218 81L1267 88.5L1288.5 96L1272.5 136L1256.5 129.5L1240 127L1224 129.5L1215 138L1209 148L1206 153V168.5L1209 180.5V200.5L1215 215L1224 232L1237 244L1249 259L1258.5 280L1265.5 297V325.5V361V389L1273 421L1286.5 465.5L1300.5 506L1319.5 536.5L1337.5 560L1354.5 582L1371.5 601.5L1388.5 623.5L1409 652L1423.5 684.5L1435 723L1454.5 785L1468 833L1483 882.5L1495.5 922.5L1506.5 963.5L1511.5 980L1506.5 985L1468 991L1397 1006L1354.5 1014L1307 1021L1247.5 1027L1194.5 1029.5L1094 1021L1155.5 1029.5L1188 1032.5L1273.5 1037.5H1345.5L1410.5 1029L1468 1017.5L1506.5 1006L1518 1003L1521 1008L1558.5 1137.5L1581 1222.5L1548.5 1029L1518 1037.5L1483.5 1048L1441 1053.5L1389.5 1058L1266 1060L1231 1055.5L1191 1050.5L1158 1047.5L1128.5 1042.5L1103.5 1037.5L1099.5 1035.5V967L1095.5 907.5L1090.5 844.5L1087 781L1083 724.5L1079 663.5L1075 609L1071.5 553L1067.5 496L1065 429.5L1060.5 371L1056.5 306.5L1051.5 244L1048 183.5L1046 148L1051.5 140.5L1067.5 127L1088.5 114.5L1099.5 107.5L1116 100L1135.5 92L1152.5 85.5L1180.5 78.5ZM1180.5 78.5L1215 74H1272.5L1310.5 81L1319 78.5L1372.5 25.5L1392.5 12L1407 4.5L1418 2.5L1428 4.5L1448 23.5L1472 61L1494.5 119.5L1505 140.5L1531 175L1542 195V213H1527.5L1502.5 209.5L1472 204L1439 199L1398.5 193L1372.5 188.5L1333 185L1306 180.5L1301 168.5L1282 148L1306 168.5H1325.5L1340.5 155.5L1350 144L1357.5 127L1361.5 119.5L1365 115.5L1392.5 101.5H1398.5V127L1411 144V148L1388.5 175V232L1378.5 244L1365 252.5H1350L1340.5 250L1333 244L1327.5 237.5L1322 232V222H1340.5L1347 225H1365L1372.5 229H1395.5L1421.5 234.5L1472 241L1534.5 250L1582 256.5L1614 262L1648 266.5L1664 264.5L1671.5 256.5V241L1666.5 232.5L1658.5 228L1640.5 226L1614 222L1582 218H1556V228H1549.5V234.5L1544 232.5L1542 237L1534.5 246L1527.5 266.5L1515 299L1505.5 333L1500 369.5L1495.5 405L1492 443.5V478L1500 512.5L1522.5 558L1552 606.5L1569.5 637.5L1598 681L1615 711.5L1625.5 726L1623.5 606.5L1620.5 541L1617 478L1614 409L1611.5 346L1609.5 287.5L1605 206.5V155V140.5L1602 131.5L1595.5 126.5L1590.5 122H1582H1569.5L1549.5 124L1526 123L1515 122L1511.5 114.5L1507.5 108V101.5H1599.5L1605 105.5L1614 114.5V122L1620.5 124L1622 139.5L1624 148.5V213L1631 302.5L1635 396L1640.5 481.5L1645.5 591L1652.5 701.5L1655 760L1647 756L1638.5 747L1661 787.5L1696 852L1732.5 916L1770.5 990L1805 1055L1838.5 1116.5L1867.5 1175.5L1890.5 1220.5L1895 1231H1911.25H1927.5M513.25 810L501.415 808.75M474.5 801.724L489.58 807.5L501.415 808.75M474.5 801.724L470 800L458 792L454.5 786V745.5L449 670.5L445 596L441.5 534L438.5 436.5L432.5 340.5L428 255.5L423.5 178.5H414.5L407 182L401 189.5L397 196.5L390.5 210V221.5L393.5 251L397 321.5L401.5 388.5L405 449L409 519.5L411.5 585L416.5 670.5L422 748L425 803L427.5 833L435 821.5L442.5 818L449 812.5H461H470L474.5 810V801.724ZM472 787L470 730.5L467 664.5L461.5 591.5L458 492.5L453 407L449 324.5L442.5 247L439 185.5V154.5L442.5 144L449 139L456 136L461.5 132.5H474.5H548L576 136L614.5 132.5H647.5L677 129L701.5 121.5L721.5 116L738 111L760.5 105.5L782 101L802 98L822.5 95L847 92H879.5H926L948.5 95L972.5 100L994 105.5L1002.5 107.5L977 105.5H948.5H906.5H861.5L836 107.5L810 111L778.5 116L746.5 124L715.5 132.5L681.5 141.5L641.5 151.5L606.5 156H570.5L478 158.5L468 163.5L461.5 172.5V185.5L463.5 253L468.5 344L476.5 459L487.5 582L493 703.5L498.5 782L501.415 808.75" stroke="black" stroke-width="3"/>
                    </g>
                </svg>

                <div className="main_font_mg">
                    <h1 className="main_font">함께 중요한 사항을 필기해보세요!</h1>
            
                    <h2>수업시간에 들은 내용들을 어떻게 정리하고 계신가요?</h2>
                    <h2>여러군데에 나눠져 필기되어 있으시다면 이용해보세요</h2>
                    <h2>모든 내용을 한 눈에 보기 쉽게 정리할 수 있어요!</h2>
                </div>
            </div>  

            <div className="main_img2">
                {/* <h1>이렇게 활용해보세요!</h1> */}
                <img src={Main_img} className="main_img2_size"/>
            </div>  
            
        </div>
    )
}

export default Main