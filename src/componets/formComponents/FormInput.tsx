import React, {FC, useState} from "react";
import {FormInputType, FormInputValue} from "../FormInput.types";
import Error from "../icons/Error";

interface FormInputProps  {
    title: string;
    handleChange: (value: FormInputValue) => void;
    validator?: (value: string) => boolean;
    field: string;
    type?: FormInputType;
}



const FormInput: FC<FormInputProps> = ({title, type = FormInputType.TEXT, handleChange, field, validator}) => {

    const [value, setValue] = useState<string>("")
    const [error, setError] = useState<boolean>(false)
    const setInputValue = (e:any) => {
        if(validator && !validator(e.target.value) && e.target.value !== ""){
            setError(true)
        } else {
            setError(false)
        }
        handleChange( { field, value: e.target.value, isValid: validator ? validator(e.target.value) :  true})
        setValue(e.target.value)
    }


    return (
        <div style={{position: "relative"}}>
            <label>{title}</label>
                {error ? <Error style={{position: "absolute", right: 12, top: 40, zIndex: 5}}/> : null}
                <input style={{ color: {value} ? "#413C5F" : "#C0BCDF", position: "relative"}}
                       type={type === FormInputType.PASSWORD ? "password" : "text"} placeholder={`input ${title}`}
                       value={value}
                       onChange={(e) => setInputValue(e)}
                />
                {error ? <span className="error-message">Incorrect Data</span> : null}
        </div>

    );
}

export default FormInput;
