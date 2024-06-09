// models/Story-model.ts

import mongoose from 'mongoose';

export interface Story {
  title: string;
  story: string;
  Story_id: string;
}

export interface MongoStory extends Story, mongoose.Document {
  createdAt: Date;
  updatedAt: Date;
}

export type TStory = Story & {
  _id: string;
  createdAt: string;
  updatedAt: string;
};

const StorySchema = new mongoose.Schema<Story>(
  {
    title: {
      type: String,
      required: true,
    },
    story: {
      type: String,
      required: true,
    },
    Story_id: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true, 
  }
);

export default mongoose.models.Story || mongoose.model<Story>('Story', StorySchema);