"use client"
import { Box, Container, Grid, Typography , Slide} from '@/app/lib/MuiSsr'

const data = [
    {
        num : 7745,
        title : "جاليري بالموقع"
    },
    {
        num : 4222 ,
        title : "مقال بالموقع"
    },
    {
        num : 6980,
        title : "مشترك بالموقع"
    },
    {
        num : 4222 ,
        title : " متواجد بالموقع"
    },
]

const Distinguishes = () => {
  return (
        <Container maxWidth="xxl" fixed>
          
          <Slide right>
             <Typography variant='subtitle1' sx={{textAlign : 'center', color : '#E60263', fontSize : '20px', fontWeight : 'bold'}}>ارقامنا اهم مايميزنا</Typography>
         </Slide>
          <Slide left>
             <Typography variant='h1' sx={{textAlign : 'center', fontSize : '40px', fontWeight : 'bold', position : 'relative'}} className='category-title'> نحرص دائما علي ارضاء عملائنا </Typography>
          </Slide>
          
         
         <Box sx={{margin : "100px 0px"}}>
         <Grid container>
            {data.map((item, id)=>{
                return (
                        // eslint-disable-next-line react/jsx-key
                        <Grid item key={id} xs={12} md={3} sx={{textAlign : 'center', margin : {xs : '50px 0px', md : '0px'}}}>
                           
                              <Slide right>
                                <Typography variant='h1' sx={{fontSize : '50px', color : '#E60263', marginBottom : '10px', fontWeight : 'bold'}}>{item.num}</Typography>
                                <Typography variant='h1' sx={{fontSize : '25px', fontWeight : 'bold', color : '#808080'}}>{item.title}</Typography>
                              </Slide>
                             
                        </Grid>
                )
            })}
         </Grid>
        </Box>
         
    </Container>
  )
}

export default Distinguishes