import React from 'react'
import styled from "styled-components";
import Img04 from "./img/about_04.jpg";
import Img03 from "./img/about_03.jpg";
import Img02 from "./img/about_02.jpg";
import Img01 from "./img/about_01.jpg";

const EngTitle = styled.h3`
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

const Text = styled.p`
    color: #222222;
    font-size: 16px;
    margin-bottom: 40px;
    text-align: center;
    line-height: 1.5;
`;

const ImgList = styled.ul`
    display: flex;
    justify-content: center;
    margin-top: 40px;
`;

const About = () => {
    return (
        <>
            <div>
                <EngTitle className="yellow"><a name="about">About</a></EngTitle>
                <JapTitle>チーズアカデミーについて</JapTitle>
                <Text>チーズアカデミーは、チーズ職人養成学校です。</Text>
                <Text>チーズの素晴らしさを、自給自足を通じて、できるだけ多くの人に知っていただきたい。
                <br/>そして、食卓にはいつもチーズがあった、あの頃の当たり前をこの手で取り戻したい。</Text>
                <Text>そんな思いから、チーズ職人養成学校「チーズアカデミーTOKYO」は歩みを始めています。</Text>
                <Text>卒業後、チーズ自給自足のバックアップはもちろんのこと、
                <br/>チーズ職人への就職・転職もサポートします。</Text>
                <ImgList>
                    <li><img src={Img04} alt="ピザの画像"/></li>
                    <li><img src={Img03} alt="農家の画像"/></li>
                    <li><img src={Img02} alt="農地の画像"/></li>
                    <li><img src={Img01} alt="テイスティングの画像"/></li>
                </ImgList>    
            </div>
        </>
    )
}

export default About
