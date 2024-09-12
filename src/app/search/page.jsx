'use client'
import PostCard from '@/components/Post/Post-card';
import useFetch from '@/hooks/useFetch';
import { useParams, useSearchParams } from 'next/navigation';
import React from 'react'

export default function Search() {
    const searchParams = useSearchParams();
    const query = searchParams.get('q').toString() || '';
    const { data, isLoading } =useFetch(`posts/search?q=${query}`);
    console.log("data>>>",data);

    if (!data || !data.posts || data.posts.length === 0) {
        return <p>No results found</p>;
      }
    
  return (
        <>
            {isLoading ? (
                <p>Loading...</p>
            ) : (
              <PostCard posts={data.posts} />
            )}
        </>
  )
}
