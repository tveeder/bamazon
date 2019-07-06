

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

function afterConnection() {
    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;
        console.log(res);
        connection.end();
    });
}

//worked w/ tutor to connect to database
// use mysql;

// update user set authentication_string = PASSWORD('') where User = 'root';

// flush privileges;

function start() {

    console.log('function start was called')
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

//start();

inquirer.prompt([
    {
        type: "input",
        name: "id",
        message: "What is the ID of the product you would like to purchase?",
        // validate: function (value) {
        //     if (isNaN(value) == false && parseInt(value) <= res.length && parseInt(value) > 0) {
        //         return true;
        //     } else {
        //         return false;
        //     }
    }])



