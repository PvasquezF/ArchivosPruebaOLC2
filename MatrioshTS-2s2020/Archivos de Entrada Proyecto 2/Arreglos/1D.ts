function swap(i : number, j: number, arr : number[]) : void{
    const temp:number = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function bubbleSort(arr : number[]) : void{
    for(let i:number = 0; i < arr.length; i++){
        for(let j:number = 0; j < arr.length - 1; j++){
            if(arr[j] > arr[j + 1]){
                swap(j, j+1, arr);
            }
        }
    }
}

function insertionSort(arr : number[]) : void{
    for(let i:number = 1; i < arr.length; i++){
        let j:number = i;
        let temp:number = arr[i];
        while(j > 0 && arr[j - 1] > temp){
            arr[j] = arr[j-1];
            j--;
        }
        arr[j] = temp;
    }
}

function getPivot2(value : number) : number{
    return value % 2 == 0 ? value : value + 0.5;
}

function quickSort(low: number, high: number, arr : number[]) : void{
    let i:number = low;
    let j:number = high;
    let pivot:number = arr[getPivot2((low + high) / 2)];

    while(i <= j){
        while(arr[i] < pivot){
            i++;
        }

        while(arr[j] > pivot){
            j--;
        }
        if(i <= j){
            swap(i, j, arr);
            i++;
            j--;
        }
    }

    if(low < j){
        quickSort(low, j, arr);
    }
    if(i < high){
        quickSort(i, high, arr);
    }
}

function selectionSort(arr : number[]) : void{
    for(let j:number = 0; j < arr.length; j++){
        let iMin:number = j;
        for(let i:number = j + 1; i < arr.length; i++){
            if(arr[i] < arr[iMin]){
                iMin = i;
            }
        }
        swap(j, iMin, arr);
    }
}

function printArray(arr:number[]):void{
  let str:string = '';
  for(let i in arr){
	str = str + arr[i] + ', ';
  }
  console.log(str);
}

function main():number[] {
  let indice:number = 0;
	while((true && false) || true){
	  const arreglo: number[] = [32,7*3,7,89,56,0.909*10000/(5*2),109,2,9,9874**0,44,3,820*10,11,8*0+8,10];
	  switch(indice){
		case 0:
          console.log('--BUBBLESORT--');
		  bubbleSort(arreglo);
          printArray(arreglo);
		break;

        case 1:
        console.log('--INSERTIONSORT--');
        console.log('posicion 0 = 0');
        arreglo[0] = arreglo[1] - 21;
        insertionSort(arreglo);
        printArray(arreglo);
        break;

        case 2:
        console.log('--QUICKSORT--');
        arreglo[arreglo.length - 1] = 8888;
        console.log('posicion final = 8888');
        quickSort(0,arreglo.length - 1, arreglo);
        printArray(arreglo);
        indice++;
        break;

        case 4:
        console.log('--SELECTIONSORT--');
        selectionSort(arreglo);
        printArray(arreglo);
        break;
		  
		default:
          console.log("ARREGLO ORIGINAL");
		  return arreglo;
	  }
	  indice++;
	}
  
}

let arr:number[]; 
arr = main();
printArray(arr);

/*
--BUBBLESORT--
1, 2, 3, 7, 8, 9, 10, 11, 21, 32, 44, 56, 89, 109, 909, 8200, 
--INSERTIONSORT--
posicion 0 = 0
0, 1, 2, 3, 7, 8, 9, 10, 11, 21, 44, 56, 89, 109, 909, 8200, 
--QUICKSORT--
posicion final = 8888
1, 2, 3, 7, 8, 9, 11, 21, 32, 44, 56, 89, 109, 909, 8200, 8888, 
--SELECTIONSORT--
1, 2, 3, 7, 8, 9, 10, 11, 21, 32, 44, 56, 89, 109, 909, 8200, 
ARREGLO ORIGINAL
32, 21, 7, 89, 56, 909, 109, 2, 9, 1, 44, 3, 8200, 11, 8, 10, 
*/