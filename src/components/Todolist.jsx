import React, { useState } from 'react';
import { GoPlus } from 'react-icons/go';

const Todolist = () => {
  const [search, setSearch] = useState('');

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const data = [
    { id: 1, text: 'Study Redux' },
    { id: 2, text: 'Study React' },
    { id: 3, text: 'Study Tailwind' },
  ];

  return (
    <div className='max-w-[600px] xl:max-w-[800px] mx-auto mt-[40px] space-y-6'>
      <button className='text-white ml-auto w-fit gap-x-2 flex items-center px-3 py-2 lg:py-3 rounded-lg font-bold bg-green-600'>
        <p className='text-[14px] lg:text-[16px]'>Add New Task</p>
        <GoPlus className='size-6' />
      </button>
      <div className=' bg-white rounded-lg p-4 lg:p-8'>
        <div>
          <input
            placeholder='Search...'
            type='text'
            value={search}
            onChange={handleSearch}
            className=' border border-gray-300 rounded-md p-2 w-full'
          />

          <ul className='py-4 flex flex-col gap-y-4'>
            {data.map((item) => (
              <li key={item.id} className='flex justify-between items-center'>
                <span>{item.text}</span>
                <div className='space-x-2'>
                  <button className='action-button bg-blue'>Edit</button>
                  <button className='action-button bg-red-600'>Delete</button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Todolist;
