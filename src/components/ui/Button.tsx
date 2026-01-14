// Reusable Button Component
import React from 'react';

interface ButtonProps {
    onClick?: () => void;
    children: React.ReactNode;
    variant?: 'primary' | 'outline';
    type?: 'button' | 'submit';
    disabled?: boolean;
    className?: string;
    icon?: React.ReactNode;
    href?: string;
}

const Button: React.FC<ButtonProps> = ({
    onClick,
    children,
    variant = 'primary',
    type = 'button',
    disabled = false,
    className = '',
    icon,
    href
}) => {
    const baseStyles = `
    relative
    flex
    items-center
    justify-center
    gap-2
    px-8
    py-4
    rounded-full
    font-bold
    text-lg
    transition-all
    duration-300
    shadow-xl
    hover:shadow-2xl
    transform
    hover:-translate-y-1
    active:translate-y-0
    overflow-hidden
    group/btn
    w-full
    max-w-xs
  `;

    const primaryStyles = `
    bg-gradient-to-r
    from-gray-900
    to-gray-800
    hover:from-gray-800
    hover:to-gray-700
    text-yellow-400
  `;

    const outlineStyles = `
    border-2
    border-yellow-500
    text-yellow-500
    hover:text-yellow-400
    hover:border-yellow-400
    bg-gradient-to-r
    from-transparent
    via-yellow-500/5
    to-transparent
    hover:from-yellow-500/10
    hover:to-yellow-500/10
  `;

    const variantStyles = variant === 'primary' ? primaryStyles : outlineStyles;

    const disabledStyles = disabled
        ? 'opacity-50 cursor-not-allowed pointer-events-none'
        : '';

    const combinedStyles = `${baseStyles} ${variantStyles} ${disabledStyles} ${className}`;

    const content = (
        <>
            {/* Button shine effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-500/20 to-transparent translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700" />

            {/* Button content */}
            <span className="relative flex items-center justify-center gap-2">
                {children}
                {icon && (
                    <span className="transform group-hover/btn:translate-x-1 transition-transform duration-300">
                        {icon}
                    </span>
                )}
            </span>
        </>
    );

    if (href) {
        return (
            <a href={href} className={combinedStyles}>
                {content}
            </a>
        );
    }

    return (
        <button onClick={onClick} type={type} disabled={disabled} className={combinedStyles}>
            {content}
        </button>
    );
};

export default Button;
