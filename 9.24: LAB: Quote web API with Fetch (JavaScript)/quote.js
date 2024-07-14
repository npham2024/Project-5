window.addEventListener("DOMContentLoaded", function () {
   document.querySelector("#fetchQuotesBtn").addEventListener("click", function () {

      // Get values from drop-downs
      const topicDropdown = document.querySelector("#topicSelection");
      const selectedTopic = topicDropdown.options[topicDropdown.selectedIndex].value;
      const countDropdown = document.querySelector("#countSelection");
      const selectedCount = countDropdown.options[countDropdown.selectedIndex].value;
   
      // Get and display quotes
      fetchQuotes(selectedTopic, selectedCount);	   
   });
});

function showAnonymousQuotes(count) {
   let html = "<ol>";
   for (let c = 1; c <= count; c++) {
      html += `<li>Quote ${c} - Anonymous</li>`;
   }
   html += "</ol>";

   document.querySelector("#quotes").innerHTML = html
}

async function fetchQuotes(topic, count) {   
   // TODO: Modify to use Fetch API
   let url = `https://wp.zybooks.com/quotes.php?topic=${topic}&count=${count}`

   let response = await fetch(url)

   if(response.error){
      let quotes = await response.json()
      document.querySelector("#quotes").innerHTML = `${quotes.error}`
   }
   if(response.ok){
      let quotes = await response.json()
      let html = "<ol>";

      for (let i = 0; i < quotes.length; i++) {
         html += `<li>${quotes[i].quote} - ${quotes[i].source}</li>`;
      }
      html += "</ol>";

      document.querySelector("#quotes").innerHTML = html
   } 
   
}
