import React, { useState } from 'react';

function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');

    function handleNameChange(e) {
        setName(e.target.value);
    }

    function handleEmailChange(e) {
        setEmail(e.target.value);
    }

    function handlePhoneNumberChange(e) {
        setPhoneNumber(e.target.value);
    }

    function handlePasswordChange(e) {
        setPassword(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(
            "Name:", name,
            "Email:", email,
            "Phone Number:", phoneNumber,
            "Password:", password
        );
    }

    return (
        <div>
            <div className='2xl:container'>
                <div className='lg:w-[80%] w-[100%] mx-auto'>
                    <form onSubmit={handleSubmit}>
                        <div className='flex flex-col gap-5 justify-center items-center h-screen'>
                            <h1 className='text-2xl font-bold'>Register</h1>
                            <input
                                type="text"
                                placeholder='Name'
                                onChange={handleNameChange}
                                className='outline-none border lg:w-[25%] w-[60%] p-2 rounded-md border-black'
                                required
                            />
                            <input
                                type="email"
                                placeholder='Email'
                                onChange={handleEmailChange}
                                className='outline-none border lg:w-[25%] w-[60%] p-2 rounded-md border-black'
                                required
                            />
                            <input
                                type="tel"
                                placeholder='Phone Number'
                                onChange={handlePhoneNumberChange}
                                className='outline-none border lg:w-[25%] w-[60%] p-2 rounded-md border-black'
                                required
                            />
                            <input
                                type="password"
                                placeholder='Password'
                                onChange={handlePasswordChange}
                                className='outline-none border lg:w-[25%] w-[60%] p-2 rounded-md border-black'
                                required
                            />
                            <button
                                type="submit"
                                className='px-6 py-2 bg-blue-500 text-white rounded-lg'
                            >
                                Register
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Register;
