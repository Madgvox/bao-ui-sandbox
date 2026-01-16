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
      className='p-3 rounded bg-bao-primary text-white font-(family-name:--font-family-body)'
      // style={ {
      //   padding: '8px 12px',
      //   borderRadius: 6,
      //   border: '1px solid',
      //   cursor: 'pointer',
      //   background: variant === 'primary' ? 'var(--bg-' : '#e5e7eb',
      //   color: variant === 'primary' ? 'white' : 'black'
      // } }
    >
      { children }
    </button>
  );
}
