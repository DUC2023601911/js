//các cách kha báo trong js
var soA = 25;
var soB = 5;
//cách 1
console.log("Căn bậc 2 của " + soA + " là:" + soB); //cachs này thì cần phải cách các khoảng ra
//cách 2
console.log("Căn bậc 2 của ", soA, " là:" + soB); //cachs này thì ko cần  cách các khoảng ra mà nó tự cách
//cách 3
console.log(`căn bâc 2 của ${soA} là:${soB}`);
//cách 4
console.log(`canw bậc 2 của %s là %s`, soA, soB);
