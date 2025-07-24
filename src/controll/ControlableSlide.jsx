// import React, { useRef } from "react";
// const Carousel = () => {
//   const carouselRef = useRef(null);

//   const scroll = (direction) => {
//     const scrollAmount = carouselRef.current.offsetWidth / 1.2;
//     carouselRef.current.scrollBy({
//       left: direction === "left" ? -scrollAmount : scrollAmount,
//       behavior: "smooth",
//     });
//   };

//   return (
//     <div className="carousel-container" style={{ marginBottom: "50px", marginTop: "-120px" }}>
//       <div className="carousel-wrapper" ref={carouselRef}>
//         <div className="carousel-card" style={{ backgroundColor: "#141524" }}>
//           <img src="/soo200.png" alt="" style={{ width: "87%" }} />
//         </div>
//         <div className="carousel-card">Item 2</div>
//         <div className="carousel-card">Item 3</div>
//         <div className="carousel-card">Item 4</div>
//         <div className="carousel-card">Item 5</div>
//         <div className="carousel-card">Item 6</div>
//       </div>

//       <div className="carousel-nav">
//         <button className="carousel-button" onClick={() => scroll("left")}>
//           &#8249;
//         </button>
//         <button className="carousel-button" onClick={() => scroll("right")}>
//           &#8250;
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Carousel;



import React, { useRef } from "react";

const Carousel = () => {
  const carouselRef = useRef(null);

  const scroll = (direction) => {
    const scrollAmount = carouselRef.current.offsetWidth / 1.2;
    carouselRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div
      className="carousel-container mb-[50px] -mt-[120px]" style={{marginTop:"-30px"}}
    >
      
      <div className="carousel-wrapper" ref={carouselRef}>
        <div className="carousel-card" style={{ backgroundColor: "#141524" }}>
          <img src="/soo200.png" alt="" className="w-[90%]" />
        </div>
        <div className="carousel-card">Item 2</div>
        <div className="carousel-card">Item 3</div>
        <div className="carousel-card">Item 4</div>
        <div className="carousel-card">Item 5</div>
        <div className="carousel-card">Item 6</div>
      </div>

      <div className="carousel-nav">
        <button className="carousel-button" onClick={() => scroll("left")}>
          &#8249;
        </button>
        <button className="carousel-button" onClick={() => scroll("right")}>
          &#8250;
        </button>
      </div>
    </div>
  );
};

export default Carousel;
