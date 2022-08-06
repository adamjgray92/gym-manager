import React from 'react';

const Login = () => {
  return (
    <div className='flex'>
      <div className='hidden'></div>
      <div className='p-4 py-8 flex flex-col items-center w-full'>
        <div>
          <h1>Login</h1>
          <h2 className='mt-8 text-xl text-gray-700 text-center'>
            Please login to your account.
          </h2>
          <form className='mt-8 w-full flex flex-col justify-content'>
            <div className='form-group'>
              <div className='input-group'>
                <input type='text' placeholder='example@mail.com' />
              </div>
            </div>
            <div className='form-group'>
              <div className='input-group'>
                <input type='password' placeholder='password' />
              </div>
            </div>
            <div>
              <div>
                <input type='checkbox' />
                <label htmlFor=''>Remember me</label>
              </div>
              <div>
                <a href=''>Forgot password?</a>
              </div>
            </div>
            <div className='mt-8'>
              <button className='px-4 py-2 w-full rounded-md text-white bg-blue-500'>
                Login
              </button>
            </div>
          </form>
        </div>
        <div className='mt-4'>
          <span className='text-gray-700'>Don't have an account?</span>
          <a className='ml-4 text-blue-500' href=''>
            Sign up
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
