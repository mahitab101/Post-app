'use client'
import useFetch from '@/hooks/useFetch'
import React from 'react'

export default function Tags() {
    const { data, isLoading } =useFetch("posts/tags");
  return (
    <div className="post-card my-1 p-3">
        <ul className="post-tags">
        {data.map((tag)=>(
            <li className='btn btn-sm bg-info-subtle rounded-2' key={tag.slug}>{tag.name}</li>
        ))}
        </ul>
    </div>
  )
}
