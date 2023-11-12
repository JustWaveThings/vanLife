import React from 'react';
import { Form, useActionData, redirect, useNavigation } from 'react-router-dom';
import { loginUser } from '../api';

export async function action({ request }) {
  const formData = await request.formData();
  const email = formData.get('email');
  const password = formData.get('password');

  const pathname = new URL(request.url).searchParams.get('redirectTo');
  console.log('pathname', pathname);
  try {
    await loginUser({ email, password });
    localStorage.setItem('loggedInVanLife', true);
    const response = redirect(pathname || '/host');
    response.body = true;
    return response;
  } catch (error) {
    return error.message;
  }
}

export default function Login() {
  const error = useActionData();
  const navigate = useNavigation();
  const loginProcessStatus = navigate.state;

  return (
    <div className='login-container'>
      <h1>Sign in to your account</h1>

      {error && <h4 className='loginErrorMessage'>{error} </h4>}
      <Form
        method='post'
        className='login-form'
        replace>
        <input
          name='email'
          type='email'
          placeholder='Email address'
        />
        <input
          name='password'
          type='password'
          placeholder='Password'
        />
        {loginProcessStatus === 'submitting' ? (
          <button className='disabled'>Logging in...</button>
        ) : (
          <>
            <button>Log in</button>
            <h1>user: b@b.com, pass: p123</h1>
          </>
        )}
      </Form>
    </div>
  );
}
