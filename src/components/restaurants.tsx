
export default function Restaurants() {


    const restaurants = [
        {
            title: 'Gran via, 7',
            description: 'Descubre la esencia de la exclusividad en nuestro local de cócteles premium. Sabores exquisitos, creaciones únicas y un ambiente sofisticado te esperan en cada sorbo. Bienvenido a un mundo de elegancia líquida. ',
            number: '654375183',
            img: '/images/restaurant-1.jpg'
        }, {
            title: 'Fuencarral, 5',
            description: 'Explora la perfección líquida en nuestro espacio de cócteles premium. Cada sorbo es un viaje sensorial donde la destreza artesanal y los ingredientes selectos se fusionan para crear experiencias únicas. Bienvenido al arte de los sabores elevados',
            number: '874628453',
            img: '/images/restaurant-2.jpg'
        }, {
            title: 'Paseo de la Castellana, 36',
            description: 'Sumérgete en el lujo de los sabores en nuestro local de cócteles premium. Cada bebida es una expresión de creatividad, diseñada con ingredientes excepcionales para una experiencia insuperable. Descubre la excelencia en cada gota y déjate llevar por un mundo de emociones líquidas.',
            number: '735294723',
            img: '/images/restaurant-3.jpg'
        }
    ]

    return (
        <div className="bg-black p-3 md:flex md:flex-col   ">
            <h2 className="text-[#f9a394]">Nuestros locales</h2>
            <hr />
            <div className=" p-3 md:flex">
                {restaurants?.map(restaurant => {
                    return (
                        <div className="bg-[#f7928c] shadow-white md:w-1/4 mx-auto rounded-2xl shadow-2xl p-4 m-3">
                            <img src={restaurant.img} alt={`Imagen de ${restaurant.title}`} className="w-full h-48 object-cover rounded-md mb-4" />
                            <h3 className="text-xl font-semibold mb-2">{restaurant.title}</h3>
                            <p className="text-gray-600 mb-2">{restaurant.description}</p>
                            <div className="flex items-center justify-between">
                                <p className="text-lg font-bold">{restaurant.number}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}
