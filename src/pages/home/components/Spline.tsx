import Spline from '@splinetool/react-spline';

export default function SplineWithCircularText() {
  return (
    <div className="relative w-full h-screen ">
      <div className='mb-12'>
        <h1 className="text-transparent [-webkit-text-stroke:2px_#F06F2F] md:[-webkit-text-stroke:4px_#F06F2F] text-6xl md:text-[110px] pt-8 text-center font-inter font-bold">
          AI Unplugged
        </h1>
        <h1 className="text-[4.2vw] font-bold my-3 text-center ">Trends • Breakthroughs • Research That Matters</h1>
      </div>
      
      <div className="absolute inset-0 top-32">
        <Spline scene="https://prod.spline.design/ZJg7l2KxbZpBql1i/scene.splinecode" />
      </div>
      
      <div className="absolute inset-0 hidden md:flex items-center justify-center pointer-events-none md:pt-80">
      <svg 
      viewBox="-250 -250 500 500" 
      width="auto" 
      height="auto" 
      className="transform rotate-[85deg] mb-16"
    >
      <defs>
        <path
      id="circularPath"
      d="M 0,200 A 200,200 0 1,1 0.1,200"
      fill="none"
        />
      </defs>

      <text 
        fill="#FFFF" 
        fontSize="16" 
        fontFamily="Inter, sans-serif" 
        fontWeight="bold" 
        letterSpacing="0.1"
        stroke="black"
        strokeWidth="0.5"
      >
        <textPath href="#circularPath" startOffset="0%">
      AI Trends * Featured Research Papers * Breakthrough Innovations * Ethics & AI Safety 
        </textPath>
      </text>
    </svg>

      </div>
    </div>
  );
}