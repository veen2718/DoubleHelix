neg = 1


k = 1

let r2 = true
let y = []
let y2 = []
let k3 = 0

function lerP(a,b,t){return a+(b-a) * t}


function* lerp2(a,b){
  dx = (1-basegap)*0.5
  dx2 = abs(b-a)*basegap
  x3a = lerP(a,b,dx)
  x4b = lerP(x3a,b,(basegap/(dx+basegap)))
  yield x3a
  yield x4b
}


function* qd(p1,p2,i,d1=0,d2=0){
    yield p1[i-d2][0]
    yield p1[i-d2][1]
    yield p2[i+d1-d2][0]
    yield p2[i+d1-d2][1]
}

function nx(r){
  q = r.next().value
  return q
}


console.log(Window.innerWidth)
let m = rx/(64*n)
for(let i = 0;i<n;i++){
    y.push(m*i)
    y2.push((m*i+Math.PI)+sidemove)
  
}
function setup() {
  createCanvas(rx,ry);
}

function* colgen(){
  for(const cl of cols){
    yield cl
  }
}

function* colNum(){
  for(let i = 0;i<cols.length;i++){
    yield i
  }
}



console.log(y,2)
console.log(y2,3)
function f(y1,k=0){
  let y21 = []
  for(let i = 0;i<n;i++){
    y21.push(Math.sin(y1[i]+k))
  }
  return y21
}

function mod(a,b=Math.PI*2){
  return a-Math.floor((a/b))*b
}

console.log(f(y))
console.log(f(y2))



function range(a,b){
  arr = []
  for(let i = a;i<b;i++)
    arr.push(i)
}


function draw() {
  background(220);
  
  
  y0 = ry/2
  x0 = rx/2
  fy = f(y,k)
  f2y = f(y2,k+Math.PI+sidemove)
  points1 = []
  points2 = []
  for(let i = 0;i<n;i++){
    x1 = k1*y[i]
    x2 = k1*y2[i]
    f1 = +y0-mf*k1*fy[i]
    f2 = +y0-mf*k1*f2y[i]
    xmin = x0 - l*x0
    xmax = x0+l*x0
    strokeWeight(3)
    
    if(xmin<x1&&xmax>x1){
      stroke(topCol)
      point(x1,f1)
      
      points1.push([x1,f1])
      
    }
    if(xmin<x2&&xmax>x2){
      stroke(botCol)
      point(x2,f2)
      points2.push([x2,f2])
    }    
          
    }

  
  r3 = 0
  if(r2){
    console.log(points1.length,points2.length,'len')
    r2 = false
  }
  c = 0
  let genCl = colgen()
  let genCn = colNum()
  cmax = Math.min(points1.length,points2.length)-1
  c2 = cmax/lines
  dv = Math.floor(c2*d)
  if(k3>=c2){
    k3 = 0
    
  }
  
  for(let i = 0;i<cmax;i++){
    if(i-Math.floor(k3)>=0 | (!moveBase)){
       if (i == Math.floor(c*c2)){
        k4 = 0
        if(moveBase){
          k4 = Math.floor(k3)
        }
        const g1 = qd(points1,points2,i,dv,k4)
        x1 = nx(g1)
        f1 = nx(g1)
        x2 = nx(g1)
        f2 = nx(g1)
        if(bases){

          xc = lerp2(x1,x2)
          x3 = nx(xc)
          x4 = nx(xc)
          yc = lerp2(f1,f2)
          f3 = nx(yc)
          f4 = nx(yc)
          col1 = nx(genCl)
          if(cols.indexOf(col1) + 1 == cols.length){genCl=colgen()}
          stroke(col1)
          line(x1,f1,x3,f3)
          col1 = nx(genCl)
          if(cols.indexOf(col1) + 1 == cols.length){genCl=colgen()}
          stroke(col1)
          line(x4,f4,x2,f2)
          
        }else if (doLines){
          col1 = nx(genCl)
          if(cols.indexOf(col1) + 1 == cols.length){genCl=colgen()}
          stroke(col1)
          line(x1,f1,x2,f2)
        }
        




        
        
        c++
    }
    }

    if(doLine){

    for(let i = 0;i<cmax;i++){
      const g2 = qd(points1,points2,i)
      x1 = nx(g2)
      f1 = nx(g2)
      x3 = nx(g2)
      f3 = nx(g2)

      const g3 = qd(points1,points2,i+1)
      x2 = nx(g3)
      f2 = nx(g3)
      x4 = nx(g3)
      f4 = nx(g3)
      line(x1,f1,x2,f2)
      line(x3,f3,x4,f4)
    }}
   
  }
  
  if(doRotate&&abs(k)>=rotateval){
    neg *= -1
  }


  


  if(!doFill){
    strokeWeight(4)
    stroke(topCol)
    for(const [a,b1] of points1){
      b = b1*(1/thickness)
      y1 = Math.min(a,b)
      y2 = Math.max(a,b)
      /*
      for(let i = y1;i>= y2;i++){
        point(a,i)
      }*/
    }
    
  }
  k+=spinRate*neg
  k3+=0.15


  //console.log(framecount,count1,count2)
  }
  