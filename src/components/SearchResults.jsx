import React from 'react'
import PostCard from './Post/Post-card';

export default function SearchResults({ isLoading, data }) {
    if (isLoading) {
        return <p>Loading...</p>;
      }
    
      if (!data || data.posts.length === 0) {
        return <p className='text-center'>No results found</p>;
      }
    
      return (
        <div>
          <PostCard posts={data.posts} />
        </div>
      );
}
