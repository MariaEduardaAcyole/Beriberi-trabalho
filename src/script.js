function calculo(){
    let peso = document.getElementById('peso')
    let altura = document.getElementById('altura')
    let imc  = document.getElementById('imc')
    let res = document.getElementById('res')
      let p = Number(peso.value)
      let a = Number(altura.value)

      a = a/100
      imc = p/(a^2)


//abaixo do peso 
        if (imc < 18.5){
            res.innerHTML = `IMC: ${imc}, OPÇÃO 1` // 
        }
//peso normal
        else if (imc > 18.5 && imc < 25){
            res.innerHTML = `IMC: ${imc}, OPÇÃO 2` 
        }
//sobrepeso
        else if (imc > 25 && imc < 29.9){
            res.innerHTML = `IMC: ${imc}, OPÇÃO 3`
        }
//obesidade grau 1
        else if (imc > 30 && imc < 34.9){
            res.innerHTML = `IMC: ${imc}, OPÇÃO 4`
        }
//obesidade grau 2
        else if (imc > 35 && imc < 39.9){
            res.innerHTML = `IMC: ${imc}, OPÇÃO 5`
        }
//obesidade grau 3
        else if (imc > 40 ){
            res.innerHTML = `IMC: ${imc}, OPÇÃO 6`
        }

      }

      function qtdChecados(){
        var inputs,i,checados=0;
        inputs = document.getElementsByClassName('checkbox');//pegando os inputs e jogando num array        
        for(i=0; i < inputs.length; i++){//varrendo o array que tem os inputs
        if(inputs[i].type=='checkbox'){ //se os inputs forem checkbox
        if(inputs[i].checked==true){
        checados++;
        }
        }
        }

        let campo = document.getElementById('campo')
        campo.innerHTML = `Sintomas Presentes: ${checados}` 
  
      }

