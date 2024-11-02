import React, { ReactNode } from 'react';

const MainContainer: React.FC<{ children?: ReactNode }> = ({ children }) => (
    <main className="flex-grow">{children}</main>
);

export default MainContainer;
