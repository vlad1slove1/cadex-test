import React, { ReactNode } from 'react';
import { IconProps } from '@/components/Icons';

const util = {
    /**
     * Generates a mailto or tel link based on the provided string.
     *
     * This method checks if the given string contains an '@' symbol. If it does,
     * it assumes the string is an email address and returns a mailto link.
     * Otherwise, it treats the string as a phone number and returns a tel link.
     *
     * @param {string} str - The contact information string, either an email or a phone number.
     * @returns {string} - A mailto or tel link corresponding to the input string.
     *
     * @example
     * const emailLink = util.mailtoOrTel('example@example.com'); // returns 'mailto:example@example.com'
     * const phoneLink = util.mailtoOrTel('1234567890'); // returns 'tel:1234567890'
     */
    mailtoOrTel: (str: string): string => {
        const mailto: string = `mailto:${str}`;
        const tel: string = `tel:${str}`;
        return str.includes('@') ? mailto : tel;
    },

    /**
     * Creates a React component for an SVG icon with customizable size and color.
     *
     * This method takes a set of SVG paths as a ReactNode and returns a functional component.
     * The component can accept props for size and color, allowing for easy customization.
     *
     * @param {ReactNode} paths - The SVG paths to be rendered inside the icon.
     * @returns {React.FC<IconProps>} - A functional component that renders an SVG icon.
     *
     * @example
     * const MyIcon = util.createSvgIcon(<path d="M10 20l5-5-5-5v10z" />);
     * <MyIcon size={32} color="blue" />;
     */
    createSvgIcon: (paths: ReactNode): React.FC<IconProps> => {
        return ({ size = 24, color = 'white', ...props }: IconProps) => (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={size}
                height={size}
                viewBox="0 0 24 24"
                fill="none"
                stroke={color}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                {...props}
            >
                {paths}
            </svg>
        );
    },

    /**
     * Validates if the provided email is in a valid format.
     *
     * This function checks if the given string matches the standard email format.
     * It ensures that the email contains a non-whitespace character before and after
     * an "@" symbol, followed by a domain with a valid format.
     *
     * @param {string} email - The email address to validate.
     * @returns {boolean} - Returns `true` if the email is in a valid format; otherwise, returns `false`.
     *
     * @example
     * isValidEmail('test@example.com'); // true
     * isValidEmail('invalid-email');    // false
     */
    isValidEmail: (email: string): boolean => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    },
};

export default util;
