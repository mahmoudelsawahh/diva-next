import dynamic from 'next/dynamic';
const Loading = dynamic(() => import('@/loading'),{
  ssr : false,
});
const Service = dynamic(() => import('./components/Service/Service'))
const HomeCarousel = dynamic(() => import('./components/HomeCarousel/HomeCarousel'),{
  ssr : false,
  loading : ()=> <Loading/>
});
const AboutUs = dynamic(() => import('./components/home-page/AboutUs'));
const Goals = dynamic(() => import('./components/Goals/Goals'));
import {getArticleData, getCategoryData } from './lib/DataFetching';
const CategoryData = dynamic(() => import('./components/Category/CategoryData'),{
  loading : ()=> <Loading/>
});
const LatestNews = dynamic(() => import('./components/latestNews/LatestNews'),{
  loading : ()=> <Loading/>
});
const InstagramBanner = dynamic(() => import('./components/InstagramBanner/InstagramBanner'));
// const DevaStudioVideo = dynamic(() => import('./components/DevaStudioVideo/DevaStudioVideo'),{
//   ssr : false,
// });
const Distinguishes = dynamic(() => import('./components/Distinguishes/Distinguishes'));

export const metadata = {
  title: "اتيليه فساتين زفاف وافراح",
}

export default async function Home () {
  const data = await getArticleData();
  return (
    <>
        <HomeCarousel/>
        <section>
            <AboutUs/>
        </section>
        <section>
          <Service/>
        </section>
        <section>
            <Goals/>
        </section>
          {/* <section>
               <DevaStudioVideo/>
            </section>  */}
        <section>
        <CategoryData/>
        </section> 
        <section>
        <Distinguishes/>
        </section>
        <section>
            <LatestNews data={data}/>
           </section>
            <section className='instagram-banner'>
              <InstagramBanner/>
            </section>
    </>
  )
}

