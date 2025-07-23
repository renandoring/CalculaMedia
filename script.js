//console.log("Ola Mundo!"); //Exercicio 1

function clicou() {
    //console.log("Clicou no botao!");
    let pegaNome = window.prompt("Digite o nome do professor:");
    let nomeAluno = window.prompt("Digite o nome do aluno:");

    // Verifica se o usuário digitou algo
    if (pegaNome === null || pegaNome.trim() === "") {
        window.alert("Por favor, digite um nome válido!");
        return; // Sai da função se o nome for inválido
    } else if (nomeAluno === null || nomeAluno.trim() === "") {
        window.alert("Por favor, digite o nome do aluno!");
        return; // Sai da função se o nome do aluno for inválido
    }

    if (pegaNome !== null && pegaNome !== "") {
        // Exibe a saudação
        let saudacao = "Olá professor, <strong>" + pegaNome + "</strong>! Seja bem-vindo!";
        let saudacaoAluno = "Você é o responsável pelo cálculo de média da aluno(a): <strong>" + nomeAluno + "</strong>!";
        let aluno = nomeAluno;

        // Atualiza o conteúdo dos elementos HTML
        document.getElementById("aluno").innerHTML = aluno; // Exibe o nome do aluno 
        document.getElementById("saudacao").innerHTML = saudacao;
        document.getElementById("saudacaoAluno").innerHTML = saudacaoAluno;
        //console.log(saudacao);
        //console.log(saudacaoAluno);  

        // Exibe os elementos HTML
        document.querySelector("#saudacao").style.display = 'inline-block'; // Exibe a saudação
        document.querySelector("#saudacaoAluno").style.display = 'inline-block'; // Exibe a saudação do aluno
        document.querySelector("#calcular").style.display = 'inline-block'; // Exibe o botão de calcular
        document.querySelector("#reiniciar").style.display = 'inline-block'; // Exibe o botão de reiniciar

        //window.alert(`Olá professor, ${pegaNome} Seja Bem vindo!`); //Exercicio 2
        //window.alert(`Você é o responsável pelo calculo de média de: ${nomeAluno}!`); //Exercicio 3
    }
}

function calcular() {
    let num1 = Number(window.prompt("Digite a primeira nota"));
    let num2 = Number(window.prompt("Digite a segunda nota"));
    let num3 = Number(window.prompt("Digite a terceira nota"));
    let pegaNome = document.getElementById("aluno").innerHTML; // Pega o nome do aluno
    let resultado = document.querySelector("#resultado");

    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
        window.alert("Por favor, digite números válidos!");
        return; // Sai da função se algum número for inválido
    } else {
        // Exibe o resultado
        document.querySelector("#resultado").style.display = 'inline-block'; // Exibe o resultado
        document.querySelector("#limpaTudo").style.display = 'inline-block'; // Exibe o botão de limpar
        document.querySelector("#salvaMedia").style.display = 'inline-block'; // Esconde o botão de calcular
        resultado.innerHTML = `A Média final do Aluno(a): ${pegaNome} é ${(num1 + num2 + num3) / 2}.`;
    }

    if ((num1 + num2 + num3) / 3 >= 7) {
        resultado.innerHTML += "<br>O aluno está <strong>APROVADO</strong>!";
    } else if ((num1 + num2 + num3) / 3 >= 5) {
        resultado.innerHTML += "<br>O aluno está <strong>EM RECUPERAÇÃO</strong>!";
    } else {
        resultado.innerHTML += "<br>O aluno está <strong>REPROVADO</strong>!";
    }
}

function limpa() {
    // Limpa o campo de saudação
    document.querySelector("#saudacao").style.display = 'none';
    document.querySelector("#saudacaoAluno").style.display = 'none'; // Esconde a saudação
    document.querySelector("#resultado").style.display = 'none'; // Esconde o resultado
    document.querySelector("#calcular").style.display = 'none'; // Esconde o botão de calcular
    document.querySelector("#limpaTudo").style.display = 'none'; // Esconde o botão de limpar
    document.querySelector("#salvaMedia").style.display = 'none'; // Esconde o botão de salvar média
    document.querySelector("#reiniciar").style.display = 'none'; // Esconde o botão de reiniciar
}
