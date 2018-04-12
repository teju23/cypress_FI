describe('AdminPage', function () {
  it('.should() - assert that merchant and coins are available', function () {
    cy.merchantsPage();//opens admin page and then list of merchants
   
  });
  it('.should() - assert that the coins',function(){
    cy.coinsList();// url: /coins(adds and deletes coin and diplays list of coins)
   });
});