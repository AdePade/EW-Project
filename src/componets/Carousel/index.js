import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import styles from "./carousel.module.css";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export function Carousel() {
  return (
    <div className={styles.slider}>
      <Slider {...settings}>
        <div className={styles.container}>
          <div className={styles.item + " " + styles.simplicityBackground}>
            <div className={styles.descriptionBox}>
              <h2>Simplicity: Our user-friendly interface</h2>
              <p>
                Our user-friendly interface makes it easy to find the resources
                you need, even if you have limited online experience.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.container}>
        <div className={styles.item + " " + styles.comprehensiveBackground}>
          <div className={styles.descriptionBox}>
          <h2>Comprehensive Listings: We strive to provide up-to-date</h2>
          <p>
            We strive to provide up-to-date and comprehensive listings of
            essential resources to meet your immediate needs.
          </p>
        </div>
          </div>
        </div>
        <div className={styles.container}>
        <div className={styles.item + " " + styles.communityDrivenBackground}>
        <div className={styles.descriptionBox}>
          <h2>
            Community-Driven: We believe in the power of community support
          </h2>
          <p>
            We believe in the power of community support. Connect with local
            organizations and volunteers dedicated to helping the homeless.
          </p>
        </div>
        </div>
        </div>
        <div className={styles.container}>
        <div className={styles.item + " " + styles.voiceMattersBackground}>
        <div className={styles.descriptionBox}>
          <h2>Your Voice Matters: Share your experiences</h2>
          <p>
            Share your experiences, feedback, and suggestions. We are here to
            listen and improve our platform continually.
          </p>
        </div>
        </div>
        </div>
      </Slider>
    </div>
  );
}
