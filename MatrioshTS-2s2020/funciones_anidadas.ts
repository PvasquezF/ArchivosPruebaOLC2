function tail(strs:string[]):string[]{
    let result = [];
    for(let i = 1; i < strs.length; i++){
        result.push(strs[i]);
    }
    return result;
}

function head(strs:string[]):string{
    return strs[0];
}

function ml_list_constructor(head:string, tail:string[]):string[]{
    let result = [head];
    for(let i = 0; i < tail.length; i++){
        result.push(tail[i]);
    }
    return result;
}

console.log(ml_list_constructor("head", ["tail", "tail2"]));

function contains(str:string, strs:Array<string>):boolean{
    function imp(strs:Array<string>):boolean{
        if(strs.length == 0){
            return false;
        }
        else{
            let head_strs = head(strs);
            let tail_strs = tail(strs);
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
            let head_strs = head(strs);
            let tail_strs = tail(strs);
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
            let head_strs = head(strs);
            let tail_strs = tail(strs);
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
        let result:string[][] = [];
        for(let i = 1; i < list_of_lists.length; i++){
            result.push(list_of_lists[i]);
        }
        return result;
    }

    function helper_ml_list_constructor(head:string[], tail:string[][]):string[][]{
        let result = [head];
        for(let i = 0; i < tail.length; i++){
            result.push(tail[i]);
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
                    let head_strs = head(strs);
                    let tail_strs = tail(strs);
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
            let head_list_of_strings = helper_head(lists_of_strs);
            let tail_list_of_strings = helper_tail(lists_of_strs);
            return helper_ml_list_constructor(helperReplaceAll(head_list_of_strings), imp(tail_list_of_strings));
        }
    }

    return imp(lists_of_strs);
}

console.log(contains("Pararrayos", ["Pasta", "Ceremonia", "Ganancias", "Disciplina", "Bicho", "Bicho", "Mercado", "Pararrayos", "Agua", "Bicho"]));
console.log(contains("Alvarez", ["Pasta", "Ceremonia", "Ganancias", "Disciplina", "Bicho", "Bicho", "Mercado", "Pararrayos", "Agua", "Bicho"]));
console.log(replace("Bicho", ":)", ["Pasta", "Ceremonia", "Ganancias", "Disciplina", "Bicho", "Bicho", "Mercado", "Pararrayos", "Agua", "Bicho"]));
console.log(replaceAll("Bicho", ":D", ["Pasta", "Ceremonia", "Ganancias", "Disciplina", "Bicho", "Bicho", "Mercado", "Pararrayos", "Agua", "Bicho"]));
console.log(replace("nan", "FAIL", ["Pasta", "Ceremonia", "Ganancias", "Disciplina", "Bicho", "Bicho", "Mercado", "Pararrayos", "Agua", "Bicho"]));
console.log(replaceAll("nan", "FAIL", ["Pasta", "Ceremonia", "Ganancias", "Disciplina", "Bicho", "Bicho", "Mercado", "Pararrayos", "Agua", "Bicho"]));
console.log(replaceInListOfLists("Bicho", ":O", [["Pasta", "Ganar", "Bicho", "Bicho", "Mercado", "Rayos", "Agua", "Bicho"],
                                                 ["Mono","Bicho","Alpaca","Buey","Ratón","Yak","Chinchilla","Bicho"],
                                                 ["Bicho", "Erizo", "Mariposa", "Pez" , "betta", "Hurón", "Bicho", "Serpiente", "Ciervo"],
                                                 ["Calamar", "Cisne", "Bicho", "Tigre", "Perico", "Bicho", "Poni", "Canario"]]));

graficar_ts();


////Salida: 
//[
//  [0]:head,
//  [1]:tail,
//  [2]:tail2
//]
//true
//false
//[
//  [0]:Pasta,
//  [1]:Ceremonia,
//  [2]:Ganancias,
//  [3]:Disciplina,
//  [4]::),
//  [5]:Bicho,
//  [6]:Mercado,
//  [7]:Pararrayos,
//  [8]:Agua,
//  [9]:Bicho
//]
//[
//  [0]:Pasta,
//  [1]:Ceremonia,
//  [2]:Ganancias,
//  [3]:Disciplina,
//  [4]::D,
//  [5]::D,
//  [6]:Mercado,
//  [7]:Pararrayos,
//  [8]:Agua,
//  [9]::D
//]
//[
//  [0]:Pasta,
//  [1]:Ceremonia,
//  [2]:Ganancias,
//  [3]:Disciplina,
//  [4]:Bicho,
//  [5]:Bicho,
//  [6]:Mercado,
//  [7]:Pararrayos,
//  [8]:Agua,
//  [9]:Bicho
//]
//[
//  [0]:Pasta,
//  [1]:Ceremonia,
//  [2]:Ganancias,
//  [3]:Disciplina,
//  [4]:Bicho,
//  [5]:Bicho,
//  [6]:Mercado,
//  [7]:Pararrayos,
//  [8]:Agua,
//  [9]:Bicho
//]
//[
//  [0]:[
//    [0]:Pasta,
//    [1]:Ganar,
//    [2]::O,
//    [3]::O,
//    [4]:Mercado,
//    [5]:Rayos,
//    [6]:Agua,
//    [7]::O
//  ],
//  [1]:[
//    [0]:Mono,
//    [1]::O,
//    [2]:Alpaca,
//    [3]:Buey,
//    [4]:Ratón,
//    [5]:Yak,
//    [6]:Chinchilla,
//    [7]::O
//  ],
//  [2]:[
//    [0]::O,
//    [1]:Erizo,
//    [2]:Mariposa,
//    [3]:Pez,
//    [4]:betta,
//    [5]:Hurón,
//    [6]::O,
//    [7]:Serpiente,
//    [8]:Ciervo
//  ],
//  [3]:[
//    [0]:Calamar,
//    [1]:Cisne,
//    [2]::O,
//    [3]:Tigre,
//    [4]:Perico,
//    [5]::O,
//    [6]:Poni,
//    [7]:Canario
//  ]
//]
