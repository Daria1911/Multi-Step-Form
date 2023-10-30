import React, { FC, ReactElement }  from "react";
import "./Stage.css";
interface Props  {
    stage: number;
}


function Stage ({ stage } : Props)  {

    const  getClass = (currentStage: number) => {
        if(stage === currentStage){
            return "active"
        } else if( stage < currentStage){
            return "non-active"
        } else {
            return "disabled"
        }
    }


    return (
        <>
            <div className="steps-container">
                <div className="steps-block">
                    <div className={"stage " + getClass(1)}></div>
                    <p className="stage-label">Initial info</p>
                </div>
                <div className="steps-block">
                    <div className={"stage " + getClass(2)}></div>
                    <p className="stage-label">Password screen</p>
                </div>
                <div className="steps-block">
                    <div className={"stage " + getClass(3)}></div>
                    <p className="stage-label">Review</p>
                </div>
            </div>
        </>
    );
}

export default Stage;
