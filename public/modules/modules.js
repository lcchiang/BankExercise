var ui = {};

ui.navigation = `
<div class="card text-center">
<div class="card-header">
  <ul class="nav nav-tabs card-header-tabs">
    <li class="nav-item">
      <a class="nav-link active" href="#" onclick = "defaultModule()"> Luke'sBank</a>
    </li>
    <li class="nav-item">
      <a class="nav-link disabled" href="#" onclick = "loadCreateAccount()">Create Account</a>
    </li>
    <li class="nav-item">
      <a class="nav-link disabled" href="#" onclick = "loadLogin()">Login</a>
    </li>
    <li class="nav-item">
        <a class="nav-link disabled" href="#" onclick = "loadDeposit()">Deposit</a>
    </li>
    <li class="nav-item">
        <a class="nav-link disabled" href="#" onclick = "loadWithdraw()">Withdraw</a>
    </li>
    <li class="nav-item">
        <a class="nav-link disabled" href="#" onclick = "loadTransactions()">Transaction</a>
    </li>
    <li class="nav-item">
        <a class="nav-link disabled" href="#" onclick = "loadBalance()">Balance</a>
    </li>
    <li class="nav-item">
        <a class="nav-link disabled" href="#" onclick = "loadAllData()">All Data</a>
    </li>
  </ul>
</div>
<div class="card-body">
  <h5 class="card-title">Welcome to Luke's Bank</h5>
  <p class="card-text">You can move around using the navigation bar</p>
  <img src="bank.png" width = "300" alt="BadBank">
</div>
</div> 
`;

ui.createAccount = `
<div class="card text-center">
<div class="card-header">
  <ul class="nav nav-tabs card-header-tabs">
    <li class="nav-item">
      <a class="nav-link disabled" href="#" onclick = "defaultModule()" >Luke'sBank</a>
    </li>
    <li class="nav-item">
      <a class="nav-link active" href="#" onclick = "loadCreateAccount()">Create Account</a>
    </li>
    <li class="nav-item">
      <a class="nav-link disabled" href="#" onclick = "loadLogin()">Login</a>
    </li>
    <li class="nav-item">
        <a class="nav-link disabled" href="#" onclick = "loadDeposit()">Deposit</a>
    </li>
    <li class="nav-item">
        <a class="nav-link disabled" href="#" onclick = "loadWithdraw()">Withdraw</a>
    </li>
    <li class="nav-item">
        <a class="nav-link disabled" href="#" onclick = "loadTransactions()">Transaction</a>
    </li>
    <li class="nav-item">
        <a class="nav-link disabled" href="#" onclick = "loadBalance()">Balance</a>
    </li>
    <li class="nav-item">
        <a class="nav-link disabled" href="#" onclick = "loadAllData()">All Data</a>
    </li>
  </ul>
</div>
<div class="card bg-light mb-3" style="max-width: 20rem;">
  <div class="card-header">Create Account</div>
  <div class="card-body">
    <form action="/action_page.php">
        <label for="fname">Name:</label>
        <input type="text" id="name" name="name"><br><br>
        <label for="lname">Email:</label>
        <input type="text" id="email" name="email"><br><br>
        <label for="lname">Password:</label>
        <input type="password" id="password" name="password"><br><br>
    <input type="button" value="Create Account" onclick = "create()">
</form>
</div>
</div>  
`;

