export default function TableHistory() {
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
                
                <tbody className="bg-grey-light flex flex-col items-center justify-between h-96 overflow-y-scroll w-full">
                    <tr className="flex w-full mb-1">
                        <td className="p-4 w-1/4">Preparo</td>
                        <td className="p-4 w-1/4">Montagem da Caixa</td>
                        <td className="p-4 w-1/4">28/10/2021</td>
                        <td className="p-4 w-1/4">10:41</td>
                    </tr>
                    <tr className="flex w-full mb-1">
                        <td className="p-4 w-1/4">Preparo</td>
                        <td className="p-4 w-1/4">Inserir Itens na Autoclave</td>
                        <td className="p-4 w-1/4">28/10/2021</td>
                        <td className="p-4 w-1/4">11:25</td>
                    </tr>
                    <tr className="flex w-full mb-1">
                        <td className="p-4 w-1/4">Preparo</td>
                        <td className="p-4 w-1/4">Esterelizar</td>
                        <td className="p-4 w-1/4">28/10/2021</td>
                        <td className="p-4 w-1/4">12:30</td>
                    </tr>
                    <tr className="flex w-full mb-1">
                        <td className="p-4 w-1/4">Expurgo</td>
                        <td className="p-4 w-1/4">Lavagem Ultrassônica</td>
                        <td className="p-4 w-1/4">28/10/2021</td>
                        <td className="p-4 w-1/4">13:11</td>
                    </tr>                  
                </tbody>
            </table>
        </div>
    )

}