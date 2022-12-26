const model = require("../models");
const formDB = model.form;

//@desc Get Contact messages Info
//@route GET portfolio/contact
//@access Private
const getForm = async (req, res) => {
  const find = await formDB.find();
  return res.status(200).json(find);
};

//@desc Post one form
//@route POST portfolio/contact
//@access Public
const postForm = async (req, res) => {
  const { where, name, email, message } = req.body;
  if (!where || !name || !email || !message)
    return res.status(400).json({
      message: "missing information, need: name, where, email and message",
    });
  const create = await formDB.create({
    where,
    name,
    email,
    message,
  });
  return res.status(200).json(create);
};

//@desc Delete one form
//@route DELETE portfolio/contact/:id
//@access Private
const deleteForm = async (req, res) => {
  const id = req.params.id;
  const search = await formDB.findById(id);

  if (!search) {
    return res.status(404).json({ message: "ID not found." });
  }

  const deleteById = await formDB.findByIdAndDelete(id);
  return res.status(200).json(deleteById);
};

module.exports = { deleteForm, getForm, postForm };