ui.login = `
<div class="card text-center">
<div class="card-header">
  <ul class="nav nav-tabs card-header-tabs">
    <li class="nav-item">
      <a class="nav-link disabled" href="#" onclick = "defaultModule()" >Luke'sBank</a>
    </li>
    <li class="nav-item">
      <a class="nav-link disabled" href="#" onclick = "loadCreateAccount()">Create Account</a>
    </li>
    <li class="nav-item">
      <a class="nav-link active" href="#" onclick = "loadLogin()">Login</a>
    </li>
    <li class="nav-item">
        <a class="nav-link disabled" href="#" onclick = "loadDeposit()">Deposit</a>
    </li>
    <li class="nav-item">
        <a class="nav-link disabled" href="#" onclick = "loadWithdraw()">Withdraw</a>
    </li>
    <li class="nav-item">
        <a class="nav-link disabled" href="#" onclick = "loadTransactions()">Transaction</a>
    </li>
    <li class="nav-item">
        <a class="nav-link disabled" href="#" onclick = "loadBalance()">Balance</a>
    </li>
    <li class="nav-item">
        <a class="nav-link disabled" href="#" onclick = "loadAllData()">All Data</a>
    </li>
  </ul>
</div>
<div class="card bg-light mb-3" style="max-width: 20rem;">
  <div class="card-header">Login</div>
  <div class="card-body">
    <form action="/action_page.php">
        <label for="fname">Email:</label>
        <input type="text" id="email" name="email"><br><br>
        <label for="lname">Password:</label>
        <input type="password" id="password" name="password"><br><br>
    <input type="button" value="Login" onclick = "login()">
</form>
</div>
</div> 
`;

ui.deposit = `
<div class="card text-center">
<div class="card-header">
  <ul class="nav nav-tabs card-header-tabs">
    <li class="nav-item">
      <a class="nav-link disabled" href="#" onclick = "defaultModule()" >Luke'sBank</a>
    </li>
    <li class="nav-item">
      <a class="nav-link disabled" href="#" onclick = "loadCreateAccount()">Create Account</a>
    </li>
    <li class="nav-item">
      <a class="nav-link disabled" href="#" onclick = "loadLogin()">Login</a>
    </li>
    <li class="nav-item">
        <a class="nav-link active" href="#" onclick = "loadDeposit()">Deposit</a>
    </li>
    <li class="nav-item">
        <a class="nav-link disabled" href="#" onclick = "loadWithdraw()">Withdraw</a>
    </li>
    <li class="nav-item">
        <a class="nav-link disabled" href="#" onclick = "loadTransactions()">Transaction</a>
    </li>
    <li class="nav-item">
        <a class="nav-link disabled" href="#" onclick = "loadBalance()">Balance</a>
    </li>
    <li class="nav-item">
        <a class="nav-link disabled" href="#" onclick = "loadAllData()">All Data</a>
    </li>
  </ul>
</div>
<div class="card bg-light mb-3" style="max-width: 20rem;">
  <div class="card-header">Deposit</div>
  <div class="card-body">
    <form action="/action_page.php">
        <label for="fname">Email:</label>
        <input type="text" id="email" name="email"><br><br>
        <label for="lname">Amount:</label>
        <input type="text" id="amount" name="amount"><br><br>
    <input type="button" value="Deposit" onclick = "deposit()">
</form>
</div>
</div> 
`;

ui.withdraw = `
<div class="card text-center">
<div class="card-header">
  <ul class="nav nav-tabs card-header-tabs">
    <li class="nav-item">
      <a class="nav-link disabled" href="#" onclick = "defaultModule()" >Luke'sBank</a>
    </li>
    <li class="nav-item">
      <a class="nav-link disabled" href="#" onclick = "loadCreateAccount()">Create Account</a>
    </li>
    <li class="nav-item">
      <a class="nav-link disabled" href="#" onclick = "loadLogin()">Login</a>
    </li>
    <li class="nav-item">
        <a class="nav-link disabled" href="#" onclick = "loadDeposit()">Deposit</a>
    </li>
    <li class="nav-item">
        <a class="nav-link active" href="#" onclick = "loadWithdraw()">Withdraw</a>
    </li>
    <li class="nav-item">
        <a class="nav-link disabled" href="#" onclick = "loadTransactions()">Transaction</a>
    </li>
    <li class="nav-item">
        <a class="nav-link disabled" href="#" onclick = "loadBalance()">Balance</a>
    </li>
    <li class="nav-item">
        <a class="nav-link disabled" href="#" onclick = "loadAllData()">All Data</a>
    </li>
  </ul>
</div>
<div class="card bg-light mb-3" style="max-width: 20rem;">
  <div class="card-header">Withdraw</div>
  <div class="card-body">
    <form action="/action_page.php">
        <label for="fname">Email:</label>
        <input type="text" id="email" name="email"><br><br>
        <label for="lname">Amount:</label>
        <input type="text" id="amount" name="amount"><br><br>
    <input type="button" value="Withdraw" onclick = "withdraw()">
</form>
</div> 
`;

