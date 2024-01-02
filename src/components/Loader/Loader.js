import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts/theme';
import './Loader.scss'

const Loader = () => {
    const [{ themeName }] = useContext(ThemeContext);
    return (
        <div className={`loader-wrapper ${themeName === 'dark' ? 'dark' : ''}`}>
            <div class="content">
                <div class="planet">
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