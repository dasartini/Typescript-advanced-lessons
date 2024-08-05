let anUnknownVar : unknown;
anUnknownVar = true
anUnknownVar = undefined
anUnknownVar = null
anUnknownVar = 1
anUnknownVar = []
anUnknownVar = {
}

if(typeof anUnknownVar === "string"){
anUnknownVar.toUpperCase()}

if (typeof anUnknownVar === "boolean"){
    let isNew : boolean = anUnknownVar
}


const parse = (str : string) : unknown =>{
return JSON.parse(str)
}

