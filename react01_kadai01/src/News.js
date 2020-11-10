import React from 'react'
import styled from "styled-components";
import NewsImg from "./img/news_img.jpg";

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

const ArticleList = styled.ul`
    display: flex;
    justify-content: center;
`;

const Article = styled.div`
    width: 300px;
    margin: 0 15px 60px 15px;
    font-size: 16px;
`;

const Date = styled.p`
    padding: 30px 0 24px 0;
    font-size: 16px;
`;
const ArticleText = styled.p`
    line-height: 1.5;
    text-align: justify;
    font-size: 16px;
`;
const Button = styled.a`
    display: block;
    text-align: center;
    background-color: #ffd61a;
    font-size: 18px;
    width: 300px;
    height: 60px;
    margin: 0 auto;
    color: white;
    line-height: 60px;
    margin-bottom: 60px;
    text-decoration: none;
    cursor: pointer;
`;


const News = () => {
    return (
        <div>
            <EngTitle className="yellow"><a name="news">News</a></EngTitle>
            <JapTitle>ニュース</JapTitle>
            <ArticleList>
                <li>
                    <Article>
                        <img src={NewsImg} alt="ニュースの画像"/>
                        <Date>2016/11/18</Date>
                        <ArticleText>チーズアカデミー卒業生のコスゲさんによる
                        チーズだけをふんだんに使用した話題のピザ屋
                        「Kosuge Pizza」が渋谷でオープンしました！</ArticleText>
                    </Article>
                </li>
                <li>
                    <Article>
                        <img src={NewsImg} alt="ニュースの画像"/>
                        <Date>2016/11/18</Date>
                        <ArticleText>チーズアカデミー卒業生のコスゲさんによる
                        チーズだけをふんだんに使用した話題のピザ屋
                        「Kosuge Pizza」が渋谷でオープンしました！</ArticleText>
                    </Article>
                </li>
                <li>
                    <Article>
                        <img src={NewsImg} alt="ニュースの画像"/>
                        <Date>2016/11/18</Date>
                        <ArticleText>チーズアカデミー卒業生のコスゲさんによる
                        チーズだけをふんだんに使用した話題のピザ屋
                        「Kosuge Pizza」が渋谷でオープンしました！</ArticleText>
                    </Article>
                </li>
            </ArticleList>
            <Button href="#">More</Button>
        </div>
    )
}

export default News
