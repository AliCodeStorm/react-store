import React, { useState } from 'react';
import ActionButton from '../ActionButton/ActionButton';

function SignUpModal({ isOpen, onClose }) {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        termsAccepted: false,
      });
    
      const [error, setError] = useState('');
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      const handleCheckboxChange = (e) => {
        setFormData({
          ...formData,
          termsAccepted: e.target.checked,
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
          setError('Passwords do not match');
          return;
        }
        if (!formData.termsAccepted) {
          setError('You must agree to the terms and conditions');
          return;
        }
    
        console.log('Form submitted:', formData);
        setError('');
        onClose();
      };
    
      if (!isOpen) return null;

  return (
    
    <div className="fixed inset-0 z-50 flex justify-center items-center bg-gray-900 bg-opacity-50">

      <div className="relative w-full max-w-md px-4 h-full md:h-auto">

        <div className="bg-white rounded-lg shadow-lg dark:bg-gray-700">

          <div className="flex justify-end p-2">

            <button
              type="button"
              className="text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
              onClick={onClose}
            >
              <svg
                className="w-5 h-5 mt-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 px-6 lg:px-8 pb-4 sm:pb-6 xl:pb-8">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">
              Sign up for an account
            </h3>

            <div>

              <label htmlFor="name" className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">
                Your name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
                required
              />

            </div>

            <div>

              <label htmlFor="email" className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">
                Your email
              </label>

              <input
                type="email"
                name="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="name@company.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div>

              <label htmlFor="password" className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">
                Your password
              </label>

              <input
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            <div>

              <label htmlFor="confirmPassword" className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">
                Confirm password
              </label>

              <input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                placeholder="••••••••"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />

            </div>

            <div className="flex justify-between">

              <div className="flex items-start">

                <div className="flex items-center h-5">

                  <input
                    id="terms"
                    aria-describedby="terms"
                    type="checkbox"
                    className="bg-gray-50 border border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                    checked={formData.termsAccepted}
                    onChange={handleCheckboxChange}
                    required
                  />
                </div>

                <div className="text-sm ml-3">
                  <label htmlFor="terms" className="font-medium text-gray-900 dark:text-gray-300">
                    I agree to the terms and conditions
                  </label>
                </div>

              </div>

            </div>

            {error && <p className="text-red-500">{error}</p>}

            <ActionButton
            label='Singn Up'
            type="submit"
            variant="success"
            fullWidth={true}
            />

            <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
              Already have an account?{' '}
              <a href="#" className="text-blue-700 hover:underline dark:text-blue-500">
                Login
              </a>
            </div>

          </form>

        </div>

      </div>

    </div>

  );

}

export default SignUpModal;
