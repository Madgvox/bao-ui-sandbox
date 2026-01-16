import type { ButtonHTMLAttributes, ReactNode } from 'react';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary';
  children: ReactNode;
};

export function Button (props: ButtonProps) {
  const { variant = 'primary', children, ...rest } = props;

  return (
    <button
      {...rest}
      data-variant={ variant }
      onClick={props.onClick}
      style={ {
        padding: '8px 12px',
        borderRadius: 6,
        border: '1px solid',
        cursor: 'pointer',
        background: variant === 'primary' ? '#2563eb' : '#e5e7eb',
        color: variant === 'primary' ? 'white' : 'black'
      } }
    >
      { children }
    </button>
  );
}
