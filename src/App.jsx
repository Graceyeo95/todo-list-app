import useDarkMode from './hook/useDarkMode';

const DarkModeToggle = () => {
  const [isDarkMode, toggleDarkMode] = useDarkMode();

  return (
    <button
      onClick={toggleDarkMode}
      className='p-2 rounded bg-gray-200 dark:bg-gray-900 text-gray-900 dark:text-gray-100'
    >
      {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    </button>
  );
};

export default DarkModeToggle;
