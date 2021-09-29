
interface WorkflowCardProps{
    nomeWorkflow : string
}

export default function WorkflowCard(props : WorkflowCardProps){
    return(
        <div className = "h-1 w-20 bg-indigo-500 rounded">
            <img src = "https://icon-library.com/images/processes-icon/processes-icon-9.jpg"/>
            <h1>{props.nomeWorkflow}</h1>
        </div>
    )
}