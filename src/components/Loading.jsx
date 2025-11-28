import React from 'react';

const Loading = () => {
    return (
        <div className='fixed top-0 left-0 flex items-center justify-center h-screen w-screen'>
            <div className='fixed h-screen w-screen bg-neutral-900 opacity-50'></div>
            {/* loading state */}
            <span className="loader" />
        </div>
    );
}
export default Loading;




  