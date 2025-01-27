import React, { useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/todoSlice';
import Button from './Button';

const AddTaskModal = ({ setOpenModal }) => {
  const [newTodo, setNewTodo] = useState('');
  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();

    if (newTodo.trim()) {
      dispatch(
        addTodo({
          id: Math.random(),
          text: newTodo,
        })
      );
      setNewTodo('');
      setOpenModal(false);
    } else {
      alert('Please enter text');
    }
  }

  return (
    <div className='text-black fixed top-0 left-0 w-full h-full bg-black/30 items-center justify-center flex p-3'>
      <div className='relative w-[600px] aspect-video bg-white p-3 lg:p-6 rounded-lg flex items-center justify-center'>
        <IoMdClose
          onClick={() => setOpenModal((prev) => !prev)}
          className='absolute top-3 right-3 size-6 lg:size-8 cursor-pointer'
        />
        <form onSubmit={handleSubmit} className='flex w-full flex-col'>
          <h2 className='text-center text-xl lg:text-2xl mb-10'>
            Add new Task
          </h2>
          <div className='flex gap-x-3'>
            <input
              placeholder='Add item'
              type='text'
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
            />
            <Button className='bg-black' type='submit'>
              Add Task
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTaskModal;
