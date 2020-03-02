fetch("data.json")   
.then((response)=>{
    return response.json()
}).then((data)=>{
   //console.log(data);
   display_info(data.basics);
})
var bodyElement=document.querySelector("#root");
function display_info(info){
    //card view
    let card=document.createElement("div");
    card.classList.add("card");
    //heading
    let heading=document.createElement("h1");
    heading.textContent=info.name; 
    bodyElement.append(card);
    card.append(heading);
    let line=document.createElement("hr");
    card.append(line);
    let details=document.createElement("h2");
    details.textContent=info.role; 
    card.append(details);
    let mail=document.createElement("a");
    mail.href="mailto:"+info.email; 
    mail.textContent=info.email; 
    card.append(mail);
    //let phone=document.createElement("h2");
    //phone.textContent=info.mobile; 
    //card.append(phone);
    let break1=document.createElement("br");
    let break2=document.createElement("br");
    card.append(break1);
    card.append(break2);
    let mobile=document.createElement("a");
    mobile.href="tel:"+info.mobile;
    mobile.textContent=info.mobile;
    card.append(mobile);
    //button
    var button=document.createElement("a");
    button.textContent="view profile";
    button.classList.add("btn");
    card.append(button);
}
