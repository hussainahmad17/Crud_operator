import { NextResponse } from "next/server";
import Topics from "../../../../models/topics";
import connectionDB from "../../../../libs/mongodb";

export const POST = async (request) => {
    const {title,description} = await request.json();
    await connectionDB();
    await Topics.create({title,description})
    return NextResponse.json({message:"POSTED"},{status:201})
}


export const GET =async () => {
    await connectionDB();
    const topic = await Topics.find()
    return NextResponse.json({topic})
}
 

export const DELETE = async (request) =>{
    const id = request.nextUrl.searchParams.get("id");
    await connectionDB()
    await Topics.findByIdAndDelete(id)
    return NextResponse.json({message:"Post Deleted"},{status:200})
}