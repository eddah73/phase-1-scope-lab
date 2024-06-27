// Write your solution in this file!
var customerName = 'bob';
function upperCaseCustomerName(){
    customerName = customerName.toUpperCase();
    return customerName;
}
// upperCaseCustomerName();
//ommiting const,var,let key word the variable become global
function setBestCustomer(){
     bestCustomer ='not bob';
     return bestCustomer

}
function overwriteBestCustomer(){
    bestCustomer = 'maybe bob';
    return bestCustomer;
}
const  leastFavoriteCustomer = "poor bob";
function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer = "rich bob";
    return leastFavoriteCustomer;

}
