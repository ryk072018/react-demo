import React, { useState } from "react";

export default function Example() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>计算结果：{count}</p>
            <button className="btn-click" onClick={() => setCount(count + 1)}>+1</button>
            <button className="btn-click" onClick={() => setCount(count - 1)}>-1</button>
        </div>
    )
}


