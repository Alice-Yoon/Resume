import React, {useState} from 'react';
import './project.css';
import Footer from '../Footer/Footer';

function Project() {

    const [ToggleViewProject, setToggleViewProject] = useState(false)

    const onClickToggleViewProject = () => {
        setToggleViewProject(!ToggleViewProject)
    }


    return (
        
        <div>
            <div className="resume__header">
                <p style={{color: `${ToggleViewProject ? 'slategrey' : 'black'}`}}>
                    " 작은 프로젝트라도 배운 기술을 활용해 
                    실생활에 도움이 되는 것을 만들어 보고 싶었고 <br/><br/>
                    다른 사람들에게도 도움이 되는 것을 만들어 보고 싶었습니다. "
                </p>
                <button onClick={onClickToggleViewProject} 
                        style={{
                            backgroundColor: `${ToggleViewProject ? 'rgba(0,0,0,0.7)' : 'rgba(0,0,0,0.3)'}`,
                            color: 'white'}}>

                            {ToggleViewProject ? 'Hide Project' : 'View Project'}
                </button>
            </div>
            
        {ToggleViewProject && 
            <>
            <div className="resume__contents">
                <div className="resume__contents__projects">

                    <h3 className="resume__contents__titles">[ Project ]</h3>

                    <div className="project1__container">
                        <h4><strong>= 과외 학생들을 위한 복습 페이지 =</strong></h4>
                        <p>
                            그 동안 영어와 한국어를 가르치는 강사로 일 해 왔습니다.<br/>
                            코딩 공부를 하는 와중에도 계속 일대일 과외를 진행했습니다.
                            <br/><br/>
                            작은 프로젝트라도 배운 기술을 활용해 실생활에 도움이 되는 것을<br/> 
                            만들어 보고 싶었고, <br/>
                            제가 가르치고 있는 학생들에게도 도움이 되는 것을 만들어 보고 싶었습니다.
                            <br/><br/>
                            영어와 한국어 모두 '회화 중심'의 수업을 진행하였고,<br/>
                            배운 표현들을 활용한 문장들을 복습하고 연습하는 숙제를 항상 내 주었습니다.
                            <br/><br/>
                            학생들이 매 수업에서 배운 문장들을 복습할 수 있는 <br/>
                            간단한 페이지를 만들어 봤습니다.
                        </p>
                        <div className="project-link">
                            해당 project 링크
                        </div>
                    </div>
                </div>

                <div className="resume__contents__languages">
                    <h3 className="resume__contents__titles">[ Used Languages ]</h3>

                    <div className="resume__contents__languages__container">
                        <h4 className="section-title">
                            <span>Front-End</span>
                        </h4>

                        <div className="resume__contents__icon-container">

                            {/* HTML */}
                            <div className="language_logo">
                                <img src="https://img.icons8.com/color/48/000000/html-5.png"/>
                                <small>HTML</small>
                            </div>

                            {/* CSS */}
                            <div className="language_logo">
                                <img src="https://img.icons8.com/color/48/000000/css3.png"/>
                                <small>CSS</small>
                            </div>

                            {/* Javascript */}
                            <div className="language_logo">
                                <img src="https://img.icons8.com/color/48/000000/javascript.png"/>
                                <small>Javascript</small>
                            </div>

                            {/* React */}
                            <div className="language_logo react">
                                <img src="https://img.icons8.com/ultraviolet/40/000000/react.png"/> 
                                <small>React JS</small>                   
                            </div>
                        </div>
                    </div>

                    <div className="resume__contents__languages__container">
                        <h4 className="section-title">
                            <span>Back-End</span>
                        </h4>

                        <div className="resume__contents__icon-container">

                            {/* Node JS */}
                            <div className="language_logo">
                                <img src="https://img.icons8.com/color/48/000000/nodejs.png"/>
                                <small>Node JS</small>
                            </div>

                        </div>
                    </div>

                    <div className="resume__contents__languages__container">
                        <h4 className="section-title">
                            <span>Data Base</span>
                        </h4>

                        <div className="resume__contents__icon-container">
                            {/* Mongo DB */}
                            <div className="language_logo">
                                <img src="https://img.icons8.com/color/48/000000/mongodb.png"/>
                                <small>MongoDB</small>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
            <Footer />
            </>
            }
        </div>

        
        
    )
}

export default Project
