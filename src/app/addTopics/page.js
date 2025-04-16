"use client"
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const AddTopics = () => {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const router = useRouter()
  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!title || !description) {
      alert("Please fill all fields")
      return
    }
    try {
      const res = await fetch("http://localhost:3000/api/topics", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ title, description }),
      })
      if(res.ok){
        router.push("/")
      }
    } catch (error) {
      console.log("Field to post:", error);
    }
  }
  return (
    <div className="container mx-auto p-4">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md max-w-md mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-center">Add New Topic</h2>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="Add title"
          className="w-full border border-gray-300 rounded px-3 py-2 mb-4 focus:outline-none focus:border-blue-500"
        />
        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          type="text"
          placeholder="Add description"
          className="w-full border border-gray-300 rounded px-3 py-2 mb-4 focus:outline-none focus:border-blue-500"
        />
        <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition">
          ADD TOPIC
        </button>
      </form>
    </div>
  );
};

export default AddTopics;
