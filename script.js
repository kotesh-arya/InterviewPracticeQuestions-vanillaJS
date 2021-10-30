const message = document.querySelector("#message");
const para = document.querySelector("#para")
var arr = ['one','two','three','four']

// function showList(){
// for(item of arr){

// let newItem = document.createElement('p');
//   newItem.innerText = item;
//     para.appendChild(newItem)

// }
// }
// showList();


  for(let i=0;i<arr.length; i++){
    var master = document.createElement('p');
       master.innerHTML = arr[i];
   message.appendChild(master);
  }
  