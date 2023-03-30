// Write your solution in this file!

var employee = {
  name : "Sam",
  streetAddress : "11 Broadway",

};
function updateEmployeeWithKeyAndValue (object, key, value){
  const newObj = { ...object };
  newObj[key] = value;
  return newObj;
};
 
function deleteFromEmployeeByKey (object, key, value){
  const newObj2 = { ...object };
  newObj2[key] = value;
  return newObj2;
}


function destructivelyUpdateEmployeeWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
};

function destructivelyDeleteFromEmployeeByKey (object, key, value) {
  delete object[key];
  return object;
};

