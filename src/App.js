import Banner from './componentes/Banner';
import TextInput from './componentes/TextInput';

function App() {
  return (
    <div className="App">
      <Banner/>
      <TextInput label="Nome" placeholder="Digite o seu nome"/>
      <TextInput label="Cargo" placeholder="Digite o seu cargo"/>
      <TextInput label="Imagem" placeholder="Digite o endereço da imagem"/>
    </div>
  );
}

export default App;
