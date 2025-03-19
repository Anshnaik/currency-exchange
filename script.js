const URL="https//cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd/inr.json";

const btn=document.querySelector("#btn1");
const dropdown=document.querySelectorAll(".dropdown select");
for(let select of dropdown){
    for (i in countryList) {
        // console.log(i,countryList[i]);
        let newoptions=document.createElement("option");
        newoptions.innerText = i;
        newoptions.value=i;
        if(select.name==="from" && i==="USD"){
            newoptions.selected="selected";
        }

        else if(select.name==="to" && i==="INR"){
            newoptions.selected="selected";
        }
        select.append(newoptions);
    }

    select.addEventListener("change",(evt)=>{
        updateFlag(evt.target);
    });
}
const updateFlag=(element)=>{
    console.log(element);
    let currencyCode=element.value;
    let countryCode=countryList[currencyCode];
    let newsrc=`https://flagsapi.com/${countryCode}/shiny/64.png`;
    let img=element.parentElement.querySelector("img");
    img.src=newsrc;

}

btn.addEventListener("click",(evt)=>{
    evt.preventDefault();
    let amount=document.querySelector(".amount input");
    let amtValue=amount.value;
    console.log(amtValue);
    if(amtValue==="" || amtValue<1){
        amtValue=1;
        amount.value="1";

    }
})