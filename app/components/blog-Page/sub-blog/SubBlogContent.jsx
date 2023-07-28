"use client"
import dynamic from 'next/dynamic';
import Image from 'next/image'
import { baseUrl } from '@/app/lib/baseUrl'
import { Slide , Box, Typography } from '@/app/lib/MuiSsr';
const Loading = dynamic(() => import('@/loading'),{
   ssr : false,
 });
const SubBlogContent = ({data}) => {
  return (
         <>
            {
               data ? 
            <Box>
               <Box sx={{display : 'flex', justifyContent : 'center'}}>      
                 <Box sx={{height : '400px', width : '100%',position : 'relative'}}>
              <Image src={`${baseUrl}/images?id=${data.imageId}`} layout='fill' alt={data.name} style={{height : '100%'}}/>
               <Typography variant='h6' className='sub-blog-Image-title'>{data.name}</Typography>
              </Box>
               </Box>
                   <Typography sx={{padding : '40px 0px', fontWeight : 'bold'}} variant='h4'>{data.name}</Typography>
                  <div className='api-blog-data' dangerouslySetInnerHTML={{__html: data.description}}/>
               </Box>
               : <Loading/>
            }
         </>
  )
}

export default SubBlogContent