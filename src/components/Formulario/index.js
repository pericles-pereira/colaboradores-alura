import { useState } from 'react'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

const Formulario = (props) => {

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoColaboradorCadastrado({
            nome,
            cargo,
            imagem,
            time,
        })
        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
    }

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                
                <CampoTexto 
                    obrigatorio={true} 
                    label="Nome" 
                    placeholder="Digite o seu nome" 
                    valor={nome}
                    aoAlterado={param => setNome(param)}
                />

                <CampoTexto 
                    obrigatorio={true} 
                    label="Cargo" 
                    placeholder="Digite o seu cargo"
                    valor={cargo}
                    aoAlterado={param => setCargo(param)}
                />

                <CampoTexto 
                    obrigatorio={false}
                    label="Imagem" 
                    placeholder="Digite o endereço da imagem" 
                    valor={imagem}
                    aoAlterado={param => setImagem(param)}
                />

                <ListaSuspensa 
                    obrigatorio={true} 
                    label="Time" 
                    itens={props.times}
                    valor={time}
                    aoAlterado={param => setTime(param)}
                />

                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario