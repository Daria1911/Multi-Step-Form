import React, {FC, useEffect, useMemo, useState} from "react";
import {FormInputValue} from "./FormInput.types";
import {validateEmail} from "../validators";


interface FormStageProps {
    fields: string[];
    updateStep: () => void;
    children: React.ReactNode;
    validationResults?: {[key: string]: boolean};
}
const FormStage: FC<FormStageProps> = ({fields, updateStep, children, validationResults}) => {
    const isValid = useMemo(() => {
        if(!validationResults) {
            return true;
        }
       return  Object.entries(validationResults)
            .filter(([key]) => fields.includes(key))
            .every(([key, value]) => value)
    }, [validationResults]);

    return <div className="form-container">
        <form onSubmit={(e) => e.preventDefault()}>
            {children}
            <button className={`${isValid ? "active-button" : ""}`}  onClick={() => updateStep()}>
                {!fields.length ? "Complete" : "Continue"}
            </button>
        </form>
    </div>
}

export default FormStage;