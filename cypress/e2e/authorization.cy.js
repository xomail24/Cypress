describe('Проверка авторизации', function () {


    it('верный логин и верный пароль', function () {
            cy.visit('https://login.qa.studio/');
            cy.get('#mail').type('german@dolnikov.ru') // ввели правильный логин в поле
            cy.get('#pass').type('iLoveqastudio1') // ввели правильный пароль в поле
            cy.get('#loginButton').click(); // нажали войти
            cy.get('#messageHeader').contains('Авторизация прошла успешно'); // элемент содержит текст
            cy.get('#messageHeader').should('be.visible'); // текст виден пользователю
            cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // крестик виден пользователю
               })
  
    it('верный логин и неверный пароль', function () {
            cy.visit('https://login.qa.studio/');
            cy.get('#mail').type('german@dolnikov.ru') // ввели правильный логин в поле
            cy.get('#pass').type('123456') // ввели неправильный пароль в поле
            cy.get('#loginButton').click(); // нажали войти
            cy.get('#messageHeader').contains('Такого логина или пароля нет'); // элемент содержит текст
            cy.get('#messageHeader').should('be.visible'); // текст виден пользователю
            cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // крестик виден пользователю
                }) 
                   
    it('неверный логин и верный пароль', function () {
            cy.visit('https://login.qa.studio/');
            cy.get('#mail').type('user@mail.ru') // ввели неправильный логин в поле
            cy.get('#pass').type('iLoveqastudio1') // ввели правильный пароль в поле
            cy.get('#loginButton').click(); // нажали войти
            cy.get('#messageHeader').contains('Такого логина или пароля нет'); // элемент содержит текст
            cy.get('#messageHeader').should('be.visible'); // текст виден пользователю
            cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // крестик виден пользователю
                })     
                     
    it('проверка на приведение к строчным буквам в логине', function () {
            cy.visit('https://login.qa.studio/');
            cy.get('#mail').type('GerMan@Dolnikov.ru') // ввели логин с заглавными буквами в поле
            cy.get('#pass').type('iLoveqastudio1') // ввели правильный пароль в поле
            cy.get('#loginButton').click(); // нажали войти
            cy.get('#messageHeader').contains('Авторизация прошла успешно'); // элемент содержит текст
            cy.get('#messageHeader').should('be.visible'); // текст виден пользователю
            cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // крестик виден пользователю
               }) 

    it('ввод логина без @', function () {
           cy.visit('https://login.qa.studio/');
           cy.get('#mail').type('GerManDolnikov.ru') // ввели логин без @
           cy.get('#pass').type('iLoveqastudio1') // ввели правильный пароль в поле
           cy.get('#loginButton').click(); // нажали войти
           cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // элемент содержит текст
           cy.get('#messageHeader').should('be.visible'); // текст виден пользователю
           cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // крестик виден пользователю
               }) 
    
    it('восстановление пароля', function () {
            cy.visit('https://login.qa.studio/');
            cy.get('#forgotEmailButton').click(); // нажали забыли пароль
            cy.get('#mailForgot').type('user@mail.ru') // ввели email в поле
            cy.get('#restoreEmailButton').click(); // нажали кнопку Отправить код
            cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // элемент содержит текст
            cy.get('#messageHeader').should('be.visible'); // текст виден пользователю
            cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // крестик виден пользователю
                }) 

    })
    
    


