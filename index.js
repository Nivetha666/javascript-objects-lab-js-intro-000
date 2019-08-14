var recipes = new Object({breakfast:"oatmeal"});

function updateObjectWithKeyAndValue(object,key,value){
  return Object.assign({},object,{[key]:value})


}
function destructivelyUpdateObjectWithKeyAndValue(object,key,value){
  object[key]=value;
  return object
}
