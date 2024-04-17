import { useState } from "react";

function Counter(props){

    const [count,setCount] = useState(0)
    const increment =() => {
        setCount(count+1)
      }

    return(
        <>
        {props.name+'     --     '}
        {count}
        <button onClick={increment}>+</button>
        </>
    )
}
export default Counter;