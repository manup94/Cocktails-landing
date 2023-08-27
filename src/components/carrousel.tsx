

export default function CustomCarousel() {

    return (
        <div id="carouselExampleFade" className="carousel slide carousel-fade " data-bs-ride="carousel">
            <div className="carousel-inner flex bg-black">
                <div className="carousel-item active ">
                    <img src="/images/carrousel-1.jpg" className=" md:w-1/2 mx-auto " alt="..." />
                </div>
                <div className="carousel-item">
                    <img src="/images/carrousel-2.jpg" className=" md:w-1/2 mx-auto  " alt="..." />
                </div>
                <div className="carousel-item">
                    <img src="/images/carrousel-3.jpg" className=" md:w-1/2 mx-auto  " alt="..." />
                </div>
            </div>

        </div>
    );
}
