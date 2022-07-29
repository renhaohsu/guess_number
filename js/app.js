console.clear()
console.log("%c這是面向開發者的功能，請勿貼上來源不明的程式碼!","color: pink; font-size: 40px");

const magic_num = 1024
const arr_magic_num = Array.from(String(magic_num), Number);  // num轉arr
const h1 = document.querySelector("h1")
const input =  document.querySelector(".password")
const button = document.querySelector(".btn")

button.addEventListener('click', (e)=>{
  check_num()
})

input.addEventListener("keydown", (e)=>{
    if(e.keyCode == 13) check_num()
})
                       
function check_num(){
   // 4A 直接跳出
  if(input.value == magic_num.toString()){
    // 來點動畫
    h1.innerText = ""
    var text = "歡迎來到這一側的世界"
    let i = 0
    var timeoutID = window.setInterval(( () => {
      if(i<text.length){
        h1.innerText += text[i]
        i++
        document.body.style.background
          = `rgb(${i/text.length*155},${i/text.length*155},${i/text.length*155})`
      }
      else {
        window.clearInterval(timeoutID)  // 這樣到底有沒有clear到阿 之後查
        document.body.style.background = `rgb(255,255,255)`
        input.style.display = "none"
        button.style.display = "none"
      }
    }), 70)
    input.style.transition = "100ms ease-in-out"
    input.style.width = 0
    input.style.height = 0
    button.style.transition = "100ms ease-in-out"
    button.style.width = 0
    button.style.height = 0
    // 有沒有更好看的寫法呢
    return  //  js要從 anonymous function 跳出是這樣寫嗎? 查不太到資訊@@ 
  }
  // 判斷幾A幾B
  const arr_input = Array.from(input.value, Number); 
  let a = 0
  let b = 0  
  arr_magic_num.forEach( (ans_digit , ans_digit_index)  =>{
    arr_input.forEach( (input_digit , input_digit_index) =>{
      if(ans_digit==input_digit && ans_digit_index==input_digit_index) a++;
      else if(ans_digit==input_digit) b++;
    })
  })
  console.log('A: ' + a)
  console.log('B: ' + b)
  h1.innerText = `${a}A${b}B`
}




// todo
// 需要更多動畫