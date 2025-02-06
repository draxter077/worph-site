export default function logout(){
    let style = `
        {
            padding: 5px 10px;
            border-radius: 5px;
            background: white;
        }`

    const logout = cE("button", style)
    logout.innerHTML = "Logout"
    return(logout)
}