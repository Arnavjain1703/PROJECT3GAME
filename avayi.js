
var el = document.getElementById("player");
			

	window.addEventListener("keydown",checkKeyPress);
		function checkKeyPress(key)
		{
			if(key.keyCode=="39")
				{
					el.style.left = (el.offsetLeft += 10) + 'px';
				}
				if(key.keyCode=="37")

				{
					el.style.left = (el.offsetLeft -= 10) + 'px';
				}	
			if(key.keyCode=="40")
				{
					 el.style.top = (el.offsetTop += 10) + 'px';
				}
			if(key.keyCode=="38")
				{
					el.style.top = (el.offsetTop -= 10) + 'px';
				}		
		}
			
var object=document.querySelectorAll(".up")
     
   if(object[0].offsetLeft == el.offsetLeft)
   {
   	alert("navkarmantra");
   }

