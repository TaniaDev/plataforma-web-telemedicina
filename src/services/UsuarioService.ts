import prismaClient from "../../prisma";

interface IUsuario {
  id: string;
  nome: string;
  email: string;
  dataNascimento: Date;
  genero: string;
  telefone: string;
}

class UsuarioService {
  async create({ id, nome, email, dataNascimento, genero, telefone }: IUsuario) {

    const result = await prismaClient.usuario.create({
      data: {
        id,
        nome,
        email,
        dataNascimento,
        genero,
        telefone

      },
    })
    return result;
  }
}

export { UsuarioService };
