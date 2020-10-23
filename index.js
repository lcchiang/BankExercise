// setup server
const express = require('express');
const app     = express();
const low     = require('lowdb');
const fs      = require('lowdb/adapters/FileSync');
const adapter = new fs('db.json');
const db      = low(adapter);


// setup directory used to serve static files
app.use(express.static('public'));

// setup data store
db.defaults({ accounts: []}).write();

// required data store structure
// YOUR CODE
/*
{ 
    accounts:[
        {name        : '',
         email       : '',
         balance     : 0,
         password    : '',
         transactions: []}
    ] 
}
*/

app.get('/account/create/:name/:email/:password', function (req, res) {

    // YOUR CODE
    var accounts = {
        "name" : req.params.name,
        "email" : req.params.email,
        "balance" : 0,
        "password" : req.params.password,
        "transactions" : []
    };
    db.get('accounts').push(accounts).write();
    console.log('Success');
    res.send('Success')
    
    
    // Create account route
    // return success or failure string
});

app.get('/account/login/:email/:password', function (req, res) {

    // YOUR CODE
    // Login user - confirm credentials
    // If success, return account object    
    // If fail, return null
    var input_pass = req.params.password;

    var current_accs = db.get('accounts').find({email: req.params.email}).value();

    if (current_accs.password == input_pass) {
        res.send(current_accs);
        console.log(current_accs);
    }
    else {
        console.log('failed');
        res.sendStatus(400)
    }
});

app.get('/account/get/:email', function (req, res) {

    // YOUR CODE
    // Return account based on email
    var account = db.get('accounts').find({email: req.params.email}).value();
    console.log(account.balance);
    res.send({"result" : account.balance});
});

app.get('/account/deposit/:email/:amount', function (req, res) {

    // YOUR CODE
    // Deposit amount for email
    // return success or failure string
    var deposit = req.params.amount;

    var current_accs = db.get('accounts').find({email: req.params.email}).value();
    current_accs.balance = current_accs.balance + parseFloat(deposit);
    console.log(current_accs);

    var new_transaction = {
        'deposit' : deposit
    }
    var transaction = current_accs.transactions
    transaction.push(new_transaction)
    console.log(new_transaction)
    db.get('accounts').find({email: req.params.email}).assign(current_accs).write();
    res.send('Success');

});

app.get('/account/withdraw/:email/:amount', function (req, res) {

    // YOUR CODE
    // Withdraw amount for email
    // return success or failure string
    var withdraw = req.params.amount;

    var current_accs = db.get('accounts').find({email: req.params.email}).value();
    current_accs.balance = current_accs.balance - parseFloat(withdraw);
    console.log(current_accs.balance);

    var new_transaction = {
        'withdraw' : withdraw
    }
    var transaction = current_accs.transactions
    transaction.push(new_transaction)

    db.get('accounts').find({email: req.params.email}).assign(current_accs).write();
    res.send('Success');
});

app.get('/account/transactions/:email', function (req, res) {

    // YOUR CODE
    // Return all transactions for account
    var email = req.params.email

    var current_accs = db.get('accounts').find({email: req.params.email}).value();
    console.log(current_accs.transactions);
    res.send(current_accs.transactions)
});

app.get('/account/all', function (req, res) {

    // YOUR CODE
    // Return data for all accounts
    var all_accounts = db.get('accounts');
    console.log(all_accounts);
    res.send(all_accounts);
});

app.listen(3001, function(){console.log('Running on port 3000')})
