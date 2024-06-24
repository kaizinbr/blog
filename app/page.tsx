import { Group, Button } from "@mantine/core";
import { IconPhoto, IconDownload, IconArrowRight, IconArrowLeft } from "@tabler/icons-react";
import Link from "next/link";

export default function Page() {
    return (
        <div>
            <div className="mb-8">
                <h1
                    className={`
                        font-bold text-2xl
                        mb-8 text-center
                    `}
                >
                    Resumo
                </h1>
                <p className="mb-4 text-justify indent-8">
                    Projeto de Front-End do site OtoLugar que busca unir pessoas
                    que querem viajar e conhecer João Pessoa e litoral
                    paraibano. O site possui uma interface limpa e interativa,
                    de fácil compreensão para o usuário. Oferece para os
                    turistas a possibilidade de buscar por locais e avaliar a
                    experiência. Para guias turísticos e/ou empresários, terá a
                    ferramenta de inserção de pontos turísticos. A interface do
                    Website foi projetada de forma minimalista, com o cuidado
                    para não apresentar uma interface poluída que desestimule o
                    uso da aplicação por parte do usuário.{" "}
                </p>
                <span className="">
                    <strong>Palavras-chaves:</strong> Front-End; Interface;
                    HTML; CSS.
                </span>
            </div>
            <div
                className={`
                    w-full grid grid-cols-2 justify-between
                `}
            >
                {/* <Button
                    variant="light"
                    // rightSection={<IconPhoto size={14} />}
                    leftSection={<IconArrowLeft size={14} />}
                    color="indigo"
                     radius="md"
                >
                    Visit gallery
                </Button> */}
                <div className="flex justify-end col-start-2">
                    <Button
                        variant="light"
                        // leftSection={<IconPhoto size={14} />}
                        rightSection={<IconArrowRight size={14} />}
                        color="indigo"
                        radius="md"
                        href="/abstract"
                        component={Link}
                    >
                        Abstract
                    </Button>
                </div>
            </div>
        </div>
    );
}
