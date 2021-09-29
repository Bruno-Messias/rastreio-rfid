import styles from '../styles/Menu.module.css'

export default function Menuitem(props) {
    return (
            <button className="bg-blue hover:bg-blue-light text-white font-bold py-2 px-4 border-b-4 border-blue-dark hover:border-blue rounded">
                {props.text}
            </button>
    )
}