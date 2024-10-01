import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faMobileScreen } from '@fortawesome/free-solid-svg-icons';

function LoginNames({ onRegistration }) {
    const [firstName, setFirstName] = useState('');
    const [secondName, setSecondName] = useState('');
    const [firstGender, setFirstGender] = useState('female');
    const [secondGender, setSecondGender] = useState('female');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!firstName || !secondName) {
            setErrorMessage('Please fill in both user names.');
            return;
        }
        setErrorMessage('');
        const user = {
            firstName:firstName,
            firstGender:firstGender,
            secondName:secondName,
            secondGender:secondGender,
        };

        onRegistration(user);
        navigate("/second"); 
    };
    return (
        <div className="flex justify-center items-center min-h-screen bg-[#b1a399]">
            <div className="hero bg-base-200 p-4 rounded-lg shadow-lg">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold text-[#d2d4c8]">Enter your Names</h1>
                        <p className="py-6">
                            To start the conversation you need to provide us with your name and gender
                        </p>
                        <div className='flex gap-1 justify-end max-sm:items-center max-sm:justify-center'>
                            <FontAwesomeIcon icon={faComment} className='text-9xl max-sm:text-4xl' />
                            <FontAwesomeIcon icon={faMobileScreen} className='text-9xl max-sm:text-4xl' />
                        </div>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form className="card-body" onSubmit={handleSubmit}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">First user name</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Name"
                                    className="input input-bordered"
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}

                                />
                            </div>
                            <div className='flex gap-2'>
                                <div className="form-control">
                                    <label className="label cursor-pointer">
                                        <span className="label-text mr-1">Female</span>
                                        <input
                                            type="radio"
                                            name="firstGender"
                                            className="radio checked:bg-gray-300 w-5 h-5"
                                            checked={firstGender === 'female'}
                                            onChange={() => setFirstGender('female')}
                                        />
                                    </label>
                                </div>
                                <div className="form-control">
                                    <label className="label cursor-pointer">
                                        <span className="label-text mr-1">Male</span>
                                        <input
                                            type="radio"
                                            name="firstGender"
                                            className="radio checked:bg-gray-300 w-5 h-5"
                                            checked={firstGender === 'male'}
                                            onChange={() => setFirstGender('male')}
                                        />
                                    </label>
                                </div>
                            </div>
                            <hr className='mt-5' />
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Second user name</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Name"
                                    className="input input-bordered"
                                    value={secondName}
                                    onChange={(e) => setSecondName(e.target.value)}

                                />
                            </div>
                            <div className='flex gap-2'>
                                <div className="form-control">
                                    <label className="label cursor-pointer">
                                        <span className="label-text mr-1">Female</span>
                                        <input
                                            type="radio"
                                            name="secondGender"
                                            className="radio checked:bg-gray-300 w-5 h-5"
                                            checked={secondGender === 'female'}
                                            onChange={() => setSecondGender('female')}
                                        />
                                    </label>
                                </div>
                                <div className="form-control">
                                    <label className="label cursor-pointer">
                                        <span className="label-text mr-1">Male</span>
                                        <input
                                            type="radio"
                                            name="secondGender"
                                            className="radio checked:bg-gray-300 w-5 h-5"
                                            checked={secondGender === 'male'}
                                            onChange={() => setSecondGender('male')}
                                        />
                                    </label>
                                </div>
                            </div>
                            {errorMessage && (
                                <div className="text-red-500 mt-2">
                                    {errorMessage}
                                </div>
                            )}
                            <div className="form-control mt-6">
                                <button type="submit" className="btn bg-[#b2a69d] text-white hover:bg-[#968a81]">START</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginNames;
