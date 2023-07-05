import React, { useEffect, useState } from "react";
import { fetchPosts } from "./ApiHandler";

export function writeOnePost(pOnePost) {
  return (
    <>
      {pOnePost.title ? (
        <h2>ITEM: {pOnePost.title}</h2>
      ) : (
        <h2>Title not found</h2>
      )}
      {pOnePost.author?.username ? (
        <h4>SELLER: {pOnePost.author.username}</h4>
      ) : (
        <h4>Seller not found</h4>
      )}
      {pOnePost.price ? (
        <h4>PRICE: {pOnePost.price}</h4>
      ) : (
        <h4>Price not found</h4>
      )}
      {pOnePost.description ? (
        <h4>DESCRIPTION: {pOnePost.description}</h4>
      ) : (
        <h4>Description not found</h4>
      )}
      {pOnePost.location ? (
        <h4>LOCATION: {pOnePost.location}</h4>
      ) : (
        <h4>Location not found</h4>
      )}
      {pOnePost.willDeliver ? (
        <h4>Delivery: YES</h4>
      ) : (
        <h4>Delivery: NO, Customer pickup only</h4>
      )}
    </>
  );
}

export const AllPosts = () => {
  const [selectedId, setSelectedId] = useState("");
  const [posts, setPosts] = useState("");

  let thisUser = localStorage.getItem("userName");

  const getAllPosts = async () => {
    let fnResult = {};
    fnResult = await fetchPosts();
    if (fnResult?.data?.posts) {
      setPosts(fnResult.data.posts.reverse());
    }
  };

  useEffect(() => {
    getAllPosts();
  }, []);

  if (!posts || posts.length < 1) {
    return (
      <section id="postNoResults">
        <h2>Sorry - there are no active posts to display at this time.</h2>
      </section>
    );
  }

  return (
    <>
      <div>
        <h1>----ALL ITEMS----</h1>
      </div>

      {posts.map((item, idx) => (
        <div key={idx} className="onePost">
          {writeOnePost(item)}
          {/* <h2>ITEM: {item.title}</h2>
          <h3>SELLER: {item.author.username}</h3>
          <h3>DESCRIPTION: {item.author.description}</h3>
          <h3>LOCATION: {item.author.location}</h3>
          <h3>DELIVERY: {item.author.willDeliver}</h3> */}
        </div>
      ))}
    </>
  );
};
