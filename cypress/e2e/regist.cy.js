describe('Регистрация', () => {
  it('Registration test', () => {
    cy.fixture('cypressTest').then(data => { 
      cy.log('Переход на страницу регистрации')
      cy.visit(data.regist_url)

      cy.log('Ввод логина')
      cy.get(':nth-child(1) > :nth-child(1) > .form-control--medium > .form-input--text')
          .type(data.login)

        cy.log('Ввод почты')
      cy.get('.form-input--email')
          .type(data.email)

       cy.log('Ввод пароля')
      cy.get(':nth-child(3) > .form-control--medium > .form-input--password')
          .type(data.password)
      
       cy.log('Ввод повторного пароля')
       cy.get(':nth-child(4) > .form-control--medium > .form-input--password')
          .type(data.password)
        
       cy.log('Клик по кнопке войти')
      cy.get(':nth-child(4) > .button')
          .click()


           cy.log('Ввод Фамилии')
       cy.get('[style=""] > :nth-child(1) > .form-control--medium > .form-input--text')
          .type(data.surname)

           cy.log('Ввод Имени')
       cy.get(':nth-child(2) > .form-control--medium > .form-input--text')
          .type(data.name)

           cy.log('Ввод Отчества')
       cy.get(':nth-child(3) > .form-control--medium > .form-input--text')
          .type(data.patronymic)

          cy.log('Клик по кнопке войти')
        cy.get(':nth-child(3) > .button')
          .click()



    })
  })
})

