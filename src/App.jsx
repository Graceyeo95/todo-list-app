import Navbar from './components/Navbar';

const DarkModeToggle = () => {
  return (
    <div className='bg-white dark:bg-black text-black dark:text-white w-full h-screen'>
      <Navbar />
    </div>
  );
};

export default DarkModeToggle;
