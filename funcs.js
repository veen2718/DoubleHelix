function f(y1,k=0){
    let y21 = []
    for(let i = 0;i<n;i++){
      y21.push((ry/2)-mf*k1*Math.sin(y1[i]+k))
    }
    return y21
  }
  function ft(y1,k=0){
    let y21 = []
    for(let i = 0;i<n;i++){
      y21.push((ry/2)-thickness*mf*k1*Math.sin(y1[i]+k))
    }
    return y21
  }
  

function range(a,b){
    arr = []
    for(let i = a;i<b;i++)
      arr.push(i)
  }

  function mod(a,b=Math.PI*2){
    return a-Math.floor((a/b))*b
  }

  function nx(r){
    q = r.next().value
    return q
  }

  function lerP(a,b,t){return a+(b-a) * t}  