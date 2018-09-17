var data={
    name:'lav',
    phone:6393513839
};
//json object to string
var json =JSON.stringify(data);
console.log(json);
console.log(typeof json);

// json string to javascript object
var backToJs = JSON.parse(data);
console.log(backToJs);
console.log(backToJs.name);