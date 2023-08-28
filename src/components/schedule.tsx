

export default function Schedule() {
    return (
        <div className="bg-[#f7928c] p-10 mx-auto  items-center flex flex-col  md:flex md:flex-row  md:mx-auto">
            <table className=" w-1/2  table-auto flex m-5 flex-col justify-center items-center  border-collapse">

                <thead className="bg-black mb-3 rounded">
                    <tr className="text-white">
                        <th className="px-4 py-2">Día</th>
                        <th className="px-4 py-2">Horario</th>
                    </tr>
                </thead>
                <tbody >
                    <tr className="bg-gray-100 ">
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
            <div className="w-1/2 flex  m-5 flex-col justify-center items-center  ">
                <img className=" md:w-1/2" src="/images/calendar.png" alt="calendari-img" />

            </div>
        </div>

    )
}
