function name(fulname)
{
    return fulname();
    
}
console.log(name(function (){return "embedded";}));
