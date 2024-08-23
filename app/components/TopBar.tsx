"use client";

import Link from "next/link";

const menuItems: {id:number, itemTitle: string, href: string}[] = [
    {id: 1, itemTitle: "Início", href: "/assunto1"},
    {id: 2, itemTitle: "A SBEV", href: "/assunto2"},
    {id: 3, itemTitle: "Boas-vindas", href: "/assunto3"},
    {id: 4, itemTitle: "Eventos", href: "/assunto4"},
    {id: 5, itemTitle: "Notícias", href: "/assunto5"},
    {id: 6, itemTitle: "Links", href: "/assunto6"},
];

const TopBar = () => {
    return(
        <>           
            <div className="flex flex-wrap justify-end gap-3 md:gap-4 lg:gap-6 w-11/12">
                {menuItems.map((item) => (
                    <Link href={item.href}>
                        <div key={item.id}
                            className="text-indigo-50 text-sm md:text-base lg:text-lg hover:text-indigo-200">
                            {item.itemTitle}
                        </div>
                    </Link>
                ))}
            </div>            
        </>
    );
}

export default TopBar;