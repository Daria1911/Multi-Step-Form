import React, {useState, FC, useEffect, useRef} from "react";
import "./Dropdown.css"
import ArrowDown from "../icons/ArrowDown";
import ArrowUp from "../icons/ArrowUp";
import Check from "../icons/Check";
import {FormInputValue} from "../FormInput.types";
import { useOutsideClick } from './OutsideClick';

interface dataCountries {
    name: {
        common: string;
        official: string;
    };
}

interface Country {
    countries: string[]
}

interface DropDown {
    title: string;
    field: string;
    setDropDownState: (value: boolean) => void;
    isOpen: boolean;
    handleUser: (value: FormInputValue) => void;
    validator?: (value: string) => boolean;

}


const Dropdown: FC<DropDown> = ({title,field,  setDropDownState, isOpen, handleUser, validator}) => {

    const [countries, setCountries] = useState<any[]>([]);
    const [selected, setSelected] = useState<any>(null);

    const ref = useOutsideClick(() => {
        if(isOpen){
            setDropDownState(!isOpen)
        }

    });

    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all")
            .then(response => response.json())
            .then(data => {
                const countryName: dataCountries[] = data.map((elem: any) => elem.name.common)
                countryName.sort()
                setCountries(countryName)
            })
    }, [])



    const handleSelect = (param:string) => {
        handleUser( { field, value: param, isValid: validator ? validator(param) :  true})
        setSelected(param)
    }


    return (
        <div>
            <label>{title}</label>
              <div className="dd-header-title" onClick={() => setDropDownState(isOpen)} ref={ref} >
                  <span style={{color: selected ? "black" : ""}} >
                          {selected ? selected : "Select Country"}
                  </span>
                  <div >
                      {isOpen ? <ArrowUp /> : <ArrowDown/>}
                  </div>

                {isOpen ?
                      <div className="dd-list" >
                          {countries.map((country:any, index) => {
                              return <div className ={`dd-list-item ${selected === country? "active-item" : ""}`}
                                          key={index} onClick={() => handleSelect(country)}>
                                  {country} {selected === country ? <Check/> : null}
                              </div>
                          })}
                      </div>
                : null }
            </div>
        </div>
    );
}

export default Dropdown;


