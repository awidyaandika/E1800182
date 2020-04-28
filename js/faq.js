var list = document.getElementsByClassName("list");

for (let i = 0; i < list.length; i++) {
	list[i].addEventListener("click", function(){
		this.classList.toggle("active");
		var details = this.nextElementSibling;
		if (details.style.maxHeight) {
			details.style.maxHeight = null;
		} else {
			details.style.maxHeight = details.scrollHeight + "px";
		}
	});
}