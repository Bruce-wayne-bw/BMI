function reset()
{
          document.getElementById('height').value=" ";
          document.getElementById('weight').value=" ";
          document.getElementById('result').textContent =" ";
          document.getElementById('output').textContent =" ";
          document.querySelector('#box').style.backgroundColor="white";
}

function cal()
{
let h=document.getElementById('height').value;
let w=document.getElementById('weight').value;
let res=w/(h*h);
document.getElementById('result').textContent=`Your BMI is = ${res}`;

if(h&&w)
{
if(res<16.0)
{
 document.getElementById('output').textContent =`Severaly UnderWeight`;
//  document.querySelector('#box').style.backgroundColor="red";
}
else if(res>16.0&&res<18.4)
{
 document.getElementById('output').textContent =`UnderWeight`;
}
else if(res>18.5&&res<24.9)
{
 document.getElementById('output').textContent =`Normal`;
}
else if(res>25.0&&res<29.9)
{

 document.getElementById('output').textContent =`OverWeight`;
}
else if(res>30.0&&res<39.9)
{
 document.getElementById('output').textContent =`Moderately Obese`;
}
document.getElementById('output').style.marginLeft ="30px";
}
else{
          document.getElementById('result').textContent =" ";
          document.getElementById('output').textContent ="Please Fill All Empty Fields";
}
}

