
private void principal(){
    print("HOLA MUNDO EN J#")
    funcion1();
}

public void principal(){
    print("RIP")
}

void funcion1(){
    print("en funcion1")
    integer a = 4;
    integer[] var1 = {1,2,3,4}
    integer funcion2(integer a, integer b, integer[] c){
        c[3] = 99
        void funcion3(string a, string b, integer[] nullpointerexception){
            nullpointerexception[4] = -49
            print(nullpointerexception);
            c[4] = 28
        }
        funcion3("hola","j", $c)
        return c[4]
    }

    print(funcion2(var1[1], var1[2], $var1));
    print(var1);
}

/** Salida
HOLA MUNDO EN J#
en funcion1
1, 2, 99, -49
28
1, 2, 3, 4
**/
