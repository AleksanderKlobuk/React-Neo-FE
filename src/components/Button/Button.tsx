import React, { FC } from "react";
import '../../Styles/Button.css';
import { Link } from 'react-router-dom';

const STYLES = ['btn--primary', 'btn--outline', 'btn--test'];

const SIZES = ['btn--medium', 'btn--large'];

interface Props {
    children?:any,/*Jesli nie czesto bedziemy tworzyc obiekty w ktorych nie bediemy wykorzystywac wszystkich properies to lepiej zapiac je z "?" Typescript nie bedzie wymagac podawania kazdefo property a tylko te ktore sami chcemy. Chyba ze chcemy zeby nam przypominal o brakujacym property*/
    type?:any,
    onClick?:any,
    buttonStyle?:any,
    buttonSize?:any,
    className?:any,
}

export const Button: FC<Props> = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];
  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <Link to='/sign-up' className='btn-mobile'>
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </Link>
  );
};
