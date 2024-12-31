import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Image1 from "../../../assets/home/community-slider/join-community-slider1.png";
import Image2 from "../../../assets/home/community-slider/join-community-slider2.png";
import Image3 from "../../../assets/home/community-slider/join-community-slider3.png";
import Image4 from "../../../assets/home/community-slider/join-community-slider4.png";
import Image5 from "../../../assets/home/community-slider/join-community-slider5.png";
import styled from "styled-components";

const CommunitySliderDiv = styled.div`
  position: relative;
  padding: 80px 0 0;
  width: 100%;
  overflow: hidden;

  &::before {
    content: "";
    background: linear-gradient(90deg, #9945ff 0%, #5b9dcf 48.5%, #19fb9b 100%);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 50%;
  }
`;

const JoinCommunitySlider = () => {
  const settings = {
    className: "slider variable-width",
    dots: false,
    infinite: true,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    speed: 2500,
    autoplaySpeed: 2500,
    cssEase: "linear",
    pauseOnHover: false,
  };

  const sliderImages = [Image1, Image2, Image3, Image4, Image5];

  return (
    <CommunitySliderDiv>
      <div className="slider-container">
        <Slider {...settings}>
          {sliderImages.map((image, index) => (
            <div key={index} className="tw-px-2">
              <Image src={image} alt={`Join Community ${index + 1}`} />
            </div>
          ))}
        </Slider>
      </div>
    </CommunitySliderDiv>
  );
};

export default JoinCommunitySlider;
