function getPivot(value : number) : number{
    return value % 2 == 0 ? value : value - 0.5;
}

function swap(i : number, j: number, array : number[]) : void{
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}

function bubbleSort(array : number[]) : void{
    for(let i = 0; i < array.length; i++){
        for(let j = 0; j < array.length - 1; j++){
            if(array[j] > array[j + 1]){
                swap(j, j+1, array);
            }
        }
    }
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

function insertionSort(array : number[]) : void{
    for(let i = 1; i < array.length; i++){
        let j = i;
        let temp = array[i];
        while(j > 0 && array[j - 1] > temp){
            array[j] = array[j-1];
            j--;
        }
        array[j] = temp;
    }
}

function selectionSort(array : number[]) : void{
    for(let j = 0; j < array.length; j++){
        let iMin = j;
        for(let i = j + 1; i < array.length; i++){
            if(array[i] < array[iMin]){
                iMin = i;
            }
        }
        swap(j, iMin, array);
    }
}

function mergeSort(array : number[], l : number, r : number) : void{
    if(l >= r){
        return;
    }
    
    let m = getPivot((l + r) / 2);
    mergeSort(array, l, m);
    mergeSort(array, m + 1, r);
    merge(array, l, m , r);
}

function merge(array : number[], l : number, m : number, r : number) : void{
    let n1 = m - l + 1;
    let n2 = r - m;

    let L : number[] = [];
    let R : number[] = [];

    for(let i = 0; i < n1; i++){
        L[i] = array[l + i];
    }

    for(let j = 0; j < n2; j++){
        R[j] = array[m + 1 + j];
    }

    let i = 0;
    let j = 0;
    let k = l;

    while(i < n1 && j < n2){
        if(L[i] <= R[j]){
            array[k] = L[i];
            i++;
        }
        else{
            array[k] = R[j];
            j++;
        }
        k++;
    }
    
    while(i < n1){
        array[k] = L[i];
        i++;
        k++;
    }

    while(j < n2){
        array[k] = R[j];
        j++;
        k++;
    }
}

function menu() : void{
    let i = 0;
    while(true){
        let array : number[] = [32,21,7,89,56,909,109, 2];
        switch (i) {
            case 0:
                bubbleSort(array);
                console.log('BubbleSort: ', array);
                break;
            case 1:
                quickSort(0, array.length - 1, array);
                console.log('QuickSort: ', array);
                break;
            case 2:
                insertionSort(array);
                console.log('InsertionSort', array);
                break;
            case 3:
                selectionSort(array);
                console.log('SelectionSort', array);
                break;
            case 4:
                mergeSort(array, 0, array.length - 1);
                console.log('MergeSort: ' , array);
            default:
                return;
        }
        i++;
    }
}

menu();
