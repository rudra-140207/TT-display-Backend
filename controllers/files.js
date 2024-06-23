import File from "../models/files.js";

export const updateFile = async (req, res) => {
  const { classID } = req.params;
  const { url, secondUrl, message } = req.body;

  try {
    let updatedFile = await File.findOne({ classID });

    if (!updatedFile) {
      updatedFile = new File({ classID });
    }

    // Update only if the field is present in req.body and not empty
    if (url !== undefined && url !== "") {
      updatedFile.url = url;
    }

    if (secondUrl !== undefined && secondUrl !== "") {
      updatedFile.secondUrl = secondUrl;
    }

    if (message !== undefined && message !== "") {
      updatedFile.message = message;
    }

    await updatedFile.save();

    res.status(200).json(updatedFile);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};
