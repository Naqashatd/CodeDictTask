class Login{
    getLogin(){
       // cy.clearLocalStorage()
       // cy.clearCookies()
        cy.get('[datacy="loginphone"]').type("9788073607")
        cy.getBySel('login-btn').click()
        cy.get('[datacy="code"]').type("123456", {force: true})
        cy.getBySel('code-btn').click()
    }
}
export default Login;