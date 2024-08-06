import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { ISignatureProps } from "./../../../utils/type";

import { OutlookSignatureSercons } from "../outlook-signature-sercons/outlook-signature-sercons";
import { OutlookSignatureSerconsSmall } from "../outlook-signature-sercons/outlook-signature-sercons-small";
import { OutlookSignaturePromashtest } from "../outlook-signature-promashtest/outlook-signature-promashtest";
import { OutlookSignaturePromashtestSmall } from "../outlook-signature-promashtest/outlook-signature-promashtest-small";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import './outlook-signature-all.css';

// logo
import serkonsSvg from "./../../../assets/img/icons/logos-companies/serkons.svg";
import promashtestSvg from "./../../../assets/img/icons/logos-companies/promashtest.svg"
// Import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

const OutlookSignatureAll = ({ inputName, inputFamily, inputPatronymic, inputPosition, inputTelephone, inputTelephoneExt, inputTelephoneSecond, inputAddress, avatarUrl }: ISignatureProps) => {

  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

  return (
    <div className="widget">
      <div className="widget__top">
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={4}
          slidesPerView={"auto"}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="widget__swiper-thumbs"
        >
          <SwiperSlide>
            <img src={serkonsSvg} alt="logo-1" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={promashtestSvg} alt="logo-2" />
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="widget__bottom">
        <Swiper
          spaceBetween={10}
          navigation={false}
          thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="widget__swiper"
        >
          <SwiperSlide>
            <OutlookSignatureSercons
              inputName={inputName}
              inputFamily={inputFamily}
              inputPatronymic={inputPatronymic}
              inputPosition={inputPosition}
              inputTelephone={inputTelephone}
              inputTelephoneExt={inputTelephoneExt}
              inputTelephoneSecond={inputTelephoneSecond}
              inputAddress={inputAddress}
              avatarUrl={avatarUrl}
            />
            <OutlookSignatureSerconsSmall
              inputName={inputName}
              inputFamily={inputFamily}
              inputPatronymic={inputPatronymic}
              inputPosition={inputPosition}
              inputTelephone={inputTelephone}
              inputTelephoneExt={inputTelephoneExt}
              inputTelephoneSecond={inputTelephoneSecond}
              inputAddress={inputAddress}
              avatarUrl={avatarUrl}
            />
          </SwiperSlide>

          <SwiperSlide>
            <OutlookSignaturePromashtest
              inputName={inputName}
              inputFamily={inputFamily}
              inputPatronymic={inputPatronymic}
              inputPosition={inputPosition}
              inputTelephone={inputTelephone}
              inputTelephoneExt={inputTelephoneExt}
              inputTelephoneSecond={inputTelephoneSecond}
              inputAddress={inputAddress}
              avatarUrl={avatarUrl}
            />
            <OutlookSignaturePromashtestSmall
              inputName={inputName}
              inputFamily={inputFamily}
              inputPatronymic={inputPatronymic}
              inputPosition={inputPosition}
              inputTelephone={inputTelephone}
              inputTelephoneExt={inputTelephoneExt}
              inputTelephoneSecond={inputTelephoneSecond}
              inputAddress={inputAddress}
              avatarUrl={avatarUrl}
            />
          </SwiperSlide>

        </Swiper>
      </div>
    </div>
  );
}

export default OutlookSignatureAll;

