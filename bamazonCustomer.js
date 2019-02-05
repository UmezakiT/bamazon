const mysql = require("mysql");
const inquirer = require("inquirer");
const consoleTable = require("console.table");
// require("dotenv").config();
require('dotenv').config();

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "mko0nji9",
  database: "bamazondb"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("You are connected");
  displayItems()
});

function displayItems(){
  connection.query("SELECT * FROM products", function(err,res){
    if(err) throw err;
    // for (var i = 0; i < res.length; i++) {
    //   console.log(res[i].item_id + " | " + res[i].product_name + " | " + res[i].department_name + " | " + res[i].price + " | " + res[i].stockquantity);
    // }
    console.table(res);
    console.log("-----------------------------------");

    startPrompt();
  });

};

function startPrompt() {
  connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;

  inquirer
    .prompt([{
      name: "itemID",
      message: "Enter the product's ID you're interested in.",
    }, {
      name: "units",
      message: "How many units would you like to purchase?"
    }]).then(function (res) {
      console.log(res.itemID, res.units);
    });
  })
};



