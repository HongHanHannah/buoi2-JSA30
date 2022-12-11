
const arryListProduct = [
    {
       id: 1,
        cate : "thịt",
        img : "hamburger.jpg",
        name : "Bánh hamburger là món ăn nhanh đến từ đất nước Mỹ xa xôi nhưng lại được lòng nhiều người dân ở Việt",
        price :30,
    },
    {
        id: 2,
        cate :  "cá",
        img : "hamburger.jpg",
        name : "Bánh hamburger là món ăn nhanh đến từ đất nước Mỹ xa xôi nhưng lại được lòng nhiều người dân ở Việt",
        price :30,
    },
    {
        id: 3,
        cate :  "thịt",
        img : "hamburger.jpg",
        name : "Bánh hamburger là món ăn nhanh đến từ đất nước Mỹ xa xôi nhưng lại được lòng nhiều người dân ở Việt",
        price :30,
    },
    {
        id: 4,
        cate :  "cá",
        img : "hamburger.jpg",
        name : "Bánh hamburger là món ăn nhanh đến từ đất nước Mỹ xa xôi nhưng lại được lòng nhiều người dân ở Việt",
        price :30,
    },
    {
        id: 5,
        cate : "thịt" ,
    
        img : "hamburger.jpg",
        name : "Bánh hamburger là món ăn nhanh đến từ đất nước Mỹ xa xôi nhưng lại được lòng nhiều người dân ở Việt",
        price :30,
    },
];

function showProduct(data){

    let main = document.querySelector(".main-content");

    main.innerHTML = ""


   if(main) {
     for (let item of data) {
        main.innerHTML += `
       <a href="chitiet.html?id=${item.id}">
        <div class="item">
        <div class="img">
            <img src="${item.img}" alt="">
        </div>
        <div class="name">
            <p>${item.name}</p>

        </div>
        </a>
        `;
     }
   }


}
showProduct(arryListProduct);

//tạo ra hàm lọc sp
let cate = document.querySelector("#cate") ;
function fitleProduct() {
 
   let meat = arryListProduct.filter(function(item) {
    return item.cate =="thịt";
   });
   let fish = arryListProduct.filter(function(item) {
    return item.cate =="cá";
   });
   if(cate.value == "thịt") { showProduct(meat)}
   else showProduct(fish)

}
//addEventListener dùng để tạo sự kiện cho thẻ trg DOM ở bên filter
// cấu trúc của hàm addEventListener : 1.addEventListener("2",3)
// 1 : là thẻ muốn tạo thêm sự kiện cho nó
// 2 : là sự kiện mình muốn vd như onclick nhưng sẽ bỏ chữ on đi
// 3 : function mình muốn sự kiện đó hoạt động nhưng cũng bỏ dấu ()
cate.addEventListener("charge", fitleProduct)
 // hàm filter trả ra mảng ms từ mảng cũ mà gtri trg mảng trả về là true
 // function đc gọi là colback 
// cấu trúc của filter 
// let 1 = 2.filter(function(item) {return 3})
// 1 : là tên mảng mới 
// 2 : mảng mà các bạn muốn lọc
// 3 : câu lệnh điều kiện để trả ra các giá trị muốn
    
    //let arryNew = arryListProduct.filter(function(item) {
    // return true;
    //});
    //console.log(arryNew);
    function detailProduct () {
       //dùng để lấy dữ liệu trên đg link sau dấu ?
        let _url = new URLSearchParams(window.location.search).get('id');
       let _product = arryListProduct.filter(function(item) {
        return item.id == _url;
       });
       console.log(_product);
       let _productMain = document.querySelector(".product-main");
       if(productMain) {
        productMain.innerHTML = `
        <img src="${_product[0].img}" alt="">
        <p>${_product[0].name}</p>
        <p>${_product[0].price}</p>
        `;
       }
    }


