
'use client'
import useFetch from '@/hooks/useFetch';
import React, { useState } from 'react'
import SearchResults from './SearchResults';
import { redirect } from 'next/navigation';
import { useRouter } from 'next/navigation';


export default function Search() {
  const router = useRouter();
  console.log(router);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchQuery) return;
    router.push(`/search?q=${searchQuery}`);

  };

  return (
    <div className="post-card my-1 p-3">
        <form className="d-flex" onSubmit={handleSearch}>
        <input className="form-control me-2" name="searchQuery" type="search" placeholder="Search"
         value={searchQuery}
         onChange={(e) => setSearchQuery(e.target.value)}/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
      {/* <SearchResults isLoading={isLoading} data={data} /> */}
    </div>
  )
}
