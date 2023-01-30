import React, { useContext } from 'react'
import LOGO from '../../assets/logo.png'
import { ModalContext } from '../../context/ModalContext'
import {BsPlusLg} from 'react-icons/bs'

const LeftSection = () => {
    const { openModal } = useContext(ModalContext);
    return (
        <div className='flex justify-center items-center relative h-screen w-[40%]'>
            <div className='text-center'>
                <img src={LOGO} alt="" className='w-fit m-auto' />
                <h2 className='text-3xl font-extrabold'>Code <span className='font-[500]'>Deck</span> </h2>
                <h2 className='text-xl font-semibold my-2 '>Code. Compile. Debug.</h2>
                <button 
                    className='bg-black p-2 flex rounded-full my-2 mx-2 gap-2 transition-all duration-150 ease-in-out hover:scale-95 shadow-xl shadow-blue-300'
                    onClick={() => openModal({
                        show: true,
                        modalType: 3,
                        identifiers: {
                            folderId: "",
                            cardId: "",
                            }   
                        })
                    }
                    >
                        <BsPlusLg className='text-white my-auto' />
                    <h5 className='text-white text-3xl'>Create Playground</h5>
                </button>
            </div>
        </div>
    )
}

export default LeftSection