
// var array = "Ankit Kumar"
var array = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore consequuntur ex iure minus provident voluptates aliquid dolor laboriosam debitis nam in sint maxime maiores suscipit eum aperiam, nobis qui delectus."
var typingBox = document.querySelector('.typing-leason')
var readyBox = document.querySelector('.ready')
var bodyMain = document.querySelector('body')
let color = false


var typedString = ""

console.log(array.length)

for (var i=0;i<array.length ;i++)
{
    var htmlPart = `<span>${array[i]}</span>`
    typingBox.innerHTML += htmlPart;
}

var selectElement = document.querySelectorAll('span')

selectElement[typedString.length].classList.add('blinker')


var flag = true;
if (flag)
{
    typingBox.classList.add("inactive-leason")
}

typingBox.addEventListener('click', ()=>{
    console.log("Clicked")
})

readyBox.addEventListener('click' , ()=>{
    console.log("I got clicked")
    removeBox()
})

function removeBox()
{
    readyBox.classList.add("hiding")
    typingBox.classList.remove("inactive-leason")
    bodyMain.addEventListener('keypress', (event)=>{
        var x = event.keyCode;  
        var y = String.fromCharCode(x);
        typedString += y;

        const recentChar = selectElement[typedString.length-1]
        
        const originalString = selectElement[typedString.length-1].innerText
    
        if (typedString.length === array.length)
        {
            readyBox.classList.remove("hiding")
        }

        if (y === originalString || x == 32 && originalString==='_') 
        {
            if (color)
            {
                selectElement[typedString.length-1].classList.add("wrong")
                color = false
            }
            else
            {
                recentChar.classList.add("right")
            }
            
            selectElement[typedString.length-1].classList.remove('blinker')
            selectElement[typedString.length].classList.add('blinker')
        }
        else
        {
            // recentChar.classList.add("wrong")
            color=true
            typedString = typedString.substring(0, typedString.length - 1);
        }
        
    })
}
// recentChar.classList.add("wrong")
