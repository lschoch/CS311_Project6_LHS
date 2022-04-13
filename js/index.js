window.onload=function(){
    const assets = document.getElementById("assets");
    assets.style.gridArea = "1/1/2/4";
    const liab = document.getElementById("liabilities");
    liab.style.gridArea = "1/4/2/7";
    const curass = document.getElementById("curass");
    const curliab = document.getElementById("curliab");
    curass.style.gridArea = "2/1/3/2";
    curliab.style.gridArea = "2/4/3/5";
    const addcurass = document.getElementById("addcurass");
    const addcurliab = document.getElementById("addcurliab");
    addcurass.style.gridArea = "3/2/4/3";
    addcurliab.style.gridArea = "3/5/4/6";
    const invpropequip = document.getElementById("invpropequip");
    const lngtrmliab = document.getElementById("lngtrmliab");
    invpropequip.style.gridArea = "8/1/9/2";
    lngtrmliab.style.gridArea = "8/4/9/5";
    const addinvpropequip = document.getElementById("addinvpropequip");
    const addlngtrmliab = document.getElementById("addlngtrmliab");
    addinvpropequip.style.gridArea = "9/2/10/3";
    addlngtrmliab.style.gridArea = "9/5/10/6";
    const intangibles = document.getElementById("intangibles");
    const totalposition = document.getElementById("totalposition");
    intangibles.style.gridArea = "10/1/11/2";
    totalposition.style.gridArea = "10/4/11/5";
    const addintangibles = document.getElementById("addintangibles");
    const totalassets = document.getElementById("totalassets");
    addintangibles.style.gridArea = "11/2/12/3";
    totalassets.style.gridArea = "11/4/12/5";
    const totalliabilities = document.getElementById("totalliabilities");
    const position = document.getElementById("position");
    totalliabilities.style.gridArea = "12/4/13/5";
    position.style.gridArea = "13/4/14/5";
}

const addCurAssBtn = document.getElementById("btn-addcurass");

addCurrentAssetsEvents();

function addCurrentAssetsEvents(){
    addCurAssBtn.addEventListener("click", () => {
        addCurAss();
    });
}

function addCurAss() {
    addCurAssBtn.remove();

    const newDiv1 = document.createElement("div");
    const newLab1 = document.createElement("label");
    const newInp1 = document.createElement("input");
    const nextDiv = document.getElementById("addcurliab");
    const parentDiv = document.getElementById("grid");
    newDiv1.appendChild(newLab1);
    newDiv1.appendChild(newInp1);
    newDiv1.setAttribute("id", "cash");
    newDiv1.setAttribute("class", "row-justify");
    newLab1.setAttribute("for", "tbx-cash");
    newLab1.innerHTML = "Cash:&nbsp;";
    newInp1.setAttribute("id", "tbx-cash");
    newInp1.setAttribute("type", "text");
    parentDiv.insertBefore(newDiv1, nextDiv);
    newDiv1.style.gridArea = "3/3/4/4";

    const newDiv2 = document.createElement("div");
    const newLab2 = document.createElement("label");
    const newInp2 = document.createElement("input");
    newDiv2.appendChild(newLab2);
    newDiv2.appendChild(newInp2);
    newDiv2.setAttribute("id", "inventory");
    newDiv2.setAttribute("class", "row-justify");
    newLab2.setAttribute("for", "tbx-inventory");
    newLab2.innerHTML = "Inventory:&nbsp;";
    newInp2.setAttribute("id", "tbx-inventory");
    newInp2.setAttribute("type", "text");
    parentDiv.insertBefore(newDiv2, nextDiv);
    newDiv2.style.gridArea = "4/3/5/4";

    const newDiv3 = document.createElement("div");
    const newLab3 = document.createElement("label");
    const newInp3 = document.createElement("input");
    newDiv3.appendChild(newLab3);
    newDiv3.appendChild(newInp3);
    newDiv3.setAttribute("id", "supplies");
    newDiv3.setAttribute("class", "row-justify");
    newLab3.setAttribute("for", "tbx-supplies");
    newLab3.innerHTML = "Supplies:&nbsp;";
    newInp3.setAttribute("id", "tbx-supplies");
    newInp3.setAttribute("type", "text");
    parentDiv.insertBefore(newDiv3, nextDiv);
    newDiv3.style.gridArea = "5/3/6/4";

    const newDiv4 = document.createElement("div");
    const newLab4 = document.createElement("label");
    const newInp4 = document.createElement("input");
    newDiv4.appendChild(newLab4);
    newDiv4.appendChild(newInp4);
    newDiv4.setAttribute("id", "tempinvest");
    newDiv4.setAttribute("class", "row-justify");
    newLab4.setAttribute("for", "tbx-tempinvest");
    newLab4.innerHTML = "Temporary Investments:&nbsp;";
    newInp4.setAttribute("id", "tbx-tempinvest");
    newInp4.setAttribute("type", "text");
    parentDiv.insertBefore(newDiv4, nextDiv);
    newDiv4.style.gridArea = "6/2/7/4";

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
     
    const newDiv5 = document.createElement("div");
    const newLab5 = document.createTextNode("Total Current Assets: " 
    + numToCurrency(tca));
    newDiv5.appendChild(newLab5);
    newDiv5.setAttribute("id", "totcurass");
    newDiv5.setAttribute("class", "row-justify");
    parentDiv.insertBefore(newDiv5, nextDiv);
    newDiv5.style.gridArea = "7/2/8/4";
}

function numToCurrency(price) {
    // Format the price to USD currency, using the locale.
    let dollarUS = Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
    });
    return dollarUS.format(price);
}