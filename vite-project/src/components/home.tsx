import {Routes, Route, useNavigate} from 'react-router-dom';
import {Login} from './login';
import {SignUp} from './signUp';
import { useState } from 'react';

export function Home(){

    let [isUserLogged, setIsUserLogged] = useState('false');

    const navigate = useNavigate();
    // const navigateLogin = () => { navigate('/login'); }
    // const navigateSignIn = () => { navigate('/signup'); }

    function navigateLogin(){
        isUserLogged = 'true';
        alert(isUserLogged);
    }

    function checkUserLogged(){
        return(isUserLogged == 'true' ? (<h3>Boa pa nois</h3>) :
        <button onClick={navigateLogin}>Login</button>
        )
        
    }

    const [input, setInput] = useState('');

    function showInput(){
        alert(input);
    }

    function onChangeCustom (e: React.ChangeEvent<HTMLInputElement>, additionalParam?: string){
        console.log(e.target.value)
        setInput(e.target.value)
    }

    return (
        <div>
            <h1>Bem-vindo!</h1>
            <h3>Escolha uma das opções abaixo para iniciar:</h3>
            {
                checkUserLogged()
            }

            <input placeholder='Digite seu nome:' value={input}
                onChange={ (e) => onChangeCustom(e) }></input>
                            {/* <input placeholder='Digite seu nome:' value={input}
                onChange={ (e) => setInput(e.target.value)}></input> */}
            <br/>
            <button onClick={showInput}>Mostrar</button>

            {/* <Routes>
                <Route path='/login' element={<Login/>}/>
                <Route path='/signup' element={<SignUp/>}/>
            </Routes> */}
        </div>
    )
}