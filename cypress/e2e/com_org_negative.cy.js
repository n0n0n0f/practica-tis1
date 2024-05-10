describe('Добавление роли Работодателя (Негативная) - новая', () => {
  it('Auth test', () => {
    cy.fixture('cypressTest').then(data => { 
      cy.log('Переход на страницу авторизации')
      cy.visit(data.auth_url)

      cy.log('Ввод существующего логина')
      cy.get('.form-input--text')
          .type(data.login)

       cy.log('Ввод существующего пароля')
      cy.get('.form-input--password')
          .type(data.password)
        
       cy.log('Клик по кнопке войти')
      cy.get(':nth-child(3) > .button')
          .click()

          cy.log('Клик по кнопке выбрать роль')
          cy.get('.page-nav__role-block > .button')
              .click()

              cy.log('Клик по кнопке выбрать роль Коммерческую организацию')
              cy.get('.select-role-form > :nth-child(1)')
                  .click()
    
                  cy.log('Клик по выбору существующего кабинета')
                  cy.get('.variants-company > :nth-child(1)')
                      .click()
    
                      cy.log('Ввод образовательного учреждения')
                      cy.get('div.search-input__field > .form-input--text')
                          .type(data.none_existent_educ)

                      cy.log('Клик выбора образовательного учреждения')
                      cy.get('.search-input__item')
                          .click()

                          cy.log('Клик по кнопке для подтверждения')
                          cy.get('.choose-company > .button')
                              .click()
    })
  })
})


describe('Добавление роли Работодателя (Негативная) - Существующая/Название', () => {
  it('Auth test', () => {
    cy.fixture('cypressTest').then(data => { 
      cy.log('Переход на страницу авторизации')
      cy.visit(data.auth_url)

      cy.log('Ввод существующего логина')
      cy.get('.form-input--text')
          .type(data.login)

       cy.log('Ввод существующего пароля')
      cy.get('.form-input--password')
          .type(data.password)
        
       cy.log('Клик по кнопке войти')
      cy.get(':nth-child(3) > .button')
          .click()

          cy.log('Клик по кнопке выбрать роль')
          cy.get('.page-nav__role-block > .button')
              .click()

              cy.log('Клик по кнопке выбрать роль Коммерческой организации')
              cy.get('.select-role-form > :nth-child(1)')
                  .click()
    
              cy.log('Выбор создания нового личного кабинета')
              cy.get('.variants-company > :nth-child(2)')
              .click()
    
              cy.log('Ввод название организации')
              cy.get(':nth-child(1) > .form-control--medium > .form-input--text')
              .type(data.none_existent_name_org_com)
    
              cy.log('Ввод адреса организации')
              cy.get(':nth-child(2) > .form-control--medium > .form-input--text')
              .type(data.address_org_com)
    
              cy.log('Ввод краткой информации об организации')
              cy.get('.form-area')
              .type(data.info_org)
    
              cy.log('Клик по кнопке добавить')
              cy.get('.create-company-form__description-block > .button')
              .click()
          
                 
    })
  })
})



describe('Добавление роли Работодателя (Негативная) - Существующая/Адрес', () => {
  it('Auth test', () => {
    cy.fixture('cypressTest').then(data => { 
      cy.log('Переход на страницу авторизации')
      cy.visit(data.auth_url)

      cy.log('Ввод существующего логина')
      cy.get('.form-input--text')
          .type(data.login)

       cy.log('Ввод существующего пароля')
      cy.get('.form-input--password')
          .type(data.password)
        
       cy.log('Клик по кнопке войти')
      cy.get(':nth-child(3) > .button')
          .click()

          cy.log('Клик по кнопке выбрать роль')
          cy.get('.page-nav__role-block > .button')
              .click()

              cy.log('Клик по кнопке выбрать роль Коммерческой организации')
              cy.get('.select-role-form > :nth-child(1)')
                  .click()
    
              cy.log('Выбор создания нового личного кабинета')
              cy.get('.variants-company > :nth-child(2)')
              .click()
    
              cy.log('Ввод название организации')
              cy.get(':nth-child(1) > .form-control--medium > .form-input--text')
              .type(data.name_org_com)
    
              cy.log('Ввод адреса организации')
              cy.get(':nth-child(2) > .form-control--medium > .form-input--text')
              .type(data.none_existent_address)
    
              cy.log('Ввод краткой информации об организации')
              cy.get('.form-area')
              .type(data.info_org)
    
              cy.log('Клик по кнопке добавить')
              cy.get('.create-company-form__description-block > .button')
              .click()
          
                 
    })
  })
})



describe('Добавление роли Работодателя (Негативная) - Существующая/Краткое описание', () => {
  it('Auth test', () => {
    cy.fixture('cypressTest').then(data => { 
      cy.log('Переход на страницу авторизации')
      cy.visit(data.auth_url)

      cy.log('Ввод существующего логина')
      cy.get('.form-input--text')
          .type(data.login)

       cy.log('Ввод существующего пароля')
      cy.get('.form-input--password')
          .type(data.password)
        
       cy.log('Клик по кнопке войти')
      cy.get(':nth-child(3) > .button')
          .click()

          cy.log('Клик по кнопке выбрать роль')
          cy.get('.page-nav__role-block > .button')
              .click()

              cy.log('Клик по кнопке выбрать роль Коммерческой организации')
              cy.get('.select-role-form > :nth-child(1)')
                  .click()
    
              cy.log('Выбор создания нового личного кабинета')
              cy.get('.variants-company > :nth-child(2)')
              .click()
    
              cy.log('Ввод название организации')
              cy.get(':nth-child(1) > .form-control--medium > .form-input--text')
              .type(data.name_org_com)
    
              cy.log('Ввод адреса организации')
              cy.get(':nth-child(2) > .form-control--medium > .form-input--text')
              .type(data.address_org_com)
    
              cy.log('Ввод краткой информации об организации')
              cy.get('.form-area')
              .type(data.none_existent_info)
    
              cy.log('Клик по кнопке добавить')
              cy.get('.create-company-form__description-block > .button')
              .click()
    })
  })
})
