


const TodoOutput = ({value,dlt,updt})=>{
    return(
        <div id="outputFetch">
            <h1 id="work">{value.work}</h1>
            <h1 id="com">{value.isCompleted ? "Competed" : "Pending"}</h1>
            <button className="btn btn-success" onClick={()=>{
                updt(value.id)
            }}><i class="bi bi-toggle2-on"></i></button>
            <button className="btn btn-danger" onClick={()=>{
                dlt(value.id)
            }}><i class="bi bi-trash3"></i></button>
        </div>
    )
}

export default TodoOutput