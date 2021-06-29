import { useState } from 'react';

function State() {
    // Объявляем новую переменную состояния, которую назовём "count"
    const [count, setCount] = useState<number>(0);
    const [countSecond, setCountSecond] = useState<number>(0);
    const [countThird, setCountThird] = useState<number>(0);
    const [countFourth, setCountFourth] = useState<number>(0);

    return (
        <>
            <p>Вы кликнули {count} раз</p>
            <button onClick={() => setCount(count + 1)}>
                Кликни меня!
            </button>

            <p>Вы кликнули {countSecond} раз</p>
            <button onClick={() => setCountSecond(countSecond + 1)}>
                Кликни меня!
            </button>
            <p>{
                countSecond < 10
                    ? 'count меньше 10'
                    : countSecond === 10
                        ? 'count равен 10'
                        : 'count больше 10'
            }</p>

            <button onClick={() => {
                if (countThird > 0) {
                    setCountThird(countThird - 1)
                }
            }}>
                -
            </button>
            <p>{countThird}</p>
            <button onClick={() => setCountThird(countThird + 1)}>
                +
            </button>

            <p>Вы кликнули {countFourth} раз</p>
            <button onClick={() => setCountFourth(countFourth + 1)}>
                +1
            </button>
            <button onClick={() => setCountFourth(countFourth + 5)}>
                +5
            </button>
            <button onClick={() => setCountFourth(countFourth + 10)}>
                +10
            </button>
            <button onClick={() => setCountFourth(countFourth * countFourth)}>
                *
            </button>
        </>
    );
}

export default State;