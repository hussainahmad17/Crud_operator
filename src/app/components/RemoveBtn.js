"use client"
import React from 'react'
import { RiDeleteBin6Line } from "react-icons/ri";
import {useRouter}from 'next/navigation';
const RemoveBtn = ({id}) => {
    const router = useRouter()
    const handleDelete = async () => {
        try {
            const res = await fetch(`http://localhost:3000/api/topics?id=${id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
            });
            if (!res.ok) {
                throw new Error("Failed to delete topic");
            }
            
            if(res.ok){
                router.refresh()
            }
        } catch (error) {
            console.log(error);
        }
    }
  return (
    <>
        <button onClick={handleDelete} className="text-red-500 hover:text-red-700">
        <RiDeleteBin6Line size={20} />
        </button>
    </>
  )
}

export default RemoveBtn
