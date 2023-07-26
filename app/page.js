import dynamic from 'next/dynamic';
const Loading = dynamic(() => import('@/loading'),{
  ssr : false,
});
const HomeCarousel = dynamic(() => import('./components/HomeCarousel/HomeCarousel'),{
  ssr : false,
  loading : ()=> <Loading/>
});
const AboutUs = dynamic(() => import('./components/home-page/AboutUs'));
const Goals = dynamic(() => import('./components/Goals/Goals'));
// const Category = dynamic(() => import('./components/Category/Category'),{
//   loading : ()=> <Loading/>
// });
import {getArticleData, getCategoryData } from './lib/DataFetching';
const LatestNews = dynamic(() => import('./components/latestNews/LatestNews'),{
  loading : ()=> <Loading/>
});
const InstagramBanner = dynamic(() => import('./components/InstagramBanner/InstagramBanner'));
// const DevaStudioVideo = dynamic(() => import('./components/DevaStudioVideo/DevaStudioVideo'),{
//   ssr : false,
// });
const Distinguishes = dynamic(() => import('./components/Distinguishes/Distinguishes'));

export default async function Home () {
  const data = await getArticleData();
  // const CategoryData = await getCategoryData();
  return (
    <>
        <HomeCarousel/>
        <section>
            <AboutUs/>
        </section>
        <section>
            <Goals/>
        </section>
          {/* <section>
               <DevaStudioVideo/>
            </section>  */}
        {/* <section>
        <Category CategoryData={CategoryData.data}/>
        </section>  */}
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

