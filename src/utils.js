import { redirect } from "react-router-dom"

export async function requireAuth() {
    // const isLoggedIn = true
    const isLoggedIn = localStorage.getItem('isLoggedIn')
    
    if (!isLoggedIn) {
        throw redirect("/login?message=You are not logged in")
    }
    return null
}