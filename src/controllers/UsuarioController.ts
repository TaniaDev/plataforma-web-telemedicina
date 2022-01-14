import { Request, Response } from "express";
import { UsuarioService } from "../services/UsuarioService";

class UsuarioController {
  async create(req: Request, res: Response) {
    const { id, nome, email, dataNascimento, genero, telefone } = req.body;
    const usuarioService = new UsuarioService();
    const usuario = await usuarioService.create({ id, nome, email, dataNascimento, genero, telefone });

    return res.json(usuario)

  }
}

export { UsuarioController };
