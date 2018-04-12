describe('MerchantSignup', function(){
  it('Allows merchant to signup',function(){
    cy.signup('john.doe@email.com', 'qwerty123');
  });
  it('Donot allow merchant to signup as password is invalid', function () {
    cy.signup('john.doe@email.com', 'qwerty12');
    cy.get(".alert")
    console.log("enter correct credentials")
  });
  it('Donot allow merchant to signup as password is invalid', function () {
    cy.signup('john.doe@email.com', 'Qwerty');
    cy.get(".alert")
    console.log("enter correct credentials")
  });
  it('Donot allow merchant to signup as email is invalid', function () {
    cy.signup('john.doe.com', 'Qwerty');
    cy.get(".alert")
    console.log("enter correct credentials")
  });
  it('Donot allow merchant to signup as email is invalid', function () {
    cy.signup('john.doe@gmail', 'Qwerty');
    cy.get(".alert")
    console.log("enter correct credentials")
  });
  it('Donot allow merchant to signup as it has invalid input', function () {
    cy.signup(' ', ' ');
    cy.get(".alert")
    console.log("enter correct credentials")
  });


/* 
cy.get("iframe").then(function($iframe){
  // query into the iframe
  var b = $iframe.contents().find("body")

  // you can work with this element here but it cannot
  // be returned

  var evt = new Event(...)
  b.dispatchEvent(evt)

  return null
})
*/
it('Allows to confirm the mail',function(){
  cy.visit('http://localhost:1080');
 cy.get('.email-list').find('a').first().click();
  const a = cy.get('.email-content .ng-scope').last();
  console.log(a);
  debugger;
  // .iframe().find('.b').should('contain', 'Signup');
  
//  cy.get(".email-container .ng-scope iframe").first().debug().then(function ($iframe) {
//   // cy.get('.preview-iframe .panel-html');
//   // var c = $iframe.its('innerText');;
//    var a = $iframe.contents().find("body");
  
//    console.log(a);
//    cy.get(a .b);
//    var evt = new Event(click())
//    a.dispatchEvent(evt)
//    return null

//  })
//  cy.get(':nth-child(1) > .dropdown-trigger').click();
//  cy.get(':nth-child(1) > .dropdown-menu > :nth-child(2) > a').click();
//  var z = cy.get('.plain-text').should(($div) => {
//        const text = $div.text();
//        console.log(text);
//       })

//  cy.contains('Your url link is');
//  console.log(z);
 
});

it('Allows merchant to login and create coupon',function(){
  
  cy.login('john.doe@email.com', 'Qwerty12');
  cy.contains('This is the home page.');
  cy.createCoupon(1000);
});
it('Donot allow merchant for wrong Password',function(){
  cy.login('jhondeo@email.com','QWerty21');
  console.log("wrong Password");
});

  it('Donot allow merchant for wrong mail address', function () {
    cy.login('jhondeo@.com', 'QWerty21');
    console.log("wrong email");
  });

  it('Donot allow merchant for wrong mail address(.com)', function () {
    cy.login('jhondeo@email', 'QWerty21');
    console.log("wrong email");
  });
  it('Donot allow merchant for new mail address', function () {
    cy.login('jhondeo@mail.com', 'QWerty21');
    console.log("wrong email");
  });

});
