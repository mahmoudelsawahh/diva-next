import dynamic from 'next/dynamic';
const Category = dynamic(() => import('../components/Category/Category'),{
  ssr : false
});
import { getCategoryData } from '../lib/DataFetching';

export const metadata = {
  title: "اتيليه فساتين زفاف وافراح",
}


export default async  function Gallery () {
  const data = await getCategoryData()
  return (
    <>
      <Category CategoryData={data.data}/>
    </>
  )
}


