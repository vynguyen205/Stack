const arr = [2, 4, 6, 7, 12, 18, 22, 35, 36, 235, 1235, 124235, 777777];

//has to be ordered and assorted otherwise you cannot use binary search

//find 36
const findOnebyOne = (n, toFind) => {
    let operations = 0 ;
    for (let i = 0; i < n.length; i ++) {
        operations ++;
        if(arr[i] === toFind){
            return `Number found after ${operations} operations`
        }
    }
}

const findUsingBS = (n, toFind) => {
    let operations = 0;
    let startIndex = 0;
    let endIndex = n.length - 1;
    //step 1 get middle index
    while(true) {
        operations++;

        const middleIndex = startIndex + Math.ceil((endIndex - startIndex)/2)

        //check if greater or less 
        if(n[middleIndex]>toFind) {
            endIndex = middleIndex;
        } else if( n[middleIndex] < toFind){
            startIndex = middleIndex
        }else {
            return `Number found after ${operations} operations`
        }
    }
};