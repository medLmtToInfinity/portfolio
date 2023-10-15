import NavItem from "./nav-item";
import { BsFillPersonFill, BsFillBagCheckFill, BsFillFileCodeFill, BsAward } from "react-icons/bs";
interface Item {
    label : string;
    icon : React.ReactElement;
    refId : string;
}

const NavBar = () => {
    const active : boolean[] = [true, false, false];
    const size : number = 20;
    const navbarItems : Array<Item> = [
        {
            label: "About",
            icon: <BsFillPersonFill size={size} />,
            refId: "about"
        },
        {
            label: "Experiences",
            icon: <BsFillBagCheckFill size={size} />,
            refId: "experience",
        },
        {
            label: "Certificate",
            icon: <BsAward size={size} />,
            refId:"certificate"
        },
        {
            label: "Projects",
            icon: <BsFillFileCodeFill size={size} />,
            refId: "projects"
        },
    ]
    return (
        <ul className="list-none">
            {
                navbarItems.map((item, index) => <NavItem key={item.label} text={item.label} icon={item.icon} refId={item.refId} active={active[index]} />
                )
            }
        </ul>
    )
}
export default NavBar;
