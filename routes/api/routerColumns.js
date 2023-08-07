const express = require("express");

const { ctrlColumns } = require("../../controllers");

const { isAuthorized, isValidId } = require('../../middlewares');

const routerColumns = express.Router();

routerColumns.post('/', isAuthorized,  ctrlColumns.addColumn);

routerColumns.put('/:id', isAuthorized, isValidId,  ctrlColumns.updateColumn);

routerColumns.delete('/:id', isAuthorized, isValidId, ctrlColumns.deleteColumn);


module.exports = routerColumns;




