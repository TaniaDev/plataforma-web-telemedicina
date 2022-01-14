import { Router } from "express";
import { UsuarioController } from "../controllers/UsuarioController";

const router = Router();

const usuarioController = new UsuarioController();

router.post("/cadastrar", usuarioController.create);

export { router };
