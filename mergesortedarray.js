function mergeSortedArrays(array1, array2){
        let mergedArray = [];
        mergedArray = [...array1, ...array2];
        mergedArray.sort((a,b) =>a-b);
        return mergedArray;
}

console.log(mergeSortedArrays([0,3,4,31],[4,6,30])); //Expected output: [0,3,4,4,6,30,31]

//Solution2:

function mergeSortedArrays2(array1,array2){
    let mergeArray2 =[];
    let array1Item = array1[0]; //0
    let array2Item = array2[0]; //4
    let i=1,j=1;
    //Check Input:
    if(array1.length === 0){
        return array2;
    }else if(array2.length === 0){
        return array1;
    }

    while (array1Item || array2Item){
        console.log(array1Item,array2Item);
        if(array1Item < array2Item) {
            mergeArray2.push(array1Item)
            array1Item = array1[i]
            i++;
        } else {
            mergeArray2.push(array2Item)
            array2Item = array2[j]
            j++;
        }
    }

    return mergeArray2;
}

// console.log(mergeSortedArrays2([0,3,4,31],[4,6,30])); 