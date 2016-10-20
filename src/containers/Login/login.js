import React, {Component} from 'react'
import Logo from './Logo'
import FormComponent from '../form/FormComponent'
import LoginSns from './LoginSns'
import NavUser from './NavUser'
import '../../assets/styles/font.css'

export default class Login extends Component{
    render(){
        return (
            <div>
                <div id="logo">
                    <Logo />
                </div>
                <div id="sign-in">
                    <FormComponent />
                </div>
                <div id="nav-user">
                    <NavUser />
                </div>
                <div id="login-sns">
                    <LoginSns />
                </div>
            </div>
        )
    }
}