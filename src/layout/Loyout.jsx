import React from "react"
import { Outlet } from "react-router-dom"
import Header from "../layout/navbar/Navbar"
import Footer from "../layout/footer/Footer"

export default function Layout() {
    return (
        <div className="site-wrapper">
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}