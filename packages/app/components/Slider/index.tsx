import * as Slick from "react-slick";
import type { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import cx from "classnames"
import style from "./index.module.scss";


const Slider = () => {
  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    customPaging: (i: number) => (
      <div className={style.dot}>
        <div className={style.dotInner} />
      </div>
    ),
    appendDots: (dots: React.ReactNode) => (
      <div className={style.dots}>{dots}</div>
    ),
    dotsClass: style.dots,
  };
  return (
    <Slick.default {...settings} className={cx('rounded-[20px] overflow-hidden', style.slider)}>
      <div className={cx("px-[30px] py-[27px] pb-[50px] text-white relative", style['bg-slide1'])}>
        <div>
          <div className={cx('text-[1.1rem] font-bold]')}>신용 한도 차감 없는 1금융권 자동차 대출</div>
          <div className={cx('font-bold mt-[8px] text-[1.7rem]')}>이제는 하나금융그룹<br /> <span className='text-[#e2ff00]'>원더카</span>에서 원큐에!</div>
          <div className={cx('mt-[12px]')}>
            <a className={cx('text-[1.1rem] underline underline-offset-[4px]')}>바로 대출 확인</a>
          </div>
        </div>
        <div className="absolute right-[19px] bottom-[41px]">
          <img src="/img/k-01.webp"
            srcSet="/img/k-01@2x.webp 2x,
             /img/k-01@3x.webp 3x"
            alt=""
          />
        </div>
      </div>
      <div className={cx("px-[30px] py-[27px] pb-[50px] text-white relative", style['bg-slide1'])}>
        <div>
          <div className={cx('text-[1.1rem] font-bold]')}>신용 한도 차감 없는 1금융권 자동차 대출</div>
          <div className={cx('font-bold mt-[8px] text-[1.7rem]')}>이제는 하나금융그룹<br /> <span className='text-[#e2ff00]'>원더카</span>에서 원큐에!</div>
          <div className={cx('mt-[12px]')}>
            <a className={cx('text-[1.1rem] underline underline-offset-[4px]')}>바로 대출 확인</a>
          </div>
        </div>
        <div className="absolute right-[19px] bottom-[41px]">
          <img src="/img/k-01.webp"
            srcSet="/img/k-01@2x.webp 2x,
             /img/k-01@3x.webp 3x"
            alt=""
          />
        </div>
      </div>
    </Slick.default>
  );
};

export default Slider;