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
    const active : boolean[] = [true, false, false];
    const size : number = 20;
    const navbarItems : Array<Item> = [
        {
            label: "About",
            icon: <BsFillPersonFill size={size} />,
            refId: "about",
            status: true,
        },
        {
            label: "Experiences",
            icon: <BsFillBagCheckFill size={size} />,
            refId: "experience",
            status: false,
        },
        {
            label: "Projects",
            icon: <BsFillFileCodeFill size={size} />,
            refId: "projects",
            status: true,
        },
        {
            label: "Certificate",
            icon: <BsAward size={size} />,
            refId:"certificate",
            status: false,
        },
        {
            label: "Skills",
            icon: <GiSkills size={size} />,
            refId:"skills",
            status: true,
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
