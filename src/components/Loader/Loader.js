import './Loader.scss'
import React from 'react';

const Loader = () => {
    return (
        <div className="loader-wrapper">
            <div class="content">
                <div className="planet">
                    <div class="ring"></div>
                        <div class="cover-ring"></div>
                    <div class="spots">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        
                    </div>
                </div>
                <p>loading</p>
            </div>
        </div>
    )
}

export default Loader