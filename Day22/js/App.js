const input=document.querySelector("input");
const btn=document.querySelector("button");
let banner=document.querySelector(".banner");
const body=document.querySelector("body")
const li=document.querySelector("li");
const ul=document.querySelector("ul");

const Api_data=[];
function apiData(){
    const apikey="c15b5f75"
    const url=fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=${apikey}`)
        .then((res)=> res.json() ).then((data)=>{
            console.log(data);
            apiData=data;
        }).catch((error)=>{
            // console.log(error);
            throw error;
        })
}
apiData();

function  inputHandle(e){
  const inpVal=input.value;
  if (inpVal==="") {
     alert("please Enter the movie name")
  }
  if (apiData &&apiData.Type &&apiData.Poster) {
    const genre=apiData.Type;
    console.log(genre);
    
    if (inpVal === genre) {
        let li = document.createElement("li");
        let img = document.createElement("img");
        img.src = apiData.Poster;
        li.appendChild(img);
        ul.appendChild(li);
        banner.append(ul)
        body.append(banner)
        let p=document.createElement('p');
        p.textContent=`Title: ${apiData.Title}, Year: ${apiData.Year}, Rating: ${apiData.Rated}, Genre: ${apiData.Genre}`;
        li.appendChild(p);
      } else {
        alert("No Movie Found")
        input.value = ""
      }
    }
}
  


btn.addEventListener("click",apiData);
btn.addEventListener("click",inputHandle);