ui.transactions = `
<div class="card text-center">
<div class="card-header">
  <ul class="nav nav-tabs card-header-tabs">
    <li class="nav-item">
      <a class="nav-link disabled" href="#" onclick = "defaultModule()" >Luke'sBank</a>
    </li>
    <li class="nav-item">
      <a class="nav-link disabled" href="#" onclick = "loadCreateAccount()">Create Account</a>
    </li>
    <li class="nav-item">
      <a class="nav-link disabled" href="#" onclick = "loadLogin()">Login</a>
    </li>
    <li class="nav-item">
        <a class="nav-link disabled" href="#" onclick = "loadDeposit()">Deposit</a>
    </li>
    <li class="nav-item">
        <a class="nav-link disabled" href="#" onclick = "loadWithdraw()">Withdraw</a>
    </li>
    <li class="nav-item">
        <a class="nav-link active" href="#" onclick = "loadTransactions()">Transaction</a>
    </li>
    <li class="nav-item">
        <a class="nav-link disabled" href="#" onclick = "loadBalance()">Balance</a>
    </li>
    <li class="nav-item">
        <a class="nav-link disabled" href="#" onclick = "loadAllData()">All Data</a>
    </li>
  </ul>
</div>
<div class="card bg-light mb-3" style="max-width: 20rem;">
  <div class="card-header">Transactions</div>
  <div class="card-body">
    <form action="/action_page.php">
        <label for="fname">Email:</label>
        <input type="text" id="email" name="email"><br><br>
    <input type="button" value="Show Transactions" onclick = "transactions()">
</form>
</div> 
`;

ui.balance = `
<div class="card text-center">
<div class="card-header">
  <ul class="nav nav-tabs card-header-tabs">
    <li class="nav-item">
      <a class="nav-link disabled" href="#" onclick = "defaultModule()" >Luke'sBank</a>
    </li>
    <li class="nav-item">
      <a class="nav-link disabled" href="#" onclick = "loadCreateAccount()">Create Account</a>
    </li>
    <li class="nav-item">
      <a class="nav-link disabled" href="#" onclick = "loadLogin()">Login</a>
    </li>
    <li class="nav-item">
        <a class="nav-link disabled" href="#" onclick = "loadDeposit()">Deposit</a>
    </li>
    <li class="nav-item">
        <a class="nav-link disabled" href="#" onclick = "loadWithdraw()">Withdraw</a>
    </li>
    <li class="nav-item">
        <a class="nav-link disabled" href="#" onclick = "loadTransactions()">Transaction</a>
    </li>
    <li class="nav-item">
        <a class="nav-link active" href="#" onclick = "loadBalance()">Balance</a>
    </li>
    <li class="nav-item">
        <a class="nav-link disabled" href="#" onclick = "loadAllData()">All Data</a>
    </li>
  </ul>
</div>
<div class="card bg-light mb-3" style="max-width: 20rem;">
  <div class="card-header">Balance</div>
  <div class="card-body">
    <form action="/action_page.php">
        <label for="fname">Email:</label>
        <input type="text" id="email" name="email"><br><br>
    <input type="button" value="Show Balance" onclick = "balance()">
</form>
</div> 
`;

