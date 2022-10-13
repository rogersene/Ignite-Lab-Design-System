import { HTMLAttributes, ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';

export interface TextProps extends HTMLAttributes<TextProps> {
    size?: 'sm' | 'md' | 'lg';
    children: ReactNode;
    asChild?: boolean;

}

export function Text({ size = 'md', children, className, asChild}: TextProps) {
    const Comp = asChild ? Slot : 'span';
    return (
        <Comp 
            className={clsx(
                'text-gray-100 font-sans',
                {
                    'text-xs': size === 'sm',
                    'text-sm': size === 'md',
                    'text-md': size === 'lg',
                },
                className,
            )}
        > 
            { children }
        </Comp>
    )
}