'use client'
import { useState } from "react"

export default function Reserve() {

    const [init, setInit] = useState(false)
    const [date, setDate] = useState(false)
    const [confirm, setConfirm] = useState(false)
    const [text, setText] = useState('Reserva tu experiencia')

    const handlerInit = () => {
        setText('Selecciona tu fecha')
        setInit(true)
    }
    const handlerDate = () => {
        setText('¿Cuantas personas?')
        setDate(true)
    }
    const handlerConfirm = () => {
        setConfirm(true)
    }


    return (
        <div className='bg-[#f7928c] flex flex-col text-center items-center p-5'>
            {!confirm ? (
                <>
                    <h2 className='font-bold'>¿Te atreves a volver al origen?</h2>
                    <button onClick={() => handlerInit()} className='mt-4 md:w-1/3 p-2 font-semibold bg-[#ee4a69] hover:bg-[#bc3c54] py-2 px-4 rounded shadow-md'>
                        {text}
                    </button>
                    {init && (
                        <div className="mt-3 md:w1/3">
                            <form className="  ">
                                <input className="rounded mr-3 w-40" type="date" />
                                {!date ? (
                                    <button
                                        type="button"
                                        onClick={() => handlerDate()}
                                        className='mt-4 p-2 font-semibold bg-[#ee4a69] hover:bg-[#bc3c54] py-2 px-4 rounded shadow-md'>
                                        Siguiente
                                    </button>
                                ) : null}
                                {date ? (
                                    <form>
                                        <input className="rounded mr-3 mt-3 w-40 text-center" type="number" />
                                        <button
                                            type="button"
                                            onClick={() => handlerConfirm()}
                                            className='mt-4 p-2 font-semibold bg-[#ee4a69] hover:bg-[#bc3c54] py-2 px-4 rounded shadow-md'>
                                            Confirmar
                                        </button>
                                    </form>
                                ) : null}
                            </form>
                        </div>
                    )}
                </>
            ) : (
                <div className="p-3 flex flex-col justify-center items-center">
                    <h2 className="mb-10">¡Reserva confirmada!</h2>
                    <img className="w-1/3" src="/images/checked.png" alt="confirmation-img" />
                    <p className="mt-10">En su bandeja de entrada encontrara un correo con los datos de la reserva</p>
                </div>
            )}
        </div>

    )
}
