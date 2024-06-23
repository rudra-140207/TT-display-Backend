import mongoose from "mongoose";

const fileSchema = new mongoose.Schema({
  classID: {
    type: String,
    required: true,
    unique: true,
  },
  url: {
    type: String,
    // required: true,
  },
  secondUrl: {
    type: String,
  },
  message: {
    type: String,
  },
});

const File = mongoose.model("File", fileSchema);

export default File;
