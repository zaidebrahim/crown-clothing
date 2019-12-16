import React from 'react';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { signInWithGoogle } from '../../firebase/firebase.util';

class SignIn extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email:'',
            password:''
        }
    }

    HandleClick = event=>{
        event.preventDefault();
        this.setState({email:'', password:''})
    }

    HandleChange = event=>{
        const {value, name} = event.target;
        this.setState({[name]:value})
    }

    render(){
        return(
            <div className='sign-in'>
                <h1>I already have an account</h1>
                <span>Sign in with your email and password</span>
                <form onSubmit = {this.HandleClick}>
                    <FormInput name="email" type="email" label="email" value={this.state.email} onChange={this.HandleChange} required/>
                    
                    <FormInput name="passwords" type="password" label="password" value={this.state.email} onChange={this.HandleChange} required/>
                    <div className='buttons'>
                        <CustomButton type = "submit">Sign In</CustomButton>
                        <CustomButton onClick = {signInWithGoogle} isGoogleSignIn >Sign in with google</CustomButton>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignIn;