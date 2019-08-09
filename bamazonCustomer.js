
var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "Ilgeneric12!",
    database: "bamazonDB"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    // afterConnection();
    start();
});

function start() {

    //console.log('function start() was called')
    //console.log('list everything that is for sale')

    //prints the items for sale and their details
    //res is your object
    connection.query('SELECT * FROM products', function (err, res) {

        console.log('connection query was called')
        if (err) throw err;

        console.log('BAMAZON BAMAZON BAMAZON')

        for (var i = 0; i < res.length; i++) {
            console.log("ID: " + res[i].item_id + " | " + "Name: " + res[i].product_name + " | " + "dept: " + res[i].department_name + " | " + "price: " + res[i].price + " | " + "stock quantity: " + res[i].stock_quantity);
            console.log('+++++++++++++++++++++++++++++++++++++')
        }

        //     })
        // }


        inquirer.prompt([
            {
                type: "input",
                name: "id",
                message: "What is the ID of the product you would like to purchase?",
                validate: function (value) {
                    //console.log(value);
                    //console.log('test one')
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
            //console.log('test two')
            //console.log(answer)
            //console.log(answer.id)
            //console.log(answer.qty)
            var whatToBuy = (answer.id) - 1;   // this is going to decrement the item
            var howMuchToBuy = parseInt(answer.qty);
            var grandTotal = parseFloat(((res[whatToBuy].price) * howMuchToBuy).toFixed(2));

            // checks to see if the supply of the item sufficient?
            if (res[whatToBuy].stock_quantity >= howMuchToBuy) {
                //after purchase, updates quantity in products
                connection.query("UPDATE products SET ? WHERE ?", [
                    { stock_quantity: (res[whatToBuy].stock_quantity - howMuchToBuy) },
                    { item_id: answer.id }
                ], function (err, result) {
                    if (err) throw err;
                    console.log("Success! Your total is $" + grandTotal.toFixed(2) + ". A Bamazon Drone will deliever your items!");
                });


                //console.log('testing for departments ')
                connection.query("SELECT * FROM Departments", function (err, deptRes) {
                    // console.log(deptRes)
                    if (err) throw err;
                    //var index;
                    var index = 0;
                    //console.log(index)
                    // console.log(deptRes.length)
                    for (var i = 0; i < deptRes.length; i++) {
                        if (deptRes[i].DepartmentName === res[whatToBuy].DepartmentName) {
                            index = i;
                        }
                    }

                    //updates totalSales in departments table

                    // console.log('testing for total sales ')
                    //  console.log("Index:", index);
                    // console.log(deptRes)
                    connection.query("UPDATE Departments SET ? WHERE ?", [
                        { TotalSales: deptRes[index].TotalSales + grandTotal },
                        { DepartmentName: res[whatToBuy].DepartmentName }
                    ], function (err, deptRes) {
                        if (err) throw err;
                        //console.log("Updated Dept Sales.");

                    });
                });

            } else {
                console.log("Sorry, there's not enough in stock!");
            }

        })

    })

}



//worked w/ tutor to connect to database
// use mysql;
// update user set authentication_string = PASSWORD('') where User = 'root';
// flush privileges;
