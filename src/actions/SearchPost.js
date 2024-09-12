'use server'

    export const SearchPost = async (formData) => {
        const searchQuery = formData.get('searchQuery');
        console.log("searchQuery>>",searchQuery);
        if(!searchQuery) return;

     return searchQuery;
}