import React from 'react';

const Register = () => {
  return (
    <div>
      <div className='flex'>
        <div></div>
        <div>
          <h1>Create Account</h1>
          <form action=''>
            <div className='field-group'>
              <div className='input-group'>
                <input type='text' placeholder='John Doe' />
              </div>
            </div>
            <div className='field-group'>
              <div className='input-group'>
                <input type='text' placeholder='John Doe' />
              </div>
            </div>
            <div className='field-group'>
              <div className='input-group'>
                <input type='text' placeholder='John Doe' />
              </div>
            </div>
            <div className='field-group'>
              <div className='input-group'>
                <input type='text' placeholder='John Doe' />
              </div>
            </div>
            <div className='field-group'>
              <div className='input-group'>
                <input type='checkbox' />
                <label htmlFor=''>
                  I accept the <a href=''>Terms & Conditions</a>
                </label>
              </div>
            </div>
            <div>
              <button>Creeate Account</button>
            </div>
            <div>
              <span>
                Already have account? <a href=''>Login</a>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
