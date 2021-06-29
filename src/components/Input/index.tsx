import React, {useState} from "react";

type TProps = {
    min: number,
    max: number,
    //type: string,
    //placeholder: string,
    //valueText: string,
};

const Input: React.FC<TProps> = ({
    min,
    max,
    //type,
    //placeholder,
    //valueText,
}) => {
    const [value, setValue] = useState<string>('');

    const handlerChange = (e: any) => {
        setValue(e.target.value);
    }

    return(
        <>
            {value.length < min && (
                <label>
                    Должно быть не меньше {min}
                </label>
            )}
            {value.length > max && (
                <label>
                    Должно быть не больше {max}
                </label>
            )}
            <input onChange={handlerChange} value={value} />
        </>

    );
};

export default Input;

//type={type} placeholder={placeholder}