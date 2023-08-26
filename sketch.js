function setup() {
  createCanvas(rx,ry);
}
let points1
let points2
let points3
let points4
let gp
function draw() {
  background(220);
  strokeWeight(10)
  gp = getpoints(y,y2,k)
  points1 = nx(gp)
  points2 = nx(gp)
  points3 = nx(gp)
  points4 = nx(gp)

  strokeWeight(2)
  let colList = [topCol,botCol,topCol,botCol]
  let pList = [points1,points2]
  if(doTop){pList=[points1,points2,points3,points4]}
  let colI = 0
  for(const points of pList){
    stroke(colList[colI])
    for(const [a,b] of points){
      point(a,b)
    }
    colI++
  }
  if(fill){
  stroke(topCol)
  strokeWeight(3)
  lenMin = Math.min(points1.length,points3.length)
  for(let i = 0;i<lenMin;i++){
    [a,b] = [points1[i][1],points3[i][1]]
    a1 = Math.min(a,b)
    a2 = Math.max(a,b)
    if(dot){
      for(let j = Math.round(a1);j<Math.round(a2);j++){
        point(points1[i][0],j)
      }
    }else{
      x = points1[i][0]
      line(x,a1,x,a2)
    }
  }
  
  stroke(botCol)
  lenMin = Math.min(points2.length,points4.length)
  for(let i = 0;i<lenMin;i++){
    [a,b] = [points2[i][1],points4[i][1]]
    a1 = Math.min(a,b)
    a2 = Math.max(a,b)
    if(dot){
      for(let j = Math.round(a1);j<Math.round(a2);j++){
        point(points2[i][0],j)
      }
    }else{
      x = points2[i][0]
      line(x,a1,x,a2)
    }
    
  }}

  r3 = 0
  
  
  c = 0
  let genCl = colgen()
  let genCn = colNum()
  cmax = Math.min(points1.length,points2.length)-1
  c2 = cmax/lines
  dv = Math.floor(c2*d)
  if(k3>=c2){
    k3 = 0
    
  }
  

  strokeWeight(4)
  for(let i = 0;i<cmax;i++){
    if(i-Math.floor(k3)>=0 | (!moveBase)){
       if (i == Math.floor(c*c2)){
        k4 = 0
        if(moveBase){
          k4 = Math.floor(k3)
        }
        let g1
        if(doTop){
           g1 = qd(points3,points4,i,dv,k4)
        }else{
          g1 = qd(points1,points2,i,dv,k4)
        }
        
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
    /*
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
    }}*/
   
  }
  
  if(doRotate&&abs(k)>=rotateval){
    neg *= -1
  }


  
  /*

  if(!doFill){
    strokeWeight(4)
    stroke(topCol)
    for(const [a,b1] of points1){
      b = b1*(1/thickness)
      y1 = Math.min(a,b)
      y2 = Math.max(a,b)
      point(a,b)
      for(let i = y1;i>= y2;i++){
        point(a,i)
      }
    }
    
  }*/
  k+=spinRate*neg
  k3+=0.15


  //console.log(framecount,count1,count2)
  }
  