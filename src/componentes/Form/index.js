import TextInput from "../TextInput";
import "./Form.css";

const Form = () => {
    return (
        <section className="form-container">
            <form>
                <h2>Preencha os dados para criar o card do acessor</h2>
                <TextInput label="Nome" placeholder="Digite o seu nome" />
                <TextInput label="Cargo" placeholder="Digite o seu cargo" />
                <TextInput label="Imagem" placeholder="Digite o endereço da imagem" />
            </form>
        </section>
    );
}

export default Form;