import React from 'react'
// import { RiDeleteBin6Line } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";
import Link from 'next/link';
import RemoveBtn from './RemoveBtn';
export const dynamic = "force-dynamic";
export const url = process.env.NEXT_PUBLIC_API_URL



const getData = async () => {
  try {
    const res = await fetch(`${url}/api/topics`, { cache: "no-store" })
    if (!res.ok) {
      throw new Error("Failed to fetch topics");
    }
     const data = await res.json()
    //  console.log("data: " , data);
     return data
  } catch (error) {
    console.log(error);
  }
}

const TopicList = async () => {

  const {topic} = await getData()

  return (
    <>
      {
        topic.map((t, index)=>{
         return <div key={index} className="container mx-auto p-4">
          <div className="flex items-center justify-between bg-white rounded shadow-md p-4">
            <div className="content">
              <h1 className="text-xl font-semibold text-gray-800">{t.title}</h1>
              <p className="text-gray-600">{t.description}</p>
            </div>
            <div className="action-buttons flex flex-col space-y-2">
              <button className="text-red-500 hover:text-red-700">
                <RemoveBtn id={t._id}/>
              </button>
              <Link href={`/editTopic/${t._id}`}>
                <button className="text-blue-500 hover:text-blue-700">
                  <FiEdit id={t._id} size={20} />
                </button>
              </Link>
            </div>
          </div>
        </div>
        })
      }
    </>
  )
}

export default TopicList

