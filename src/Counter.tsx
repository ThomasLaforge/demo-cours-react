import { useCallback, useState } from "react"

function Counter() {
    const [count, setCount] = useState(0)

    const handleIncrement = useCallback(
        () => { setCount(count + 1) },
        [count]
    )

    return (
        <div>
            <h1>Counter</h1>
            <button onClick={handleIncrement}>Incrémenter</button>
            <p>{count}</p>
        </div>
    )
}

export default Counter