import {Navigation, Pagination, Scrollbar, A11y} from 'swiper'
import {Swiper, SwiperSlide} from 'swiper/react'

export function SwiperView() {
  return (
    <>
      <Swiper onSlideChange={() => console.log('slide change')} onSwiper={(swiper) => console.log(swiper)}>
        <SwiperSlide style={{height: '100px', backgroundColor: 'beige'}}>Slide 1</SwiperSlide>
        <SwiperSlide style={{height: '100px', backgroundColor: 'beige'}}>Slide 2</SwiperSlide>
        <SwiperSlide style={{height: '100px', backgroundColor: 'beige'}}>Slide 3</SwiperSlide>
        <SwiperSlide style={{height: '100px', backgroundColor: 'beige'}}>Slide 4</SwiperSlide>
      </Swiper>
      <br />
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide style={{height: '100px', backgroundColor: 'beige'}}>Slide 1</SwiperSlide>
        <SwiperSlide style={{height: '100px', backgroundColor: 'beige'}}>Slide 2</SwiperSlide>
        <SwiperSlide style={{height: '100px', backgroundColor: 'beige'}}>Slide 3</SwiperSlide>
        <SwiperSlide style={{height: '100px', backgroundColor: 'beige'}}>Slide 4</SwiperSlide>
      </Swiper>
      <br />
      <br />
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={3}
        navigation
        pagination={{clickable: true}}
        scrollbar={{draggable: true}}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide style={{height: '100px', backgroundColor: 'beige'}}>Slide 1</SwiperSlide>
        <SwiperSlide style={{height: '100px', backgroundColor: 'beige'}}>Slide 2</SwiperSlide>
        <SwiperSlide style={{height: '100px', backgroundColor: 'beige'}}>Slide 3</SwiperSlide>
        <SwiperSlide style={{height: '100px', backgroundColor: 'beige'}}>Slide 4</SwiperSlide>
      </Swiper>
    </>
  )
}
