import Head from 'next/head'
import styles from '@/styles/Home.module.css'


export default function Home() {

  const adicionar = () =>{
    
  } 


  const formulario = (evento) =>{
    evento.preventDefault();
    
    let usuario = {
      nome: evento.target[0].value,
      email: evento.target[1].value,
      idade: evento.target[2].value,
    }

    const request = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(usuario)
    }

    fetch("/api/usuarios", request)
    .then((res) => res.json())
    .then(data => {

      console.log(data);
    })

    
  } 

  return (
    <>
      <Head>
        <title>Cadastro de usuário</title>
      </Head>
      <main>
        <button onClick={(evento) => adicionar() }> Novo usuário </button>

      </main>


      <form onSubmit={(e) => formulario(e)}>

         <input type="text" id="nome" placeholder="nome" />
          <br/>
         <input type="email" id="email" placeholder="email" />
         <br/>
         <input type="text" id="idade" placeholder="idade"  />
         <br/>
         <button type="submit">Enviar</button>
      </form>

    </>
    
  )
}
