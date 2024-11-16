// Import a carousel package
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
  const carouselImages = [
    "https://cdn.pixabay.com/photo/2020/03/27/22/41/emergency-medical-services-4975223_960_720.jpg",
    "https://cdn.pixabay.com/photo/2022/02/24/06/19/fire-brigade-7031843_1280.jpg",
    "https://cdn.pixabay.com/photo/2015/05/23/07/52/emergency-780313_1280.jpg",
  ];

  // Slider settings for auto-scrolling carousel
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="bg-ajaliWhite min-h-[85vh] flex items-center justify-center px-6 lg:px-12">
      {/* Container for content */}
      <div className="flex flex-col lg:flex-row items-center max-w-7xl w-full">
        {/* Left Section: App Description */}
        <div className="lg:w-1/2 mb-6 lg:mb-0">
          <h1 className="text-ajaliRed text-4xl lg:text-5xl font-bold">
            Welcome to Ajali App
          </h1>
          <p className="mt-4 text-ajaliBlack text-lg lg:text-xl">
            Ajali! is your go-to application for reporting emergencies and
            incidents in Kenya. Our platform allows you to quickly notify
            authorities, upload evidence, and track updates, ensuring a fast
            and effective response to any situation.
          </p>
        </div>

        {/* Right Section: Carousel */}
        <div className="lg:w-1/2 w-full">
          <Slider {...settings}>
            {carouselImages.map((image, index) => (
              <div key={index} className="p-2">
                <img
                  src={image}
                  alt={`Emergency ${index + 1}`}
                  className="w-full h-64 lg:h-96 object-cover rounded-md shadow-lg"
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Home;
