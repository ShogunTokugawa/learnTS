import React, {useState} from "react";

type TProps = {
    text: string,
};

const Longtext: React.FC<TProps> = ({text}) => {
    const [isShow, setIsShow] = useState<boolean>(false);

    const handlerClick = () => {
        setIsShow(!isShow);
    };

    const spliced = text.split('.', 1) ;

    return (
        <>
            { isShow
                ? (<p>{text}</p>)
                : (<p>{spliced}</p>)
            }
            <button onClick={handlerClick}>
                { isShow ? 'скрыть' : '...' }
            </button>
        </>
    );
}

export default Longtext;