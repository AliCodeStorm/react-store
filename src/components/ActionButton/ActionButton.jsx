// /src/components/ActionButton.jsx
import React from 'react';

const variantStyles = {
  primary: "bg-blue-700 hover:bg-blue-800 text-white dark:bg-blue-600 dark:hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800",
  success: "bg-green-600 hover:bg-green-700 text-white",
  danger: "bg-red-600 hover:bg-red-700 text-white",
  secondary: "bg-gray-600 hover:bg-gray-700 text-white",
  warning: "bg-yellow-500 hover:bg-yellow-600 text-black",
  info: "bg-cyan-500 hover:bg-cyan-600 text-white",
  dark: "bg-black hover:bg-gray-800 text-white",
  light: "bg-white hover:bg-gray-100 text-black border border-gray-300",
  pink: "bg-pink-500 hover:bg-pink-600 text-white",
  purple: "bg-purple-600 hover:bg-purple-700 text-white",
  indigo: "bg-indigo-600 hover:bg-indigo-700 text-white",
  orange: "bg-orange-500 hover:bg-orange-600 text-white",
  teal: "bg-teal-500 hover:bg-teal-600 font-bold rounded text-white",
  lime: "bg-lime-500 hover:bg-lime-600 text-black",

};

const ActionButton = ({

  label = "Shop Now",
  onClick = () => {},
  variant = "primary",
  type = "button",
  fullWidth = false,
}) => {
  const style = variantStyles[variant] || variantStyles.primary;
  const widthStyle = fullWidth ? "w-full" : "";

  return (

    <button
      type={type}
      onClick={onClick}
      className={`text-sm font-medium rounded-lg px-5 py-2.5 text-center transition duration-200 ${style} ${widthStyle}`}
    >
      {label}
    </button>

  );
};

export default ActionButton;