ui.default = `
<div class="card text-center">
<div class="card-header">
  <ul class="nav nav-tabs card-header-tabs">
    <li class="nav-item">
      <a class="nav-link active" href="#" onclick = "defaultModule()" >Luke'sBank</a>
    </li>
    <li class="nav-item">
      <a class="nav-link disabled" href="#" onclick = "loadCreateAccount()">Create Account</a>
    </li>
    <li class="nav-item">
      <a class="nav-link disabled" href="#" onclick = "loadLogin()">Login</a>
    </li>
    <li class="nav-item">
        <a class="nav-link disabled" href="#" onclick = "loadDeposit()">Deposit</a>
    </li>
    <li class="nav-item">
        <a class="nav-link disabled" href="#" onclick = "loadWithdraw()">Withdraw</a>
    </li>
    <li class="nav-item">
        <a class="nav-link disabled" href="#" onclick = "loadTransactions()">Transaction</a>
    </li>
    <li class="nav-item">
        <a class="nav-link disabled" href="#" onclick = "loadBalance()">Balance</a>
    </li>
    <li class="nav-item">
        <a class="nav-link disabled" href="#" onclick = "loadAllData()">All Data</a>
    </li>
  </ul>
</div>
<div class="card-body">
  <h5 class="card-title">Welcome to Luke's Bank</h5>
  <p class="card-text">You can move around using the navigation bar</p>
  <img src="bank.png" width = "300" alt="BadBank">
</div>
</div> 
`;

ui.allData = `
<div class="card text-center">
<div class="card-header">
  <ul class="nav nav-tabs card-header-tabs">
    <li class="nav-item">
      <a class="nav-link disabled" href="#" onclick = "defaultModule()" >Luke'sBank</a>
    </li>
    <li class="nav-item">
      <a class="nav-link disabled" href="#" onclick = "loadCreateAccount()">Create Account</a>
    </li>
    <li class="nav-item">
      <a class="nav-link disabled" href="#" onclick = "loadLogin()">Login</a>
    </li>
    <li class="nav-item">
        <a class="nav-link disabled" href="#" onclick = "loadDeposit()">Deposit</a>
    </li>
    <li class="nav-item">
        <a class="nav-link disabled" href="#" onclick = "loadWithdraw()">Withdraw</a>
    </li>
    <li class="nav-item">
        <a class="nav-link disabled" href="#" onclick = "loadTransactions()">Transaction</a>
    </li>
    <li class="nav-item">
        <a class="nav-link disabled" href="#" onclick = "loadBalance()">Balance</a>
    </li>
    <li class="nav-item">
        <a class="nav-link active" href="#" onclick = "loadAllData()">All Data</a>
    </li>
  </ul>
</div> 
<div class="card-body">
    <h5 class="card-title">All Data in Store</h5>
    <input type="button" value="Show All Data" onclick = "allData()">
</div>
</div> 
`;

var target     = document.getElementById('target');
var navigation = document.getElementById('navigation');
navigation.innerHTML += ui.navigation;



var loadCreateAccount = function(){
    navigation.innerHTML = ui.createAccount;
    target.innerHTML = ''
    data.innerHTML = '';
};

var loadLogin = function(){
    navigation.innerHTML = ui.login;
    target.innerHTML = ''
    data.innerHTML = '';
};

var loadDeposit = function(){
    navigation.innerHTML = ui.deposit;
    target.innerHTML = ''
    data.innerHTML = '';
};

var loadWithdraw = function(){
    navigation.innerHTML = ui.withdraw;
    target.innerHTML = ''
    data.innerHTML = '';
};

var loadTransactions = function(){
    navigation.innerHTML = ui.transactions;
    target.innerHTML = ''
    data.innerHTML = '';
};

var loadBalance = function(){
    navigation.innerHTML = ui.balance;
    target.innerHTML = ''
    data.innerHTML = '';
};

var defaultModule = function(){
    navigation.innerHTML = ui.default;
    target.innerHTML = ''
    data.innerHTML = '';
};

var loadAllData = function(){
    navigation.innerHTML = ui.allData;
    target.innerHTML = ''
    data.innerHTML = '';
};

defaultModule();
