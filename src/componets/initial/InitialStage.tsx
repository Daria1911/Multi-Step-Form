import React, {useState, FC} from "react";
import "../../App.css"
import Dropdown from "../formComponents/Dropdown";
import FormInput from "../formComponents/FormInput";
import {validateEmail, validateUsername, validateCountry} from "../../validators";
import {FormInputValue} from "../FormInput.types";
import FormStage from "../FormStage";

interface FirstStageProps {
    handleUser: (value: FormInputValue) => void;
    updateStep: () => void;
    validationResults: {[key: string]: boolean};
}

const InitialStage: FC<FirstStageProps> = ({ handleUser, updateStep, validationResults}) => {

    const [open, setOpen] = useState<boolean>(false);

    return (
        <FormStage fields={["userName", "email", "country"]} updateStep={() => updateStep()} validationResults={validationResults}>
            <FormInput title="Username" field="userName" handleChange={handleUser} validator={validateUsername} />
            <FormInput title="Email" field="email" handleChange={handleUser} validator={validateEmail}/>
            <Dropdown title="Country" field="country" setDropDownState={() => setOpen(!open)} isOpen={open}
                      handleUser={handleUser} validator={validateCountry}/>
        </FormStage>
    );
}

export default InitialStage;


