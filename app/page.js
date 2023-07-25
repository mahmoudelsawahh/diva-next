import dynamic from 'next/dynamic';
const Loading = dynamic(() => import('@/loading'),{
  ssr : false,
});
const HomeCarousel = dynamic(() => import('./components/HomeCarousel/HomeCarousel'),{
  ssr : false,
  loading : ()=> <Loading/>
});
const AboutUs = dynamic(() => import('./components/home-page/AboutUs'),{
  ssr : false,
  loading : ()=> <Loading/>
});
const Goals = dynamic(() => import('./components/Goals/Goals'),{
  ssr : false,
  loading : ()=> <Loading/>
});
// const Category = dynamic(() => import('./components/Category/Category'));
// import {getArticleData, getCategoryData } from './lib/DataFetching';
// const LatestNews = dynamic(() => import('./components/latestNews/LatestNews'));
const InstagramBanner = dynamic(() => import('./components/InstagramBanner/InstagramBanner'),{
  ssr : false,
  loading : ()=> <Loading/>
});
const Distinguishes = dynamic(() => import('./components/Distinguishes/Distinguishes'),{
  ssr : false,
  loading : ()=> <Loading/>
});

export default async function Home () {
  // const data = await getArticleData();
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
        <Category CategoryData={CategoryData.data}/>
        </section> */}
        <section>
        <Distinguishes/>
        </section>
        {/* <section>
            <LatestNews data={data}/>
           </section> */}
            <section className='instagram-banner'>
              <InstagramBanner/>
            </section>
    </>
  )
}

