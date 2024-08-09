import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { ISignatureProps } from "./../../../utils/type";

import { OutlookSignatureSercons } from "../outlook-signature-sercons/outlook-signature-sercons";
import { OutlookSignatureSerconsSmall } from "../outlook-signature-sercons/outlook-signature-sercons-small";
import { OutlookSignaturePromashtest } from "../outlook-signature-promashtest/outlook-signature-promashtest";
import { OutlookSignaturePromashtestSmall } from "../outlook-signature-promashtest/outlook-signature-promashtest-small";
import { OutlookSignatureSerconsMed } from "../outlook-signature-serconsmed/outlook-signature-serconsmed";
import { OutlookSignatureSerconsMedSmall } from "../outlook-signature-serconsmed/outlook-signature-serconsmed-small";
import { OutlookSignaturePmt } from "../outlook-signature-pmt/outlook-signature-pmt";
import { OutlookSignaturePmtSmall } from "../outlook-signature-pmt/outlook-signature-pmt-small";
import { OutlookSignaturePromashtestMetrologiya } from "../outlook-signature-promashtest-metrologiya/outlook-signature-promashtest-metrologiya";
import { OutlookSignaturePromashtestMetrologiyaSmall } from "../outlook-signature-promashtest-metrologiya/outlook-signature-promashtest-metrologiya-small";
import { OutlookSignaturePromashtestEkspertiza } from "../outlook-signature-promashtest-ekspertiza/outlook-signature-promashtest-ekspertiza";
import { OutlookSignaturePromashtestEkspertizaSmall } from "../outlook-signature-promashtest-ekspertiza/outlook-signature-promashtest-ekspertiza-small";
import { OutlookSignaturePromashtestEkologiya } from "../outlook-signature-promashtest-ekologiya/outlook-signature-promashtest-ekologiya";
import { OutlookSignaturePromashtestEkologiyaSmall } from "../outlook-signature-promashtest-ekologiya/outlook-signature-promashtest-ekologiya-small";
import { OutlookSignaturePromashtestRegiony } from "../outlook-signature-promashtest-regiony/outlook-signature-promashtest-regiony";
import { OutlookSignaturePromashtestRegionySmall } from "../outlook-signature-promashtest-regiony/outlook-signature-promashtest-regiony-small";
import { OutlookSignaturePromashtestIndiya } from "../indiya/outlook-signature-promashtest-indiya";
import { OutlookSignaturePromashtestIndiyaSmall } from "../indiya/outlook-signature-promashtest-indiya-small";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import './outlook-signature-all.css';

// logo
import serkonsSvg from "./../../../assets/img/icons/logos-companies/serkons.svg";
import serkonsmedSvg from "./../../../assets/img/icons/logos-companies/serconsmed.svg";
import promashtestSvg from "./../../../assets/img/icons/logos-companies/promashtest.svg";
import pmtSvg from "./../../../assets/img/icons/logos-companies/ptm.svg";
import promashtestMetrologiyaSvg from "./../../../assets/img/icons/logos-companies/promashtest-metrologiya.svg";
import promashtestEkspertizaSvg from "./../../../assets/img/icons/logos-companies/promashtest-ekspertiza.svg";
import promashtestEkologiyaSvg from "./../../../assets/img/icons/logos-companies/promashtest-ekologiya.svg";
import promashtestRegionySvg from "./../../../assets/img/icons/logos-companies/promashtest-regiony.svg";
import promashtestIndiyaSvg from "./../../../assets/img/icons/logos-companies/promashtest-indiya.svg";

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
            <img src={serkonsmedSvg} alt="logo-2" />
          </SwiperSlide>

          <SwiperSlide>
            <img src={pmtSvg} alt="logo-3" />
          </SwiperSlide>

          <SwiperSlide>
            <img src={promashtestSvg} alt="logo-4" />
          </SwiperSlide>

          <SwiperSlide> 
            <img src={promashtestMetrologiyaSvg} alt="logo-5" />
          </SwiperSlide>

          <SwiperSlide>
            <img src={promashtestEkspertizaSvg} alt="logo-6" />
          </SwiperSlide>

          <SwiperSlide>
            <img src={promashtestEkologiyaSvg} alt="logo-7" />
          </SwiperSlide>

          <SwiperSlide>
            <img src={promashtestRegionySvg} alt="logo-9" />
          </SwiperSlide>

          <SwiperSlide>
            <img src={promashtestIndiyaSvg} alt="logo-10" />
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
            <OutlookSignatureSerconsMed
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
            <OutlookSignatureSerconsMedSmall
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
            <OutlookSignaturePmt
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
            <OutlookSignaturePmtSmall
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

          <SwiperSlide>
            <OutlookSignaturePromashtestMetrologiya
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
            <OutlookSignaturePromashtestMetrologiyaSmall
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
            <OutlookSignaturePromashtestEkspertiza
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
            <OutlookSignaturePromashtestEkspertizaSmall
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
            <OutlookSignaturePromashtestEkologiya
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
            <OutlookSignaturePromashtestEkologiyaSmall
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
            <OutlookSignaturePromashtestRegiony
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
            <OutlookSignaturePromashtestRegionySmall
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
            <OutlookSignaturePromashtestIndiya
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
            <OutlookSignaturePromashtestIndiyaSmall
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

