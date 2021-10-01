interface DropItemProps{
    nome:string
}

export default function DropItem(props:DropItemProps) {
    return(
        <option>{props.nome}</option>
    )
    
}