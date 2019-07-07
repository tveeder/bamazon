
var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "",
    database: "bamazonDB"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    // afterConnection();
    // start();
});

// worked with tutor to connect to database
//  connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
//     if (error) throw error;
//     console.log('The solution is: ', results[0].solution);
// });

// function afterConnection() {
//     connection.query("SELECT * FROM products", function (err, res) {
//         if (err) throw err;
//         console.log(res);
//         connection.end();
//     });
// }

//worked w/ tutor to connect to database
// use mysql;
// update user set authentication_string = PASSWORD('') where User = 'root';
// flush privileges;

function start() {

    console.log('function start() was called')
    console.log('list everything that is for sale')

    //prints the items for sale and their details
    connection.query('SELECT * FROM products', function (err, res) {

        console.log('connection query was called')
        if (err) throw err;

        console.log('BAMAZON BAMAZON BAMAZON')

        for (var i = 0; i < res.length; i++) {
            console.log("ID: " + res[i].ItemID + " | " + "Product: " + res[i].ProductName + " | " + "Department: " + res[i].DepartmentName + " | " + "Price: " + res[i].Price + " | " + "QTY: " + res[i].StockQuantity);
            console.log('+++++++++++++++++++++++++++++++++++++')
        }

    })
}

start();

inquirer.prompt([
    {
        type: "input",
        name: "id",
        message: "What is the ID of the product you would like to purchase?",
        validate: function (value) {
            if (isNaN(value) == false && parseInt(value) <= res.length && parseInt(value) > 0) {
                return true;
            } else {
                return false;
            }
        }
    },

    {
        type: "input",
        name: "qty",
        message: "How much would you like to purchase?",

        validate: function (value) {
            if (isNaN(value)) {
                return false;
            } else {
                return true;
            }
        }
    },
]).then(function (answer) {
    var whatToBuy = (answer.id) - 1;   // this is going to decrement the item
    var howMuchToBuy = parseInt(answer.qty);
    var grandTotal = parseFloat(((res[whatToBuy].Price) * howMuchToBuy).toFixed(2));

    // is the supply of the item sufficient????????????
    if (res[whatToBuy].StockQuantity >= howMuchToBuy) {
        //after purchase, updates quantity in Products
        connection.query("UPDATE Products SET ? WHERE ?", [
            { StockQuantity: (res[whatToBuy].StockQuantity - howMuchToBuy) },
            { ItemID: answer.id }
        ], function (err, result) {
            if (err) throw err;
            console.log("Success! Your total is $" + grandTotal.toFixed(2) + ". A Bamazon Drone will deliever your items");
        });
    };
});


console.log("\nID: 55444 " + " Department: sporting goods " + " Price: 8.95 " + " QTY: 65 ");
console.log('+++++++++++++++++++++++++++++++++++++')
console.log("\nID: 877 " + " Department: hockey " + " Price: 11.35 " + " QTY: 99 ");
console.log('+++++++++++++++++++++++++++++++++++++')
console.log("\nID: 33333 " + " Department: baseball " + " Price: 21.33 " + " QTY: 33 ");
console.log('+++++++++++++++++++++++++++++++++++++')
console.log("\nID: 3434 " + " Department: sporting goods " + " Price: 23.5 " + " QTY: 625 ");
console.log('+++++++++++++++++++++++++++++++++++++')
