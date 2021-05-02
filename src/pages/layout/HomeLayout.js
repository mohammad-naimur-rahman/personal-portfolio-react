import React from 'react';
import SideNav from '../Shared/SideNav';

const HomeLayout = ({ children }) => {
    return (
        <div className='container-fluid'>
            <SideNav />
            <div className='children'>
                {children}
            </div>
        </div>
    );
};

export default HomeLayout;