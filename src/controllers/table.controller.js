import tableService from "../services/table.service.js";

export default {
  async create(req, res, next) {
    try {
      const table = await tableService.createTable(req.body);
      res.status(201).json(table);
    } catch (error) {
      next(error);
    }
  },

  async list(req, res, next) {
    try {
      const table = await tableService.listTables();
      res.json(table);
    } catch (error) {
      next(error);
    }
  },

  async get(req, res, next) {
    try {
      const table = await tableService.getTable(req.params.id);
      res.json(table);
    } catch (error) {
      next(error);
    }
  },

  async update(req, res, next) {
    try {
      const table = await tableService.updateTable(req.params.id, req.body);
      res.json(table);
    } catch (error) {
      next(error);
    }
  },

  async remove(req, res, next) {
    try {
      await tableService.removeTable(req.params.id);
      res.status(204).end();
    } catch (error) {
      next(error);
    }
  },
}; 
