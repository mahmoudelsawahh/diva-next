import {  Button, CardActionArea, CardActions, Card , CardContent , CardMedia, Container } from '@/app/lib/MuiSsr';
import Slider from "react-slick";
import Image from 'next/image';
import { baseUrl, mainUrl } from '@/app/lib/baseUrl';
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import { Suspense } from "react";
const Loading = dynamic(() => import('@/loading'),{
  ssr : false
});


const NewsCarsoul = ({data}) => {
  const router = useRouter()
  const dataItems = data.data
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
    <Container maxWidth="lg">
        <Slider {...settings} className='mainSlider'>
        {dataItems ? 
          dataItems.map((item)=>{
            return (
            <div key={item.id}>
            <Card onClick={()=> router.push(`${mainUrl}/blog/${item.id}/${item.name.split(' ').join('-')}`)}>
                <CardActionArea>
                <CardMedia >
                    <Image  src={`${baseUrl}/images?id=${item.imageId}`} height={200} width={250} alt={item.name} style={{ objectFit: 'cover', width : "100%" }} loading='lazy' />
                </CardMedia>
            <CardContent sx={{height : '200px', overflow : 'hidden', margin : '5px 0px'}}>
              <Suspense fallback={<Loading/>}>
                <div className='api-blog-data' dangerouslySetInnerHTML={{__html: item.description}}/>
              </Suspense>
            </CardContent>
            </CardActionArea>
            <CardActions sx={{display : 'flex', justifyContent : 'center', padding : '20px 0px'}}>
            <Button aria-label='item.name' size="large" sx={{backgroundColor : '#555555', color : '#fff', fontWeight : 'bold', padding : '10px 25px', ":hover" : {backgroundColor : '#555555'}}}
              onClick={()=> router.push(`${mainUrl}/blog/${item.id}/${item.name.split(' ').join('-')}`)}
            >اقرأ المزيد</Button> 
            </CardActions>
            </Card>
            </div>
            )
        })
        : <Loading/>}
      </Slider>
    </Container>
  )
}

export default NewsCarsoul