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
const clickfun=async(id)=>{
  const res = await fetch('https://openapi.programming-hero.com/api/phero-tube/category${id}');
  const data = await res.json();
 console.log(data)
//   displayvideos(data.videos);
}

function displayBtn(data) {
  const btrContainer = document.getElementById('heder-btn')
  
  data.map((btnTitle) => {
    button = document.createElement('button');
    button.classList = "btn"
    button.onclick=clickfun(btnTitle.category_id)
    // button.setAtributes('')
    button.innerText = btnTitle.category;
    btrContainer.appendChild(button)



  })
}
//    {"status":true,"message":"successfully fetched all the videos","videos":[{"category_id":"1001","video_id":"aaaa","thumbnail":"https://i.ibb.co/L1b6xSq/shape.jpg","title":"Shape of You","authors":[{"profile_picture":"https://i.ibb.co/D9wWRM6/olivia.jpg","profile_name":"Olivia Mitchell","verified":""}],"others":
function displayvideos(vedios) {
  const videoContainer = document.getElementById('videoConatiner')
  vedios.map((video) => {
    // console.log(video)
    const div = document.createElement('div');
    div.classList = "card card-compact "

    div.innerHTML = `
       <figure class="h-[60%] py-2 odject-cover relative">
    <img class="h-full w-full rounded-xl"
      src="${video?.
        thumbnail}"
      alt="Shoes" />
      <div class="absolute right-[20px] bottom-[20px] text-gray-400 text-m font-bold ">${times(video?.others?.posted_date)}</div>
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
             ${video?.authors[0]?.verified===true?`<img class="rounded-full w-[20px] odject-cover" src="https://img.icons8.com/?size=100&id=D9RtvkuOe31p&format=png&color=000000">`:""}
             
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

function times(t){
  const Hour=parseInt(t/3600);
  const remHour=t%3600;
  const min=parseInt(t/3600);
  const remmin=t%60;
 return `${Hour}Hours ${min}minutes ${remmin}s ago`
  

}
btnLoad();
videoLoad()