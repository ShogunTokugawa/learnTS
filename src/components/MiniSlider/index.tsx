import React, {useState} from "react";
import Button from "../Button";

type TProps = {
    links: string[];
};

const Minislider: React.FC<TProps> = ({links}) => {

    const [count, setCount] = useState<number>(0);

    const handlerPrevClick = () => {
        if (count !== 0) {
            setCount(count - 1)
        } else {
            setCount( links.length - 1)
        }
    };

    const handlerNextClick = () => {
        if (links.length - 1 > count) {
            setCount(count + 1)
        } else {
            setCount( 0)
        }
    };

    return (
        <>
            <img src={links[count]} alt={''}/>
            <p>{count}</p>
            <Button onClick={handlerPrevClick}>Назад</Button>
            <Button onClick={handlerNextClick}>Вперед</Button>
        </>
    );
};

export default Minislider;