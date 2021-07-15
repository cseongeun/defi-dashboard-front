import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
  children?: React.ReactNode;
  disabled?: boolean;
  href?: string;
  onClick?: () => void;
  size?: 'big';
  type?: 'lineGreen' | 'green' | 'whiteGreen' | 'gray' | 'red' | 'lightGreen';
  fullWidth?: boolean;
  style?: any;
}

const Button: React.FC<ButtonProps> = ({
  children,
  disabled,
  onClick,
  style,
  type,
  size,
  fullWidth,
}) => {
  let buttonBackground, buttonBorder, buttonColor, hoverBackground, activeBackground, fontWeight;
  switch (type) {
    case 'lineGreen':
      buttonBackground = '#fff';
      buttonBorder = '2px solid #2B8693';
      buttonColor = '#024953';
      hoverBackground = '#DCEFF1';
      activeBackground = '#DCEFF1';
      break;
    case 'green':
      buttonBackground = '#024953';
      buttonBorder = '';
      buttonColor = '#fff';
      hoverBackground = '#023b43';
      activeBackground = '#01252a';
      break;
    case 'whiteGreen':
      buttonBackground = '#fff';
      buttonBorder = '';
      buttonColor = '#024953';
      hoverBackground = '#f6f6f6';
      activeBackground = '#f6f6f6';
      fontWeight = '900';
      break;
    case 'gray':
      buttonBackground = '#efefef';
      buttonBorder = '#efefef';
      buttonColor = '#c4c4c4';
      hoverBackground = '#EFEFEF';
      activeBackground = '#EFEFEF';
      break;
    case 'red':
      buttonBackground = '#D14F4F';
      buttonBorder = '#D14F4F';
      buttonColor = '#fff';
      hoverBackground = '#c64b4b';
      activeBackground = '#ba4646';
      break;
    case 'lightGreen':
      buttonBackground = '#DCEFF1';
      buttonBorder = '#DCEFF1';
      buttonColor = '#024953';
      hoverBackground = '#d1e3e5';
      activeBackground = '#d1e3e5';
      break;
  }

  let fontSize, buttonPadding, buttonHeight, buttonMinWidth, buttonRadius;
  switch (size) {
    case 'big':
      fontSize = 18;
      buttonPadding = '0 30px;';
      buttonHeight = 70;
      buttonMinWidth = 0;
      buttonRadius = 14;
      break;
    default:
      fontSize = 13;
      buttonPadding = '0 15px;';
      buttonHeight = 36;
      buttonMinWidth = 168;
      buttonRadius = 4;
  }

  return (
    <StyledButton
      style={style}
      disabled={disabled}
      onClick={onClick}
      background={buttonBackground}
      border={buttonBorder}
      color={buttonColor}
      hoverBackground={hoverBackground}
      activeBackground={activeBackground}
      fontSize={fontSize}
      fontWeight={fontWeight}
      buttonPadding={buttonPadding}
      buttonHeight={buttonHeight}
      buttonMinWidth={buttonMinWidth}
      buttonRadius={buttonRadius}
      fullWidth={fullWidth}
    >
      {children}
    </StyledButton>
  );
};

interface StyledButtonProps {
  style: any;
  disabled?: boolean;
  background?: string;
  border?: string;
  color?: string;
  hoverBackground?: string;
  activeBackground?: string;
  fontSize?: number;
  fontWeight?: string;
  buttonPadding?: string;
  buttonHeight?: number;
  buttonMinWidth?: number;
  buttonRadius?: number;
  fullWidth?: boolean;
}

const StyledButton = styled.button<StyledButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: none;
  font-size: ${(props) => props.fontSize}px;
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : 'bold')};
  cursor: ${(props) => (props.disabled ? 'default' : 'pointer')};
  width: ${(props) => props.fullWidth && '100%'};
  min-width: ${(props) => props.buttonMinWidth}px;
  height: ${(props) => props.buttonHeight}px;
  border-radius: ${(props) => props.buttonRadius}px;
  transition: all 0.2s;
  padding: ${(props) => props.buttonPadding};
  background: ${(props) => `${props.background}`};
  color: ${(props) => `${props.color}`};
  border: ${(props) => `${props.border}`};
  position: relative;
  &:hover {
    background-color: ${(props) => (props.disabled ? props.background : props.hoverBackground)};
  }
  &:active {
    background-color: ${(props) => (props.disabled ? props.background : props.activeBackground)};
  }
  &:after {
    content: '';
    border-radius: ${(props) => props.buttonRadius}px;
    display: ${(props) => (props.disabled ? 'block' : 'none')};
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #fff;
    opacity: 0.5;
  }
`;

export default Button;
