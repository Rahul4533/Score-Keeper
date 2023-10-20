

let arr=[];
let name;
let number;






function m(name,number){
    this.name=name;
    this.number=number;
    arr.push(name+","+number);

    return arr;
}
 const res=m("Rahul",20);

res.map((student,index)=>{
  // console.log( student.split(","[0]));
   console.log( student.split(",")[1])
})
 console.log(res);