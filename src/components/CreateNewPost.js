import React, { useState } from "react";
import { createNewPost } from "./ApiHandler";

export const CreateNewPost = (props) => {
  const [itemTitle, setItemTitle] = useState("");
  const [itemDescription, setItemDescription] = useState("");
  const [itemPrice, setItemPrice] = useState("");
  const [itemLocation, setItemLocation] = useState("");
  const [itemDeliver, setItemDeliver] = useState("");

  const handleSubmit = (e) => {
    const postNewMessage = async () => {
      e.preventDefault();
      console.log(
        itemTitle +
          " " +
          itemDescription +
          " " +
          itemPrice +
          " " +
          itemLocation +
          " " +
          itemDeliver
      );

      let userInfo = {
        title: itemTitle,
        description: itemDescription,
        price: itemPrice,
        location: itemLocation,
        willDeliver: itemDeliver,
        token: localStorage.getItem("userToken"),
      };

      let newPostResult = await createNewPost(userInfo);
      console.log("newPostResult: ", newPostResult);
    };
    postNewMessage();
  };

  return (
    <div>
      <form className="create-new-post-container" onSubmit={handleSubmit}>
        <h2>CREATE NEW POST</h2>
        <label htmlFor="title">Enter Item Title:</label>
        <input
          value={itemTitle}
          onChange={(e) => setItemTitle(e.target.value)}
          type="text"
          placeholder="Item title"
          id="title"
        />
        <label htmlFor="description">Enter Description:</label>
        <input
          value={itemDescription}
          onChange={(e) => setItemDescription(e.target.value)}
          type="text"
          placeholder="Item description"
          id="description"
        />
        <label htmlFor="price">Enter Item Price:</label>
        <input
          value={itemPrice}
          onChange={(e) => setItemPrice(e.target.value)}
          type="text"
          placeholder="Item price"
          id="price"
        />
        <label htmlFor="location">Enter Item Location:</label>
        <input
          value={itemLocation}
          onChange={(e) => setItemLocation(e.target.value)}
          type="text"
          placeholder="Item location"
          id="location"
        />
        <label htmlFor="willDeliver">Will You Deliver This Item?</label>
        <input
          value={itemDeliver}
          onChange={(e) => setItemDeliver(e.target.value)}
          type="text"
          placeholder="Enter 'true' or 'false'"
          id="willDeliver"
        />
        <button>Create New Post</button>
      </form>
    </div>
  );
};
