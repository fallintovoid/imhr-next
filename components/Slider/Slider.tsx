import { NextPage } from 'next'
import { useEffect } from 'react'
import { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import classNames from 'classnames';

import 'swiper/css'
import 'swiper/swiper-bundle.css';

import SliderStyles from './Slider.module.css'

type Props = {
    photos: {
        src: string;
        text: string;
    }[],
    theme: 'theme-purple' | 'theme-turquoise' | 'theme-green' | 'theme-blue'
}

let cx = classNames.bind(SliderStyles);

const Slider: NextPage<Props> = ({ photos, theme }) => {

    const navigationPrevRef = useRef<HTMLButtonElement>(null)
    const navigationNextRef = useRef<HTMLButtonElement>(null)
    SwiperCore.use([Navigation, Pagination]);
    console.log(theme);

    return (
        <div className={cx(SliderStyles.slider_component, 'mb-2 mt-2')}>
            <button className={SliderStyles.swiper_button_prev} ref={navigationPrevRef}>
                <svg className={SliderStyles.swiper_form} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 134 134">
                    <path fill="var(--accent-color)" d="m54.8939 122.147 1.8118-8.523c-27.9005-5.931-50.87157-29.9964-44.9415-57.8951l8.5174 1.8104C26.2117 29.6406 50.2795 6.66452 78.18 12.595l-1.8118 8.5238c27.9008 5.9304 50.8788 29.9975 44.9488 57.8962l-8.517-1.8104c-5.93 27.8984-30.0056 50.8734-57.9061 44.9424Z"/>
                </svg>
            </button>
            <Swiper
                 navigation={{
                    prevEl: navigationPrevRef.current,
                    nextEl: navigationNextRef.current,
                }}
                modules={[Navigation, Pagination]}
                pagination
                className={SliderStyles.slider}
                loop
                onBeforeInit={(Swiper) => {
                    if (typeof Swiper.params.navigation !== 'boolean') {
                        const navigation = Swiper.params.navigation!;
                        navigation.prevEl = navigationPrevRef.current;
                        navigation.nextEl = navigationNextRef.current;
                    }
                }}
            >
                {photos.map((photo, i) => {
                    return <SwiperSlide key={i} className={SliderStyles.swiper_slide} >
                        <img src={photo.src} alt='' className={cx(SliderStyles.slide__image, 'box-radius')} />
                        <p className='text-type-caption'>{photo.text}</p>
                    </SwiperSlide>
                })}
            </Swiper>
            <button className={SliderStyles.swiper_button_next} ref={navigationNextRef}>
                <svg className={cx(SliderStyles.swiper_form)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 134 134">
                    <path fill="var(--accent-color)" d="m54.8939 122.147 1.8118-8.523c-27.9005-5.931-50.87157-29.9964-44.9415-57.8951l8.5174 1.8104C26.2117 29.6406 50.2795 6.66452 78.18 12.595l-1.8118 8.5238c27.9008 5.9304 50.8788 29.9975 44.9488 57.8962l-8.517-1.8104c-5.93 27.8984-30.0056 50.8734-57.9061 44.9424Z"/>
                </svg>
            </button>
        </div>
        
    )
}

export default Slider