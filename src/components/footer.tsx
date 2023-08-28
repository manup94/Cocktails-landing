
export default function Footer() {
    return (
        <div className="p-5 mx-auto text-white bg-[#5e323a]">
            <div className="flex flex-col md:flex-row justify-between">
                <div className="md:w-1/4">
                    <h3 className="text-xl font-bold mb-4">Contacto</h3>
                    <p>Dirección: Gran via, 7, Madrid</p>
                    <p>Teléfono: +123 456 789</p>
                    <p>Email: info@origincocktails.com</p>
                </div>
                <div className="md:w-1/4 mt-6 md:mt-0">
                    <h3 className="text-xl font-bold mb-4">Síguenos</h3>
                    <div className="flex space-x-4">
                        <a href="#" className="hover:text-[#f7928c]">
                            <img className="w-1/3" src="/images/facebook.png" alt="fb-img" />
                        </a>
                        <a href="#" className="hover:text-[#f7928c]">
                            <img className="w-1/3" src="/images/twitter.png" alt="twitter-img" />
                        </a>
                        <a href="#" className="hover:text-[#f7928c]">
                            <img className="w-1/3" src="/images/instagram.png" alt="instagram-img" />
                        </a>
                    </div>
                </div>
            </div>
            <hr className="my-6 border-[#f7928c]" />
            <p className="text-center">© 2023 Origin Cocktails. Todos los derechos reservados.</p>
            <p className="text-center">Desarrollado a modo demostración para Welkhomeclub por Manuel Pérez Prado</p>
        </div>

    )
}
