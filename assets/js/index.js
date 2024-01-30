function showNum() {
    let i = 0;

    while(true){
        i++;
        if(i > 100) inner: break
        console.log(i);
    }
    outer: return
}

showNum()