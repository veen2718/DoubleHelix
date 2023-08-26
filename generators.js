
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
