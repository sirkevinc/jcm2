import React from "react"
import Footer from "./Footer"
import HideAppBar from "./Appbar"

interface Props {
    children: React.ReactElement
}

export default function Layout({ children }: Props) {
    return (
        <>
            <HideAppBar children={children} />
            {children}
            <Footer />
        </>
    )
}