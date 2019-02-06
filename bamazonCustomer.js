const mysql = require("mysql");
const inquirer = require("inquirer");
const consoleTable = require("console.table");
require("dotenv").config();


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
    .prompt([
      {
      name: "itemID",
      message: "Enter the product's ID you're interested in.",
      }, 
      {
      name: "units",
      message: "How many units would you like to purchase?",
      validate: function(a){
        if(a.itemID.stock_quantity < a.units){
          console.log("The inventory shows less than the amount you placed. You must start over ");
          startPrompt();
        };
        // return !NaN(a);
      }
      }]).then(function (res) {
      // let query = "SELECT item_id FROM products WHERE ?";
      // connection.query(query, {product_name:res.product_name})
      console.log(res.product_name, res.units);
    });
  })
};


function checkAmount(){

  connection.query("SELECT item_id, sotkc_quantity FROM products WHERE ?", )

}




