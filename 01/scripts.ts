type Usuario = {
    nome: string,
    email: string,
    cpf: string,
    rg: string
    dataNacimento?: string
}

type NovoUsuario = Omit<Usuario, 'rg'>
type NovoUsuarioObrigatorio = Required<NovoUsuario>

const cadastrarUsuário = (info: Usuario): Usuario => {
    return info;
}