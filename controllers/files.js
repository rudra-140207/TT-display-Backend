import File from "../models/files.js";
export const updateFile = async (req, res) => {
  const { classID } = req.params;
  const { url } = req.body;

  if (!url) {
    return res.status(400).json({ error: "URL is required" });
  }

  try {

    let updatedFile = await File.findOne({ classID });

    if (!updatedFile) {
      updatedFile = new File({ classID, url });
      await updatedFile.save();
    } else {
      updatedFile.url = url;
      await updatedFile.save();
    }

    res.status(200).json(updatedFile);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};
