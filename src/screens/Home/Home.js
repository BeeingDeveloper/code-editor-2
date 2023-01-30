import React, {useContext} from 'react'
import LeftSection from './LeftSection'
import RightSection from './RightSection'
import Modal from '../../components/Modal'
import { ModalContext } from '../../context/ModalContext'


const Home = () => {
  const {isOpenModal} = useContext(ModalContext);
  
  return (
    <div className='w-full h-screen font-kanit'>
      <LeftSection />
      <RightSection />
      { isOpenModal.show && <Modal />}
    </div>
  )
}

export default Home;