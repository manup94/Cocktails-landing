

export default function CustomCarousel() {

    return (

        <div id="carouselExampleFade" className="carousel-fade pointer-event flex justify-center" data-bs-ride="carousel">
            <div className="carousel-inner  bg-black">
                <div className="carousel-item active  flex justify-center items-center">
                    <img src="/images/carrousel-1.jpg" className="w-full md:max-w-md mx-auto" alt="img-1" />
                </div>
                <div className="carousel-item flex  justify-center items-center">
                    <img src="/images/carrousel-2.jpg" className="w-full md:max-w-md mx-auto" alt="img-2" />
                </div>
                <div className="carousel-item flex  justify-center items-center">
                    <img src="/images/carrousel-3.jpg" className="w-full md:max-w-md mx-auto" alt="img-3" />
                </div>
            </div>
        </div>

    );
}
