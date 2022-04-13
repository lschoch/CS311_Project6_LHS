window.onload=function(){
    // Onload begin building the grid with the static elements from index.html.
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
    invpropequip.style.gridArea = "9/1/10/2";
    lngtrmliab.style.gridArea = "9/4/10/5";
    const addinvpropequip = document.getElementById("addinvpropequip");
    const addlngtrmliab = document.getElementById("addlngtrmliab");
    addinvpropequip.style.gridArea = "11/2/12/3";
    addlngtrmliab.style.gridArea = "11/5/12/6";
    const intangibles = document.getElementById("intangibles");
    const totalposition = document.getElementById("totalposition");
    intangibles.style.gridArea = "21/1/22/2";
    totalposition.style.gridArea = "21/4/22/5";
    const addintangibles = document.getElementById("addintangibles");
    const totalassets = document.getElementById("totalassets");
    addintangibles.style.gridArea = "22/2/23/3";
    totalassets.style.gridArea = "23/4/24/5";
    const totalliabilities = document.getElementById("totalliabilities");
    const position = document.getElementById("position");
    totalliabilities.style.gridArea = "24/4/25/5";
    position.style.gridArea = "25/4/26/5";
}

const addCurAssBtn = document.getElementById("btn-addcurass");
const addCurLiabBtn = document.getElementById("btn-addcurliab");
const addInvPropEquipBtn = document.getElementById("btn-addinvpropequip");
const addLngTrmLiabBtn = document.getElementById("btn-addlngtrmliab");
const addIntangiblesBtn = document.getElementById("btn-addintangibles");
const calcPositionBtn = document.getElementById("btn-calcposition");
/* need these as global variables so their values can be accessed by 
the calcPosition function.*/
var totlcurass, totlcurliab, totlinvpropequip, totllngtrmliab, totlintangibles; 

addCurrentAssetsEvents();
addCurrentLiabilitiesEvents();
addInvPropEquipEvents();
addLngTrmLiabEvents();
addIntangiblesEvents();

function addCurrentAssetsEvents(){
    addCurAssBtn.addEventListener("click", () => {
        addCurAss();
    });
}

function addCurrentLiabilitiesEvents() {
    addCurLiabBtn.addEventListener("click", () => {
        addCurLiab();
    });
}

function addInvPropEquipEvents() {
    addInvPropEquipBtn.addEventListener("click", () => {
        addInvPropEquip();
    });
}

function addLngTrmLiabEvents() {
    addLngTrmLiabBtn.addEventListener("click", () => {
        addLngTrmLiab();
    });
}

