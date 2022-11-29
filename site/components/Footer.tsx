import Image from 'next/image'
import Link from "next/link"


export default function Footer() {
    return (
        <footer className={"footer__container"}>
            <div className={"footer__line"}/>
            <div className={"footer__content"}>
                <span>Copyright © 2022 JCM</span>
                <ul>
                    <li><Link className="text-link" href="/">Home</Link></li>
                    <li><Link className="text-link" href="/about">About</Link></li>
                    <li><Link className="text-link" href="/contact">Contact</Link></li>
                </ul>
            </div>
        </footer>
    )
}