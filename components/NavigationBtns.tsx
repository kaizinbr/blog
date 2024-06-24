import { Group, Button } from "@mantine/core";
import { IconPhoto, IconDownload, IconArrowRight, IconArrowLeft } from "@tabler/icons-react";
import Link from "next/link";

export default function NavigationBtns ({ante, prox}: {ante: string; prox: string}) {
    return (
        <div
                className={`
                    w-full grid grid-cols-2 justify-between
                `}
            >
                <div className="flex justify-start col-start-1">
                    <Button
                        variant="light"
                        leftSection={<IconArrowLeft size={14} />}
                        color="indigo"
                        radius="md"
                        href={ante}
                        component={Link}
                    >
                        Anterior
                    </Button>
                </div>
                <div className="flex justify-end col-start-2">
                    <Button
                        variant="light"
                        rightSection={<IconArrowRight size={14} />}
                        color="indigo"
                        radius="md"
                        href={prox}
                        component={Link}
                    >
                        Próximo
                    </Button>
                </div>
            </div>
    )
}