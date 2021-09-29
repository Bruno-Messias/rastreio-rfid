interface WorkflowCardProps {
    nomeWorkflow: string
}

export const WorkflowCard = (props: WorkflowCardProps) => {
    return (
        <div className="flex flex-wrap items-center rounded-lg p-6 shadow-xl h-15 content-center ">
            <img src="https://icon-library.com/images/processes-icon/processes-icon-9.jpg" width="40" height="40" />
            <h1>{props.nomeWorkflow}</h1>
        </div>
    )
}