function tail(strs:string[]):string[]{
    let result:string[] = new Array(strs.length - 1);
    for(let i:number = 1; i < strs.length; i++){
        result[i - 1] = strs[i];
    }
    return result;
}
function head(strs:string[]):string{
    return strs[0];
}
function ml_list_constructor(head:string, tail:string[]):string[]{
    let result:string[] = new Array(tail.length + 1);
    result[0] = head;
    for(let i:number = 0; i < tail.length; i++){
        result[i+1] = tail[i];
    }
    return result;
}
function contains(str:string, strs:Array<string>):boolean{
    function imp(strs:Array<string>):boolean{
        if(strs.length == 0){
            return false;
        }
        else{
            let head_strs:string = head(strs);
            let tail_strs:string[] = tail(strs);
            if(head_strs == str){
                return true;
            }
            else{
                return imp(tail_strs);
            }
        }
    }
    return imp(strs);
}
function replace(target:string, replacement:string, strs:Array<string>):string[]{
    function imp(strs:Array<string>):string[]{
        if(strs.length == 0){
            return [];
        }
        else{
            let head_strs:string = head(strs);
            let tail_strs:string[] = tail(strs);
            if(head_strs == target){
                return ml_list_constructor(replacement, tail_strs);
            }
            else{
                return ml_list_constructor(head_strs, imp(tail_strs));
            }
        }
    }
    return imp(strs);
}
function replaceAll(target:string, replacement:string, strs:Array<string>):string[]{
    function imp(strs:Array<string>):string[]{
        if(strs.length == 0){
            return [];
        }
        else{
            let head_strs:string = head(strs);
            let tail_strs:string[] = tail(strs);
            if(head_strs == target){
                return ml_list_constructor(replacement, imp(tail_strs));
            }
            else{
                return ml_list_constructor(head_strs, imp(tail_strs));
            }
        }
    }
    return imp(strs);
}
function replaceInListOfLists(target:string, replacement:string, lists_of_strs:string[][]):string[][]{
    function helper_head(list_of_lists:string[][]):string[]{
        return list_of_lists[0];
    }
    function helper_tail(list_of_lists:string[][]):string[][]{
        let result:string[][] = new Array(list_of_lists.length - 1);
        for(let i:number = 1; i < list_of_lists.length; i++){
            result[i-1] = list_of_lists[i];
        }
        return result;
    }
    function helper_ml_list_constructor(head:string[], tail:string[][]):string[][]{
        let result:string[][] = new Array(tail.length + 1);
        result[0] = head;
        for(let i:number = 0; i < tail.length; i++){
            result[i+1] = tail[i];
        }
        return result;
    }
    function imp(lists_of_strs:string[][]):string[][]{
        function helperReplaceAll(strs:string[]):string[]{
            function imp(strs:Array<string>):string[]{
                if(strs.length == 0){
                    return [];
                }
                else{
                    let head_strs:string = head(strs);
                    let tail_strs:string[] = tail(strs);
                    if(head_strs == target){
                        return ml_list_constructor(replacement, imp(tail_strs));
                    }
                    else{
                        return ml_list_constructor(head_strs, imp(tail_strs));
                    }
                }
            }
            return imp(strs);
        }
        if(lists_of_strs.length == 0){
            return [];
        }
        else{
            let head_list_of_strings:string[] = helper_head(lists_of_strs);
            let tail_list_of_strings:string[][] = helper_tail(lists_of_strs);
            return helper_ml_list_constructor(helperReplaceAll(head_list_of_strings), imp(tail_list_of_strings));
        }
    }
    return imp(lists_of_strs);
}
//No la vamos a hacer estilo funcional por ahora porque que hueva
function print_list(list:string[]):void{
    console.log("[");
    for(let i:number = 0; i < list.length; i++){
        console.log("  [" + i + "]:" + list[i]);
    }
    console.log("]");
}
//No la vamos a hacer estilo funcional por ahora porque que hueva
function print_list_of_lists(list:string[][]):void{
    function print_list(list:string[]):void{
        console.log("  [");
        for(let i:number = 0; i < list.length; i++){
            console.log("    [" + i + "]:" + list[i]);
        }
        console.log("  ]");
    }
    console.log("[");
    for(let i:number = 0; i < list.length; i++){
        console.log("  [" + i + "]:");
        print_list(list[i]);
    }
    console.log("]");
}
print_list(ml_list_constructor("head", ["tail", "tail2"]));
console.log(contains("Pararrayos", ["Pasta", "Ceremonia", "Ganancias", "Disciplina", "Bicho", "Bicho", "Mercado", "Pararrayos", "Agua", "Bicho"]));
console.log(contains("Alvarez", ["Pasta", "Ceremonia", "Ganancias", "Disciplina", "Bicho", "Bicho", "Mercado", "Pararrayos", "Agua", "Bicho"]));
print_list(replace("Bicho", ":)", ["Pasta", "Ceremonia", "Ganancias", "Disciplina", "Bicho", "Bicho", "Mercado", "Pararrayos", "Agua", "Bicho"]));
print_list(replaceAll("Bicho", ":D", ["Pasta", "Ceremonia", "Ganancias", "Disciplina", "Bicho", "Bicho", "Mercado", "Pararrayos", "Agua", "Bicho"]));
print_list(replace("nan", "FAIL", ["Pasta", "Ceremonia", "Ganancias", "Disciplina", "Bicho", "Bicho", "Mercado", "Pararrayos", "Agua", "Bicho"]));
print_list(replaceAll("nan", "FAIL", ["Pasta", "Ceremonia", "Ganancias", "Disciplina", "Bicho", "Bicho", "Mercado", "Pararrayos", "Agua", "Bicho"]));
print_list_of_lists(replaceInListOfLists("Bicho", ":O", [["Pasta", "Ganar", "Bicho", "Bicho", "Mercado", "Rayos", "Agua", "Bicho"],
                                                         ["Mono","Bicho","Alpaca","Buey","Ratón","Yak","Chinchilla","Bicho"],
                                                         ["Bicho", "Erizo", "Mariposa", "Pez" , "betta", "Hurón", "Bicho", "Serpiente", "Ciervo"],
                                                         ["Calamar", "Cisne", "Bicho", "Tigre", "Perico", "Bicho", "Poni", "Canario"]]));
