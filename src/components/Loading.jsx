import React from 'react';

const Loading = () => {
    return (
        <div className='fixed top-0 left-0 flex items-center justify-center h-screen w-screen'>
            <div className='fixed h-screen w-screen bg-neutral-600 opacity-30'></div>
            {/* loading state */}
            <span className="loader shadow-2xl" />
        </div>
    );
}
export default Loading;




  