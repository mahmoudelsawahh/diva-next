"use client"
import dynamic from 'next/dynamic';
import { Box, Button, Container, Grid, Typography, Slide } from '@/app/lib/MuiSsr'
import React, { useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { baseUrl, mainUrl } from '@/app/lib/baseUrl';
import { useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
const Loading = dynamic(() => import('@/loading'),{
  ssr : false
});

const data = [
  {
      id : 3,
      name : "خطوبة"
  },

  {
      id : 2,
      name : 'مشاهير'
  },
  {
      id : 1,
      name : "زفاف"
  },
]



const Category = ({CategoryData}) => {
  const test = (e)=>{
    e.preventDefault();
    
  }
  const [getId , setGetId] = useState(3);
  const [filterData , setFilterData] = useState([]);
  const router = useRouter();
  const slug = usePathname();
  const resultData = slug === "/" ? filterData.slice(0,6) : filterData
  useEffect(()=>{
    const weddingData =  CategoryData.filter((item)=> item.catId === 1)
    const celebritiesData = CategoryData.filter((item)=> item.catId === 2)
    const engagementData = CategoryData.filter((item)=> item.catId === 3)
    if(getId === 1){
      return setFilterData(weddingData)
    }else if ( getId === 2 ){
      return setFilterData(celebritiesData)
    }else{
      return setFilterData(engagementData)
    }
  },[getId])
  return (
    <>
    <Box sx={{ overflow : 'hidden'}} className='services'>
       <div className='top-wave'></div>
       <div className='overlay'></div>
        <Box sx={{position : 'relative'}}>
        <Box className='category-content' sx={{height : '100%', margin : '80px 0px'}}> 
          <Container maxWidth="lg" fixed>
 <Slide left>
    <Typography variant='subtitle1' sx={{textAlign : 'center', color : '#E60263', fontSize : '14px', fontWeight : 'bold'}}>المعرض</Typography>
 </Slide>
 <Slide right>
 <Typography  variant='h1' sx={{textAlign : 'center', fontSize : '2rem', fontWeight : 'bold', position : 'relative'}} className='category-title'>من اهم مايميزنا هو معرضنا</Typography>
 </Slide> 
  <Slide right>
  <Box sx={{display : "flex",flexWrap : 'wrap', justifyContent : 'center', alignItems : 'center', margin : '50px 0px'}} >
     {data.map((item)=>{
         return (
             <Button 
             onClick={()=> setGetId(item.id)}
              key={item.id} variant='contained' 
             sx={{width : '180px', fontSize : '20px', fontWeight : 'bold', ":hover" : {backgroundColor : '#E60263', color : '#fff'}, margin : '10px'}} 
              className={getId === item.id ? "active" : "no-active"}
             >
                 {item.name}
             </Button>
         )
     })}
  </Box>
  </Slide>
  <Grid container spacing={3}>
         {data ? 
            resultData.map((item)=>{
            return (
              <>
              <Grid item xs={12} lg={4} key={item.id}>
           <Slide bottom>
          <Box sx={{display : 'flex', justifyContent : 'space-between', alignItems : 'baseline', flexDirection : 'column', position : 'relative', height : '380px'}}>
          <Image   onClick={(e)=> window.open(`${mainUrl}/gallery/${item.id}/${item.name.replace(/\s+/g, '-')}`, '_self')} className='category-list' src={`${baseUrl}/images?id=${item.imageId}`} fill alt={item.name} style={{ border : '10px solid #fff', minHeight : '350px'}} loading='lazy' />
          </Box>
              <a aria-label='هدفنا الأول والأخير هو جعلك تبرزين جمالك بوضع المكياج الذي يليق بكِ.' style={{ textAlign : 'center', width : '100%' ,fontSize : '18px',fontWeight : 'bold', padding : '20px'}} className='category-link' href={`${mainUrl}/gallery/${item.id}/${item.name.replace(/\s+/g, '-')}`}>{item.name}</a>
              </Slide>
            </Grid>
              </>
            )
          })
          
         : <Loading/>}
      </Grid>
               <Box sx={{display : slug === "/" ? "flex": "none", flexDirection : 'column', alignItems : 'center', margin : '50px 0px'}}>
                 <Button 
                 onClick={()=> router.push(`${mainUrl}/gallery`)} variant='contained' 
                    sx={{width : '180px', fontSize : '20px', fontWeight : 'bold',backgroundColor : '#E60263', ":hover" : {backgroundColor : '#E60263'},color : '#fff', margin : '0px 10px',
                    }} 
                      >
                 المزيد
             </Button>
               </Box>
      </Container>
          </Box>
        </Box>
       <div className='bottom-wav'></div>
     </Box>
  </>
  )
}

export default Category