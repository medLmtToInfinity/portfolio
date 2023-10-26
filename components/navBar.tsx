"use client";
import { useEffect, useState } from "react";
import NavItem from "./nav-item";
import { BsFillPersonFill, BsFillBagCheckFill, BsFillFileCodeFill, BsAward, BsStar } from "react-icons/bs";
import { GiSkills } from "react-icons/gi";
interface Item {
    label : string;
    icon : React.ReactElement;
    refId : string;
    status: boolean;
}

const NavBar = () => {
    const [isMounted, setIsMounted] = useState(false);
    useEffect(()=>{
        setIsMounted(true)
    }, []);
    const [active, setActive] = useState([true, false, false]);
    useEffect(() => {
            const timer = setTimeout(() => {
              // Your code here, which will run last
            }, 0);
        
            
        const sections = document.querySelectorAll(".section");
        const handler = () => {
            let current: string | unknown;
            sections.forEach((section) => {
                const sectionTop = (section as HTMLElement).offsetTop;
                const sectionHeight = (section as HTMLElement).offsetHeight;
                    if(window.scrollY >= sectionTop - sectionHeight / 2) current = section.getAttribute("id");
                })
                if(current === "about") setActive([true, false, false])
                else if(current === "projects") setActive([false, true, false])
                else if(current === "skills") setActive([false, false, true])
        }
        window.addEventListener("scroll", handler)
        return clearTimeout(timer);
    }, [active])
    if(!isMounted) return null;

    //const active : boolean[] = [true, false, false];
    const size : number = 20;
    const navbarItems : Array<Item> = [
        {
            label: "About",
            icon: <BsFillPersonFill size={size} />,
            refId: "about",
            status: true,
        },
        {
            label: "Projects",
            icon: <BsFillFileCodeFill size={size} />,
            refId: "projects",
            status: true,
        },
        {
            label: "Skills",
            icon: <GiSkills size={size} />,
            refId:"skills",
            status: true,
        },
        {
            label: "Experiences",
            icon: <BsFillBagCheckFill size={size} />,
            refId: "experience",
            status: false,
        },
        {
            label: "Certificate",
            icon: <BsAward size={size} />,
            refId:"certificate",
            status: false,
        },
    ]
    return (
        <ul className="list-none">
            {
                navbarItems.map((item, index) => item.status && <NavItem key={item.label} text={item.label} icon={item.icon} refId={item.refId} active={active[index]} />
                )
            }
        </ul>
    )
}
export default NavBar;
