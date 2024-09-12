'use client'
import useFetch from '@/hooks/useFetch'
import { useParams } from 'next/navigation'
import React from 'react'

export default function PostDetails() {
  const {id} = useParams();
  const { data, isLoading } = useFetch(`posts/${id}`)
  console.log("data from details",data);
  return (
    <>
    {isLoading ? (
      <p>Loading...</p>):
    (<div className='my-5'>
      <p> {data.body} </p>
    </div>)}
    </>
  )
}
