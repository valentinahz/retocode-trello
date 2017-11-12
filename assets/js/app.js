window.addEventListener("load", function() {
	var contador =1;
	var boardMark = document.getElementById("boardMark");
	var btn = document.getElementById("button");
	var tarea = document.getElementById("listName");
	var formulario = document.getElementById("form");
	var tareas = document.getElementById("listAdd");
	var form = document.getElementById("form");
	form.style.display="none";
	btn.addEventListener("click",agregarTarjeta);

})
	
	function agregarTarjeta() {
		add.preventDefault();
		btn.style.display="none";
		form.style.display="inline-block";
		tarea.value= "";
		    var mark = document.createElement("div");
            var nameSpan = document.createElement("span");
            var dateSpan = document.createElement("span");
            var list = document.createElement("p");
            mark.appendChild(nameSpan);
            mark.appendChild(dateSpan);
            mark.appendChild(list);
            mark.className = "list"
            dateSpan.textContent = new Date();
            list.textContent = Input.value;

	}
}
