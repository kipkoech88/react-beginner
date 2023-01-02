import React from 'react'
import { useState, useEffect } from 'react';
import Bloglist from './Bloglist';

function Home() {

  const [blogs, setBlogs]=useState([
    {title:"My greatest article",body:"Lorem ipsum .....",author:"Hosea", id:1},
    {title:"My not greatest article",body:"Lorem ipsum .....",author:"Kipkoech", id:2},
    {title:"My  least greatest article",body:"Lorem ipsum .....",author:"Hosea", id:3}
  ])

  const handleDelete=(id)=>{
    const newBlogs=blogs.filter((blog)=>blog.id!==id);
    setBlogs(newBlogs)
  }

  useEffect(()=>{
    console.log("Use edfect ran")
  },[])

  return (
    <div className='content'>
      <Bloglist blogs={blogs} title="All blogs" handleDelete={handleDelete}/>
      <Bloglist blogs={blogs.filter((blog)=>blog.author==="Hosea")} title="Hosea's blogs"/>
    </div>
  )
}

export default Home