var unreadMessages = document.getElementsByClassName("v-MailboxSource-badge")
console.log(unreadMessages)

chrome.runtime.sendMessage({method: "getUnreadCount"}, function(unreadMessages) {
    console.log(unreadMessages)
})