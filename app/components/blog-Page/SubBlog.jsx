"use client"
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { baseUrl } from '@/app/lib/baseUrl';
const Loading = dynamic(() => import('@/loading'),{
  ssr : false,
});
import { Slide , Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Container, Grid} from '@/app/lib/MuiSsr';

const SubBlog = ({data}) => {
  const router = useRouter();
  return (
          <Container maxWidth={'xxl'} fixed>
         <Grid container spacing={3} >
         {data ?
          data.map((item)=>{
            return (
      <Grid item xs={12} md={6} lg={4} key={item.id}>
            <Slide bottom>
              <Card onClick={()=> router.push(`/blog/${item.id}/${item.name.split(' ').join('-')}`)}>
                 <CardActionArea>
                     <CardMedia >
                         <Image src={`${baseUrl}/images?id=${item.imageId}`} width={350} height={350} alt="" style={{ objectFit: 'cover', width : "100%" }}/>
                 </CardMedia>
                 <CardContent sx={{height : '300px', overflow : 'hidden', margin : '5px 0px'}}>
                  {/* <div className='api-blog-data' dangerouslySetInnerHTML={{__html: item.description}}/> */}
                 </CardContent>
               </CardActionArea>
                  <CardActions sx={{margin : '0px 10px'}}>
                      <Button size="large" sx={{backgroundColor : '#555555', color : '#fff', fontWeight : 'bold', padding : '10px 25px', ":hover" : {backgroundColor : '#555555'}}}>اقرأ المزيد</Button> 
                </CardActions>
              </Card>
            </Slide>
          </Grid>         
            )
          })
          : <Loading/>}
   
         </Grid>
        </Container>
  )
}

export default SubBlog