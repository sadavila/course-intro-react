import React from 'react';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { EmptyTodos }from '../EmptyTodos';
import { TodoForm } from '../TodoForm';
import { CreateToDoButton } from '../CreateButton';
import { Modal } from '../Modal';
import { TodoContext } from '../TodoContext';

function AppUI (){
  const {
    loading,
    error,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
  } = React.useContext (TodoContext); 

  return (
    <>
      <TodoCounter/>
      <TodoSearch />  
      <TodoList>
        {loading && (
          <>
          <TodosLoading/>
          <TodosLoading/>
          <TodosLoading/>
          </>)}
        {error && <TodosError/>}
        {(!loading && searchedTodos.lenght === 0) && <EmptyTodos/>}

        {searchedTodos.map( todo => (
          <TodoItem 
            key={todo.text} 
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
                ))}
      
      </TodoList> 
      <CreateToDoButton 
        setOpenModal={setOpenModal}
      />

      {openModal && (
        <Modal>
          <TodoForm /> 
        </Modal>
      )}
    </>
  );
}

export { AppUI };