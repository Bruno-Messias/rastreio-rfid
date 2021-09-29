interface WorkflowCardProps {
    nomeWorkflow: string
}

export const WorkflowCard = (props: WorkflowCardProps) => {
    return (
        <button className={`
            bg-white text-gray-800 font-bold rounded border-b-2
            border-blue-500 hover:border-blue-600 
            hover:text-black shadow-2xl py-2 px-6 inline-flex items-center m-5 w-80
            transform hover:scale-110 motion-reduce:transform-none
        `}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <h1 className = "w-80 text-center">{props.nomeWorkflow}</h1>
        </button>
    )
}