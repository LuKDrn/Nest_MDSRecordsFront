import { FunctionComponent, useState } from 'react';
import './create-artist.style.css';
import 'bootstrap/dist/css/bootstrap.css';


type Props = {
  onAddArtist: (name: string) => void;
}

const CreateArtist: FunctionComponent<Props> = (props: Props) => {
  const [name, setName] = useState('');
  const [isBand, setIsBand] = useState(false);
  
  const [nameError, setNameError] = useState('');
  const [isBandError, setIsBandError] = useState('');

  function onNameChanged(event: React.ChangeEvent<HTMLInputElement>): void {
    setName(event.target.value);
  }


  function addArtist(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    event.preventDefault();
    
    setNameError('');
    setIsBandError('');

    let valid = true;

    if (name.trim() === '') {
      setNameError('Vous devez renseigner un titre valide !');
      valid = false;
    }

    if (valid) {
      props.onAddArtist(name);
      setName('');
    }
  }

  return (
    <div className='card p-2 d-flex justify-content-center'>
      <h1>Ajouter un artist</h1>
      <form className='d-flex flex-column justify-content-center'>
        <p>Nom</p>
        <input placeholder='Name' type='text' value={ name } onChange={ onNameChanged } />
        <p className='error'>{ nameError }</p>

        <label className="switch">
          <input type="checkbox" />
          <span className="slider round"></span>
        </label>

        <button type='submit' className="btn btn-sm btn-success" onClick={ addArtist }>Ajouter</button>
      </form>
    </div>
  );
};

export default CreateArtist;