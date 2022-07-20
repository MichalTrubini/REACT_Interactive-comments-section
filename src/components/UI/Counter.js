import React, {useState} from 'react';

import plusCounter from '../../assets/images/icon-plus.svg';
import minusCounter from '../../assets/images/icon-minus.svg';

import '../../assets/styles/css/counter.css'

const Counter = (props) => {

    const [count, setCount] = useState(0);

    const CountSubtractHandler = () => {
        if (count > 0) setCount(preValue => preValue - 1)
    }

    const CountAddHandler = () => {
        setCount(preValue => preValue + 1)
    }

    console.log(count);

    return (
        <div className="counter">
            <button className="counter__operator-container counter__subcontainer" onClick={CountAddHandler}>
                <img src={plusCounter} alt="count plus" />
            </button>
            <div className='counter__subcontainer'>
                <p className="counter__count">{props.count}</p>
            </div>
            <button className="counter__operator-container counter__subcontainer" onClick={CountSubtractHandler}>
                <img src={minusCounter} alt="count minus" />
            </button>
        </div>
    )
}

export default Counter;