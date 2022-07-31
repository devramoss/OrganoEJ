import Button from "../Button";
import DropdownList from "../DropdownList";
import TextInput from "../TextInput";
import "./Form.css";

const department = [
    "Administrativo",
    "Comercial",
    "Financeiro",
    "Gestão de pessoas",
    "Marketing",
    "Projetos"
];

const Form = () => {
    return (
        <section className="form-container">
            <form>
                <h2>
                    Preencha os dados para criar o card do acessor
                </h2>
                <TextInput label="Nome" placeholder="Digite o seu nome" required={true}/>
                <TextInput label="Cargo" placeholder="Digite o seu cargo" required={true}/>
                <TextInput label="Imagem" placeholder="Digite o endereço da imagem" />
                <DropdownList label="Acessor"itens={department} required={true}/>
                <Button>
                    Criar Card
                </Button>
            </form>
        </section>
    );
}

export default Form;