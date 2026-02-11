import React from 'react'
import { useState } from "react";
import emailjs from "@emailjs/browser"
import {Link} from "react-router-dom"

const   ContactForm = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

function sendEmail(e){
e.preventDefault();
if(name === '' || email === '' || message === '' ){
  alert("preencha todos os campos");
  return //para a execução do código
}

//const para templateParams
const templateParams = {
  from_name: name,
  message: message,
  email: email,
}

//emailJs com o service ID que é gerado automaticamente e o template ID que também é gerado automaticamente. 
//templateParams e a nossa public key
emailjs.send(
  import.meta.env.VITE_EMAILJS_SERVICE_ID,
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  templateParams,
  import.meta.env.VITE_EMAILJS_PUBLIC_KEY
)

//emailJs é assincrono então podemos utilizar o .then() que é o método usado em casos de sucesso:
.then((response) => {
alert("Email.enviado")
//limpando os campos
setName('')
setEmail('')
setMessage('')
}, (erro) =>{
  console.log("erro", erro)
} )

}

  return <>
    {/* Botão Voltar */}
    <div className="absolute top-6 left-6 z-10">
      <Link to="/" className="group relative inline-block">
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-lg blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
        <button type="button" className="relative px-6 py-3 bg-gradient-to-r from-blue-900/80 to-cyan-900/80 backdrop-blur-sm border border-blue-400/30 rounded-lg text-white font-semibold transition-all duration-300 hover:scale-105 flex items-center gap-2">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Voltar
        </button>
      </Link>
    </div>

    {/* Container principal com efeitos de fundo */}
    <div className="relative min-h-screen flex flex-col items-center justify-center text-white p-6 overflow-hidden">
      {/* Efeitos de luz de fundo */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-5">
        
      </div>

      {/* Conteúdo do formulário */}
      <div className="relative w-full max-w-2xl">
       

        {/* Título */}
        <h1 className="text-2xl text-center mb-5 sm:text-5xl font-bold text-cyan-400 uppercase">
          Contato
          
        </h1>

        <p className="text-center text-blue-100/70 mb-12 text-lg">
          Preencha o formulário abaixo e entrarei em contato em breve
        </p>

        {/* Formulário com glassmorphism */}
        <div className="relative group">
          
          
          <form className="relative " onSubmit={sendEmail}>
            {/* Campo Nome */}
            <div className="mb-6">
              <label className="block text-blue-100/90 text-sm font-semibold mb-2 uppercase tracking-wider">
                Nome
              </label>
              <input 
                className="w-full h-12 rounded-lg bg-white/5 backdrop-blur-sm border border-blue-400/30 px-4 text-white placeholder-blue-200/40 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-transparent transition-all duration-300"
                type="text"
                placeholder="Digite seu nome"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </div>
            
            {/* Campo Email */}
            <div className="mb-6">
              <label className="block text-blue-100/90 text-sm font-semibold mb-2 uppercase tracking-wider">
                Email
              </label>
              <input 
                className="w-full h-12 rounded-lg bg-white/5 backdrop-blur-sm border border-blue-400/30 px-4 text-white placeholder-blue-200/40 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-transparent transition-all duration-300"
                type="text"
                placeholder="Digite seu email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>

            {/* Campo Mensagem */}
            <div className="mb-8">
              <label className="block text-blue-100/90 text-sm font-semibold mb-2 uppercase tracking-wider">
                Mensagem
              </label>
              <textarea 
                className="w-full h-40 rounded-lg bg-white/5 backdrop-blur-sm border border-blue-400/30 p-4 text-white placeholder-blue-200/40 resize-none focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-transparent transition-all duration-300"
                placeholder="Digite sua mensagem..."
                onChange={(e) => setMessage(e.target.value)}
                value={message}
              />
            </div>

            {/* Botão Enviar */}
            <div className="relative group/button">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 rounded-lg blur opacity-50 group-hover/button:opacity-75 transition duration-300"></div>
              <input 
                className="relative w-full h-14 rounded-lg bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 text-white text-lg font-semibold cursor-pointer shadow-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl" 
                type="submit" 
                value="Enviar Mensagem" 
              />
            </div>

            {/* Info adicional */}
            <div className="mt-6 flex items-center justify-center gap-2 text-blue-200/50 text-sm">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Seus dados estão seguros</span>
            </div>
          </form>
        </div>

        {/* Elemento decorativo */}
        <div className="mt-12 flex justify-center gap-2 text-cyan-400/40 font-mono text-sm">
          <span className="opacity-60">{'{ '}</span>
          <span className="opacity-80">message.send()</span>
          <span className="opacity-60">{' }'}</span>
        </div>
      </div>
    </div>
  </>
}

export default ContactForm