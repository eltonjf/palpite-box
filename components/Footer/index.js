import React from 'react'

const Footer = () => {
    return (
        <div className='bg-gray-700 p-4'>
            <div className='container mx-auto text-center font-bold text-white'>
                Projeto desenvolvido por: Elton Mário / 
                    <a className='px-2 hover:underline' href='https://www.linkedin.com/in/elton-m%C3%A1rio-da-silva-515008124/' alt='Linkedin' target='_blank'> Linkedin </a> / 
                    <a className='px-2 hover:underline' href='https://github.com/eltonjf' alt='GitHub' target='_blank'>GitHub</a>
                <div className='mt-4'>
                    <img className='inline p-4' src='/logo_semana_fsm.png' />
                    <img className='inline p-4' src='/logo_devpleno.png' />
                </div>
            </div>
        </div>

    )

}

export default Footer