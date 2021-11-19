import React from "react";

const Equipe = (props) => {
    return ( 
        <div>
            <Sobre nome={props.nome} cargo={props.cargo} idade={props.idade} />
            <Social
                instagram={props.instagram}
                facebook={props.facebook}
                linkedin={props.linkedin}/>
        </div>
    );
}

const Sobre = (props) => {
    return (
        <div>
            <h2>Ola eu sou o(a) {props.nome}, tenho {props.idade} anos e sou {props.cargo}</h2>
        </div>
    );
}

const Social = (props) => {
    return (
        <div>
            <a href={props.instagram}>Instagram </a>
            <a href={props.facebook}>Facebook     </a>
            <a href={props.linkedin}>linkedin   </a>
        </div>
    );
}

export default function App() {
    return (
        <div>
            <h1>Conheça nossa equipe</h1>
            <Equipe
                nome="Samuel"
                cargo="Programador"
                idade="24"
                instagram="https://www.instagram.com"
                facebook="https://pt-br.facebook.com"
                linkedin="https://linkedin.com" />
            
            <Equipe
                nome="Camila"
                cargo="Programador"
                idade="20"
                instagram="https://www.instagram.com"
                facebook="https://pt-br.facebook.com"
                linkedin="https://linkedin.com"/>
        </div>
    );
}