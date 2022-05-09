import Link from "next/link";
import React from "react";

const Header =()=>{
    return (
        <React.Fragment>
            <div className="sperate">
            <Link href="/">
                <a>Home</a>
            </Link>
            </div>
            <div className="sperate">
            <Link href="/about">
                <a>About Us</a>
            </Link>
            </div>
        </React.Fragment>
    )
}

export default Header;