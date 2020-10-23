function create() {
    // -------------------------------------
    //  YOUR CODE
    //  Create user account on server
    // -------------------------------------
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value; 
    //var url = '/account/create/' + name + '/' + email + '/' + password;
    var url = 'http://165.227.200.69:3001/account/create/' + name + '/' + email + '/' + password;

    superagent
        .get(url)
        .end(function(err, res){
            if(err){
                console.log(err);
                document.getElementById("target").innerHTML = "Error. Please Fill Out All Cells Correctly.";
            }
            else{
                console.log('Account Created!');
                document.getElementById("target").innerHTML = "Account successfully created!";
            }
        });
    
};

function login() {
    // -------------------------------------
    //  YOUR CODE
    //  Confirm credentials on server
    // -------------------------------------
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    //var url = '/account/login/' + email + '/' + password;
    var url = 'http://165.227.200.69:3001/account/login/' + email + '/' + password;

    superagent
        .get(url)
        .end(function(err, res){
            if(err){
                console.log(err);
                document.getElementById("target").innerHTML = "User Authentication Failed!";
            }
            else{
                console.log('User Verified!');
                document.getElementById("target").innerHTML = "User Logged In!";
            }
        });
};

function deposit() {
    // -------------------------------------
    //  YOUR CODE
    //  Deposit funds user funds on server
    // -------------------------------------
    var email = document.getElementById('email').value;
    var dep_amount = document.getElementById('amount').value;
    //var url = '/account/deposit/' + email + '/' + dep_amount;
    var url = 'http://165.227.200.69:3001/account/deposit/' + email + '/' + dep_amount;

    superagent
        .get(url)
        .end(function(err, res){
            if(err){
                console.log(err);
                document.getElementById("target").innerHTML = "Error. Please Try Again.";
            }
            else{
                console.log('Deposited!');
                document.getElementById("target").innerHTML = "Deposit Successful!";
            }
        });
};

function withdraw() {
    // -------------------------------------
    //  YOUR CODE
    //  Withdraw funds user funds on server
    // -------------------------------------
    var email = document.getElementById('email').value;
    var with_amount = document.getElementById('amount').value;
    //var url = '/account/withdraw/' + email + '/' + with_amount;
    var url = 'http://165.227.200.69:3001/account/withdraw/' + email + '/' + with_amount;

    superagent
        .get(url)
        .end(function(err, res){
            if(err){
                console.log(err);
                document.getElementById("target").innerHTML = "Error. Please Try Again.";
            }
            else{
                console.log('Withdrew!');
                document.getElementById("target").innerHTML = "Withdraw Successful!";
            }
        });
};

function transactions() {
    // -------------------------------------
    //  YOUR CODE
    //  Get all user transactions
    // -------------------------------------
    var email = document.getElementById('email').value;
    //var url = '/account/transactions/' + email;
    var url = 'http://165.227.200.69:3001/account/transactions/' + email;

    superagent
        .get(url)
        .end(function(err, res){
            if(err){
                console.log(err);
                document.getElementById("target").innerHTML = "Error. Please Try Again.";
            }
            else{
                console.log('Displayed Transaction!');
                document.getElementById("target").innerHTML = "Displaying Transactions:";
                document.getElementById("data").innerHTML = JSON.stringify(res.body)
            }
        });

};

function balance() {
    // -------------------------------------
    //  YOUR CODE
    //  Get user balance
    // -------------------------------------
    var email = document.getElementById('email').value;
    //var url = '/account/get/' + email;
    var url = 'http://165.227.200.69:3001/account/get/' + email;
    
    superagent
        .get(url)
        .end(function(err, res){
            if(err){
                console.log(err);
                document.getElementById("target").innerHTML = "Error. Please Try Again.";
            }
            else{
                console.log('Displayed Balance!');
                document.getElementById("target").innerHTML = "Displaying Balance:";
                document.getElementById("data").innerHTML = JSON.stringify(res.body.result)
            }
        });

};

function allData() {
    // -------------------------------------
    //  YOUR CODE
    //  Get all data
    // -------------------------------------
    //var url = '/account/all'
    var url = 'http://165.227.200.69:3001/account/all'

    superagent
        .get(url)
        .end(function(err, res){
            if(err){
                console.log(err);
                document.getElementById("target").innerHTML = "Error. Please Try Again.";
            }
            else{
                console.log('Displayed All Accounts!');
                document.getElementById("target").innerHTML = "Displaying All Accounts:";
                document.getElementById("data").innerHTML = JSON.stringify(res.body);
            }
        });
};

