function message(param) {
    console.log(param)
}
const es6_message = (param) =>{
    console.log(param)
}
message([1,2,3])
message({key:'value'})
message('hello')

// Biến toàn cục: đc khai báo ở ngoài hàm
// Biến cục bộ : đc khai báo ở trg thân hàm

function sum(a, b) {
    console.log(a+b)
    return a + b;
  }
  
  sum(1,3)

console.log('Hàm ko cs return', message('hello'))
console.log('Hàm cs return', sum(6,3))