// [
//   [0]:head
//   [1]:tail
//   [2]:tail2
// ]
// true
// false
// [
//   [0]:Pasta
//   [1]:Ceremonia
//   [2]:Ganancias
//   [3]:Disciplina
//   [4]::)
//   [5]:Bicho
//   [6]:Mercado
//   [7]:Pararrayos
//   [8]:Agua
//   [9]:Bicho
// ]
// [
//   [0]:Pasta
//   [1]:Ceremonia
//   [2]:Ganancias
//   [3]:Disciplina
//   [4]::D
//   [5]::D
//   [6]:Mercado
//   [7]:Pararrayos
//   [8]:Agua
//   [9]::D
// ]
// [
//   [0]:Pasta
//   [1]:Ceremonia
//   [2]:Ganancias
//   [3]:Disciplina
//   [4]:Bicho
//   [5]:Bicho
//   [6]:Mercado
//   [7]:Pararrayos
//   [8]:Agua
//   [9]:Bicho
// ]
// [
//   [0]:Pasta
//   [1]:Ceremonia
//   [2]:Ganancias
//   [3]:Disciplina
//   [4]:Bicho
//   [5]:Bicho
//   [6]:Mercado
//   [7]:Pararrayos
//   [8]:Agua
//   [9]:Bicho
// ]
// [
//   [0]:
//   [
//     [0]:Pasta
//     [1]:Ganar
//     [2]::O
//     [3]::O
//     [4]:Mercado
//     [5]:Rayos
//     [6]:Agua
//     [7]::O
//   ]
//   [1]:
//   [
//     [0]:Mono
//     [1]::O
//     [2]:Alpaca
//     [3]:Buey
//     [4]:Rat≤n
//     [5]:Yak
//     [6]:Chinchilla
//     [7]::O
//   ]
//   [2]:
//   [
//     [0]::O
//     [1]:Erizo
//     [2]:Mariposa
//     [3]:Pez
//     [4]:betta
//     [5]:Hur≤n
//     [6]::O
//     [7]:Serpiente
//     [8]:Ciervo
//   ]
//   [3]:
//   [
//     [0]:Calamar
//     [1]:Cisne
//     [2]::O
//     [3]:Tigre
//     [4]:Perico
//     [5]::O
//     [6]:Poni
//     [7]:Canario
//   ]
// ]
