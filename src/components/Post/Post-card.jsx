import React from "react";
import { CiViewBoard } from "react-icons/ci";
import { BiDislike, BiLike } from "react-icons/bi";
import Image from "next/image";
import Link from "next/link";
export default function PostCard({ posts }) {
  return (
    <div className="row my-5">
      {posts.map((post) => (
        <div className="col-lg-4" key={post.id}>
          <div className="post-card my-1 p-3" >
            <Image src="/post-cover.jpg" width="1000" height="1500" alt="post cover" className="img-fluid"/>
            <h4><Link href={`/posts/${post.id}`}>{post.title}</Link></h4>
            <div className="my-2">
              <span>
                <CiViewBoard /> {post.views}
              </span>
              <span>
                <BiLike /> {post.reactions.likes}
              </span>
              <span>
                <BiDislike /> {post.reactions.dislikes}
              </span>
            </div>
            <p>{post.body}</p>
            <ul className="post-tags">
              {post.tags.map((tag, index) => (
                <li className="btn btn-sm bg-info-subtle rounded-2" key={index}>{tag}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}
