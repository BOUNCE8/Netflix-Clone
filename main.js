const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item'); 

// Listens for tab click by user
tabItems.forEach(item => item.addEventListener('click', selectItem));

function selectItem(e) {
    // Removes all borders
    removeBorder();
    removeShow();
    // Add border to current tab
    this.classList.add('tab-border');
    // Target 'tab content' that is clicked
    const tabContentItem = document.querySelector(`#${this.id}-content`);
    // Add 'show' to selected tab
    tabContentItem.classList.add('show');
    
}

// Function that removes 'border' from all tabs
function removeBorder() {
    tabItems.forEach(item => item.classList.remove('tab-border'));
}

// Function that removes 'show' from all tabs.
function removeShow() {
    tabContentItems.forEach(tab => tab.classList.remove('show'));
}

// function switchTab(e) {
//     selectItem(e) {
//         this.classList.remove('show');
//     }
// }