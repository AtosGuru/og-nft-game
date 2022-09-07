import React, { useCallback, useState } from "react";
import Dropdown, { Option } from 'react-dropdown';
import "react-dropdown/style.css";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import "./CustomDropdown.scss";


interface IDropdownProps {
    data: Option[]
    className?: string
    isDisabled?: false
    setIsDisabled?: () => {}
    onChange: (value: any) => void
}

export const CustomDropdown: React.FC<IDropdownProps> = ({ data, className, isDisabled, setIsDisabled, onChange }) => {

    const [ currentValue, setCurrentValue ] = useState(data[0])

    const dropdownValueOnChange = useCallback((option: Option) => {
        onChange(option)
        setCurrentValue(option)
    }, [ onChange, setCurrentValue ])
    
    return (
        <div className="dropdown">
            <Dropdown 
                className={`dropdown ${className}`} 
                options={data} 
                value={currentValue || data[0]} 
                onChange={dropdownValueOnChange} 
                arrowOpen={<IoIosArrowUp className="dropdown__icon" />}
                arrowClosed={<IoIosArrowDown className="dropdown__icon" />}
                disabled={isDisabled}
            />
        </div>
    )
}



