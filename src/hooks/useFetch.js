'use client'
import { useEffect, useState } from 'react'

export default function useFetch(endPoint) {
    const API_URL = process.env.NEXT_PUBLIC_API_URL;
    const [data, setData] = useState([])
    const [isLoading, setLoading] = useState(true)
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(`${API_URL}/${endPoint}`);
                const result = await res.json();
                setData(result);
            } catch (error) {
                console.error('Error fetching posts:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [endPoint]);

    return { data, isLoading };
}
