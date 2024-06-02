// models/Story-model.ts
 
import mongoose from 'mongoose';
 
export interface Story {
  title: string;
  story: string;
  Story_id: mongoose.Schema.Types.ObjectId;
}
 
export interface MongoStory extends Story, mongoose.Document {}
 
export type TStory = Story & {
  _id: string;
  createdAt: string;
  updatedAt: string;
};
 
const StorySchema = new mongoose.Schema<Story>({
  title: {
    type: String,
    required: true,
  },
  story: {
    type: String,
    required: true,
  },
  Story_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
});
 
export default mongoose.models.Story || mongoose.model<Story>('Story', StorySchema);