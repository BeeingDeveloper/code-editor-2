import React, {useContext} from 'react'
import styled from 'styled-components'
import { 
  CreateNewFolder, 
  NewPlayground, 
  NewPlaygroundAndFolder, 
  EditFolder, EditPlaygroundTitle, 
  Loading 
} from './ModalTypes/exporter'
import { ModalContext } from '../context/ModalContext'

const ModalContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.4);
    z-index: 2;
    display: flex;
    justify-content: center;
    align-items: center;
`

const ModalContent = styled.div`
    background-color: #fff;
    padding: 1.5rem;
    width: 35%;
    min-width: 300px;
    border-radius: 10px;
`

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const CloseButton = styled.button`
  background: transparent;
  outline: 0;
  border: 0;
  font-size: 2rem;
  cursor: pointer;
`;

export const Input = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 1.5rem 0;
  gap: 2rem;
  padding-bottom: 0;

  input {
    flex-grow: 1;
    height: 2rem;
    background: '#b8d7f2';
    border: 1px solid gray;
    outline: none;
    padding-left: 0.5rem;
  }

  button {
    background: #241f21;
    height: 2.5rem;
    color: white;
    padding: 0.3rem 2rem;
    border: 1px solid transparent;
    border-radius: 5px;
  }
`;

const Modal = () => {
  const { isOpenModal } = useContext(ModalContext)
  const { modalType } = isOpenModal; //DESTRUCTURTED

  return (
    <ModalContainer>
      <ModalContent>
        {modalType === 1 && <CreateNewFolder />}
        {modalType === 2 && <NewPlayground />}
        {modalType === 3 && <NewPlaygroundAndFolder />}
        {modalType === 4 && <EditFolder />}
        {modalType === 5 && <EditPlaygroundTitle />}
        {modalType === 6 && <Loading />}
      </ModalContent>
    </ModalContainer>
  )
}

export default Modal