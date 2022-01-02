import spacerPng from './assets/spacer.png';
import profile0Jpg from './assets/profile-0.jpg';
import profile1Jpg from './assets/profile-1.jpg';
import profile3Jpg from './assets/profile-3.jpg';
import profile4Jpg from './assets/profile-4.jpg';
import profile5Jpg from './assets/profile-5.jpg';

export const Carousel = () => {

  const [current, setCurrent] = useState(0);
  const images = [
    profile0Jpg,
    profile1Jpg,
    profile2Jpg,
    profile3Jpg,
    profile4Jpg,
    profile5Jpg
  ];

  const nextSlide = () => setCurrent(current === images.length - 1 ? 0 : current + 1);

  return (
    <div className="carousel">
      {images.map((src, index) => (
        <div className={index === current ? 'slide active': 'slide'} key={index}>
        {index === current && (
            <img
              src={src}
              onClick={nextSlide}
              className='image'
              alt='Ade'
            />
          )}
        </div>
      ))}
    </div>
  );
}

// <img src={spacerPng} className='spacer slide' alt='Ade' />
