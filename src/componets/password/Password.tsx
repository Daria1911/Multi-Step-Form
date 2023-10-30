import React, {FC, useState} from "react";
import "../../App.css";
import FormInput from "../formComponents/FormInput";
import {FormInputType, FormInputValue} from "../FormInput.types";
import FormStage from "../FormStage";
import {validatePassword, validateRepeatPassword} from "../../validators";


interface PasswordProps {
    handleUser: (value: FormInputValue) => void;
    updateStep: () => void;
    validationResults: {[key: string]: boolean};
}

const Password: FC<PasswordProps> = ({handleUser, updateStep, validationResults}) => {

    const [password, setPassword] = useState("");
    const onPasswordChange = (value: FormInputValue) => {
        setPassword(value.value);
        handleUser(value);
    }

    return (
        <>
            <FormStage fields={["password", "repeatPassword"]} updateStep={() => updateStep()} validationResults={validationResults}>
                <FormInput title="Password" field="password" type={FormInputType.PASSWORD} handleChange={onPasswordChange} validator={validatePassword} />
                <FormInput title="Repeat Password" field="repeatPassword" type={FormInputType.PASSWORD} handleChange={handleUser} validator={validateRepeatPassword(password)} />
            </FormStage>
        </>
    );
}

export default Password;


