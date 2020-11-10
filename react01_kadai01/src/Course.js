import React from 'react'
import styled from "styled-components";
import CourseImg01 from "./img/course_01.jpg";
import CourseImg02 from "./img/course_02.jpg";
import CourseImg03 from "./img/course_03.jpg";

const EngTitle = styled.h3`
    color: #222222;
    text-align: center;
    font-size: 24px;
    margin: 60px 0 30px 0;
    font-weight: bold;
    text-transform: uppercase;
`;

const Text = styled.p`
    color: #222222;
    font-size: 16px;
    margin-bottom: 60px;
    text-align: center;
    line-height: 1.5;
`;

const CourseBox = styled.ul`
    display: flex;
    justify-content: center;
`;

const CourseImg = styled.div`
    width: 600px;
    height: 400px;
`;

const CourseBg = styled.div`
    background-color: #fafafa;
    width: 600px;
    height: 400px;
    position: relative;
`;

const CourseTextbox = styled.div`
    color: #222222;
    position: absolute;
    padding-left: 50px;
    top: 50%;
    transform: translate(0, -50%);
`;
const CourseTextbox2 = styled.div`
    color: #222222;
    position: absolute;
    padding-right: 50px;
    top: 50%;
    right: 0%;
    transform: translate(0, -50%);
`;

const CourseTitle = styled.h4`
    font-size: 24px;
    font-weight: bold;
    padding-bottom: 40px;
`;
const CourseText = styled.p`
    font-size: 16px;
    line-height: 1.5;
    width: 430px;
    text-align: justify;    
`;

const Course = () => {
    return (
        <div>
            <EngTitle><a name="course">Course</a></EngTitle>
            <Text>未経験からでもスタートができるよう、カリキュラムは多くの専門家や
            <br/>現役チーズ職人のアドバイスのもと、作られました。</Text>
            <CourseBox>
                <li>
                    <CourseImg>
                        <img src={CourseImg01} alt="農地の画像"/>
                    </CourseImg>
                </li>
                <li>
                    <CourseBg>
                        <CourseTextbox>
                            <CourseTitle>本格的な農園を使った実地研修</CourseTitle>
                            <CourseText>チーズアカデミーでは、本格的な農園を使った実地研修を
                            行うことができます。プロとして活躍するチーズ職人も
                            使用するような、広大で環境も整った農園を余すところ
                            なく使い、卒業時には本格的なチーズを自分の力で作れる
                            実践力の養成を目指します。</CourseText>
                        </CourseTextbox>
                    </CourseBg>
                </li>
            </CourseBox>
            <CourseBox>
                    <li>
                        <CourseBg>
                            <CourseTextbox2>
                                <CourseTitle>必要な知識もしっかりと取得</CourseTitle>
                                <CourseText>チーズ作りには、しっかりとした食に関する知識が
                                欠かせません。チーズアカデミーでは、一流講師陣による、
                                チーズ作りに必要ないろはを余すところなく学べます。
                                チーズそのものでなく、栄養学全般を学ぶことも
                                可能ですので、チーズ以外への展開も夢ではないでしょう。
                                </CourseText>
                            </CourseTextbox2>
                        </CourseBg>
                    </li>
                    <li>
                        <CourseImg>
                            <img src={CourseImg02} alt="講師の画像"/>
                        </CourseImg>
                    </li>
            </CourseBox>
            <CourseBox>
                <li>
                    <CourseImg>
                        <img src={CourseImg03} alt="ティスティングの画像"/>
                    </CourseImg>
                </li>
                <li>
                    <CourseBg>
                        <CourseTextbox>
                            <CourseTitle>卒業制作はティスティング審査あり</CourseTitle>
                            <CourseText>チーズアカデミーでは最後の2ヶ月間で卒業制作を実施。
                                卒業制作として、チーズ作りを実際に行います。卒業後、
                                一般参加によるティスティング審査があるため、作り手の
                                目線だけでなく、消費者の目線から、卒業制作作品としての
                                チーズを、しっかりと評価いただくことができます。</CourseText>
                        </CourseTextbox>
                    </CourseBg>
                </li>
            </CourseBox>
        </div>
    )
}

export default Course
