import './CreateButton.css';

function CreateToDoButton ({setOpenModal}) {
    return(
        <button className="CreateTodoButton"
            onClick = {
                () => {setOpenModal(state => !state);}
            }
        >+</button>
    );
  }
  export { CreateToDoButton }; 