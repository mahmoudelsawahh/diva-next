"use client"
import Slider from "react-slick";
import {Fade, Typography } from '@/app/lib/MuiSsr';
import Image from "next/image";
import divaBg1 from "/public/divanice.com_imgs_diva2.webp"
import divaBg2 from "/public/divanice.com_imgs_diva3.webp"
const HomeCarousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 3000,
        autoplaySpeed: 6000,
        slidesToShow: 1,
        slidesToScroll: 1,
        // autoplay: true,
        lazyLoad: true

      };
  return (
          <Slider {...settings}>
            
           <div>
           <div style={{position : 'relative', height : '100vh'}}>
            <Image src={divaBg1} alt="اتيليه فساتين زفاف وافراح" layout="fill" objectFit="cover" objectPosition="center"/>
             <div className="center">
                  
                  <Fade left>
                    <Typography variant='h1' sx={{fontSize : '15px', fontWeight : 'bold', textAlign : 'center'}}>أتيليه وميك أب أستوديو ديفا</Typography>
			        <Typography sx={{fontSize : "2.3rem" , fontWeight : 'bold', marginBottom : '12px', textAlign : 'center'}}>أكبر أتيليه وميك أب ستوديو في المحلة الكبرى</Typography>
			        <Typography variant='body1' sx={{fontSize : {xs : '20ox', md : '25px'}, textAlign : 'center'}}>مرحباً بكم في &quot; ديفا &quot; أتيليه وميك أب أستوديو</Typography>
                 </Fade>
                  
		      	</div>
            </div>
           </div>
            
            
            <div>
            <div style={{position : 'relative', height : '100vh'}}>
            <Image src={divaBg2} alt="اتيليه فساتين زفاف وافراح" layout="fill" objectFit="cover" objectPosition="center"/>
            <div className="center">
                 
                 <Fade left>
			         <Typography sx={{fontSize : "2.5rem" , fontWeight : 'bold', marginBottom : '12px', textAlign : 'center'}}>نحن فخورون بتقديم خدماتنا للنساء في المحلة الكبرى بشكل خاص وجمهورية مصر العربية بشكل عام</Typography>
                 </Fade>
                 
			</div>
            </div>
            </div>
            
        </Slider>
      )
}

export default HomeCarousel