import NavigationBtns from "@/components/NavigationBtns";
import Image from "next/image";

export default function Page() {
    return (
        <div>
            <div className="mb-8">
                <h1
                    className={`
                        font-bold text-2xl
                        mb-8 text-start
                    `}
                >
                    3.4 Resultados
                </h1>
                <p className="mb-4 text-justify indent-8">
                    Conseguimos finalizar o frontend conforme o modelo feito no
                    início do projeto. Obtivemos sucesso na construção de todas
                    as páginas previstas e adicionamos mais algumas cuja
                    necessidade surgiu ao longo do desenvolvimento. Também
                    conseguimos sucesso em tornar todas as páginas responsivas
                    para os mais diversos formatos de tela.
                </p>

                <picture className="w-full mt-8 flex flex-col">
                    <span className="font-bold text-center text-sm mb-3">
                        Figura 12 - Página inicial do projeto (<i>index</i>)
                        para desktop
                    </span>
                    <Image
                        src="/figura12.png"
                        alt=""
                        width={600}
                        height={400}
                    ></Image>
                    <span className="text-center text-sm mb-3">
                        Fonte: dos autores
                    </span>
                </picture>
                <p className="mb-4 text-justify indent-8">
                    Ao clicar no botão “Cadastro/Login” o usuário é direcionado
                    para uma página onde é possível criar uma nova conta através
                    de um e-mail ou fazer <i>login</i> com uma conta existente.
                    Após o usuário inserir e-mail e senha para criar uma conta,
                    uma mensagem informando que a conta foi criada com sucesso
                    será exibida.
                </p>
                <picture className="w-full mt-8 flex flex-col">
                    <span className="font-bold text-center text-sm mb-3">
                        Figura 13 - Página de cadastro e <i>login</i>
                    </span>
                    <Image
                        src="/13.png"
                        alt=""
                        width={600}
                        height={400}
                    ></Image>
                    <span className="text-center text-sm mb-3">
                        Fonte: dos autores
                    </span>
                </picture>
                <p className="mb-4 text-justify indent-8">
                    Após fazer o login o usuário pode adicionar e editar
                    informações como nome, telefone ou biografia em seu perfil.
                </p>
                <picture className="w-full mt-8 flex flex-col">
                    <span className="font-bold text-center text-sm mb-3">
                        Figura 14 - Página Meu Perfil
                    </span>
                    <Image
                        src="/14.png"
                        alt=""
                        width={600}
                        height={400}
                    ></Image>
                    <span className="text-center text-sm mb-3">
                        Fonte: dos autores
                    </span>
                </picture>
                <picture className="w-full mt-8 flex flex-col">
                    <span className="font-bold text-center text-sm mb-3">
                        Figura 15 - Página de contato e principais dúvidas
                    </span>
                    <Image
                        src="/15.png"
                        alt=""
                        width={600}
                        height={400}
                    ></Image>
                    <span className="text-center text-sm mb-3">
                        Fonte: dos autores
                    </span>
                </picture>
                <p className="mb-4 text-justify indent-8">
                    Também é possível pesquisar por pontos turísticos acessando
                    a página de Pesquisa e digitando o nome desejado ou um nome
                    genérico, como “praia”, e serão exibidos todos os pontos que
                    possuem os termos digitados. Há também um mecanismo
                    implementado com Javascript que informa caso o termo
                    digitado não corresponda a um ponto digitado e exibe um link
                    para a página de criação de pontos.
                </p>
                <picture className="w-full mt-8 flex flex-col">
                    <span className="font-bold text-center text-sm mb-3">
                    Figura 16 - Página de pesquisa
                    </span>
                    <Image
                        src="/16.png"
                        alt=""
                        width={600}
                        height={400}
                    ></Image>
                    <span className="text-center text-sm mb-3">
                        Fonte: dos autores
                    </span>
                </picture>
                <p className="mb-4 text-justify indent-8">
                Na página de criação de pontos turísticos é possível adicionar um ponto adicionando informações como nome, descrição, endereço, valor e imagens do local. Ao clicar no botão “Criar” as informações são enviadas para o banco de dados e adicionadas automaticamente à página principal.
                </p>
                <picture className="w-full mt-8 flex flex-col">
                    <span className="font-bold text-center text-sm mb-3">
                        Figura 17 - Página de criação de ponto turístico
                    </span>
                    <Image
                        src="/17.png"
                        alt=""
                        width={600}
                        height={400}
                    ></Image>
                    <span className="text-center text-sm mb-3">
                        Fonte: dos autores
                    </span>
                </picture>
                
                <picture className="w-full mt-8 flex flex-col">
                    <span className="font-bold text-center text-sm mb-3">
                    Figura 18 - Página de ponto turístico
                    </span>
                    <Image
                        src="/18.png"
                        alt=""
                        width={600}
                        height={400}
                    ></Image>
                    <span className="text-center text-sm mb-3">
                        Fonte: dos autores
                    </span>
                </picture>
                <p className="mb-4 text-justify indent-8">
                Na página que contém um ponto turístico é possível ler informações como sua localização, história do local e o valor, caso haja algum preço pela entrada.
                </p>
            </div>
            <NavigationBtns
                ante="/trabalho/metodologia"
                prox="/consideracoes"
            />
        </div>
    );
}
