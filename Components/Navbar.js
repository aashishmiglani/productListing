import { useContext } from 'react';
import Link from 'next/link';
import { AppContext } from '@/context/contextProvider';
import { FaUserCircle } from 'react-icons/fa';
import ToggleButton from './Buttons/Toggle';

const Navbar = () => {
    let theme = "light";

    return (
        <nav className={`w-full ${theme === 'light' ? 'bg-gradient-to-r from-blue-400 to-purple-500 text-white' : 'bg-white text-gray-800'} shadow-lg p-4 flex justify-between items-center flex-wrap`}>
            <div className="text-lg sm:text-xl font-bold  md:mb-0">My App</div>
            <div className="flex items-center space-x-4">
                <Link href="/" passHref>
                    <span className="cursor-pointer text-sm sm:text-base">Home</span>
                </Link>
                <Link href="/contact" passHref>
                    <span className="cursor-pointer text-sm sm:text-base">Contact Us</span>
                </Link>
                <Link href="/about" passHref>
                    <span className="cursor-pointer text-sm sm:text-base">About</span>
                </Link>
                {/* <ToggleButton /> */}
                <FaUserCircle className={`text-3xl cursor-pointer ${theme === 'light' ? 'text-white' : 'text-gray-800'}`} />
            </div>
        </nav>
    );
};

export default Navbar;
