import "./testimonials.scss"

export default function Testimonials() {

  const data = [
    {
      id: "1",
      name: "Jason Blaiklock",
      title: "Australian Opal Cutters",
      img:
        "https://media.istockphoto.com/photos/street-portrait-of-smiling-senior-man-picture-id1178857901?b=1&k=20&m=1178857901&s=170667a&w=0&h=8iqGuRe_awMun1etDU0c8He2-1OyWQA8ccmsb1-y2LY=",
      icon: "assets/linkedin.png",
      desc:
        "Absolutely amazing service. Fast, efficient and technically brilliant. He helped us to setup up our systems and fixed the router issues in Australian Opal Cutters.",
      featured: false,
    },
    {
      id: "2",
      name: "Kyunga Park",
      title: "Cafe de Hayley",
      img:
        "https://media.herworld.com/public/2020/07/korean-brow-kbeauty-hack-768x768.jpg?compress=true&quality=80&w=480&dpr=2.6",
      icon: "assets/linkedin.png",
      desc:
        "Lobsang is smart and talented web developer with tons of creativity and proactivity. He made the whole process very easy for me with excellent communication. I enjoyed the process and timely delivery. I liked the websited created for my Cafe de Hayley. Thank you so much. ",
      featured: true,
    },
    {
      id: "3",
      name: "Suresh Merani",
      title: "Games & Gifts",
      img:
        "https://us.123rf.com/450wm/yuliang11/yuliang111208/yuliang11120800113/14898723-good-looking-mature-asian-indian-male-with-formal-wear-isolated-on-white-background.jpg?ver=6",
      icon: "assets/linkedin.png",
      desc:
        "I have a local store in Paddy’s Haymarket. Lobsang helped me to set up my website, so that I could sell online. I do recommend him and will look forward to work with him more. ",
      featured: false,
    }
  ];

  return (
    <div className="testimonials" id="testimonials">
      <h1>Testimonials</h1>
      <div className="container">
        {data.map(d=>(      
          <div className={d.featured ? "card featured" : "card"}>
            <div className="top">
              <img src="assets/right-arrow.png" className="left" alt=""/>
              <img 
                src={d.img} 
                className="user" alt=""/>
              <img src={d.icon} className="right" alt=""/>
            </div>
            <div className="center">
              {d.desc}
            </div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
