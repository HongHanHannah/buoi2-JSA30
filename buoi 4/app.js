localStorage.setItem('test', 'value')

let drink =[ 'cafe', 'nuoc ep', 'sinh to']
let movie =[
    {
        name:'batman'
    }, {
        name: 'wakanda'
    }
]

localStorage.setItem( 'drink', JSON.stringify(drink))
localStorage.setItem( 'movie', JSON.stringify(movie))

let get_drink =localStorage.getItem('test')
console.log( get_drink);
let get_movie =localStorage.getItem('movie')
console.log(JSON.parse(get_movie));

//setTimeout(function(){
   // console.log('test setTimeout') 
//}, 3000)

//function Print() {
   // console.log("Print something");
//}
//setTimeout( Print , 3000)


setTimeout(function(){
    console.log('Và rồi con tim này cũng đã rung động')
}, 1000)
setTimeout(function(){
    console.log('Là ai, là ai mà suốt ngày trông ngóng')
}, 4000)
setTimeout(function(){
    console.log('1 điều anh rất ngại nói ra trong lòng')
}, 7500)
setTimeout(function(){
    console.log('Hình như ta')
}, 10000)
setTimeout(function(){
    console.log('Đã thích nhau phải không?')
}, 11000)














