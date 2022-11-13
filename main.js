window.onload = initfunction;
function initfunction() {
    //date formatting	
    var current_datetime = new Date();
    var formatted_date = current_datetime.getDate() + "-" + (current_datetime.getMonth() + 1) + "-" + current_datetime.getFullYear();
    document.getElementById("dtfield").innerHTML = formatted_date;
}
var title = "Please select your size";
function roundCakesVisibility() {
    document.getElementById("title1").innerHTML = title;
    document.getElementById("lengthSheetCake").style.visibility = "hidden";
    document.getElementById("widthSheetCake").style.visibility = "hidden";
    document.getElementById("radiusRoundCake").style.visibility = "visible";
    document.getElementById("sheetcake").style.visibility = "hidden";
    document.getElementById("roundcake").style.visibility = "visible";
    document.getElementById("title1").style.visibility = "visible";
    document.getElementById("title2").style.visibility = "hidden";
   }
function sheetCakesVisibility() {
    document.getElementById("title2").innerHTML = title;
    document.getElementById("lengthSheetCake").style.visibility = "visible";
    document.getElementById("widthSheetCake").style.visibility = "visible";
    document.getElementById("sheetcake").style.visibility = "visible";
    document.getElementById("roundcake").style.visibility = "hidden";
    document.getElementById("radiusRoundCake").style.visibility = "hidden";
    document.getElementById("title2").style.visibility = "visible";
    document.getElementById("title1").style.visibility = "hidden";
   
}

function buttonandchecks() {

    //Variables

    var clientfirstname;
    var clientlastname;
    var phone_number;
    var address;
    var postalCode;
    var email;
    var selectCakes;
    var extraCost1 = parseFloat(0);
    var extraCost2 = parseFloat(0);
    var extraCost3 =parseFloat(0);
  	var cakeCost = parseFloat(0);
    var minimumRoundCakePrice = parseFloat(15);
    var minimumSheetCakePrice = parseFloat(18);
    var minimumRoundCakeArea = parseFloat(707);
    var minimumSheetCakeArea = parseFloat(900);
    var radius = parseFloat(0);
    var width = parseFloat(0);
    var length = parseFloat(0);
    var numberOfLayer = parseInt(1);
    var roundCakeSelectSize = parseFloat(0);
    var sheetCakeSelectSize = parseFloat(0);
    var extraCost = parseFloat(0);
    var costForIncreaseSize = parseFloat(0.02);
    var cakeCostFormat = "";
    var resultmessage = "";
    var cakedescription = "";
    var totalCost = parseFloat(0);
    selectCakes = document.querySelector('input[name = typecake]:checked').value;
    clientfirstname = document.getElementById("firstName").value;
    clientlastname = document.getElementById("lastName").value;
    phone_number = document.getElementById("phone_number").value;
    address = document.getElementById("address").value;
    postalCode = document.getElementById("Postal").value;
    email = document.getElementById("email").value;
    numberOfLayer = document.getElementById("number_of_layer").value;

    if (selectCakes == "roundCake") {
        radius = document.getElementById("radiusRoundCake").value;
        roundCakeSelectSize = radius * radius * 3.14;
        extraCost = (roundCakeSelectSize - minimumRoundCakeArea) * costForIncreaseSize;
        if (numberOfLayer == 1) {
            cakeCost = minimumRoundCakePrice + extraCost;
            cakedescription = "Round cake " + radius + "cm with " + numberOfLayer + " layer:"+ "<br>";

        }
        if (numberOfLayer == 2) {
            cakeCost = (minimumRoundCakePrice + extraCost) * 1.5;
            cakedescription = "Round cake " + radius + "cm with " + numberOfLayer + " layers:"+ "<br>";
        }
        if (numberOfLayer == 3) {
            cakeCost = (minimumRoundCakePrice + extraCost) * 2;
            cakedescription = "Round cake " + radius + "cm with " + numberOfLayer + " layers:"+ "<br>";
        }

        cakeCostFormat = "$" + cakeCost.toFixed(2) + "<br>";

    }
    if (selectCakes == "sheetCake") {
        width = document.getElementById("widthSheetCake").value;
        length = document.getElementById("lengthSheetCake").value;
        sheetCakeSelectSize = width * length;
        extraCost = (sheetCakeSelectSize - minimumSheetCakeArea) * costForIncreaseSize;
        if (numberOfLayer == 1) {
            cakeCost = minimumSheetCakePrice + extraCost;
            cakedescription = "Sheet cake  " + width + " x " + length + "(cm)with " + numberOfLayer + " layer:" + "<br>";

        }
        if (numberOfLayer == 2) {
            cakeCost = (minimumSheetCakePrice + extraCost) * 1.5;
            cakedescription = "Sheet cake " + width + " x " + length + "(cm) with " + numberOfLayer + " layers:"+ "<br>";
        }
        if (numberOfLayer == 3) {
            cakeCost = (minimumSheetCakePrice + extraCost) * 2;
            cakedescription = "Sheet cake  " + width + " x " + length + "(cm)with " + numberOfLayer + " layers:"+ "<br>";
        }

        cakeCostFormat ="$" + cakeCost.toFixed(2) + "<br>";
    }
    // additional choice
    if (document.getElementById("option1").checked) {
        extraCost1 = parseFloat(document.getElementById("option1").value);
        if(extraCost1 > 0) {
            cakedescription += "Cream Cheese icing" +"<br>";
            cakeCostFormat += "$" + extraCost1 + "<br>";
            // extraMessage = "Cream Cheese icing" +"<br>";
            // messageExtraCost = "$" + extraCost1 + "<br>";
          
        }

        
    }
    if (document.getElementById("option2").checked) {
        extraCost2 = parseFloat(document.getElementById("option2").value);
        if(extraCost2 > 0) {
            cakedescription += "Fruit and Almonds topping" + "<br>";
            cakeCostFormat += "$" + extraCost2 +"<br>";
            // extraMessage += "Fruit and Almonds topping" + "<br>";
            // messageExtraCost += "$" + extraCost2 +"<br>";
        }
        
    }

    if (document.getElementById("option3").checked) {
        extraCost3 = parseFloat(document.getElementById("option3").value);
        if(extraCost3 > 0) {
            cakedescription += "Fruit jam filling" + "<br>";
            cakeCostFormat += "$" + extraCost3 + "<br>";
            // extraMessage += "Fruit jam filling" + "<br>";
            // messageExtraCost += "$" + extraCost3 + "<br>";
        }
        
    }
    // display title information
    totalCost = (cakeCost + extraCost1 + extraCost2 + extraCost3);
    var formattotalCost = "$" + totalCost.toFixed(2);
    var totalmessage = "Total:";
    var welcomeText = "Your Invoice";
    var thankyouText = "Thank you for shopping with New City Bakery & Delli";

    resultmessage += (clientfirstname + "  " + clientlastname + "<br>" + address + "<br>" + postalCode + "<br>" + phone_number + "<br>" + email + "<br><br>" + "Your order: " + "<br><br>");
    document.getElementById("welcome").innerHTML = welcomeText ;
    document.getElementById("title_result").innerHTML = resultmessage;
    document.getElementById("result_items").innerHTML = cakedescription;
    document.getElementById("price").innerHTML = cakeCostFormat ;
    document.getElementById("total_message").innerHTML = totalmessage;
    document.getElementById("total").innerHTML = formattotalCost;
    document.getElementById("thankyou").innerHTML = thankyouText;
    document.getElementById("table").style.visibility = "visible";
   
}