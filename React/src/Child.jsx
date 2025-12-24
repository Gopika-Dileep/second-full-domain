function Child({setmsg}){
    function handleclick(){
        setmsg("button clicked ,data from child")
    }
    return(
        <>
        <button onClick={handleclick}>click</button>
        </>
    )
}

export default Child