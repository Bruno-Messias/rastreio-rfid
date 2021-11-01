import { ReactChild, ReactFragment, ReactPortal } from "react";
import History from "../../models/History";

interface TableProps {
    historyList: any
}

export default function TableHistory(props: TableProps) {
    return (
        <div className="container h-max overflow-y-hidden">
            <table className="text-left w-full h-96 overflow-y-hidden">
                <thead className="bg-blue-500 flex text-white w-full rounded-md">
                    <tr className="flex w-full mb-2">
                        <th className="p-4 w-1/4">Etapa</th>
                        <th className="p-4 w-1/4">Processo</th>
                        <th className="p-4 w-1/4">Data</th>
                        <th className="p-4 w-1/4">Hora</th>
                    </tr>
                </thead>

                <tbody className="bg-grey-light flex flex-col items-center justify-start h-96 overflow-y-scroll w-full">
                    {console.log("reatualizou")}
                    {props.historyList.map((history: any) => {
                        return [
                            <tr key={history.historyID} className="flex w-full mb-1">
                                <td className="p-4 w-1/4">{history.stageDesc}</td>
                                <td className="p-4 w-1/4">{history.processDesc}</td>
                                <td className="p-4 w-1/4">{history.historyDate}</td>
                                <td className="p-4 w-1/4">{history.historyHour}</td>
                            </tr>
                        ]

                    }).reverse()}

                </tbody>
            </table>
        </div>
    )

}