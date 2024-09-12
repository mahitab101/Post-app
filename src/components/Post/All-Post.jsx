
'use client'
import useFetch from '../../hooks/useFetch';
import Pagination from '../Pagination';
import PostCard from './Post-card';

export default function AllPost() {
    const { data, isLoading } =useFetch("posts?limit=0&skip=0");
    return (
        <>
            {isLoading ? (
                <p>Loading...</p>
            ) : (
              <>
                <PostCard posts={data.posts} />
                <Pagination />
              </>
            )}
        </>
    );

}
