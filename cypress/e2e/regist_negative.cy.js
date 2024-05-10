describe('Регистрация негативная, логин', () => {
  it('Registration test', () => {
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
        
       cy.log('Клик по кнопке войти')
      cy.get(':nth-child(4) > .button')
          .click()
          cy.log("Проверка что пользователь успешно зарегистрировался");
          cy.url().should('equal', 'https://dev.profteam.su/account/main');
    })
  })
})


describe('Регистрация негативная, почта', () => {
  it('Registration test', () => {
    cy.fixture('cypressTest').then(data => { 
      cy.log('Переход на страницу регистрации')
      cy.visit(data.regist_url)

      cy.log('Ввод несоответствующего логина')
      cy.get(':nth-child(1) > :nth-child(1) > .form-control--medium > .form-input--text')
          .type(data.login)

        cy.log('Ввод почты')
      cy.get('.form-input--email')
          .type(data.none_existent_email)

       cy.log('Ввод пароля')
      cy.get(':nth-child(3) > .form-control--medium > .form-input--password')
          .type(data.password)
      
       cy.log('Ввод повторного пароля')
       cy.get(':nth-child(4) > .form-control--medium > .form-input--password')
          .type(data.password)
        
       cy.log('Клик по кнопке войти')
      cy.get(':nth-child(4) > .button')
          .click()
          cy.log("Проверка что пользователь успешно зарегистрировался");
          cy.url().should('equal', 'https://dev.profteam.su/account/main');
    })
  })
})

describe('Регистрация негативная, пароль (1)', () => {
  it('Registration test', () => {
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
          .type(data.none_existent_password)
      
       cy.log('Ввод повторного пароля')
       cy.get(':nth-child(4) > .form-control--medium > .form-input--password')
          .type(data.none_existent_password)
        
       cy.log('Клик по кнопке войти')
      cy.get(':nth-child(4) > .button')
          .click()
          cy.log("Проверка что пользователь успешно зарегистрировался");
          cy.url().should('equal', 'https://dev.profteam.su/account/main');
    })
  })
})

describe('Регистрация негативная, пароль (2)', () => {
  it('Registration test', () => {
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
      
       cy.log('Ввод повторного пароля')
       cy.get(':nth-child(4) > .form-control--medium > .form-input--password')
          .type(data.none_existent_password)
        
       cy.log('Клик по кнопке войти')
      cy.get(':nth-child(4) > .button')
          .click()
          cy.log("Проверка что пользователь успешно зарегистрировался");
          cy.url().should('equal', 'https://dev.profteam.su/account/main');
    })
  })
})


