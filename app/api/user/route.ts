// /app/api/story/route.ts
import { connectToMongo } from "@/db/mongoose";
import StoryModel from "@/model/stories";
import mongoose from "mongoose";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    try {
        const stories = await request.json();
        await connectToMongo();
        const title=stories.title;
        const story=stories.story;
        const Story_id=stories.user_id;
        //console.log("mongodb connected")
        await StoryModel.create({ title, story, Story_id });
        await mongoose.connection.close();
        return NextResponse.json({ message: "Story saved successfully" }, { status: 201 });
    } catch (err) {
        console.error(err);
        await mongoose.connection.close();
        return NextResponse.json({ message: "Failed to save story" }, { status: 400 });
    }
}


export async function GET(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url);
        const storyId = searchParams.get('Story_id');

        if (!storyId) {
            return NextResponse.json({ message: "Story_id is required" }, { status: 400 });
        }

        await connectToMongo();
        const story = await StoryModel.findOne({ Story_id: storyId });

        if (!story) {
            return NextResponse.json({ message: "Story not found" }, { status: 404 });
        }

        await mongoose.connection.close();
        return NextResponse.json({ story }, { status: 200 });
    } catch (err) {
        console.error(err);
        await mongoose.connection.close();
        return NextResponse.json({ message: "Failed to fetch story" }, { status: 400 });
    }
}