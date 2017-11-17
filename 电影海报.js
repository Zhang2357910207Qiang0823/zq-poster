window.onload = function() {
	
	//找对象
	var pic1 = document.getElementById('pic1');
	var pic2 = document.getElementById('pic2');
	var pic3 = document.getElementById('pic3');
	var pic4 = document.getElementById('pic4');
	
	var container1 = document.getElementById('container1');
	var container2 = document.getElementById('container2');
	var container3 = document.getElementById('container3');
	var container4 = document.getElementById('container4');
	
	var t1 = document.getElementById('t1');
	var t2 = document.getElementById('t2');
	var t3 = document.getElementById('t3');
	var t4 = document.getElementById('t4');
	
	t1.style.border = '3px solid yellow';
	t2.style.border = '';
	t3.style.border = '';
	t4.style.border = '';
	
	container1.style.display = 'block';
	container2.style.display = 'none';
	container3.style.display = 'none';
	container4.style.display = 'none';
	
	pic1.onclick = function() {
		
		t1.style.border = '3px solid yellow';
		t2.style.border = '';
		t3.style.border = '';
		t4.style.border = '';
		
		container1.style.display = 'block';
		container2.style.display = 'none';
		container3.style.display = 'none';
		container4.style.display = 'none';
		
	}
	
	pic2.onclick = function() {
		
		t1.style.border = '';
		t2.style.border = '3px solid yellow';
		t3.style.border = '';
		t4.style.border = '';
		
		container1.style.display = 'none';
		container2.style.display = 'block';
		container3.style.display = 'none';
		container4.style.display = 'none';
		
	}
	
	pic3.onclick = function() {
		
		t1.style.border = '';
		t2.style.border = '';
		t3.style.border = '3px solid yellow';
		t4.style.border = '';
		
		container1.style.display = 'none';
		container2.style.display = 'none';
		container3.style.display = 'block';
		container4.style.display = 'none';
		
	}
	
	pic4.onclick = function() {
		
		t1.style.border = '';
		t2.style.border = '';
		t3.style.border = '';
		t4.style.border = '3px solid yellow';
		
		container1.style.display = 'none';
		container2.style.display = 'none';
		container3.style.display = 'none';
		container4.style.display = 'block';
		
	}
	
}
