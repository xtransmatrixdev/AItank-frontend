const EventEmbed = () => {
  return (
    <div className="w-full h-screen bg-primary flex justify-center items-center overflow-hidden">
      <iframe
        src="https://lu.ma/embed/event/evt-9DMpTyICrtiMG1Y/simple"
        className="border border-[#bfcbda88] rounded-lg shadow-lg 
                   w-[90%] h-[70%] sm:w-[70%] sm:h-[65%] md:w-[50%] md:h-[60%]"
        allowFullScreen
        aria-hidden="false"
        tabIndex={0}
      ></iframe>
    </div>
  );
};

export default EventEmbed;
