describe('Регистрация', () => {
  it('Регистрация негативная, логин', () => {
    cy.fixture('cypressTest').then(data => { 
      cy.log('Переход на страницу регистрации')
      cy.visit(data.regist_url)

      cy.log('Ввод несоответствующего логина')
      cy.get(':nth-child(1) > :nth-child(1) > .form-control--medium > .form-input--text')
          .type(data.none_existent_login)

        cy.log('Ввод почты')
      cy.get('.form-input--email')
          .type(data.email)

       cy.log('Ввод пароля')
      cy.get(':nth-child(3) > .form-control--medium > .form-input--password')
          .type(data.password)
      
       cy.log('Ввод повторного пароля')
       cy.get(':nth-child(4) > .form-control--medium > .form-input--password')
          .type(data.password)
        
          cy.log("Проверка что пользователь не зарегистрировался и логин некорректный");
          cy.get('.form-error > span').should('exist');     
    })
  })




  it('Регистрация негативная, почта', () => {
    cy.fixture('cypressTest').then(data => { 
      cy.log('Переход на страницу регистрации')
      cy.visit(data.regist_url)

      cy.log('Ввод логина')
      cy.get(':nth-child(1) > :nth-child(1) > .form-control--medium > .form-input--text')
          .type(data.login)

        cy.log('Ввод несоответствующей почты')
      cy.get('.form-input--email')
          .type(data.none_existent_email)

       cy.log('Ввод пароля')
      cy.get(':nth-child(3) > .form-control--medium > .form-input--password')
          .type(data.password)
      
       cy.log('Ввод повторного пароля')
       cy.get(':nth-child(4) > .form-control--medium > .form-input--password')
          .type(data.password)
        
          cy.log("Проверка что пользователь не зарегистрировался и почта некорректная");
          cy.get('.form-error > span').should('exist');
    })
  })



  it('Регистрация негативная, пароль (1)', () => {
    cy.fixture('cypressTest').then(data => { 
      cy.log('Переход на страницу регистрации')
      cy.visit(data.regist_url)
      cy.log('Ввод несоответствующего логина')
      cy.get(':nth-child(1) > :nth-child(1) > .form-control--medium > .form-input--text')
          .type(data.login)
        cy.log('Ввод почты')
      cy.get('.form-input--email')
          .type(data.email)
       cy.log('Ввод неккоректного пароля')
      cy.get(':nth-child(3) > .form-control--medium > .form-input--password')
          .type(data.none_existent_password)
       cy.log('Ввод повторного пароля')
       cy.get(':nth-child(4) > .form-control--medium > .form-input--password')
          .type(data.none_existent_password)
          cy.log("Проверка что пользователь не зарегистрировался и пароль некорректный");
        cy.get('.form-error > span').should('exist');
    })
  })

  it('Регистрация негативная, пароль (2)', () => {
    cy.fixture('cypressTest').then(data => { 
      cy.log('Переход на страницу регистрации')
      cy.visit(data.regist_url)
      cy.log('Ввод несоответствующего логина')
      cy.get(':nth-child(1) > :nth-child(1) > .form-control--medium > .form-input--text')
          .type(data.login)
        cy.log('Ввод почты')
      cy.get('.form-input--email')
          .type(data.email)
       cy.log('Ввод пароля')
      cy.get(':nth-child(3) > .form-control--medium > .form-input--password')
          .type(data.password)
       cy.log('Ввод неккоректного повторного пароля')
       cy.get(':nth-child(4) > .form-control--medium > .form-input--password')
          .type(data.none_existent_password)
          cy.log("Проверка что пользователь не зарегистрировался и пароль некорректный");
        cy.get('.form-error > span').should('exist');
    })
  })
})