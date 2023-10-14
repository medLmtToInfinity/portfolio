import NavItem from "./nav-item";
import { BsFillPersonFill, BsFillBagCheckFill, BsFillFileCodeFill } from "react-icons/bs";

const NavBar = () => {
    return (
        <ul className="list-none">
            <NavItem text="About" icon={<BsFillPersonFill size={20} />} refId="about" active={true} />
            <NavItem text="Experiences" icon={<BsFillBagCheckFill size={20} />} refId="experience" active={false} />
            <NavItem text="Projects" icon={<BsFillFileCodeFill size={20} />} refId="projects" active={false} />
        </ul>
    )
}
export default NavBar;