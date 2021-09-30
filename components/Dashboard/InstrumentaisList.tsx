import Instrumental from "../../models/Instrumental";
import InstrumentalCard from "./InstrumentalCard";

interface InstrumentaisListProps{
    instrumentais: Instrumental[]
}

export default function InstrumentaisList(props:InstrumentaisListProps) {
    return(
        <div className = "rounded-lg p-6 shadow-xl bg-white m-2">
            <InstrumentalCard/>
        </div>
    )
    
}