import react,{useState} from "react";
const MenuList = ({ items,active,setActive }) => {
    // const [active, setActive] = useState("profile")
    return (
        <ul className="px-2 *:text-[13px]">
            {items.map(item => (
                <li
                    key={item.key}
                    onClick={() => setActive(item.key)}
                    className={`p-1 rounded transition hover:bg-red-400 hover:text-white ${active === item.key ? "bg-red-400 text-white" : ""
                        }`}
                >
                    {item.label}
                </li>
            ))}
        </ul>


    );
}
export default MenuList