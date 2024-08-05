const withoutEnd = () =>{

    while (true){
        console.log("never stop learning")
    }
}

const fail = (message : string) =>{

    throw new Error (message)
}

const example = (input : unknown) =>{
    if( typeof input === 'string'){
        return 'it is a string'
    }
    else if(Array.isArray(input)){

        return 'is an array'
    }
    return fail( 'no match' )
}

console.log(example('Sting'))
console.log(example([1,2]))
console.log(example(1212))
