import React, { useContext } from 'react';
import { ModalContext } from '../../contexts/Modal';
import styled from 'styled-components';
import CloseIcon from '@material-ui/icons/Close';

interface ModalProps {
  onDismiss?: () => void;
  title: string;
  close?: boolean;
  error?: boolean;
  guide?: boolean;
  btnWrap?: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ children, title, close, error, guide, btnWrap }) => {
  const { onDismiss } = useContext(ModalContext);

  return (
    <StyleModal>
      {close && (
        <StyleClose onClick={onDismiss}>
          <CloseIcon />
        </StyleClose>
      )}
      <StyleTitle>
        {error && <StyleIcon type="error">!</StyleIcon>}
        {guide && <StyleIcon type="guide">!</StyleIcon>}
        {title}
      </StyleTitle>
      {children}
      {btnWrap && <StyleBtnWrap>{btnWrap}</StyleBtnWrap>}
    </StyleModal>
  );
};

const StyleModal = styled.div`
  display: inline-flex;
  flex-direction: column;
  background: #fff;
  min-width: 512px;
  padding: 50px 44px;
  position: relative;
  border-radius: 20px;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.7;
  z-index: 9999;
`;

const StyleTitle = styled.h2`
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const StyleIcon = styled.span<{ type: string }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  margin-right: 13px;
  background: ${(props) => (props.type === 'error' ? '#FFF2F2' : 'rgba(19, 159, 190, 0.11)')};
  color: ${(props) => (props.type === 'error' ? '#E20000' : '#139FBE')};
`;

const StyleClose = styled.button`
  width: 24px;
  height: 24px;
  position: absolute;
  top: 13px;
  right: 13px;
  background: #eaf5f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    height: 14px;
  }
`;

const StyleBtnWrap = styled.div`
  margin-top: 60px;
  display: flex;
  align-items: center;
  button {
    width: 50%;
    flex: 1;
    &:nth-child(2) {
      margin-left: 10px;
    }
  }
`;

export default Modal;
