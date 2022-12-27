// select the item
// decide the event on the item
// write function on the event
// identify the values 
// --> e.target.value
// push this value into the array (item)
// sum the array
// substract the sum from the budget
// update the remaining budget --> 

const addbud = ()=>{
    let value = document.getElementById("budget_amount").value
    if(value <= 0){
        alert("Please Input Correct Budget")
    }else{
        let value2 = document.getElementById("budget_display").innerText = value
    }
}

let amount = []

const add = ()=>{
    let itemName = document.getElementById("item_name").value
    let itemPrice = document.getElementById("item_price").value
    
    let table = document.getElementById("table_data");
   
    // Create a row using the inserRow() method and
    // specify the index where you want to add the row
    let row = table.insertRow(-1); // We are adding at the end
 
    // Create table cells
    let c1 = row.insertCell(0);
    let c2 = row.insertCell(1);
 
    // Add data to c1 and c2
    c1.innerText = itemName;
    c2.innerText = itemPrice;

    let value1 = document.getElementById("budget_amount").value
    amount.push(+itemPrice);
    
    let sum = 0;
    for(let i=0;i<amount.length;i++){
        sum =  sum + (+amount[i]);
    }
    
    let remainingValue = value1 - sum 
    
    document.getElementById("remaining_budget").innerText = remainingValue

    //MAIN TABLE
    let tableMain = document.getElementById("main_table");
   
    // Create a row using the inserRow() method and
    // specify the index where you want to add the row
    let rowMain = tableMain.insertRow(-1); // We are adding at the end
 
    // Create table cells
    let co = rowMain.insertCell(0);
    let col = rowMain.insertCell(1);
    let col2 = rowMain.insertCell(2);
 
    // Add data to c1 and c2
    co.innerText = itemName;
    col.innerText = itemPrice;
    col2.innerText = new Date()
}

//event --> html change --> css change --> js logic 
//click ; input  


