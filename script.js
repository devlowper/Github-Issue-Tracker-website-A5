// document.getElementById('loginBtn').addEventListener('click' , function (){
//     const username = document.getElementById('username').value;
//     const password = document.getElementById('password').value;

//     if(username === 'admin' && password === 'admin123'){
//         window.location.href ="dashboard.html"

//     }else{
//         alert("Invalid ")
//     }
// })

// login Function
document.getElementById('loginBtn').addEventListener('click' , function (){
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if(username !== 'admin'){
        alert("Invalid Username ")
        

    }else if( password !== 'admin123') {
        alert("Invalid Password")
    }else{
        window.location.href ="dashboard.html"

    }
})


function copy (text){
 navigator.clipboard.writeText(text);
}

// 


function loadData (){
    fetch ('https://phi-lab-server.vercel.app/api/v1/lab/issues')
    .then(res => res.json())
    .then(data => {
        const issues = data.data
        displayData(issues)

        document.getElementById("issue-count").innerText = issues.length
    })


}
function displayData (issues)  {
    const card = document.getElementById('card-container')
    card.innerHTML = ""
    
    issues.forEach(issue => {
        const createDiv = document.createElement("div")

        let priorityColor = "bg-[#FEECEC] text-[#EF4444]";
        if(issue.priority === 'medium') priorityColor = "bg-[#FEF3C7] text-[#D97706]";
        if (issue.priority.toLowerCase() === "low") priorityColor = "bg-[#DEFCE8] text-[#00A96E]";

        let statusImg = "assets/Open-Status.png";
        if(issue.status.toLowerCase() === 'closed') statusImg = "assets/Closed-Status.png";
        console.log(issue.status, statusImg);

        let badgeColor = "border-[#02a86e]"
        if(issue.status.toLowerCase() === 'closed') badgeColor = "border-[#a854f7]"

        const labelHtml =issue.labels.map(label => {
            let labelColor ="";
            let iconClass = ";"

            if(label.toLowerCase() === "bug"){
               labelColor = "bg-[#FEECEC] text-[#EF4444] border-[#FECACA] hover:bg-[#EF4444] hover:text-white";
               iconClass ="fa-solid fa-bug"
            }else if(label.toLowerCase() === "help wanted"){
                labelColor = "bg-[#FFF8DB] text-[#D97706] border-[#FDE68A] hover:bg-[#D97706] hover:text-white ";
                iconClass ="fa-solid fa-life-ring"
            }else if(label.toLowerCase() === "enhancement"){
                labelColor = "bg-[#DEFCE8] text-[#00A96E] border-[#BBF7D0] hover:bg-[#00A96E] hover:text-white";
                iconClass ="fa-solid fa-wand-magic-sparkles"
            }else if (label.toLowerCase() === "documentation"){
                labelColor = "bg-[#dbebff] text-[#5e88eb] border-[#5e88eb] hover:bg-[#5e88eb] hover:text-white";
                iconClass ="fa-solid fa-file-lines"
            }else{
                labelColor = "bg-[#ece4ff] text-[#a647ff] border-[#a647ff] hover:bg-[#a647ff] hover:text-white ";
                 iconClass ="fa-solid fa-circle-info"
            }
            return `<span class="px-2 py-1 text-sm font-medium capitalize  rounded-full border ${labelColor}"><i class="${iconClass}"></i> ${label}</span>`
               

        }).join(" ");


        createDiv.innerHTML =`
   <div class="card bg-white p-5 border-t-5 ${badgeColor} shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-200 cursor-pointer flex flex-col gap-4 h-full">   
  <!-- Top Section: Status & Priority -->
  <div class="flex justify-between items-center"> 
    <img class="w-9 h-9" src="${statusImg}" alt="">
    <span class="font-medium px-6 py-2 text-sm rounded-full ${priorityColor}  ">${issue.priority.toUpperCase()}</span>
  </div>

  <!-- Content Section -->
  <div class="space-y-2 mt-2">
    <h1 class="font-bold text-slate-900 text-lg leading-tight hover:text-indigo-600 transition-colors">${issue.title}</h1>
    <p class="text-sm text-gray-600">${issue.description}</p>
  </div>

  <!-- Labels Section -->
  <div class="flex flex-wrap gap-2">
  ${labelHtml}
    
  </div>

  <!-- Footer Section -->
  <div class="mt-auto pt-4 border-t border-gray-100 text-[10px] text-[#64748B] flex flex-col gap-1">
    <span class="text-xs"><i class="fa-regular fa-user mr-1"></i> #${issue.id} by ${issue.author}</span>
    <span class="text-xs"><i class="fa-regular fa-calendar mr-1"></i>${issue.createdAt}</span>
  </div>

  </div>
        `

        card.append(createDiv)
    })

}


function showOpenIssues(){
    fetch('https://phi-lab-server.vercel.app/api/v1/lab/issues')
    .then(res => res.json())
    .then(data => {

        const openIssues = data.data.filter(issue => issue.status.toLowerCase() === "open")

        displayData(openIssues)

        document.getElementById("issue-count").innerText = openIssues.length
    })
}

function showClosedIssues(){
    fetch('https://phi-lab-server.vercel.app/api/v1/lab/issues')
    .then(res => res.json())
    .then(data => {

        const closedIssues = data.data.filter(issue => issue.status.toLowerCase() === "closed")

        displayData(closedIssues)

        document.getElementById("issue-count").innerText = closedIssues.length
    })
}

loadData();
