"use client"
import dynamic from 'next/dynamic'
import { Box, Container, Typography } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import { Slide } from 'react-reveal'
import { baseUrl, mainUrl } from '@/app/lib/baseUrl'
import { useRouter } from 'next/navigation'
const Loading = dynamic(() => import('@/loading'),{
  ssr : false
});
const SimilarCategory = ({data}) => {
  const router = useRouter()

  return (
   <>
     <Container maxWidth="xl" fixed>
      <Box>
    <Slide bottom>
         <Typography variant='h5' sx={{fontSize : '25px', fontWeight : 'bold', marginBottom : '20px', textAlign : 'center'}}>مقالات مشابهه</Typography>
    </Slide>
 {data ? 
  data.map((item)=>{
   return (
   <Slide bottom key={item.id}>
   <Box sx={{display : 'flex',justifyContent : 'center', alignItems : 'center', flexDirection : 'column', margin : '50px 0px'}}>
     <Image onClick={()=> router.push(`${mainUrl}/blog/${item.id}/${item.name.replace(/\s+/g, '-')}`)} src={`${baseUrl}/images?id=${item.imageId}`} width={600} height={600} loading='lazy' alt={item.name} style={{maxWidth : '40%', height : 'auto', border : '1px solid #dee2e6', borderRadius : '0.25rem', padding : '0.25rem'}}/>
     <Link href={`${mainUrl}/blog/${item.id}/${item.name.replace(/\s+/g, '-')}`} style={{fontSize : '18px', textAlign : 'center' ,margin : '10px 0px'}}> {item.name}</Link>
  </Box>
   </Slide>
   )
  })
 : <Loading/>}
</Box>
    </Container>
   </>
  )
}

export default SimilarCategory
