"use client"
import Loading from '@/loading'
import dynamic from 'next/dynamic';
import useSWR from 'swr'
const Category = dynamic(() => import('../components/Category/Category'),{
  ssr : false
});
const fetcher = (...args) => fetch(...args).then(res => res.json())
export default  function Gallery () {
  const { data, error, isLoading } = useSWR('https://api.divanice.com/rest/tables.article/getPosts', fetcher)
  if (error) return <div><Loading/></div>
  if (isLoading) return <div><Loading/></div>

  return (
    <>
      <Category CategoryData={data.data}/>
    </>
  )
}


