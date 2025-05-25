import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  primary?: boolean;
  secondary?: boolean;
  outline?: boolean;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  href?: string;
  download?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  primary,
  secondary,
  outline,
  type = 'button',
  onClick,
  disabled = false,
  className = '',
  href,
  download,
}) => {
  const baseClasses = 'inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium text-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  let variantClasses = '';
  
  if (primary) {
    variantClasses = outline
      ? 'text-blue-600 border-2 border-blue-600 hover:bg-blue-600 hover:text-white dark:text-blue-400 dark:border-blue-400 dark:hover:bg-blue-400 dark:hover:text-white focus:ring-blue-500'
      : 'bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 focus:ring-blue-500';
  } else if (secondary) {
    variantClasses = outline
      ? 'text-gray-700 border-2 border-gray-300 hover:border-gray-400 hover:bg-gray-50 dark:text-gray-300 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-800 focus:ring-gray-500'
      : 'bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600 focus:ring-gray-500';
  } else {
    variantClasses = outline
      ? 'text-gray-700 border-2 border-gray-300 hover:border-gray-400 hover:bg-gray-50 dark:text-gray-300 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-800 focus:ring-gray-500'
      : 'bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700 focus:ring-gray-500';
  }
  
  const disabledClasses = disabled ? 'opacity-60 cursor-not-allowed' : 'hover:shadow-md';
  
  const allClasses = `${baseClasses} ${variantClasses} ${disabledClasses} ${className}`;
  
  if (href) {
    return (
      <a
        href={href}
        className={allClasses}
        download={download}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
        target={href.startsWith('http') ? '_blank' : undefined}
      >
        {children}
      </a>
    );
  }
  
  return (
    <button
      type={type}
      className={allClasses}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;