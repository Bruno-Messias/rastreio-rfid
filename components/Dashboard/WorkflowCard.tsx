interface WorkflowCardProps {
    nomeWorkflow: string
}

export const WorkflowCard = (props: WorkflowCardProps) => {
    return (
        <div className="flex flex-wrap ">
            <img src="https://icon-library.com/images/processes-icon/processes-icon-9.jpg" />
            <h1>{props.nomeWorkflow}</h1>
        </div>
    )
}