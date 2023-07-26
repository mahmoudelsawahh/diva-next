"use client"
import { Box, Grid, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import { baseUrl } from '@/app/lib/baseUrl'
const SimilarCategoryTwo = dynamic(() => import('./SimilarCategoryTwo'));
const SimilarCategory = dynamic(() => import('./SimilarCategory'));
const InstagramBanner = dynamic(() => import('../../InstagramBanner/InstagramBanner'));
const ImageGallery = dynamic(() => import('./ImageGallery'));

const SubCategory = ({data}) => {
  return (
   <>
    <Box sx={{padding : '0px 20px'}}>
        <Grid container>
            <Grid item xs={12} lg={9}>
                <Grid container sx={{border : '2px solid #eee', padding : '20px'}}>
                <Grid item xs={12} sx={{display : {xs : 'block', lg : 'none'}}}>
                     <Image loading='lazy' src={`${baseUrl}/images?id=${data.imageId}`} className='category-photo' layout='fill' alt={data.ame}/>
                  </Grid>

                  <Grid item xs={12} lg={6} xl={7}>
                  <Typography variant='h1' sx={{fontSize : '24px', marginBottom : '30px',textAlign : 'center', width : {xs : '100%', lg : '85%'}, lineHeight : '50px'}}>{data.name}</Typography>
                  <div className='api-blog-data api-category-data' dangerouslySetInnerHTML={{__html: data.description}}/>
                  </Grid>

                  <Grid item xs={12} lg={6} xl={4} sx={{display : {xs : 'none', lg : 'flex', justifyContent : 'flex-end'}}}>
                    <Box sx={{position : 'relative', width : '300px', height :'400px'}}>
                    <Image loading='lazy' src={`${baseUrl}/images?id=${data.imageId}`}  fill  alt={data.ame}/>
                    </Box>
                  </Grid>
                   <Box sx={{width : '100%'}}>
                      <ImageGallery data={data}/>
                   </Box>
                </Grid>
            </Grid>
            <Grid item xs={12} lg={3}>
                <SimilarCategory data={data.articles}/>
            </Grid>
        </Grid>
        <Box>
           <SimilarCategoryTwo data={data.matched}/>
        </Box>
        <InstagramBanner/>
    </Box>
    </>

  )
}

export default SubCategory

