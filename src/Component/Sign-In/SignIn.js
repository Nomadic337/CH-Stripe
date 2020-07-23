import React, { Component } from 'react';
import FormInput from '../FormInput/FormInput';
import CustomButton from '../CustomButton/CustomButton';
import { signInWithGoogle } from '../../Firebase/Firebase.utils';
import './SignIn.scss';

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();

        this.setState({ email: '', password: ''})
    }

    handleChange = event => {
        const { value, name } = event.target;

        this.setState({ [name]: value })
    }


    render() {
        return (
            <div className='sign-in'> 
                <h2>I already have and account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit} >
                    <FormInput 
                        handleChange={this.handleChange}
                        name='email' 
                        value={this.state.email} 
                        label='Email'
                        required 
                    />
                
                    <FormInput 
                        handleChange={this.handleChange}
                        name='password' 
                        value={this.state.password} 
                        label='Password'
                        required 
                    />
                    <div className='buttons'>
                        <CustomButton type="submit">Sign In</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                            Sign in with Google
                        </CustomButton>
                    </div>
                </form>

            </div>
        )
    }

}

export default SignIn;