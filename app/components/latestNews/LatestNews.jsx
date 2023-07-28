"use client"
import { Box, Container, Typography } from '@mui/material'
import dynamic from 'next/dynamic';
import { useState , useEffect } from 'react';
const NewsCarsoul = dynamic(() => import('./NewsCarsoul'));
import { Slide } from 'react-reveal'

const LatestNews = ({data}) => {
   const [loadingComponent , setLoadingComponent] = useState(true);
   useEffect(()=>{
     setLoadingComponent(false)
   },[])

  return (
   <>
     {loadingComponent ? null:
      <Box component={'section'} sx={{height : '130vh', overflow : 'hidden'}} className='services'>
      <div className='top-wave'></div>
      <div className='overlay'>
         <div className='category-content'> 
         <Container maxWidth="xxl" fixed>
          <Slide left>
             <Typography variant='subtitle1' sx={{textAlign : 'center', color : '#E60263', fontSize : '14px', fontWeight : 'bold'}}>احدث اخبار ديفا</Typography>
          </Slide>
          <Slide right>
              <Typography variant='h1' sx={{textAlign : 'center', fontSize : '2rem', fontWeight : 'bold', position : 'relative'}} className='category-title'>احدث اخبار الموضة والجمال</Typography>
          </Slide>
         <Box sx={{margin : '80px 0px'}}>
    
       <Slide left>
          <NewsCarsoul data={data}/>
       </Slide>
   
         </Box>
      </Container>
         </div>
         <div className='bottom-wav'></div>
      </div>
    </Box>
     }
   </>
  )
}

export default LatestNews