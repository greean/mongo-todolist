MongoDB ToDo List

Challenge:

 * Create a todo list for a single user, no need to worry about
user signup for this project.
 * When the user goes to the website they should be presented with all 
 of their todo list items, along side this, the user should be  able to 
 add new items to the list, mark items as complete and delete items.


Medium:

 * Display all items when the user goes to the website
 * Allow the user to mark the items as completed
 * Allow the user to delete items
 * Display a custom message if the user doesn't have any todo items


Spicy:

 * Allow the user to order the items by date created
 * Allow the user to star items so that they are pinned to the top
 * Allow the user to colour code items


Things to look at:

  * difference between .find and .findOne
  * POST for the search - taking data from form and sending it to Mongo... using find or findOne
  * why does find need to be mapped over?
  * Looping through to display the info on HBS
