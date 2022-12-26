const models = require("../models");
//call model schema
const skillsDB = models.skills;

//@desc Get Skills Info
//@route GET portfolio/en/skills
const getSkills = async (req, res) => {
  const find = await skillsDB.find();
  res.status(200).json(find);
};

//@desc Add Skills Info
//@route POST portfolio/en/skills
/*
name: String,
bgColor: String,
icon: String, */
const postSkills = async (req, res) => {
  const { name, bgColor, icon } = req.body;
  if (!name || !bgColor || !icon)
    res.status(400).json({
      error: "wrong requisiton format",
      correct: {
        name: "String",
        bgColor: "String",
        icon: "String",
      },
    });
  else {
    const insertValue = await skillsDB.create({
      name,
      bgColor,
      icon,
    });
    res.status(200).json({ insertValue });
  }
};

//@desc update Skills Info
//@route PUT portfolio/en/skills
const putSkills = async (req, res) => {
  const find = await skillsDB.findById(req.params.id);
  if (!find) return res.status(404).json({ message: "ID not found" });
  if (!req.params.id)
    return res.status(400).json({ message: "specify the ID" });

  const update = await skillsDB.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json({ message: "Updated INFO", update });
};

//@desc Delete skills Info
//@route DELETE portfolio/en/skills
const deleteSkills = async (req, res) => {
  const find = await skillsDB.findOne({ _id: req.params.id });

  if (!find) return res.status(404).json({ message: "ID not found" });

  const deleteSkill = await skillsDB.deleteOne({ _id: req.params.id });
  res.status(200).json({ message: "Successfully deleted.", deleteSkill });
};

//@desc Get ONE skill
//@route GET portfolio/en/skill/:id
//@access Public
const getOneSkill = async (req, res) => {
  const id = req.params.id;
  const data = await skillsDB.findById(id);
  res.status(200).json(data);
};

module.exports = {
  getOneSkill,
  getSkills,
  postSkills,
  putSkills,
  deleteSkills,
};
