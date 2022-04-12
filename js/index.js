/* window.onload=function(){ 
    const cash = document.getElementById("tbx-cash");
    const inventory = document.getElementById("tbx-inventory");
    const supplies = document.getElementById("tbx-supplies");
    const tempinvest = document.getElementById("tbx-tempinvest");
    cash.setAttribute("value", 5000);
    inventory.setAttribute("value", 25000);
    supplies.setAttribute("value", 3000);
    tempinvest.setAttribute("value", 15000);
    let tca = Number(cash.value) + Number(inventory.value)
     + Number(supplies.value) + Number(tempinvest.value);
    const totcurass = document.getElementById("totcurass");
    totcurass.innerHTML = "Total Current Assets: " + numToCurrency(tca);
} */

function numToCurrency(price) {
    // Format the price to USD currency, using the locale.
    let dollarUS = Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
    });
    return dollarUS.format(price);
}