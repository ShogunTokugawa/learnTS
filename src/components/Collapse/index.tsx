import React, {useState} from "react";

type TProps = {
    children: React.ReactNode,
};

const Collapse: React.FC<TProps> = ({
    children,
}) => {
    const [isShow, setIsShow] = useState<boolean>(false);

    const handlerClick = () => {
        setIsShow(!isShow)
    };

    return(
        <>
            <button onClick={handlerClick}>
                { isShow ? 'скрыть' : 'показать' }
            </button>

            { isShow && (
                <span>
                    { children }
                </span>
            )}
        </>
    );
};

export default Collapse;