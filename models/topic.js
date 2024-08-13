import mongoose from "mongoose";

const topicSchema = new mongoose.Schema({
  title: String,
  description: String,
});

const Topic = mongoose.models.Topic || mongoose.model("Topic", topicSchema);

export default Topic;
