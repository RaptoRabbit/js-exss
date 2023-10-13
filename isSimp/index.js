console.log(`0 = False\n1 = True\n-1 = Number 1 `);
const isSimp = (n) =>{
    if (n=== 1) {
        return -1
    }
    let flage = 1;
    for (let i = 2; i <= n-1; i++) {
        if(n % i === 0){
            flag = 0;
            break;
        }        
    }
    return flage
}
console.log(issimp(6));