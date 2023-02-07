import React from 'react'
import githubLogo from '../images/github.png'
export const Footer = () => {
    return(
        <footer>
            <p>© Made by Lucas Zelaya</p>
            <a class="logo" href="https://github.com/lvcas-z"><img src={githubLogo} alt="github logo"/></a>
        </footer>
    )
}
