

const images = [
  { src: '/images/Rectangle 21.png', classes: 'top-[20%] left-[10%] z-10' },
  { src: '/images/Rectangle 26.png', classes: 'top-[40%] right-[1%] z-0' },
  { src: '/images/Rectangle 30.png', classes: 'top-[2%] left-[29%] z-10' },
  { src: ' /images/Rectangle 28.png', classes: 'top-[8%] right-[20%] z-10' },
  { src: '/images/Rectangle 29.png', classes: 'top-[17%] left-[47%] z-10' },

  { src: '/images/Rectangle 22.png', classes: 'top-[45%] left-[4%] z-20' },
  { src: '/images/Rectangle 27.png', classes: 'top-[-6%] right-[1%] z-10' },
  { src: '/images/Rectangle 23.png', classes: 'bottom-[9%] left-[28%] z-10' },
  { src: ' /images/Rectangle 25.png', classes: 'bottom-[10%] right-[20%] z-10' },
  { src: '/images/Rectangle 24.png', classes: 'bottom-[15%] left-[48%] z-10' },
];

const ScrollEffectSection = () => {
  return (
    <div
      className="relative w-full min-h-screen bg-primary bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: `url('/images/Rectangle 20.png')` }}
    >
      {images.map((image, index) => (
        <img
          key={index}
          src={image.src}
          className={`absolute ${image.classes} w-16 sm:w-24 md:w-32 lg:w-40 xl:w-52 2xl:w-64`}
          alt="visual"
        />
      ))}

      {/* Infinite Scrolling Text */}
      <div className="absolute bottom-1/2 w-full text-center overflow-hidden whitespace-nowrap z-10"  style={{ fontFamily: "'Kumar One', cursive" }}>
        <div className="text-xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-8xl font-bold text-orange-500 animate-scroll-left">
          WHO IS IT FOR ?? WHO IS IT FOR ?? WHO IS IT FOR ?? WHO IS IT FOR ?? WHO IS IT FOR ??
          WHO IS IT FOR ?? WHO IS IT FOR ?? WHO IS IT FOR ?? WHO IS IT FOR ?? WHO IS IT FOR ??
        </div>
      </div>

      {/* Keyframes for Infinite Scroll */}
      <style>
        {`
          @keyframes scroll-left {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }

          .animate-scroll-left {
            display: inline-block;
            animation: scroll-left 10s linear infinite;
            white-space: nowrap;
            width: 200%;
          }
        `}
      </style>
    </div>
  );
};

export default ScrollEffectSection;
