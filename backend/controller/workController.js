const model = require("../models");

const workDB = model.work;

//@desc Get Work Info
//@route GET portfolio/en/work

const getWork = async (req, res) => {
  const findWork = await workDB.find();
  res.status(200).json(findWork);
};
//@desc post Work Info
//@route POST portfolio/en/work
/* title: String,
  projectLink: String,
  codeLink: String,
  imgUrl: String,
  description: String,
  name: String,
  tags: [String], */
const postWork = async (req, res) => {
  const { title, projectLink, codeLink, imgUrl, description, name, tags } =
    req.body;
  if (
    !title ||
    !projectLink ||
    !codeLink ||
    !imgUrl ||
    !description ||
    !name ||
    !tags
  )
    return res.status(400).json({
      message:
        "Wrong requisition, it needs: title:'', projectLink:'', codeLink:'', imgUrl:'',  description: '', name: '', tags: '[string array]'",
    });

  const create = await workDB.create({
    title,
    projectLink,
    codeLink,
    imgUrl,
    description,
    name,
    tags,
  });
  res.status(200).json({
    message: "Created Successfully",
    create,
  });
};
//@desc update Work Info
//@route PUT portfolio/en/work

const putWork = async (req, res) => {
  const find = await workDB.findById(req.params.id);

  if (!find) return res.status(404).json({ message: "ID Not found." });
  if (!req.params.id)
    return res.status(400).json({ message: "specify the ID" });

  const update = await workDB.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json({
    message: "Updated Successfully.",
    req: update,
  });
};

//@desc Delete Work Info
//@route DELETE portfolio/en/work
const deleteWork = async (req, res) => {
  const find = await workDB.findById(req.params.id);
  if (!find) return res.status(404).json({ message: "ID Not found." });

  const deleteValue = await workDB.findByIdAndDelete(req.params.id);
  res.status(200).json(deleteValue);
};

//@desc Get ONE WORK
//@route GET portfolio/en/work/:id
//@access Public
const getOneWork = async (req, res) => {
  const id = req.params.id;
  const data = await workDB.findById(id);
  res.status(200).json(data);
};

module.exports = { getOneWork, getWork, postWork, putWork, deleteWork };
