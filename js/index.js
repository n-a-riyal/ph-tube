const btnLoad = async () => {
  const res = await fetch('https://openapi.programming-hero.com/api/phero-tube/categories');
  const data = await res.json();

  displayBtn(data.categories);

}
const videoLoad = async () => {
  const res = await fetch('https://openapi.programming-hero.com/api/phero-tube/videos');
  const data = await res.json();

  displayvideos(data.videos);
}
const clickfun = async (id,id1) => {
  const res = await fetch(`https://openapi.programming-hero.com/api/phero-tube/category/${id}`);
  const data = await res.json();
 const btnclass=document.getElementsByClassName('riyal')
 const btnID=document.getElementById(id1)
 for(const n of btnclass){
n.classList.remove('bg-red-400', 'text-bold',"text-gray-400")

 }

 btnID.classList.add('bg-red-400', 'text-bold',"text-gray-400","hove:bg-red-400")
  displayvideos(data.category);
}

//  const btnColorId={ID:[{id:1},{id:2},{id:3}]}
 const ID1={id:1}
 const ID2={id:2}
 const ID3={id:3}
function displayBtn(data) {
  const btrContainer = document.getElementById('heder-btn')
   data[0].id=1
   data[1].id=2
   data[2].id=3
  
   console.log(data)
  data.map((btnTitle) =>{
    const div = document.createElement('div');
    div.innerHTML = `<button id="${btnTitle.category_id}"  onclick="clickfun(${btnTitle.category_id},${btnTitle.category_id})" class="btn riyal hover:bg-red-400">${btnTitle.category}<button>`
    btrContainer.appendChild(div)



  })
}
//    {"status":true,"message":"successfully fetched all the videos","videos":[{"category_id":"1001","video_id":"aaaa","thumbnail":"https://i.ibb.co/L1b6xSq/shape.jpg","title":"Shape of You","authors":[{"profile_picture":"https://i.ibb.co/D9wWRM6/olivia.jpg","profile_name":"Olivia Mitchell","verified":""}],"others":
function displayvideos(vedios) {
  const videoContainer = document.getElementById('videoConatiner')
  videoContainer.innerHTML="";
  // console.log(vedios.length)
  if(vedios.length===0){
   const div1=document.createElement('div');
   
   div1.innerHTML=
   `<img src="./assets/icon.png"/>
   <p class="font-bold text-xl mt-4">NO CONTENT HERE ! </p>
    `

   div1.classList="flex justify-center items-center flex-col"
   videoContainer.classList.remove('grid')
   videoContainer.appendChild(div1)
  }
  else{
    videoContainer.classList.add('grid')
  }
  vedios.map((video) => {
    // console.log((isNaN(video?.others?.posted_date)) )
    
    const div = document.createElement('div');
    div.classList = "card card-compact "

    div.innerHTML = `
       <figure class="h-[60%] py-2 odject-cover relative">
    <img class="h-full w-full rounded-xl"
      src="${video?.
        thumbnail}"
      alt="Shoes" />
      ${(video?.others?.posted_date)==="" ? " ":`<div class="absolute right-[20px] bottom-[20px] text-gray-400 text-m font-bold ">${times(video?.others?.posted_date)}</div>`}
      
         </figure>
  <div class="">
   
    <div></div>
         <div class="flex gap-4">
             <div class="">
            <img class="rounded-full w-[40px] odject-cover" src="${video?.authors[0]?.profile_picture}"/>
             
              </div>
             <div class="">
             <h2 class="font-bold text-xl">${video?.title}</h2>
             <div class="flex gap-4 mb-3 mt-2">
             <p class="font-bold text-gray-300">${video?.authors[0]?.profile_name}</p>
             ${video?.authors[0]?.verified === true ? `<img class="rounded-full w-[20px] odject-cover" src="https://img.icons8.com/?size=100&id=D9RtvkuOe31p&format=png&color=000000">` : ""}
             
             </div>
              <div class='text-gray-400'>${video?.others?.views} views</div>
              </div>
    </div>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
            `
    videoContainer.appendChild(div);

  })

}

function times(t) {
  const Hour = parseInt(t / 3600);
  const remHour = t % 3600;
  const min = parseInt(t / 3600);
  const remmin = t % 60;
  return `${Hour}Hours ${min}minutes ${remmin}s ago`


}
btnLoad();
videoLoad()