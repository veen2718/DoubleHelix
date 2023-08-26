function* getpoints(y,y2,k){
    fy = f(y,k)
    f2y = f(y2,k+Math.PI+sidemove)
    fty = ft(y,k)
    ft2y = ft(y2,k+Math.PI+sidemove)
    points1a = []
    points2a = []
    points3a = []
    points4a = []
    for(let i = 0;i<n;i++){
    x1 = k1*y[i]
    x2 = k1*y2[i]
    f1 = fy[i]
    f2 = f2y[i]
    ft1 = fty[i]
    ft2 = ft2y[i]
    xmin = x0 - l*x0
    xmax = x0+l*x0
    strokeWeight(3)

    if(xmin<x1&&xmax>x1){
        points1a.push([x1,f1])
        points3a.push([x1,ft1])        
    }
    if(xmin<x2&&xmax>x2){
        points2a.push([x2,f2])
        points4a.push([x2,ft2]) 
    }    
            
    }

    yield points1a
    yield points2a
    yield points3a
    yield points4a



}
    