function getPivot(value : number) : number{
    return value % 1 == 0 ? value : value - 0.5;
}

function swap(i : number, j: number, array : number[]) : void{
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}

function quickSort(low: number, high: number, array : number[]) : void{
    let i = low;
    let j = high;
    let pivot = array[getPivot((low + high) / 2)];

    while(i <= j){
        while(array[i] < pivot){
            i++;
        }

        while(array[j] > pivot){
            j--;
        }
        if(i <= j){
            swap(i, j, array);
            i++;
            j--;
        }
    }

    if(low < j){
        quickSort(low, j, array);
    }
    if(i < high){
        quickSort(i, high, array);
    }
}

let array : number[] = [8, 48, 69, 12, 25, 98, 71, 33, 129, 5];
quickSort(0, array.length - 1, array);
console.log('QuickSort: ', array);

