export default function logout(){
    let style = `
        {
            padding: 5px 10px;
            border-radius: 5px;
            background: white;
            transition: box-shadow var(--transitionTime);
        }
        :hover{
            box-shadow: 0px 0px 0px 2px white;
        }`

    const logout = cE("button", style)
    logout.innerHTML = "Log Out"
    return(logout)
}