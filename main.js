let myLeads = []
const inputEl = document.getElementById('input-el')
const saveBtn = document.getElementById("input-btn")
const ulEl = document.getElementById('ul-el')
const deleteBtn = document.getElementById("delete-btn")
const leadsFromStorage = JSON.parse(localStorage.getItem("myLeads"))
const tabBtn = document.getElementById('tab-btn')

if(leadsFromStorage){
    myLeads = leadsFromStorage
    render(myLeads)
}

const tabs = [
    {}
]
console.log(tabs)

function render(leads){
    let listItems = ""
        for (let i=0;i<leads.length;i++){
            listItems += `
                <li>
                    <a target='_blank' href='${leads[i]}'>
                    ${leads[i]}
                    </al>
                </li>
            `           
        }
    
        ulEl.innerHTML = listItems
    }
    
tabBtn.addEventListener("click", function(){
    
    chrome.tabs.query({active: true, currentWindow: true},function(tabs){
    myLeads.push(tabs[0].url)
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)
    })  
})

deleteBtn.addEventListener("dblclick", function(){
    localStorage.clear()
    myLeads = []
    render(myLeads)
} )

saveBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value)
    inputEl.value = ""
    
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    
    render(myLeads)
    
})



