import React, {useState} from 'react';
import './authorization.css'
import Input from "../../utils/input/Input";
import {registration} from "../../actions/user";

const Registration = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return (
        <div className='authorization'>
            <div className="authorization__header">Регистрация нового ученика</div>
            <Input value={email} setValue={setEmail} type="text" placeholder="Введите номер телефона..."/>
            <Input value={password} setValue={setPassword} type="password" placeholder="Введите пароль..."/>
            <button className="authorization__btn" onClick={() => registration(email, password)}>Зарегистрировать</button>
        </div>
    );
};

export default Registration;
