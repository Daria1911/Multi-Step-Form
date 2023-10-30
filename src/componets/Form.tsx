import React, {useState} from "react";
import InitialStage from "./initial/InitialStage";
import Password from "./password/Password";
import Review from "./rewiew/Rewiew";
import Stage from "./stage/Stage";
import Header from "./formComponents/Header";
import {FormInputValue} from "./FormInput.types";


const USER : { country: string; password: string; repeatPassword: string; userName: string; email: string } = {
    userName: "",
    email: "",
    password: "",
    repeatPassword: "",
    country: ""
}

const VALIDATION_RESULTS = {
    userName: false,
    email: false,
    password: false,
    repeatPassword: false,
    country: false
};

const isValid = (validationResults: {[key: string]: boolean}) => {
    return true
};
function  FormComponent () {

    const [step, setStep] = useState<number>(1)
    const [user, setUserData] = useState(USER)
    const [validationResults, setValidationResults] = useState(VALIDATION_RESULTS);
    const updateField = ({field, value, isValid}: FormInputValue) => {
        setUserData((prev) => {
            return {...prev, [field]: value};
        });
        setValidationResults({...validationResults, [field]: isValid});
    }

    const incrementStep = () => {
        setStep(step+1)
    }

    const getFields = (step:number) => {
        switch(step){
            case 1: return <InitialStage handleUser={updateField} updateStep={incrementStep} validationResults={validationResults} />
            case 2: return <Password handleUser={updateField} updateStep={incrementStep} validationResults={validationResults}/>
            case 3: return <Review userInfo={user} />
        }
    }

    return (
        <>
            <Header stage={step}/>
            <Stage stage={step}/>
            {getFields(step)}
        </>
    );
}

export default FormComponent;


