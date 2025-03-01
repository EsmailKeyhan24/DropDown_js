const DropDown_btn=document.querySelector('.DropDown_btn');
const DropDown_list=document.querySelector('.DropDown_list');
const icon_btn=document.querySelector('.icon-btn')
DropDown_btn.addEventListener('click' , ()=>{
    DropDown_list.classList.toggle('active')
    icon_btn.classList.toggle('show')
})

const spans=document.querySelectorAll('ul>li>span')
spans.forEach((item)=>{
    item.addEventListener('click' , (e)=>{
        document.getElementById('input').value=item.innerHTML
    })
})