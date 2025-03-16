import { useState } from "react";
import "./Menu.css";

const Menu = ({ items }) => {
    const [openMenu, setOpenMenu] = useState(null);

    const toggleMenu = (name) => {
        setOpenMenu(openMenu === name ? null : name);
    };

    return (
        <ul className="menu">
            {items.map((item, index) => (
                <MenuItem key={index} item={item} isOpen={openMenu === item.name} toggleMenu={toggleMenu} />
            ))}
        </ul>
    );
};

const MenuItem = ({ item, isOpen, toggleMenu }) => {
    return (
        <li className="menu-item">
            <div
                className="menu-link"
                onClick={() => item.submenu && toggleMenu(item.name)}
            >
                {item.name}
                {item.submenu && <span className="arrow">{isOpen ? " ▲" : " ▼"}</span>}
            </div>
            {item.submenu && isOpen && (
                <ul className="submenu">
                    {item.submenu.map((subItem, subIndex) => (
                        <SubMenuItem key={subIndex} item={subItem} />
                    ))}
                </ul>
            )}
        </li>
    );
};

const SubMenuItem = ({ item }) => {
    const [openSubmenu, setOpenSubmenu] = useState(null);

    const toggleSubmenu = (name) => {
        setOpenSubmenu(openSubmenu === name ? null : name);
    };

    return (
        <li className="submenu-item">
            <div
                className="submenu-link"
                onClick={() => item.submenu && toggleSubmenu(item.name)}
            >
                {item.name}
                {item.submenu && <span className="arrow">{openSubmenu === item.name ? " ▲" : " ▼"}</span>}
            </div>
            {item.submenu && openSubmenu === item.name && (
                <ul className="sub-submenu">
                    {item.submenu.map((subSubItem, subSubIndex) => (
                        <li key={subSubIndex} className="sub-submenu-item">
                            {subSubItem.name}
                        </li>
                    ))}
                </ul>
            )}
        </li>
    );
};

export default Menu;
