const models = require("../models");
const experiencesDB = models.experiences;

//@desc Get Experiences Info
//@route GET portfolio/en/experiences
//@access Private
const getExperiences = async (req, res) => {
  const find = await experiencesDB.find();
  res.status(200).json(find);
};

//@desc Add Experiences Info
//@route POST portfolio/en/experiences
/*  year: String,
  name: String,
  bgColor: String,
  icon: String,
  desc: String,
  company: String, */
const postExperiences = async (req, res) => {
  const { name, bgColor, icon, desc, company, year } = req.body;
  if (!name || !bgColor || !icon || !desc || !company || !year)
    res.status(400).json({
      error: "wrong requisiton format",
      correct: {
        year: "String",
        name: "String",
        bgColor: "String",
        icon: "String",
        desc: "String",
        company: "String",
      },
    });
  else {
    const insertValue = await experiencesDB.create({
      year,
      name,
      bgColor,
      icon,
      desc,
      company,
    });
    res.status(200).json(insertValue);
  }
};

//@desc update Experiences Info
//@route PUT portfolio/en/experiences
const putExperiences = async (req, res) => {
  const find = await experiencesDB.findById(req.params.id);
  if (!req.params.id)
    return res.status(400).json({ message: "specify the ID" });
  if (!find)
    return res.status(404).json({ message: "not found on the database" });

  const update = await experiencesDB.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );
  res.status(200).json(update);
};

//@desc Delete experiences Info
//@route DELETE portfolio/en/experiences
const deleteExperiences = async (req, res) => {
  const find = await experiencesDB.findOne({ _id: req.params.id });

  if (!find) return res.status(404).json({ message: "ID not found" });

  const deleteExperience = await experiencesDB.deleteOne({
    _id: req.params.id,
  });
  res.status(200).json({ message: "Successfully deleted.", deleteExperience });
};

//@desc Get ONE experiences
//@route GET portfolio/en/experiences/:id
//@access Public
const getOneExperience = async (req, res) => {
  const id = req.params.id;
  const data = await experiencesDB.findById(id);
  res.status(200).json(data);
};

module.exports = {
  getOneExperience,
  getExperiences,
  postExperiences,
  putExperiences,
  deleteExperiences,
};
