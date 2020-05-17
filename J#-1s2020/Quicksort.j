/*
	Ordenamiento Quicksort
    Carnet: 201504100
*/
void principal()
{
	integer i;
	integer[] array = {12,9,4,99,56,34,78,22,1,3,10,13,120}
	print("\tQuick Sort\n");
	print("Valores antes de Quicksort");
	for(i = 0; i < array.length ; i++)
	{
		print(array[i] + "	");
	}
	print("-------------------------");
	// Realizar Ordenamiento
	quicksort(array,0,array.length-1);
	print("\n\n\nValores despues de QuickSort:\n\n");
	for(i = 0; i < array.length; i++)
	{
		print(array[i] + "	");
	}
}

void quicksort(integer[] array,integer low,integer n)
{
	integer lo = low;
	integer hi = n
	if ( lo >= n){
		return ;
	}
	integer mid = array[(integer)((lo + hi) / 2)];
	while ( lo < hi)
	{
		while(lo<hi && array[lo] < mid ){
			lo++;
		}
		while(lo<hi && array[hi] > mid){
			hi--;
		}
		if(lo < hi){
			integer T = array[lo];
			array[lo] = array[hi];
			array[hi] = T
		}
	}
	if(hi < lo){
		integer T = hi;
		hi = lo;
		lo = T;
	}
	quicksort(array,low,lo);
	integer cond = 0;
	if ( lo == low)
	{
		cond = lo + 1
	}else{
		cond = lo
	}
	quicksort(array,cond,n);
}


