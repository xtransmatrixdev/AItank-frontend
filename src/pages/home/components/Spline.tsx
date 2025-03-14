import Spline from '@splinetool/react-spline';

export default function SplineWithCircularText() {
  return (
    <div className="relative w-full min-h-[110vh] flex flex-col">
      
      {/* Text Section (Above Everything) */}
      <div className="relative z-10 w-full text-center py-10 bg-transparent">
        <h1 className="text-transparent [-webkit-text-stroke:2px_#F06F2F] md:[-webkit-text-stroke:4px_#F06F2F] 
          text-6xl md:text-[110px] font-inter font-bold">
          AI Unplugged
        </h1>
        <h1 className="text-[4.2vw] font-bold my-3">
          Trends • Breakthroughs • Research That Matters
        </h1>
      </div>

      {/* Spline Fullscreen Section */}
      <div className="relative w-full flex-1">
        {/* Background Image with Top Padding */}
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"  
          style={{ backgroundImage: "url('/images/splinebg.png')", paddingTop: '10rem' }}
        />

        {/* Spline Model (Ensuring Fullscreen with No Gaps) */}
        <Spline className="absolute inset-0 w-screen h-full" scene="https://prod.spline.design/ZJg7l2KxbZpBql1i/scene.splinecode" />
      </div>

    </div>
  );
}
