import React from 'react'
import styled from "styled-components";

const Background = styled.div`
    background-color: #fafafa;
    padding: 6px 0 60px 0;
    width: 100%;
`;

const EngTitle = styled.h3`
    color: #222222;
    text-align: center;
    font-size: 24px;
    margin: 60px 0 30px 0;
    font-weight: bold;
    text-transform: uppercase;
`;
const JapTitle = styled.p`
    color: #222222;
    font-size: 18px;
    margin-bottom: 60px;
    text-align: center;
`;
const Map = styled.iframe`
    border:0;
    width: 1200px;
    height: 250px;
    margin-bottom: 60px;
`;

const AccessInfo = styled.dl`
    padding: 0 0 0 100px;
`;
const AccessList = styled.div`
    display: flex;  
    margin-bottom: 30px; 
    font-size: 16px;
    color: black;
    justify-content: center;
`;
const AccessItem = styled.dt`
    width: 180px;
`;
const AccessDetail = styled.dd`
    width: 380px;
`;

const Access = () => {
    return (
        <>
            <Background>
                <EngTitle><a name="access">Access</a></EngTitle>
                <JapTitle>会社情報</JapTitle>
                <Map src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.396444816524!2d139.7119021146526!3d35.667239180197576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188c9fa9e2e881%3A0x35396adb5ba7ce03!2z44K444O844K644Ki44Kr44OH44Of44O85p2x5Lqs77yP6LW35qWt5a6244Ko44Oz44K444OL44Ki6aSK5oiQ5a2m5qCh77yI44OX44Ot44Kw44Op44Of44Oz44Kw77yJ!5e0!3m2!1sja!2sjp!4v1597366186703!5m2!1sja!2sjp"></Map>
                    <AccessInfo>
                        <AccessList>
                            <AccessItem>学校名</AccessItem> 
                            <AccessDetail>チーズアカデミーTOKYO</AccessDetail>
                        </AccessList>
                        <AccessList>
                            <AccessItem>事務所所在地</AccessItem>
                            <AccessDetail>〒107-0061  東京都港区北青山3-5-6 青朋ビル2F</AccessDetail>
                        </AccessList>
                        <AccessList>
                            <AccessItem>TEL</AccessItem>
                            <AccessDetail>03-5413-5045</AccessDetail>
                        </AccessList>
                        <AccessList>
                            <AccessItem>FAX</AccessItem>
                            <AccessDetail>03-5413-5046</AccessDetail>
                        </AccessList>
                        <AccessList>
                            <AccessItem>MAIL</AccessItem>
                            <AccessDetail>dummy@cheeseacademy.tokyo</AccessDetail>
                        </AccessList>
                    </AccessInfo>
                </Background>   
        </>
    )
}

export default Access
