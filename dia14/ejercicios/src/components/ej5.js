import { Menu } from '@headlessui/react';

const MyMenu = () => {
    return (
        <Menu as="div" className="relative inline-block text-left">
            <Menu.Button className="px-4 py-2 bg-blue-500 text-white rounded-md">
                Menú
            </Menu.Button>

            <Menu.Items className="absolute mt-2 w-48 bg-white shadow-md rounded-md border">
                <Menu.Item>
                    {({ active }) => (
                        <a href="#"
                            className={`block px-4 py-2 color-black ${active ? "bg-gray-100" : "yellow"}`}
                            style={{ color: 'black' }}>
                            Opcion 1
                        </a>
                    )}
                </Menu.Item>
            </Menu.Items>
        </Menu>
    )
};

export default MyMenu;