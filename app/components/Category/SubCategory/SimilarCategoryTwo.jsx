import dynamic from 'next/dynamic';
import Image from 'next/image';
import Slider from 'react-slick';
import { Box, Container, Typography } from '@mui/material';
import Link from 'next/link';
import { Slide } from 'react-reveal';
const Loading = dynamic(() => import('@/loading'),{
  ssr : false
});
import { baseUrl, mainUrl } from '@/app/lib/baseUrl';
import { useRouter } from 'next/navigation';
const SimilarCategoryTwo = ({data}) => {
  const router = useRouter()
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        speed: 5000,
        autoplaySpeed: 5000,
        cssEase: "linear",
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 5,
                infinite: true,
                dots: true
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
  return (
    <>
      <Container maxWidth="xl" fixed sx={{border : '2px solid #eee', padding : '15px'}}>
            <Box>
                 <Typography variant='h1' sx={{fontSize : '25px', margin : '50px 0px', position : 'relative'}} className='gallery-title'>البومات اخري</Typography>
            </Box>
            <Slide right>
            <Slider {...settings} className=''>
              {data ? 
                data.map((item)=>{
                    return (
                        <>
                        <Box sx={{ textAlign : 'center', margin : '0px 40px'}} key={item.id}>
                            <Image onClick={()=> router.push(`${mainUrl}/gallery/${item.id}/${item.name.replace(/\s+/g, '-')}`)} className='category-slider-photo' 
                            src={`${baseUrl}/images?id=${item.imageId}`}
                             alt={item.name} layout='fill'/>
                              <Link style={{textDecoration : 'underline', fontSize : '20px', textAlign : 'center'}}  
                              href={`${mainUrl}/gallery/${item.id}/${item.name.replace(/\s+/g, '-')}`}> {item.name} </Link>
                       </Box>
                        </>
                    )
                })

              : <Loading/>}
            </Slider>
            </Slide>
       </Container>
    </>
  )
}

export default SimilarCategoryTwo