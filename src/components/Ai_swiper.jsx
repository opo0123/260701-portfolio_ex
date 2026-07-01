import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "../styles/Ai_swiper.css";
import aiTools from "../data/AiToolsData";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
function Ai_swiper() {
  return (
    <>
      <section id="ai">
        <h2 className="swiper-title">Ai활용 스와이퍼 적용</h2>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={24}
          slidesPerView={1.5}
          navigation={{
            prevEl: ".custom-prev",
            nextEl: ".custom-next",
          }}
          pagination={{ clickable: true }}
          //   autoplay={{
          //     delay: 2500,
          //     disableOnInteraction: false,
          //     pauseOnMouseEnter: true,
          //   }}
          speed={800}
          loop={true}
          className="ai-swiper"
        >
          {aiTools.map((ai) => (
            // console.log(ai)
            <SwiperSlide key={ai.id}>
              <div className="slide-category">
                <span className="category-lable">{ai.label}</span>
                <ul>
                  {ai.tools.map((tool) => (
                    // console.log(tool)
                    <li key={tool.id}>
                      <strong>{tool.name}</strong>
                      <p>{tool.desc}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="custom-prev">&#10094;</div>
        <div className="custom-next">&#10095;</div>
      </section>
    </>
  );
}
export default Ai_swiper;
