
export default function Slogan() {
    return (
        <div className="bg-black pb-20  text-white">
            <img className="w-full" src="/images/afterwork.jpg" alt="afterwork-img" />
            <div className="flex text-center italic  items-center text-xl justify-around">
                <h3>#Afterwork</h3>
                <h3>#Party</h3>
                <h3>#Origin</h3>
            </div>
            <div className="flex justify-center mt-5">
                <button className="bg-black p-4 rounded-lg shadow-[#fd9f43] text-white text-lg transition duration-300 shadow-xl transform hover:scale-90 focus:outline-none">
                    Reserva grupos y empresas
                </button>

            </div>

        </div>
    )
}
