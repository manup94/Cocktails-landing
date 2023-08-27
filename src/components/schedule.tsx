

export default function Schedule() {
    return (
        <table className="p-10 bg-[#f7928c] table-auto flex flex-col justify-center items-center w-full border-collapse">

            <thead className="bg-gray-200 mb-3">
                <tr>
                    <th className="px-4 py-2">Día</th>
                    <th className="px-4 py-2">Horario</th>
                </tr>
            </thead>
            <tbody>
                <tr className="bg-gray-100">
                    <td className="px-4 py-2">Lunes</td>
                    <td className="px-4 py-2">Cerrado</td>
                </tr>
                <tr>
                    <td className="px-4 py-2">Martes</td>
                    <td className="px-4 py-2">18:00 - 02:00</td>
                </tr>
                <tr className="bg-gray-100">
                    <td className="px-4 py-2">Miércoles</td>
                    <td className="px-4 py-2">18:00 - 02:00</td>
                </tr>
                <tr>
                    <td className="px-4 py-2">Jueves</td>
                    <td className="px-4 py-2">18:00 - 03:00</td>
                </tr>
                <tr className="bg-gray-100">
                    <td className="px-4 py-2">Viernes</td>
                    <td className="px-4 py-2">20:00 - 04:00</td>
                </tr>
                <tr>
                    <td className="px-4 py-2">Sábado</td>
                    <td className="px-4 py-2">20:00 - 05:00</td>
                </tr>
                <tr className="bg-gray-100">
                    <td className="px-4 py-2">Domingo</td>
                    <td className="px-4 py-2">20:00 - 04:00</td>
                </tr>
            </tbody>
        </table>

    )
}
