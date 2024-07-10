$(function () {
   $("#fetchQuotesBtn").click(function () {
      // Get selected topic and count from drop-down lists
      const selectedTopic = $("#topicSelection option:selected").val();
      const selectedCount = $("#countSelection option:selected").val();
      fetchQuotes(selectedTopic, selectedCount);
   });
});

function fetchQuotes(topic, count) {
   // TODO: Modify to use $.get() or $.ajax()

   let queryData = {
      topic: topic,
      count: count
   }
   let html = "<ol>";
   $.ajax({
      url: `https://wp.zybooks.com/quotes.php`,
      method: "GET",
      data: queryData,
      dataType: "json"
   }).done(function(data){
      if(data.error){
         $("#quotes").html(data.error);
      } else {
      for (let i = 0; i < data.length; i++) {
         html += `<li>${data[i].quote} - ${data[i].source}</li>`;
      }
      html += "</ol>";
      $("#quotes").html(html);
      }
   })

}
