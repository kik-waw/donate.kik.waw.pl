import React from "react";
import CountUp from 'react-countup';

export type CounterType = {
    number: number
}

const Counter: React.FC<CounterType> = ({ children, number  }) => {
    return (
        <div className="counter">
            <span>
                <CountUp end={number} duration={2} />
            </span>
            <p>{children}</p>
        </div>
    )
}

export default Counter;