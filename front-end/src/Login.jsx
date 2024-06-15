import React from 'react'
import { useState } from 'react'



function Login() {

    const [email,setemail] = useState('')
    const [password,setpassword] = useState('')

    function emailchange(e){
        setemail(e.target.value)
    }
    function passwordchange(e){
        setpassword(e.target.value)
    }
    
    function submit(e){
        e.preventDefault();
       console.log(
       "email", email,
       "password", password)
    }
    return (
        <div>
            <div className='2xl:container '>
                <div className='lg:w-[80%] w-[100%] mx-auto  '>
                <form>
                    <div className='flex flex-col gap-5 justify-center items-center h-screen  '>
                     
                        <h1 className='text-2xl font-bold'>Login</h1>
                        <input type="email" placeholder='Email' onChange={emailchange} className='outline-none border lg:w-[25%] w-[60%] p-2 rounded-md border-black' required/>
                        <input type="password" placeholder='Password' onChange={passwordchange} className='outline-none border w-[60%] lg:w-[25%] p-2 rounded-md border-black' required/>
                        <p className='underline text-red-500'>Forget Password ?</p>
                        <button className='px-6 py-2 bg-blue-500 text-white rounded-lg' onClick={submit}>Login</button>
                      
                    </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
