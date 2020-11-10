import React from 'react'
import styled from "styled-components";

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

const ContactText = styled.p`
    color: #222222;
    font-size: 16px;
    margin-bottom: 30px;
    text-align: center;
    line-height: 1.5;
`;

const FormItem = styled.form`
    margin-top: 70px;
`;

const TableItem = styled.table`
    margin: 0 auto;
    font-size: 16px;
    color: black;
    text-align: left;
`;

const TableRow = styled.tr`
    border-top: solid 2px #bfbfbf;
    border-bottom: solid 2px #bfbfbf;
`;

const Question1 = styled.th`
    width: 240px;
    padding: 8px 64px 8px 16px;
    line-height: 1.5;
    vertical-align: center;
`;
const Question2 = styled.th`
    width: 240px;
    padding: 8px 64px 8px 16px;
    line-height: 1.5;
    vertical-align: top;
`;
const Answer = styled.td`
    width: 400px;
    padding: 8px 0 8px 8px;
    border-left: solid 2px #bfbfbf;
`;

const AnswerTextbox = styled.input`
    width: 328px;
    height: 36px;
    border: solid 1px #bfbfbf;
    font-size: 16px;
`;

const AnswerSelectbox = styled.select`
    width: 335px;
    height: 40px;
    border: solid 1px #bfbfbf;
    font-size: 16px;
`;

const CheckList = styled.li`
    padding-bottom: 24px;
    font-size: 14px;
`;

const AnswerTextarea = styled.textarea`
    width: 330px;
    border: solid 1px #bfbfbf;
    resize: none;
    height: 150px;
    font-size: 16px;
`;

const Button = styled.button`
    display: block;
    text-align: center;
    background-color: #ffd61a;
    font-size: 18px;
    width: 300px;
    height: 60px;
    margin: 0 auto;
    color: white;
    line-height: 60px;
    margin-top: 30px;
    border: none;
    cursor: pointer;
`;

const Contact = () => {
    return (
        <>
            <div>
                <EngTitle><a name="contact">Contact</a></EngTitle>
                <JapTitle>説明会お申し込み・お問い合わせ</JapTitle> 
                <ContactText>ぜひ1度、足を運んでみませんか。説明会は随時開催中。
                    <br/>その他、お問い合わせもお気軽にどうぞ。お待ちしております。</ContactText>
                <ContactText>※チーズアカデミーは実際には存在しません。
                    <br/>間違っても問い合わせしないようお願いいたします。</ContactText>
        
                <FormItem action="#" method="POST">
                <TableItem>
                    <TableRow>
                        <Question1>名前</Question1> 
                        <Answer>
                            <AnswerTextbox type="text" name="name" id="name"/>
                        </Answer>
                    </TableRow>
                    <TableRow>
                        <Question1>カナ</Question1>
                        <Answer>
                            <AnswerTextbox type="text" name="kana" id="kana"/>
                        </Answer>
                    </TableRow>
                    <TableRow>
                        <Question1>メールアドレス</Question1>
                        <Answer>
                            <AnswerTextbox type="email" name="email" id="email"/>
                        </Answer>
                    </TableRow>
                    <TableRow>
                        <Question2>チーズアカデミーを<br/>知ったきっかけ</Question2>
                        <Answer>
                        <AnswerSelectbox name="kikkake" id="kikkake">
                            <option value="google">google検索</option>
                            <option value="sns">SNS</option>
                            <option value="shoukai">紹介</option>
                            <option value="tamatama">たまたま通りかかった</option>
                            <option value="other">その他</option>
                        </AnswerSelectbox>
                    </Answer>
                    </TableRow>
                    <TableRow>
                        <Question2>志望動機</Question2>
                        <Answer>
                            <ul>
                                <CheckList>
                                    <label for="kigyou"><input type="checkbox" name="kigyou" id="kigyou"/>起業をしたい</label> 
                                </CheckList>
                                <CheckList>
                                    <label for="shushoku"><input type="checkbox" name="shushoku" id="shushoku"/>チーズ系企業に就職・転職したい</label>
                                </CheckList>
                                <CheckList>
                                    <label for="shigoto"><input type="checkbox" name="shigoto" id="shigoto"/>チーズと関わる仕事をしており、仕事に生かしたい</label>
                                </CheckList>
                                <CheckList>
                                    <label for="kyouyou"><input type="checkbox" name="kyouyou" id="kyouyou"/>チーズの教養を身につけたい</label>
                                </CheckList>
                            </ul>
                        </Answer>
                    </TableRow>
                    <TableRow>
                        <Question2>詳細</Question2>
                        <Answer>
                            <AnswerTextarea name="detail" id="detail"></AnswerTextarea>
                        </Answer>
                    </TableRow>
                </TableItem>
                <Button type="submit">送信</Button>
                </FormItem>
            </div>
        </>
    )
}

export default Contact
