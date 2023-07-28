"use client"
import { Container, Typography } from '@mui/material'
import React, { Suspense, useEffect, useState } from 'react'
import Slider from "react-slick";
import Slide from 'react-reveal/Slide';
import Image from 'next/image';
import bgDiva from "/public/divanice.com_imgs_video-background.webp"
import dynamic from 'next/dynamic';
const Loading = dynamic(() => import('@/loading'),{
  ssr : false
});
const DevaStudioVideo = () => {
  const [loadingComponent , setLoadingComponent] = useState(true);
  useEffect(()=>{
    setLoadingComponent(false)
  },[])
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          }
        },
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  };

  const iframeSrc = [
    {
       src : "https://www.youtube.com/embed/RySyL5xKN7A"
    },
    {
      src : "https://www.youtube.com/embed/IaLkcwBOmOk"
   },
   {
    src : "https://www.youtube.com/embed/f5eQ9yZk3Vc"
 },
 {
  src : "https://www.youtube.com/embed/98YGdA4LVjU"
},
  ]
  return (
   <Suspense fallback={<Loading/>}>
    {loadingComponent ? <Loading/> : 
    <div style={{position : 'relative', height : "750px", clipPath: 'inset(0 0 0 0)',}} className='deva-studio'>
      <Image src={bgDiva} alt='bgDiva' style={{position : 'fixed'}} objectFit='cover' />
      <div className='overlay'>
      <Container maxWidth="xl" fixed >
<Slide right>
<Typography variant='h1' sx={{marginBottom : '40px', textAlign : 'center', color : '#fff', fontSize : '2rem', fontWeight : 'bold'}}>ديفا أتيليه وميك أب أستوديو</Typography>
</Slide>

<div className='deva-studio-video'>
<Slide left>
<Slider {...settings}>
   {iframeSrc.map((item , id)=>{
    return (
      <div key={id}>
          <iframe style={{border : '10px solid #fff', borderRadius : '10px'}}
          className="main-frame" loading='lazy' src={item.src} 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
           ></iframe>
      </div>
    )
   })}

</Slider>
</Slide>
</div>

</Container>
      </div>
    </div>
    }
   </Suspense>
  )
}

export default DevaStudioVideo