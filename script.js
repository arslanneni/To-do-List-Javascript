let main=document.querySelector('.main');
let contianer = document.querySelector('.to-do');
let inp_value=document.querySelector('.inp');
console.log(inp_value);
let button=document.querySelector('.btn');
button.addEventListener('click',function()
{
    
    let asd=inp_value.value;
    let para=document.createElement('p');
    contianer.append(para);
    para.innerText="■"+asd;
    para.style.color='black';
    para.style.fontSize='2rem';
    para.style.marginLeft='20px';
    para.addEventListener('click', function(){
        para.style.textDecoration='line-through';
    })
    para.addEventListener('dblclick', function(){
        contianer.removeChild(para);
    })
    inp_value.value='';

})