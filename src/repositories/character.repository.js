const Character = require("../models/character.model");

const create = async (characterData) => {
  return await Character.create(characterData);
};

const findAllByOwner = async (ownerId) => {
  return await Character.find({ owner: ownerId });
};

const findById = async (characterId) => {
  return await Character.findById(characterId);
};

const update = async (characterId, characterData) => {
  return await Character.findByIdAndUpdate(
    characterId,
    characterData,
    { new: true }
  );
};

const remove = async (characterId) => {
  return await Character.findByIdAndDelete(characterId);
};

module.exports = {
  create,
  findAllByOwner,
  findById,
  update,
  remove,
};