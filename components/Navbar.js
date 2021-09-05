import React from 'react'
import styled from 'styled-components'
import Link from 'next/Link'

const Nav = styled.nav
`height: 80px;
background:#000;
color:#fff;
display: flex;
justify-content: space-between;
align-items: center;
`
const StlyedLink = styled.a
`
padding: 0rem 2rem;

`
const Navbar = () => {
    return (
        <Nav>
           <div>
               <Link href="/" passHref>
                <StlyedLink>NXT</StlyedLink>
               </Link>
           </div>
           <div>
           <Link href="/" passHref>
                <StlyedLink>Home</StlyedLink>
               </Link>
            <Link href="/about" passHref>
                <StlyedLink>About</StlyedLink>
               </Link>
            <Link href="/contact" passHref>
                <StlyedLink>Contact</StlyedLink>
               </Link>
           </div>
        </Nav>
    )
}

export default Navbar
