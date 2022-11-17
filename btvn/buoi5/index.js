let users = ['Long' , 'Ngọc', 'Hân', 'Phước']
localStorage.setItem('users', JSON.stringify(users))

let get_users = JSON.parse(localStorage.getItem('users')) 
console.log(get_users)
let index = get_users.indexOf('Phước')
console.log(index)
get_users.splice(index,1,'Hà')
console.log(get_users)

localStorage.setItem('users', JSON.stringify(get_users))

let name_ha = get_users.indexOf('Hà')
get_users.splice(name_ha,1)
localStorage.setItem('users', JSON.stringify(get_users))

localStorage.removeItem('users')




setTimeout(function(){
    console.log('Và rồi con tim này cũng đã rung động')
}, 1000)
setTimeout(function(){
    console.log('Là ai, là ai mà suốt ngày trông ngóng')
}, 2000)
setTimeout(function(){
    console.log('1 điều anh rất ngại nói ra trong lòng')
}, 3000)
setTimeout(function(){
    console.log('Hình như ta')
}, 4000)
setTimeout(function(){
    console.log('Đã thích nhau phải không?')
}, 5000)
