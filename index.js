
function receivesAFunction (spin) {
  return spin()
}
function returnsANamedFunction (){
   return function star () {
       return 0;
   }
}
function returnsAnAnonymousFunction () {
   return function () {
       return 0;
   }

}