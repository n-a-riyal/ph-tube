const btnLoad=async()=>{
    const res=await fetch('https://openapi.programming-hero.com/api/phero-tube/categories');
    const data=await res.json();
    
    displayBtn(data.categories);
   
   
   }
   const videoLoad=async()=>{
       const res=await fetch('https://openapi.programming-hero.com/api/phero-tube/videos');
       const data=await res.json();
       
       displayvideos(data.videos);
      
      
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
//    {"status":true,"message":"successfully fetched all the videos","videos":[{"category_id":"1001","video_id":"aaaa","thumbnail":"https://i.ibb.co/L1b6xSq/shape.jpg","title":"Shape of You","authors":[{"profile_picture":"https://i.ibb.co/D9wWRM6/olivia.jpg","profile_name":"Olivia Mitchell","verified":""}],"others":
   function displayvideos(video){
    const videoContainer=document.getElementById('videoConatiner')
    vedio.map((video)=>{
    
       const div=document.createElement('div');
       div.classList="card card-compact"

       div.innerHTML=`
       <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
  `
    videoContainer.appendChild('div');

    })
 
   }
   
   btnLoad();
   videoLoad()