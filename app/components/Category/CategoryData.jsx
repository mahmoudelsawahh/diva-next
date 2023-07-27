import dynamic from 'next/dynamic';
import { getCategoryData } from '../../lib/DataFetching';
const Category = dynamic(() => import('./Category'),{
  ssr : false
});
export default async function CategoryData () {
  const data = await getCategoryData()
  return (
    <>
      <Category CategoryData={data.data}/>
    </>
  )
}


