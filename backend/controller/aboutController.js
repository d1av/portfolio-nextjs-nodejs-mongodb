const model = require("../models");
const aboutDB = model.about;

//@desc Get About Info
//@route GET portfolio/en/about
//@access Private
const getAbout = async (req, res) => {
  const about = await aboutDB.find();
  res.status(200).json(about);
};

//@desc Get ONE ABOUT
//@route GET portfolio/en/about/:id
//@access Public
const getOneAbout = async (req, res) => {
  const id = req.params.id;
  const data = await aboutDB.findById(id);
  res.status(200).json(data);
};

//@desc Post About Info
//@route POST portfolio/en/about
//@access Private
const postAbout = async (req, res) => {
  const { title, description, imgUrl } = req.body;
  if (!title || !description || !imgUrl) {
    res.status(400).json({
      error: "wrong requisiton format",
      correct: {
        title: "String",
        description: "String",
        imgUrl: "String",
      },
    });
  }

  const about = await aboutDB.create({
    title,
    description,
    imgUrl,
  });

  res.status(200).json({ msg: "Successfully Created", about });
};

//@desc Put About Info
//@route PUT portfolio/en/about
//@access Private

const putAbout = async (req, res) => {
  const find = await aboutDB.findById(req.params.id);
  if (!find) return res.status(404).json({ message: "ID not found" });
  if (!req.params.id)
    return res.status(400).json({ message: "specify the ID" });

  const updateAbout = await aboutDB.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json(updateAbout);
};

//@desc Delete About Info
//@route DELETE portfolio/en/about
//@access Private
const deleteAbout = async (req, res) => {
  const findAbout = await aboutDB.findById(req.params.id);
  if (!findAbout) {
    return res.status(400).json({ message: "Not found" });
  }
  const deleted = await aboutDB.findByIdAndDelete(req.params.id);
  res.status(200).json({ message: "Successfully deleted", deleted });
};

module.exports = { getAbout, getOneAbout, postAbout, putAbout, deleteAbout };
