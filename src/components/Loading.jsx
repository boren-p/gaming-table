import React from 'react';

const Loading = () => {
    return (
        <div className='fixed top-0 left-0 flex items-center justify-center h-screen w-screen'>
            <div className='fixed h-screen w-screen backdrop-blur-2xl'></div>
            {/* loading state */}
            <span className="loader" />
        </div>
    );
}
export default Loading;




  