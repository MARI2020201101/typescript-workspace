let numbers : number[] = [4,10,2,3,5];
for (let i = 0; i < numbers.length ; i++){
    console.log(numbers[i]);
}

let reviews : string[] = ['hi','my','name','is','mari'];
for (let review of reviews){
    console.log(review);
}

let _herbteas : string[] = ['cherryhub', 'cinammonhub', 'cookieshub'];
for (let hubtea of herbteas){
    if(hubtea == 'cookieshub'){
        console.log(`my favorite ${hubtea} !`)
    }
    else {
        console.log(hubtea)
    }
}