import React from "react";
import { Box } from "@chakra-ui/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { sliderData } from "../Slides/Spotlight";
import styles from "../Slides/inthespot.module.css";
import { useNavigate } from "react-router-dom";

function SampleNextArrow(props) {
  const { className, onClick } = props;
  return (
    <Box
      className={className}
      // style={{ ...style, display: "block", background: "blue" }}
      onClick={onClick}
    ></Box>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <Box
      className={className}
      // style={{ ...style, display: "block", background: "blue" }}
      onClick={onClick}
    ></Box>
  );
}

const Inthespot = () => {
  const navigate = useNavigate();
  const settings = {
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  // const dispatch = useDispatch();
  return (
    <div
      style={{
        width: "100%",
        height: "200px",
        backgroundColor: "#0398DC",
        // border: "1px solid red",
      }}
    >
      <br />

      <div class={styles.App}>
        <Slider {...settings}>
          {sliderData.map((item) => (
            <div className={styles.itemContainer}>
              <div className={styles.category}>
                <div>
                  <p>{item.live}</p>
                </div>
                <div>
                  <p>{item.category}</p>
                </div>
              </div>

              <div className={styles.team1}>
                <div className={styles.team1Img}>
                  <img src={item.team1Img} alt="" />
                  <p>{item.team1}</p>
                  <div>
                    <h4>{item.team1Score}</h4>
                  </div>
                </div>
              </div>

              <div className={styles.team2}>
                <div className={styles.team2Img}>
                  <img src={item.team2Img} alt="" />
                  <p>{item.team2}</p>
                  <div>
                    <h4>{item.team2Score}</h4>
                  </div>
                </div>
              </div>

              <div className={styles.result}>
                <p>{item.result}</p>
              </div>
              <div className={styles.bot}>
                <div>Schedule</div>
                <div>Table</div>
                <div>Videos</div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Inthespot;
