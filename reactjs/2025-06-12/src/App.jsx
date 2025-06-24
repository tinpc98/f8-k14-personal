import './App.css'
import {useEffect, useState} from "react"

function App() {
    let [count, setCount] = useState(0)

    const onClick = () => {
        setCount((count ) => count + 1)
        setCount((count ) => count + 1)
        setCount((count ) => count + 1)
    }
    // vue - watch
    useEffect(() => {
        console.log(count)
    },[count])
    //mounted vue onMounted
    useEffect(() => {
        console.log(count)
    })

    // close any page -> unMounted

    return (
        <>
        <h1>count:{count}</h1>
        <button onClick={onClick}> click me</button>
        </>
    )
}
export default App