function addIntangiblesEvents(){
    addIntangiblesBtn.addEventListener("click", () => {
        addIntangibles();
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
    newDiv1.style.gridArea = "3/2/4/4";

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
    newDiv2.style.gridArea = "4/2/5/4";

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
    newDiv3.style.gridArea = "5/2/6/4";

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
    totlcurass = Number(cash.value) + Number(inventory.value) +
     Number(supplies.value) + Number(tempinvest.value);
    const newDiv5 = document.createElement("div");
    const newLab5 = document.createTextNode("Total Current Assets: " 
    + numToCurrency(totlcurass));
    newDiv5.appendChild(newLab5);
    newDiv5.setAttribute("id", "totcurass");
    newDiv5.setAttribute("class", "row-justify");
    parentDiv.insertBefore(newDiv5, nextDiv);
    newDiv5.style.gridArea = "7/2/8/4";
    /* Create the button to calculate position when all components are 
    available.*/
    if (typeof totlcurass === 'number' && typeof totlcurliab === 'number' &&
    typeof totlintangibles === 'number' && typeof totlinvpropequip === 'number' &&
    typeof totllngtrmliab === 'number') {
        createCalcBtn();
    }
}

function addCurLiab() {
    addCurLiabBtn.remove();

    const newDiv1 = document.createElement("div");
    const newLab1 = document.createElement("label");
    const newInp1 = document.createElement("input");
    const nextDiv = document.getElementById("invpropequip");
    const parentDiv = document.getElementById("grid");
    newDiv1.appendChild(newLab1);
    newDiv1.appendChild(newInp1);
    newDiv1.setAttribute("id", "acctpayable");
    newDiv1.setAttribute("class", "row-justify");
    newLab1.setAttribute("for", "tbx-acctpayable");
    newLab1.innerHTML = "Accounts Payable:&nbsp;";
    newInp1.setAttribute("id", "tbx-acctpayable");
    newInp1.setAttribute("type", "text");
    parentDiv.insertBefore(newDiv1, nextDiv);
    newDiv1.style.gridArea = "3/5/4/7";

    const newDiv2 = document.createElement("div");
    const newLab2 = document.createElement("label");
    const newInp2 = document.createElement("input");
    newDiv2.appendChild(newLab2);
    newDiv2.appendChild(newInp2);
    newDiv2.setAttribute("id", "notespayable");
    newDiv2.setAttribute("class", "row-justify");
    newLab2.setAttribute("for", "tbx-notespayable");
    newLab2.innerHTML = "Notes Payable:&nbsp;";
    newInp2.setAttribute("id", "tbx-notespayable");
    newInp2.setAttribute("type", "text");
    parentDiv.insertBefore(newDiv2, nextDiv);
    newDiv2.style.gridArea = "4/5/5/7";

    const newDiv3 = document.createElement("div");
    const newLab3 = document.createElement("label");
    const newInp3 = document.createElement("input");
    newDiv3.appendChild(newLab3);
    newDiv3.appendChild(newInp3);
    newDiv3.setAttribute("id", "intpayable");
    newDiv3.setAttribute("class", "row-justify");
    newLab3.setAttribute("for", "tbx-intpayable");
    newLab3.innerHTML = "Interest Payable:&nbsp;";
    newInp3.setAttribute("id", "tbx-intpayable");
    newInp3.setAttribute("type", "text");
    parentDiv.insertBefore(newDiv3, nextDiv);
    newDiv3.style.gridArea = "5/5/6/7";

    const newDiv4 = document.createElement("div");
    const newLab4 = document.createElement("label");
    const newInp4 = document.createElement("input");
    newDiv4.appendChild(newLab4);
    newDiv4.appendChild(newInp4);
    newDiv4.setAttribute("id", "wagespayable");
    newDiv4.setAttribute("class", "row-justify");
    newLab4.setAttribute("for", "tbx-wagespayable");
    newLab4.innerHTML = "Wages Payable:&nbsp;";
    newInp4.setAttribute("id", "tbx-wagespayable");
    newInp4.setAttribute("type", "text");
    parentDiv.insertBefore(newDiv4, nextDiv);
    newDiv4.style.gridArea = "6/5/7/7";

    const newDiv5 = document.createElement("div");
    const newLab5 = document.createElement("label");
    const newInp5 = document.createElement("input");
    newDiv5.appendChild(newLab5);
    newDiv5.appendChild(newInp5);
    newDiv5.setAttribute("id", "accruedexpenses");
    newDiv5.setAttribute("class", "row-justify");
    newLab5.setAttribute("for", "tbx-accruedexpenses");
    newLab5.innerHTML = "Accrued Expenses:&nbsp;";
    newInp5.setAttribute("id", "tbx-accruedexpenses");
    newInp5.setAttribute("type", "text");
    parentDiv.insertBefore(newDiv5, nextDiv);
    newDiv5.style.gridArea = "7/5/8/7";

    const acctpayable = document.getElementById("tbx-acctpayable");
    const notespayable = document.getElementById("tbx-notespayable");
    const intpayable = document.getElementById("tbx-intpayable");
    const wagespayable = document.getElementById("tbx-wagespayable");
    const accruedexpenses = document.getElementById("tbx-accruedexpenses");
    acctpayable.setAttribute("value", 40000);
    notespayable.setAttribute("value", 7000);
    intpayable.setAttribute("value", 2000);
    wagespayable.setAttribute("value", 7500);
    accruedexpenses.setAttribute("value", 1500);
    totlcurliab = Number(acctpayable.value) + Number(notespayable.value)
     + Number(intpayable.value) + Number(wagespayable.value)
     + Number(accruedexpenses.value);

     const newDiv6 = document.createElement("div");
     const newLab6 = document.createTextNode("Total Current Liabilities: " 
     + numToCurrency(totlcurliab));
     newDiv6.appendChild(newLab6);
     newDiv6.setAttribute("id", "totcurliab");
     newDiv6.setAttribute("class", "row-justify");
     parentDiv.insertBefore(newDiv6, nextDiv);
     newDiv6.style.gridArea = "8/5/9/7";
     /* Create the button to calculate position when all components are 
    available.*/
     if (typeof totlcurass === 'number' && typeof totlcurliab === 'number' &&
    typeof totlintangibles === 'number' && typeof totlinvpropequip === 'number' &&
    typeof totllngtrmliab === 'number') {
        createCalcBtn();
    }
}

function addInvPropEquip () {
    addInvPropEquipBtn.remove();

    const newDiv1 = document.createElement("div");
    const newLab1 = document.createElement("label");
    const newInp1 = document.createElement("input");
    const nextDiv = document.getElementById("addlngtrmliab");
    const parentDiv = document.getElementById("grid");
    newDiv1.appendChild(newLab1);
    newDiv1.appendChild(newInp1);
    newDiv1.setAttribute("id", "land");
    newDiv1.setAttribute("class", "row-justify");
    newLab1.setAttribute("for", "tbx-land");
    newLab1.innerHTML = "Land:&nbsp;";
    newInp1.setAttribute("id", "tbx-land");
    newInp1.setAttribute("type", "text");
    parentDiv.insertBefore(newDiv1, nextDiv);
    newDiv1.style.gridArea = "11/2/12/4";

    const newDiv2 = document.createElement("div");
    const newLab2 = document.createElement("label");
    const newInp2 = document.createElement("input");
    newDiv2.appendChild(newLab2);
    newDiv2.appendChild(newInp2);
    newDiv2.setAttribute("id", "bldgimprove");
    newDiv2.setAttribute("class", "row-justify");
    newLab2.setAttribute("for", "tbx-bldgimprove");
    newLab2.innerHTML = "Building and Improvements:&nbsp;";
    newInp2.setAttribute("id", "tbx-bldgimprove");
    newInp2.setAttribute("type", "text");
    parentDiv.insertBefore(newDiv2, nextDiv);
    newDiv2.style.gridArea = "12/2/13/4";

    const newDiv3 = document.createElement("div");
    const newLab3 = document.createElement("label");
    const newInp3 = document.createElement("input");
    newDiv3.appendChild(newLab3);
    newDiv3.appendChild(newInp3);
    newDiv3.setAttribute("id", "equip");
    newDiv3.setAttribute("class", "row-justify");
    newLab3.setAttribute("for", "tbx-equip");
    newLab3.innerHTML = "Equipment:&nbsp;";
    newInp3.setAttribute("id", "tbx-equip");
    newInp3.setAttribute("type", "text");
    parentDiv.insertBefore(newDiv3, nextDiv);
    newDiv3.style.gridArea = "13/2/14/4";

    const newDiv4 = document.createElement("div");
    const newLab4 = document.createElement("label");
    const newInp4 = document.createElement("input");
    newDiv4.appendChild(newLab4);
    newDiv4.appendChild(newInp4);
    newDiv4.setAttribute("id", "tmpinv");
    newDiv4.setAttribute("class", "row-justify");
    newLab4.setAttribute("for", "tbx-tmpinv");
    newLab4.innerHTML = "Temporary Investments:&nbsp;";
    newInp4.setAttribute("id", "tbx-tmpinv");
    newInp4.setAttribute("type", "text");
    parentDiv.insertBefore(newDiv4, nextDiv);
    newDiv4.style.gridArea = "14/2/15/4";

    const land = document.getElementById("tbx-land");
    const bldgimprove = document.getElementById("tbx-bldgimprove");
    const equip = document.getElementById("tbx-equip");
    const tmpinv = document.getElementById("tbx-tmpinv");
    land.setAttribute("value", 23000);
    equip.setAttribute("value", 40000);
    bldgimprove.setAttribute("value", 117000);
    tmpinv.setAttribute("value", 15000);
    totlinvpropequip = Number(land.value) + Number(bldgimprove.value) + 
     Number(equip.value) + Number(tmpinv.value);

    const newDiv6 = document.createElement("div");
    const newLab6 = document.createTextNode("Total Investment Property and Equipment: " 
    + numToCurrency(totlinvpropequip));
    newDiv6.appendChild(newLab6);
    newDiv6.setAttribute("id", "totinvpropequip");
    newDiv6.setAttribute("class", "row-justify");
    parentDiv.insertBefore(newDiv6, nextDiv);
    newDiv6.style.gridArea = "15/2/16/4";
    /* Create the button to calculate position when all components are 
    available.*/
    if (typeof totlcurass === 'number' && typeof totlcurliab === 'number' &&
    typeof totlintangibles === 'number' && typeof totlinvpropequip === 'number' &&
    typeof totllngtrmliab === 'number') {
        createCalcBtn();
    }
}

function addLngTrmLiab() {
    addLngTrmLiabBtn.remove();

    const newDiv1 = document.createElement("div");
    const newLab1 = document.createElement("label");
    const newInp1 = document.createElement("input");
    const nextDiv = document.getElementById("intangibles");
    const parentDiv = document.getElementById("grid");
    newDiv1.appendChild(newLab1);
    newDiv1.appendChild(newInp1);
    newDiv1.setAttribute("id", "ntspayable");
    newDiv1.setAttribute("class", "row-justify");
    newLab1.setAttribute("for", "tbx-ntspayable");
    newLab1.innerHTML = "Notes Payable:&nbsp;";
    newInp1.setAttribute("id", "tbx-ntspayable");
    newInp1.setAttribute("type", "text");
    parentDiv.insertBefore(newDiv1, nextDiv);
    newDiv1.style.gridArea = "11/5/12/7";

    const newDiv2 = document.createElement("div");
    const newLab2 = document.createElement("label");
    const newInp2 = document.createElement("input");
    newDiv2.appendChild(newLab2);
    newDiv2.appendChild(newInp2);
    newDiv2.setAttribute("id", "bondspayable");
    newDiv2.setAttribute("class", "row-justify");
    newLab2.setAttribute("for", "tbx-bondspayable");
    newLab2.innerHTML = "Bonds Payable:&nbsp;";
    newInp2.setAttribute("id", "tbx-bondspayable");
    newInp2.setAttribute("type", "text");
    parentDiv.insertBefore(newDiv2, nextDiv);
    newDiv2.style.gridArea = "12/5/13/7";

    const ntspayable = document.getElementById("tbx-ntspayable");
    const bondspayable = document.getElementById("tbx-bondspayable");
    ntspayable.setAttribute("value", 33000);
    bondspayable.setAttribute("value", 47000);
    totllngtrmliab = Number(ntspayable.value) + Number(bondspayable.value);

    const newDiv6 = document.createElement("div");
    const newLab6 = document.createTextNode("Total Long-Term Liabilities: " +
     numToCurrency(totllngtrmliab));
    newDiv6.appendChild(newLab6);
    newDiv6.setAttribute("id", "totlngtrmliab");
    newDiv6.setAttribute("class", "row-justify");
    parentDiv.insertBefore(newDiv6, nextDiv);
    newDiv6.style.gridArea = "14/5/15/7";
    /* Create the button to calculate position when all components are 
    available.*/
    if (typeof totlcurass === 'number' && typeof totlcurliab === 'number' &&
    typeof totlintangibles === 'number' && typeof totlinvpropequip === 'number' &&
    typeof totllngtrmliab === 'number') {
        createCalcBtn();
    }
}

function addIntangibles () {
    addIntangiblesBtn.remove();

    const newDiv1 = document.createElement("div");
    const newLab1 = document.createElement("label");
    const newInp1 = document.createElement("input");
    const nextDiv = document.getElementById("totalposition");
    const parentDiv = document.getElementById("grid");
    newDiv1.appendChild(newLab1);
    newDiv1.appendChild(newInp1);
    newDiv1.setAttribute("id", "tradenames");
    newDiv1.setAttribute("class", "row-justify");
    newLab1.setAttribute("for", "tbx-tradenames");
    newLab1.innerHTML = "Trade Names:&nbsp;";
    newInp1.setAttribute("id", "tbx-tradenames");
    newInp1.setAttribute("type", "text");
    parentDiv.insertBefore(newDiv1, nextDiv);
    newDiv1.style.gridArea = "22/2/23/4";

    const newDiv2 = document.createElement("div");
    const newLab2 = document.createElement("label");
    const newInp2 = document.createElement("input");
    newDiv2.appendChild(newLab2);
    newDiv2.appendChild(newInp2);
    newDiv2.setAttribute("id", "goodwill");
    newDiv2.setAttribute("class", "row-justify");
    newLab2.setAttribute("for", "tbx-goodwill");
    newLab2.innerHTML = "Goodwill:&nbsp;";
    newInp2.setAttribute("id", "tbx-goodwill");
    newInp2.setAttribute("type", "text");
    parentDiv.insertBefore(newDiv2, nextDiv);
    newDiv2.style.gridArea = "23/2/24/4";

    const tradenames = document.getElementById("tbx-tradenames");
    const goodwill = document.getElementById("tbx-goodwill");
    tradenames.setAttribute("value", 75000);
    goodwill.setAttribute("value", 9000);
    totlintangibles = Number(tradenames.value) + Number(goodwill.value);

    const newDiv6 = document.createElement("div");
    const newLab6 = document.createTextNode("Total Intangibles: " +
     numToCurrency(totlintangibles));
    newDiv6.appendChild(newLab6);
    newDiv6.setAttribute("id", "totintangibles");
    newDiv6.setAttribute("class", "row-justify");
    parentDiv.insertBefore(newDiv6, nextDiv);
    newDiv6.style.gridArea = "24/2/25/4";
    /* Create the button to calculate position when all components are 
    available.*/
    if (typeof totlcurass === 'number' && typeof totlcurliab === 'number' &&
    typeof totlintangibles === 'number' && typeof totlinvpropequip === 'number' &&
    typeof totllngtrmliab === 'number') {
        createCalcBtn();
    }
}

function createCalcBtn () {
    const newDiv3 = document.createElement("div");
    const newBtn3 = document.createElement("button");
    newBtn3.addEventListener("click", () => {
        calcPosition();
    });
    newDiv3.appendChild(newBtn3);
    newDiv3.setAttribute("id", "calcposition");
    newBtn3.innerHTML = "Calculate Position";
    const parentDiv = document.getElementById("grid");
    const nextDiv = document.getElementById("totalposition");
    parentDiv.insertBefore(newDiv3, nextDiv);
    newDiv3.style.gridArea = "22/4/23/5";
}

function calcPosition() {
    if (totlcurliab == undefined || totlcurliab == null || totlinvpropequip == undefined ||
        totlinvpropequip == null || totllngtrmliab == undefined || totllngtrmliab == null ||
        totlintangibles == undefined || totlintangibles == null || totlcurass == undefined ||
        totlcurass == null) {
            alert ("All other buttons must be clicked before position can be " +
            "calculated.")
        }
    else {
        const totalassetstxt = document.getElementById("totalassets");
        const totalliabtxt = document.getElementById("totalliabilities");
        const positiontxt = document.getElementById("position");

        let totalassets = totlcurass + totlinvpropequip + totlintangibles;
        let totalliab = totlcurliab + totllngtrmliab;
        let position = totalassets - totalliab; 

        totalassetstxt.innerHTML = "Total Assets: " + numToCurrency(totalassets);
        totalliabtxt.innerHTML = "Total Liabilities: " + numToCurrency(totalliab);
        positiontxt.innerHTML = "Position: " + numToCurrency(position);
    }
}

function numToCurrency(price) {
    // Format the price to USD currency, using the locale.
    let dollarUS = Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
    });
    return dollarUS.format(price);
}