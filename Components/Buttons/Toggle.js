import { useContext } from 'react';
import { AppContext } from '@/context/contextProvider';

const ToggleButton = () => {
  const { state, toggleTheme } = useContext(AppContext);
  const { theme } = state;

  return (
    <button
      onClick={toggleTheme}
      className={`w-14 h-8 rounded-full ${
        theme === 'light' ? 'bg-gray-200' : 'bg-gray-600'
      } flex items-center justify-between p-1 focus:outline-none`}
    >
      <span
        className={`w-6 h-6 rounded-full ${
          theme === 'light' ? 'bg-white' : 'bg-gray-800'
        } shadow-md transform transition-transform duration-300 ${
          theme === 'light' ? 'translate-x-6' : 'translate-x-0'
        }`}
      ></span>
    </button>
  );
};

export default ToggleButton;
