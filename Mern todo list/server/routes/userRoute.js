import express from 'express'
import { create, deleteUser, getAll, getUser, update } from '../controller/userController.js';

const route = express.Router();

route.post("/create", create)
route.get("/getall", getAll)
route.get("/get/:id", getUser)
route.put("/update/:id", update)
route.delete("/delete/:id", deleteUser)

export default route;