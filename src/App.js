import { useState } from 'react';
import Banner from './componentes/Banner';
import Form from './componentes/Form';

function App() {
  const [collaborators, setCollaborators] = useState([]);
  const toNewCollaboratorAdded = (collaborator) => {
    console.log(collaborator);
    setCollaborators([...collaborators, collaborator]);
  }

  return (
    <div className="App">
      <Banner/>
      <Form toNewCollaboratorAdded={collaborator=>toNewCollaboratorAdded(collaborator)}/>
    </div>
  );
}

export default App;
