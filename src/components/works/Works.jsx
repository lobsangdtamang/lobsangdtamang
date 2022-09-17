import { useState } from "react";
import "./works.scss"

export default function Works() {

  const [currentSlide, setCurrentSlide] = useState(0);

  const data = [
      {
        id: "1",
        icon: "./assets/writing.png",
        title: "Branding",
        desc:
          "Loorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        img:
          "https://cdn-ecbjf.nitrocdn.com/trFSLbdBEIFWvubMBbeHotqYSOVJJYEv/assets/static/optimized/rev-a53dc1f/blog/wp-content/uploads/2020/02/40-BEST-WEBSITE-DESIGNS-2022.jpg"
      },
      {
        id: "2",
        icon: "./assets/globe.png",
        title: "Mobile Application",
        desc:
          "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        img:
          "https://cdn-ecbjf.nitrocdn.com/trFSLbdBEIFWvubMBbeHotqYSOVJJYEv/assets/static/optimized/rev-a53dc1f/blog/wp-content/uploads/2020/02/40-BEST-WEBSITE-DESIGNS-2022.jpg"
      },      {
        id: "3",
        icon: "./assets/writing.png",
        title: "Test",
        desc:
          "Loorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        img:
          "https://cdn-ecbjf.nitrocdn.com/trFSLbdBEIFWvubMBbeHotqYSOVJJYEv/assets/static/optimized/rev-a53dc1f/blog/wp-content/uploads/2020/02/40-BEST-WEBSITE-DESIGNS-2022.jpg"
      }
  ];

  const handleClick = (way)=>{
    way === "left" 
    ? setCurrentSlide(currentSlide > 0 ? currentSlide-1 : 2) 
    : setCurrentSlide(currentSlide < data.length -1 ? currentSlide + 1 : 0);
  };

  return (
    <div className="works" id="works">
      <div className="slider" style={{transform:`translateX(-${currentSlide *100}vw)`}}>
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt=""/>
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <span>Projects</span>
                </div>
              </div>
              <div className="right">
                <img src="https://cdn-ecbjf.nitrocdn.com/trFSLbdBEIFWvubMBbeHotqYSOVJJYEv/assets/static/optimized/rev-a53dc1f/blog/wp-content/uploads/2020/02/40-BEST-WEBSITE-DESIGNS-2022.jpg" alt=""/>
              </div>
            </div>
          </div>
        ))}
      </div>
      <img src="assets/arrow.png" className="arrow left" alt="" onClick={()=>handleClick("left")}/>
      <img src="assets/arrow.png" className="arrow right" alt="" onClick={()=>handleClick("right")}/>
    </div>
  )
}
