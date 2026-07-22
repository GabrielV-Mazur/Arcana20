import characterService from "../services/character.service.js";

export default {
  async create(req, res, next) {
    try {
      const character = await characterService.createCharacter(req.body);
      res.status(201).json(character);
    } catch (error) {
      next(error);
    }
  },

  async list(req, res, next) {
    try {
      const characters = await characterService.listCharacters();
      res.json(characters);
    } catch (error) {
      next(error);
    }
  },

  async get(req, res, next) {
    try {
      const character = await characterService.getCharacter(req.params.id);
      res.json(character);
    } catch (error) {
      next(error);
    }
  },

  async update(req, res, next) {
    try {
      const character = await characterService.updateCharacter(req.params.id, req.body);
      res.json(character);
    } catch (error) {
      next(error);
    }
  },

  async remove(req, res, next) {
    try {
      await characterService.removeCharacter(req.params.id);
      res.status(204).end();
    } catch (error) {
      next(error);
    }
  },
}; 
