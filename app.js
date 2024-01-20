const btn = document.getElementById('btn')
let counter = 0

btn.addEventListener('click', () => {
	counter++
	btn.textContent = counter
	if (counter == 15) {
		alert("иди делами занимайся")
	} else if (counter == 24) {
		alert('это я твоя мышка! отьебись от меня!!!!!')
	} 
	 else if (counter == 32) {
		alert('мдааааа те лет то сколько')
	} else if (counter == 39){
		alert('яВахуи')
		btn.classList.add('rotate')
	}
	 else if (counter == 44){
		alert('ненадо я же лопну')
		btn.classList.add('scale')
	}
	 else if (counter == 48){
		alert('ЫАЫВАВЫЫЫЫЫЫ....')
		btn.classList.add('skew')
	}
	 else if (counter == 55){
		alert('НЕЕЕЕЕЕТ.....')
		btn.classList.add('opacity')
	}
})

