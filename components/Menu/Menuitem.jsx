
export default function Menuitem(props) {
    return (
        <li className="px-2 py-3 hover:bg-gray-100 rounded-r-3xl">
            <a className="flex justify-center items-center h-full w-full inline-block" href={props.href}>
                <object data={props.icon} type="image/svg+xml" className="object-scale-down h-7 pointer-events-none"/>
            </a>

            <a className="flex items-center justify-center" href={props.href}>
                {props.text}
            </a>
            
        </li>
    )
}