import React, { FunctionComponent, useState } from 'react';
import './createTask.style.css';

type CreateTaskProps = {
   onAddTask? : (title :string, description: string) => void;
}

const CreateTaskComponent  : FunctionComponent<CreateTaskProps> = (props: CreateTaskProps) => {
    const [title, setTitle] = useState('');
    const [description,setDescription] = useState('');
    const [titleError,setTitleError] = useState('');
    const [descriptionError,setDescriptionError] = useState('');

function onTitleChanged(event: React.ChangeEvent<HTMLInputElement>) : void {
    setTitle(event.target.value);
}
function onDescriptionChanged(event: React.ChangeEvent<HTMLInputElement>) : void {
    setDescription(event.target.value)
}

function onClickAdd(event: React.MouseEvent<HTMLButtonElement, MouseEvent>){
    event.preventDefault();
    setDescriptionError('');
    setTitleError('');

    let valid = true;
    if(title.trim() === ''){
        setTitleError('Vous devez renseignez un titre valide.');
        valid = false;
    }
    if(description.trim() === ''){
        setDescriptionError('Vous devez renseignez une description valide.');
        valid = false;
    }
    if(props.onAddTask && valid){
        props.onAddTask(title, description);
        setTitle('');
        setDescription('');
    }

}
return (
    <div className="createTaskContainer">
        <form className="form">
            <label>
                Titre :
            <input type="text" placeholder="title" value={title} onChange={onTitleChanged} />
            <p> {titleError} </p>
            </label>
            <label>
                Description :
            <input type="text" placeholder="description" value={description} onChange={onDescriptionChanged}/>
            <p>{ descriptionError }</p>
            </label>
            <button type="submit" onClick={ onClickAdd} >Ajouter</button>
        </form>
    </div>
);
};
export default CreateTaskComponent