function alert(item){
  alert(item)
}

function foo(item){
  return item % 2 == 0
}

function myEach(){
}

function myMap(){
}

function myReduce(){
}

function myFind(collection, foo){
  if(collection === Array.isArray){
    collection.find(item => foo(item))
  }
}

function myFilter(collection, foo){
  if(Array.isArray(collection) === 'true'){
    return collection.map(item => foo(item))
  }
  else for(const item in collection){
    return foo(Object.keys(collection))
  }
}

function mySize(collection){
  if (Array.isArray(collection) === 'true'){
  return collection.length
  }
  else return Object.values(collection).length
}

function myFirst(arr, n=1){
  if(n === 1){
    return parseInt(arr.slice(0, n))
  }
  else return arr.slice(0, n)
}

function myLast(arr, n=1){
  if(n === 1){
    return parseInt(arr.slice(-n))
  }
  else return arr.slice(-n)
}

function myKeys(obj){
  return Object.keys(obj)
}

function myValues(obj){
  return Object.values(obj)
}