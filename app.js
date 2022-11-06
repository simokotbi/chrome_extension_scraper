
let linkslist=[];

function readeLinks(){
    
    const url = chrome.runtime.getURL('data/links.json');
    fetch(url)
      .then((response) => response.json()) //assuming file contains json
      //.then((urls) => console.log(urls))
      //.then((urls)=>window.open(JSON.stringify(urls[0].url,"_blank")))
      .then((urls)=>{
        linkslist.push(urls.map((item)=>item.url));
   
    })
    console.log(linkslist)
  
  }

 async function performDownload(){

   const url = chrome.runtime.getURL('data/links.json');
   await fetch(url)
      .then((response) => response.json())
      .then((urls)=>{
        urls.map(async(element)=>{

            // document.createElement("a");
           
                //do what you need here
               //await window.open(JSON.stringify(element.url).slice(1, -1),"_blank");
        // document.innerHTML+='<a class="mylink"  download>kkllklklkklkklklkllklkkllkkk</a>'
        const a = document.createElement('a');
        a.style.display = 'none';
        a.href = JSON.stringify(element.url).slice(1, -1);
        a.download = 'download.html';
        document.head.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(JSON.stringify(element.url).slice(1, -1));
         })
       
    })
        
      
      
}
  performDownload();