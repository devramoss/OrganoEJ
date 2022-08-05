import { useState } from "react";
import Button from "../Button";
import DropdownList from "../DropdownList";
import TextInput from "../TextInput";
import "./Form.css";

const Form = () => {
    const department = [
        "Administrativo",
        "Comercial",
        "Financeiro",
        "Gestão de pessoas",
        "Marketing",
        "Projetos"
    ];

    const [name, setName] = useState("");
    const [position, setPosition] = useState("");
    const [image, setImage] = useState("");
    const [accessor, setAccessor] = useState("");

    return (
        <section className="form-container">
            <form>
                <h2>
                    Preencha os dados para criar o card do acessor
                </h2>
                <TextInput 
                    label="Nome"
                    placeholder="Digite o seu nome"
                    required={true}
                    value={name}
                    asChanged={value=>setName(value)}
                />
                <TextInput 
                    label="Cargo"
                    placeholder="Digite o seu cargo"
                    required={true}
                    value={position}
                    asChanged={value=>setPosition(value)}
                />
                <TextInput 
                    label="Imagem"
                    placeholder="Digite o endereço da imagem"
                    value={image}
                    asChanged={value=>setImage(value)}
                 />
                <DropdownList 
                    label="Acessor" 
                    itens={department} 
                    required={true} 
                    value={accessor}
                    asChanged={value=>setAccessor(value)}
                    />
                <Button>
                    Criar Card
                </Button>
            </form>
        </section>
    );
}

export default Form;