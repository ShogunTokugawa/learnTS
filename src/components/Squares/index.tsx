import React, {useState} from "react";

import {
    RedSquare,
    GreenSquare,
} from "./style";

const Squares = () => {

    const [isShowRed, setIsShowRed] = useState<boolean>(true);
    const [isShowGreen, setIsShowGreen] = useState<boolean>(true);

    const handlerRedClick = () => {
        setIsShowRed(false);
        setIsShowGreen(true);
    }

    const handlerGreenClick = () => {
        setIsShowGreen(false);
        setIsShowRed(true);
    }

    return (
        <>
            { isShowRed && (<RedSquare onClick={handlerRedClick}/>) }
            { isShowGreen && (<GreenSquare onClick={handlerGreenClick}/>) }
        </>
    );
};

export default Squares;