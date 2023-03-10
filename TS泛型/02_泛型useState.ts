function useState<Type>(initalState:Type):[Type,(newState:Type)=>void]{
    let state = initalState
    function setState(newState){
        state = newState
    }
    return [state,setState]
}

const [count,setCount] = useState(111)