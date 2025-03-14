const EventEmbed = () => {
    return (
      <div className="w-screen h-screen bg-primary flex justify-center items-center overflow-hidden ">
        <iframe
          src="https://lu.ma/embed/event/evt-9DMpTyICrtiMG1Y/simple"
          width="50%" // Adjusted for full visibility
          height="60%" // Adjusted for full visibility
          className="border border-[#bfcbda88] rounded-lg shadow-lg"
          allowFullScreen
          aria-hidden="false"
          tabIndex={0}
        ></iframe>
      </div>
    );
  };
  
  export default EventEmbed;
  