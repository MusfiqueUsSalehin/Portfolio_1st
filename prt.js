console.log("scripgt running")
document.querySelector('#close').style.display ='none';
document.querySelector('#menu').addEventListener('click' , ()=>{
    document.querySelector('.sidebar').classList.toggle('sidebarGo')
    if(document.querySelector('.sidebar').classList.contains('sidebarGo')){
        document.querySelector("#menu").style.display = 'inline'
        document.querySelector("#close").style.display = 'none'
        
    }
    else{
        setTimeout(()=>{
            
            document.querySelector('.main').classList.add('mainBlur')
            document.querySelector("#close").style.display = 'inline'
            
        },300)
            
        document.querySelector("#menu").style.display = 'none'
    }
})
document.querySelector('#close').addEventListener('click' , ()=>{
        document.querySelector('.sidebar').classList.toggle('sidebarGo')
        if(document.querySelector('.sidebar').classList.contains('sidebarGo')){
            document.querySelector("#menu").style.display = 'inline'
            document.querySelector("#close").style.display = 'none'
            document.querySelector('.main').classList.remove('mainBlur')
        }
        else{

                
            document.querySelector("#menu").style.display = 'none'
            setTimeout(()=>{
                document.querySelector("#close").style.display = 'inline'
        
            },300)
        }

})

