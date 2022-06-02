let count = 0;

const CURRENT_NUMBER = document.getElementById('currentNumber');




	//Função incremento de >=-10 a 9 Positivo que vai ser = 10 
	function increment (){
		if(count >=-10 && count<=9 ){ //if(count >=0 && count<=9 ){
			count++;
			CURRENT_NUMBER.innerHTML = count;
			
		}
		//Quando count >=0 a cor black é aplicada na exibição
		if(count>=0){
			document.getElementById('currentNumber').style.color = 'black'
		}
		//Quando count>=10 é exibido um alerta na tela sobre o limite maximo
		if(count>=10){
			alert("O limite do contador é 10");
		}
		
	}

	//Função decremento de >=-9 a 10 Positivo diminui count 	
	function decrement(){
		if(count>=-9 && count <=10){
			count--;
			CURRENT_NUMBER.innerHTML = count;
			
		}
		//Quando count <=-1 a cor red é aplicada na exibição
		if(count<=-1){
			document.getElementById('currentNumber').style.color = 'red';
		}
		//Quando count<=-10 é exibido um alerta na tela sobre o limite maximo
		if(count<=-10){
			alert("O limite do contador é -10");
		}
	}

	






