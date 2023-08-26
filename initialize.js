if(!doTop){
    fill = false
}

neg = 1
k = 1
let r2 = true
let y = []
let y2 = []
let k3 = 0
let m = rx/(64*n)
y0 = ry/2
x0 = rx/2
for(let i = 0;i<n;i++){
    y.push(m*i)
    y2.push((m*i+Math.PI)+sidemove)
  
}
