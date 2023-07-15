"use client"

import { usePreview } from "@/utils/sanityPreview";
import BlogList from "./BlogList";

export default function PreviewBlogList( {query} ) {

    const posts = usePreview(null, query);

    console.log(posts.length);
    
    return <BlogList posts={posts} />;
}