import Navbar from './components/Navbar';
import Todolist from './components/Todolist';

const DarkModeToggle = () => {
  return (
    <div className='dark:from-black dark:via-gray-900 dark:to-gray-800 from-indigo-200 via-sky-200 to-emerald-200  bg-gradient-to-b w-full h-screen p-3 lg:p-10'>
      <Navbar />
      <Todolist />
    </div>
  );
};

export default DarkModeToggle;
