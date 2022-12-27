

const tabItems = $(".tab-item");
const tabContentItems = $(".tab-content-item");

//select tab content item

function selectItem(e)
{
    removeBorder();
    removeshow();
    //add border to current cllass
    this.classList.add("tab-border");
    //grab the content
    $("."+this.id+"-content").addClass("show");

    //const tabContentItem = document.querySelector(`#${this.id}-content`);

    //tabContentItem.classList.add("show");
}


function removeBorder()
{
    $(".tab-item").removeClass("tab-border");
}

function removeshow()
{
    $(".tab-content-item").removeClass("show");
}

//adding an event listener for clicks
$(".tab-item").on("click", selectItem);
