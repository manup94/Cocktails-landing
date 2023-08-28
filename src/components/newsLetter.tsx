
export default function NewsLetter() {
    return (
        <div className="bg-[url('/images/form-bg.jpg')] bg-cover text-white text-center p-5">
            <h3 className="font-bold">Subscribete para las novedades y obtener ofertas unicas</h3>
            <form className="flex  m-5 text-black  flex-col items-center text-center" action="">

                <label className="font-semibold text-white" htmlFor="name">Nombre</label>
                <input className="rounded m-3 border-none text-center md:w-1/2" type="text" />
                <label className="font-semibold text-white" htmlFor="email"> Correo</label>
                <input className="rounded m-3 border-none text-center md:w-1/2" type="email" />
                <label className="font-semibold text-white" htmlFor="phone">Telefono</label>
                <input className="rounded m-3 border-none text-center md:w-1/2" type="text" />
                <button className="md:w-1/3 bg-black m-4 p-2 rounded-lg shadow-white text-white text-lg transition duration-300 shadow-xl transform hover:scale-90 focus:outline-none " type="button">
                    Enviar
                </button>

            </form>
        </div >
    )
}
