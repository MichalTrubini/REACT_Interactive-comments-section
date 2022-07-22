import React, {useState} from 'react';

import plusCounter from '../../assets/images/icon-plus.svg';
import minusCounter from '../../assets/images/icon-minus.svg';

import '../../assets/styles/css/counter.css'

const Counter = (props) => {

    const [count, setCount] = useState('');

    const CountSubtractHandler = () => {
        setCount(-1)
    }

    const CountAddHandler = () => {
        setCount(1)
    }

    console.log(count);

    return (
        <div className="counter" id={props.id}>
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