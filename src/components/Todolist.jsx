import { useState } from 'react';
import { GoPlus } from 'react-icons/go';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTodo, updateTodo, clearAllTodos } from '../redux/todoSlice';
import AddTaskModal from './AddTaskModal';
import Button from './Button';

const Todolist = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState('');
  const [openModal, setOpenModal] = useState(false);

  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.items);

  function handleSearch(e) {
    setSearchTerm(e.target.value);
  }

  function handleDeleteTodo(id) {
    dispatch(deleteTodo(id));
  }

  function handleEdit(todo) {
    const { id, text } = todo;
    setEditingId(id);
    setEditText(text);
  }

  function handleUpdate(e) {
    e.preventDefault();
    if (editText.trim()) {
      dispatch(updateTodo({ id: editingId, text: editText.trim() }));
      setEditingId(null);
      setEditText('');
    }
  }

  function handleClearAll() {
    dispatch(clearAllTodos());
  }

  const filteredTodos = todos.filter((item) =>
    item.text.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className='max-w-[600px] xl:max-w-[800px] mx-auto mt-[40px]'>
      <button
        onClick={() => setOpenModal(!openModal)}
        className='text-white mb-6 ml-auto w-fit gap-x-2 flex items-center px-3 py-2 lg:py-3 rounded-lg font-bold bg-green'
      >
        <p className='text-[14px] lg:text-[16px]'>Add New Task</p>
        <GoPlus className='size-6' />
      </button>

      <div className='bg-white rounded-lg p-4 lg:p-8'>
        <div>
          <input
            placeholder='Search...'
            type='text'
            value={searchTerm}
            onChange={handleSearch}
          />

          <ul className='py-4 flex flex-col gap-y-4 h-[40vh] mt-4 scrollbar-hide overflow-y-scroll'>
            {filteredTodos.length === 0 ? (
              <p className='text-center text-black m-auto'>No task found</p>
            ) : (
              filteredTodos.map((item) => (
                <li key={item.id} className=''>
                  {editingId === item.id ? (
                    <form
                      onSubmit={handleUpdate}
                      className='flex justify-between items-center gap-x-3'
                    >
                      <div className='w-full'>
                        <input
                          type='text'
                          value={editText}
                          onChange={(e) => setEditText(e.target.value)}
                        />
                      </div>
                      <div className='space-x-3 whitespace-nowrap'>
                        <Button className='bg-blue' type='submit'>
                          Save
                        </Button>
                        <Button
                          className='bg-red'
                          onClick={() => setEditingId(null)}
                        >
                          Cancel
                        </Button>
                      </div>
                    </form>
                  ) : (
                    <div className='flex justify-between items-center'>
                      <span className='truncate max-w-[50%] text-black md:max-w-[60%] lg:max-w-[65%]'>
                        {item.text}
                      </span>
                      <div className='space-x-3'>
                        <Button
                          onClick={() => handleEdit(item)}
                          className='bg-blue'
                        >
                          Edit
                        </Button>
                        <Button
                          onClick={() => handleDeleteTodo(item.id)}
                          className='bg-red'
                        >
                          Delete
                        </Button>
                      </div>
                    </div>
                  )}
                </li>
              ))
            )}
          </ul>
        </div>
      </div>

      <Button onClick={handleClearAll} className='ml-auto flex text-lg'>
        Clear All
      </Button>

      {openModal && <AddTaskModal setOpenModal={setOpenModal} />}
    </div>
  );
};

export default Todolist;
