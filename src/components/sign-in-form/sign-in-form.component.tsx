
import FormInput from '../form-input/form-input.component';
import { useState } from 'react';
import {signInAuthUserWithEmailsAndPassword, createUserDocumentFromAuth, signInWithGooglePopup} from '../../utils/firebase/firebase.utils';
import './sign-in-form.styles.scss';
import Button from '../button/button.component';

const defaultFormFields = {
  email: '',
  password: '',
};

const SignInForm = () => {
  
  const [formFields, setFormFields] = useState(defaultFormFields);
  const {  email, password,  } = formFields;


  const handleChange = (event) => {
    const {name, value} = event.target;

    setFormFields({...formFields, [name]:value});
  };


  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  }

  const signInWithGoogle = async() => {
    await signInWithGooglePopup();
  }
  const handleSubmit = async (event) => {
    event.preventDefault();

    try{
      const {user} = await signInAuthUserWithEmailsAndPassword(email, password);
      resetFormFields();
    }
    catch(error){
      switch(error.code){
        case 'auth/user-not-found':
        alert('User not found');
        break;
        
        case 'auth/wrong-password':
        alert('Wrong password');
      }
      console.log(error);
    }
    
  };

  return (
  <div className='sign-up-container'>
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>

        <FormInput 
          label='Email' 
          type="email" 
          required 
          onChange={handleChange} 
          name="email" 
          value={email}/>

        <FormInput 
          label='Password' 
          type="password" 
          required onChange={handleChange} 
          name="password" 
          value={password}/>

        <div className='buttons-container'>
         <Button buttonType='' type="submit">Sign In</Button>
         <Button buttonType='google' type='button' onClick={signInWithGoogle}>Google Sign In</Button>
         </div>
      </form>
    </div>
  )
}

export default SignInForm;
