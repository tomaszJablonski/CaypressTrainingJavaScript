/// <reference types = "cypress"/>
it('Assertions', ()=> {
    cy.visit('https://example.cypress.io')
    cy.contains('get').click()
    cy.get('#query-btn')
    //Assercja Implicit
    //1)should-contain - powinien zawierać tekst
    .should('contain','Button')
    //2)should-have - kalsa/id/string itd. powinien mieć dany atrybut
    //have.text,have.html też może być
    .should('have.id','query-btn')
    //3)should-be - powinien być
    /*.should('be.visible') 
      .should('be.selected') 
      .should('be.disabled')
      .should('be.enabled')
      .should('be.focused') to samo co have.focus 
    */
    .should('be.visible')
    .should('be.enabled')
    //4)and - łączenie asercji,zamiast używać should 
    //to wystarczy raz napisać should a potem and
    .should('contain','Button')
    .and('have.id','query-btn')
    .and('be.visible')
    .and('be.enabled')
    //5)should-equal - czyli powinno zawierać
    .invoke('attr','id').should('equal','query-btn')
    
    //Assertion Explicit
    //1)expect - oczekuje true or false
    expect(true).to.be.true
    /* 
    Można używac zmiennych i sprawdzać czy dana wartość się zgadza
    np.
    let name = 'cypress'
    expect(name).to.be.equal('cypress')
    inne wariany
                .to.not.equal()
                .to.be.a('string')
                .to.be.true
                .to.be.false
                .to.be.null
                .to.exist
    */

    //2)assert np. assert.equal 
    //assert.equal(4,5,'NOT EQUAL')
    //czyli czy liczba 4 i 5 nie są równe
    //assert.equal(param,param2,'wiadomość która się wyświetli jeżeli warunek nie zostanie spełniony')
    assert.equal(4,'4','NOT EQUAL')
    /*
    różnica między jednym a drugim jest taka, 
    że w equal porównuje inty ze stringiem i nie ma z tym problemu
    ale w strictEqual dwa różne typy zawsze dadzą ujemny wynik
    assert.strictEqual(4,'4','NOT EQUAL') - zwróci NOT EQUAL
    */
    assert.strictEqual(4,4,'NOT EQUAL')
    /* 
    inne warianty
          .notEqual - 
          assert.notEqual(actual, expected, message) sprawdza, czy dwie wartości nie są równe (z przekształceniem typów).
          assert.notEqual(4, '5', 'Values are equal'); // Przejdzie pomyślnie
          assert.notEqual(4, '4', 'Values are equal'); // Nie przejdzie i wyświetli wiadomość
          
          .strictEqual -
          assert.strictEqual(actual, expected, message) sprawdza, czy dwie wartości są ściśle równe (bez przekształcenia typów).
          assert.strictEqual(4, 4, 'Values are not strictly equal'); // Przejdzie pomyślnie
          assert.strictEqual(4, '4', 'Values are not strictly equal'); // Nie przejdzie i wyświetli wiadomość

          .isAbove -
          assert.isAbove(valueToCheck, valueToBeAbove, message) sprawdza, czy pierwsza wartość jest większa od drugiej.
          assert.isAbove(10, 5, 'Value is not above the expected value'); // Przejdzie pomyślnie
          assert.isAbove(3, 5, 'Value is not above the expected value'); // Nie przejdzie i wyświetli wiadomość

          .isBelow -
          assert.isBelow(valueToCheck, valueToBeBelow, message) sprawdza, czy pierwsza wartość jest mniejsza od drugiej.
          assert.isBelow(3, 5, 'Value is not below the expected value'); // Przejdzie pomyślnie
          assert.isBelow(10, 5, 'Value is not below the expected value'); // Nie przejdzie i wyświetli wiadomość

          .exists - 
          assert.exists(value, message) sprawdza, czy wartość nie jest null ani undefined.
          assert.exists('Hello', 'Value does not exist'); // Przejdzie pomyślnie
          assert.exists(null, 'Value does not exist'); // Nie przejdzie i wyświetli wiadomość

          .notExists - 
          assert.notExists(value, message) sprawdza, czy wartość jest null lub undefined.
          assert.notExists(null, 'Value exists'); // Przejdzie pomyślnie
          assert.notExists('Hello', 'Value exists'); // Nie przejdzie i wyświetli wiadomość

          .istrue - 
          assert.isTrue(value, message) sprawdza, czy wartość jest true.
          assert.isTrue(true, 'Value is not true'); // Przejdzie pomyślnie
          assert.isTrue(false, 'Value is not true'); // Nie przejdzie i wyświetli wiadomość

          .isfalse - 
          assert.isFalse(value, message) sprawdza, czy wartość jest false.
          assert.isFalse(false, 'Value is not false'); // Przejdzie pomyślnie
          assert.isFalse(true, 'Value is not false'); // Nie przejdzie i wyświetli wiadomość

          .isString - 
          assert.isString(value, message) sprawdza, czy wartość jest typu string.
          assert.isString('Hello', 'Value is not a string'); // Przejdzie pomyślnie
          assert.isString(123, 'Value is not a string'); // Nie przejdzie i wyświetli wiadomość

          .isNotString - 
          assert.isNotString(value, message) sprawdza, czy wartość nie jest typu string.
          assert.isNotString(123, 'Value is a string'); // Przejdzie pomyślnie
          assert.isNotString('Hello', 'Value is a string'); // Nie przejdzie i wyświetli wiadomość

          .isNumber - 
          assert.isNumber(value, message) sprawdza, czy wartość jest typu number.
          assert.isNumber(123, 'Value is not a number'); // Przejdzie pomyślnie
          assert.isNumber('Hello', 'Value is not a number'); // Nie przejdzie i wyświetli wiadomość

          .isNotNumber - 
          assert.isNotNumber(value, message) sprawdza, czy wartość nie jest typu number.
          assert.isNotNumber('Hello', 'Value is a number'); // Przejdzie pomyślnie
          assert.isNotNumber(123, 'Value is a number'); // Nie przejdzie i wyświetli wiadomość

    */      
})