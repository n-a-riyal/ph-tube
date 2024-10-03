const btnLoad=async()=>{
    const res=await fetch('https://openapi.programming-hero.com/api/phero-tube/categories');
    const data=await res.json();
    console.log(data)
    displayBtn(data.categories);
   
   
   }
   const videoLoad=async()=>{
       const res=await fetch('https://openapi.programming-hero.com/api/phero-tube/categories');
       const data=await res.json();
       console.log(data)
       displayvideos(data.categories);
      
      
      }
      
   
   function displayBtn(data){
       const btrContainer=document.getElementById('heder-btn')
      data.map((btnTitle)=>{
            button=document.createElement('button');
            button.classList="btn"
            button.innerText=btnTitle.category;
            btrContainer.appendChild(button)
            
   
   
      })
   }
   
   btnLoad();
   videoLoad()