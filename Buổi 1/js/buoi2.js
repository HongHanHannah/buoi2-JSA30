const buttonQuery=document.querySelector("#button")
const h1Query=document.querySelector("#h1id")
const h2Query=document.querySelector("#h2id")
const h3Query=document.querySelector("#h3id")
const h4Query=document.querySelector("#h4id")
function turnonpromt(){
    const getName=prompt("Nhap ten cua ban :")
    const getHeight=prompt("Nhap chieu cao cua ban :")
    const getWeight=prompt("Nhap can nang cua ban :")
    const getAge=prompt("Nhap tuoi cua ban :")

    const userInfo={
        userName:getName,
        userHeight:getHeight,
        userWeight:getWeight,
        userAge:getAge,
        
    }

   h1Query.innerText=userInfo.userName
   h2Query.innerText=userInfo.userHeight
   h3Query.innerText=userInfo.userWeight
   h4Query.innerText=userInfo.userAge
   
   
}