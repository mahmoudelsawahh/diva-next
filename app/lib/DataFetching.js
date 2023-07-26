import Loading from "@/loading"
import { baseUrl } from "./baseUrl"

export async function getCategoryData() {
    const res = await fetch(`${baseUrl}/rest/tables.article/getPosts`,{
      cache : 'force-cache',
      headers : {
        "Access-Control-Allow-Headers" : "X-Custom-Header, Upgrade-Insecure-Requests"
      }
    })
    // Recommendation: handle errors 
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      return <Loading/>
    }
   
    return res.json()
  }

  export async function getArticleData() {
    const res = await fetch(`${baseUrl}/rest/tables.article/getArticlesPojo`,{
      cache : 'force-cache'
    })
    // Recommendation: handle errors
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      return <Loading/>
    }
   
    return res.json()
  }

  export async function getBlogData(param) {
    const res = await fetch(`${baseUrl}/rest/tables.article/getArticleDetails`,{
      method : 'POST',
      body : JSON.stringify({"id" : param}),
      cache : 'force-cache',

  })
  
    // Recommendation: handle errors
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      return <Loading/>
    }
   
    return res.json()
  }

  export async function getCategoryDetail(param) {
    const res = await fetch(`${baseUrl}/rest/tables.article/getPostDetails`,{
      method : 'POST',
      body : JSON.stringify({"id" : param}),
      cache : 'force-cache',
      headers : {
        "Access-Control-Allow-Headers" : "X-Custom-Header, Upgrade-Insecure-Requests"
      } 
  })
  
    // Recommendation: handle errors
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      return <Loading/>
    }
   
    return res.json()
  }