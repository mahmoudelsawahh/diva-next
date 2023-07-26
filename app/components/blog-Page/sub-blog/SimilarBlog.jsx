"use client"
import Image from 'next/image'
import Link from 'next/link'
import { baseUrl } from '@/app/lib/baseUrl'
import { Slide , Box, Typography } from '@/app/lib/MuiSsr';
import Loading from '@/loading';

const SimilarBlog = ({data}) => {
   const dataItems = data ? data.articles : null
  return (
      <Box>
    <Slide bottom>
         <Typography variant='h5' sx={{fontSize : '25px', fontWeight : 'bold', marginBottom : '20px', textAlign : 'center'}}>مقالات مشابهه</Typography>
    </Slide>
 {dataItems ? 
  dataItems.map((item)=>{
   return (
   <Slide key={item.id} right>
   <Box sx={{display : 'flex',justifyContent : 'center', alignItems : 'center', flexDirection : 'column', margin : '50px 0px'}}>
     <Image  src={`${baseUrl}/images?id=${item.imageId}`} width={600} height={600} loading='lazy' alt={item.name} style={{maxWidth : '40%', height : 'auto', border : '1px solid #dee2e6', borderRadius : '0.25rem', padding : '0.25rem'}}/>
     <Link href={`/blog/${item.id}/${item.name.replace(/\s+/g, '-')}`} style={{fontSize : '22px', margin : '10px 0px', textDecoration : 'underline'}}> {item.name}</Link>
  </Box>
   </Slide>
   )
  })
 : <Loading/>}
</Box>
  )
}

export default SimilarBlog
