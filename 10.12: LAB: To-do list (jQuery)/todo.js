// HTML for the up, down, and done buttons
const upButtonHtml = '<button class="upBtn">&uarr;</button>';
const downButtonHtml = '<button class="downBtn">&darr;</button>';
const doneButtonHtml = '<button class="doneBtn">&#x2713;</button>';

$(function() {
   $("#addBtn").on("click", addBtnClick);
   
   // Add item if user presses Enter
   $("#newItemText").on("keyup", function(event) {
      if (event.key === "Enter") {
         addBtnClick();
      }
   });
});

function addBtnClick() {
   let itemText = $("#newItemText").val().trim();

   // Don't add empty strings
   if (itemText.length !== 0) {
      addItem(itemText);

      // Clear text and put focus back in text input
      $("#newItemText").val("").focus();
   } 
}

function addItem(item) {      
   // Create a new <li> for the list
   let $newItem = $(`<li><span>${item}</span></li>`);
   
   // Up button moves item up one spot
   let $upButton = $(upButtonHtml).on("click", function() {
      let index = $(this.parentElement).index();
      moveItem(index, index - 1); 
   });
   
   // Down button moves item down one spot
   let $downButton = $(downButtonHtml).on("click", function() {
      let index = $(this.parentElement).index();
      moveItem(index, index + 1); 
   });
      
   // Add click hander for done button
   let $doneButton = $(doneButtonHtml).on("click", function() {
      // Remove item from list
      let index = $(this.parentElement).index();
      removeItem(index);
   });

   // TODO: Complete the function

   // Chain append 
   $newItem.append($upButton).append($downButton).append($doneButton)
   
   let $ol = $("ol")
   $ol.append($newItem)

}

function moveItem(fromIndex, toIndex) {
   // TODO: Complete the function
   let $listElements = $("li")

   // Disable the up button if the item is at the top
   if (fromIndex === 0) {
      $("#upButton").prop("disabled", true);
   } else {
      $("#upButton").prop("disabled", false);
   }

   // Disable the down button if the item is at the bottom
   if (fromIndex === $listElements.length - 1) {
      $("#downButton").prop("disabled", true);
   } else {
      $("#downButton").prop("disabled", false);
   }

   if (fromIndex >= 0 && toIndex >= 0 && fromIndex < $listElements.length && toIndex < $listElements.length) {
      let $itemToMove = $listElements.eq(fromIndex).detach();

      if (fromIndex < toIndex) {
         $itemToMove.insertAfter($listElements.eq(toIndex));
      } else if (fromIndex > toIndex) {
         $itemToMove.insertBefore($listElements.eq(toIndex));
      }
   }
}

function removeItem(index) {
   // TODO: Complete the function
   let $listEl = $("li")
   $listEl.eq(index).remove()
}