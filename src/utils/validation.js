import { useState } from 'react';

export function InputValidation() {
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [nameErr, setNameErr] = useState('');
const [emailErr, setEmailErr] = useState('');
const [isValid, setIsValid] = useState(false);

const handleChangeEmail = (e) => {
  const target = e.target;
  setEmail(e.target.value);
  const regex = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;
  if (!regex.test(String(e.target.value).toLowerCase())) {
    setEmailErr('Некорректный email');
  } else {
    setEmailErr('');
  }
  // setEmail(...email, email);
  setIsValid(target.closest("form").checkValidity());
};
const handleChangeName = (e) => {
  const target = e.target;
  setName(e.target.value);
  const regex = /^[A-Za-zА-Яа-я\s]{3,20}$/;
  if (!regex.test(String(e.target.value).toLowerCase())) {
    setNameErr('Некорректное имя пользователя');
  } else {
    setNameErr('');
  }
  // setName(...name,name);
  setIsValid(target.closest("form").checkValidity());
}
return {
    name,
    email,
    setName,
    setEmail,
    nameErr,
    emailErr,
    handleChangeEmail,
    handleChangeName,
    setIsValid
  };
}