import { HTMLAttributes, ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';
import { TextProps } from './Text';

export interface HeadingProps extends HTMLAttributes<TextProps> {
    size?: 'sm' | 'md' | 'lg';
    children: ReactNode;
    asChild?: boolean;

}

export function Heading({ size = 'md', children, asChild}: HeadingProps) {
    const Comp = asChild ? Slot : 'h2';
    return (
        <Comp 
            className={clsx(
                'text-gray-100 font-bold font-sans', 
                {
                    'text-lg': size === 'sm',
                    'text-xl': size === 'md',
                    'text-2xl': size === 'lg',
                }
            )}
        > 
            { children }
        </Comp>
    )
}