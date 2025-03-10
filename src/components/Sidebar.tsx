
const menuItems = [
    { titulo: "Inicio", path: "/" },
    { titulo: "Perfil de usuario", path: "/" },
    { titulo: "Configuración", path: "/" },
    { titulo: "Ayuda", path: "/" },
    { titulo: "Cerrar sesión", path: "/" }
];


const Sidebar = () => {
    return (
        <>
            <nav className="sidebar p-3 vh-100">
                <ul className="nav flex-column">
                    {menuItems.map((item, index) => (
                        <li className="nav-item" key={index}>
                            <a className="nav-link" href={item.path}>
                                {item.titulo}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    );
};

export default Sidebar;