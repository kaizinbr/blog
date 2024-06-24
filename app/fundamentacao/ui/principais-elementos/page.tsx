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
                    2.10.2 Principais elementos de uma interface
                </h1>
                <p className="mb-4 text-justify indent-8">
                Os botões são um dos principais elementos de uma interface, pois garantem a interação do usuário com o site permitindo ações como salvar, continuar, editar, excluir, etc. Outro elemento muito importante é a tipografia, que consiste das frases e elementos visuais que levarão informações ao usuário. Além disso, as cores e os ícones são importantes para a criação de um bom design, pois podem atrair e prender os usuários no site.
                </p>
            </div>
            <NavigationBtns
                ante="/fundamentacao/ui/design"
                prox="/fundamentacao/ui/material"
            />
        </div>
    );
}
