import { NextResponse } from "next/server";
import connectionDB from "../../../../../libs/mongodb";
import Topics from "../../../../../models/topics";

export async function PUT(request, { params }) {
    const { id } = params;
    const { newTitle: title, newDescription: description } = await request.json();
    await connectionDB();
    await Topics.findByIdAndUpdate(id, { title, description });
    return NextResponse.json({ message: "Topic updated" }, { status: 200 });
  }


export const  GET = async (request,{params}) => {
  const { id } = params
  await connectionDB()
  const topic = await Topics.findOne({ _id: id})
  return NextResponse.json({topic}, {status:200})
}