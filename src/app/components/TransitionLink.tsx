"use client"

import { usePathname, useRouter } from "next/navigation";
import { animatePageOut } from "@/utils/animation";

interface Props {
    href: string
    label: string
}

const TransitionLink = ({href, label}: Props) => {
    const router = useRouter()
    const pathname = usePathname()

    const handleClick = () => {
        if (pathname != href) {
            animatePageOut(href, router)
        }
    }

    return (
        <button 
            className="text-xl text-gray-500 capitalize hover:scale-110 duration-200 " 
            onClick={handleClick}
        >
            {label}
        </button>
    )
}

export default TransitionLink