
describe('Авторизация негативная', () => {
  it('Авторизация негативная, логин', () => {
    cy.fixture('cypressTest').then(data => { 
      cy.log('Переход на страницу авторизации')
      cy.visit(data.auth_url)

      cy.log('Ввод существующего логина')
      cy.get('.form-input--text')
          .type(data.none_existent_login)

       cy.log('Ввод существующего пароля')
      cy.get('.form-input--password')
          .type(data.password)
        
       cy.log('Клик по кнопке войти')
      cy.get(':nth-child(3) > .button')
          .click()
          cy.log("Проверка что пользователь не авторизировался и логин является некорректным");
        cy.get('.form-error > span').should('exist');
    })
  })
});
  it('Авторизация негативная, пароль', () => {
    cy.fixture('cypressTest').then(data => { 
      cy.log('Переход на страницу авторизации')
      cy.visit(data.auth_url)

      cy.log('Ввод существующего логина')
      cy.get('.form-input--text')
          .type(data.login)

       cy.log('Ввод существующего пароля')
      cy.get('.form-input--password')
          .type(data.none_existent_password)
        
       cy.log('Клик по кнопке войти')
      cy.get(':nth-child(3) > .button')
          .click()
          cy.log("Проверка что пользователь не авторизировался и пароль является некорректным");
          cy.get('.form-error > span').should('exist');
    })
  });
  it('Авторизация негативная, логин/пароль', () => {
    cy.fixture('cypressTest').then(data => { 
      cy.log('Переход на страницу авторизации')
      cy.visit(data.auth_url)

      cy.log('Ввод существующего логина')
      cy.get('.form-input--text')
          .type(data.none_existent_login)

       cy.log('Ввод существующего пароля')
      cy.get('.form-input--password')
          .type(data.none_existent_password)
        
       cy.log('Клик по кнопке войти')
      cy.get(':nth-child(3) > .button')
          .click()
          cy.log("Проверка что пользователь не авторизировался");
          cy.get('.form-error > span').should('exist');
    })
  });