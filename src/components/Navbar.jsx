import useDarkMode from '../hook/useDarkMode';
import { Switch } from '@headlessui/react';
import { LuSun } from 'react-icons/lu';
import { LuMoon } from 'react-icons/lu';

const Navbar = () => {
  const [isDarkMode, toggleDarkMode] = useDarkMode();

  return (
    <div className='p-[20px] text-white flex justify-center items-center gap-x-6 lg:gap-x-12 w-full ml-auto'>
      <h1 className='text-lg lg:text-2xl'>TODO LIST APP</h1>

      <div className='flex gap-x-2 items-center'>
        <LuSun className='size-5 lg:size-6' />
        <Switch
          checked={isDarkMode}
          onChange={toggleDarkMode}
          className={`${
            isDarkMode ? 'bg-green' : 'bg-gray-400'
          } relative inline-flex h-6 w-11 items-center rounded-full`}
        >
          <span
            className={`${
              isDarkMode ? 'translate-x-6' : 'translate-x-1'
            } inline-block size-4 transform rounded-full bg-white transition`}
          />
        </Switch>
        <LuMoon className='size-5 lg:size-6' />
      </div>
    </div>
  );
};

export default Navbar;
