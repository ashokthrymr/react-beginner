import React, { useState } from 'react';

const Hook = () => {
    let [count, setCount] = useState(0);
    return (
        <React.Fragment>
            <p>I am from HOOKS</p>
            <p>You clicked  {count} times</p>
            <button onClick={() => setCount(count + 1)}>Click</button>
        </React.Fragment>
    )
}
export default Hook