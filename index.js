const btn=document.querySelector("#btn")
const bdy=document.querySelector("body")
const color=['red','green','yellow']
bdy.style.backgroundColor="violet"

btn.addEventListener('click',fun)

function fun(){
    const ci=parseInt(Math.random()*color.length)
    bdy.style.backgroundColor=color[ci]
}