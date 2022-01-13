function randomAlert(){
    alert("Existe aproximadamente 25.000 baleias azuis no mundo, e elas estão em processo de extinção!")
};

function confirmFunc(){
    let text;
    if (confirm("Escolha um dos dois botões!")){
        text = "Você escolheu ok!";
    }
    else{
        text = "Você escolheu cancelar!"
    };
    document.getElementById('confirm').innerHTML = text;
};        

function userName(){
    let text;
    let pessoa = prompt("Insira seu nome:");
    if (pessoa == null || pessoa == ""){                
        text = "O usuário não inseriu nome algum!";
    } 
    else{
        text = `Olá ${pessoa}!`;            
        alert(`Olá ${pessoa}!`);            
    };
    document.getElementById("nome").innerHTML = text;                      
}; 

function userData(){            
    let txt;
    let pessoa = prompt("Insira seu nome:");
    if (pessoa == null || pessoa == ""){                
        txt = "O usuário não inseriu nome algum!";
    } 
    else{                
        txt = `Pessoa: ${pessoa}`;                
    };
    let age;
    let idade = prompt("Insira sua idade:");
    Number(idade);
    if (idade == null || idade == ""){                
        age = "O usuário não inseriu idade alguma!";
    } 
    else{                
        age = `Idade: ${idade}`;                
    };
    let esporte;                                      
    if (confirm("Você gosta de praticar esporte?")){
        esporte = "O usuário gosta de praticar esporte";                
    }                            
    else{                
        esporte = "O usuário não gosta de praticar esporte";                
    };
    console.log(txt);
    console.log(age);
    console.log(esporte);
};

function fullName(){
    let txt;
    let sobrenome = prompt("Insira seu sobrenome:");
    if (sobrenome == null || sobrenome == ""){                
        txt = "O usuário não preencheu corretamente o campo";
        alert(txt);
    } 
    else{                                
    };
    let nome = prompt("Insira seu primeiro nome:");
    if (nome == null || nome == ""){                
        txt = "O usuário não preencheu corretamente o campo";
        alert(txt);                
    } 
    else{                                
    };
    full_name = `Nome completo: ${nome} ${sobrenome}`;
    alert(full_name);               
}; 

function birthday(){
    let txt;
    let ano_atual = prompt("Insira o ano atual:");
    ano_atual = Number(ano_atual);
    if (ano_atual == null || ano_atual == ""){                
        txt = "O usuário não preencheu corretamente o campo";
        alert(txt);                
    } 
    else{                                
    };
    let ano_nasc = prompt("Insira o ano do seu nascimento:");
    ano_nasc = Number(ano_nasc);
    if (ano_nasc == null || ano_nasc == ""){                
        txt = "O usuário não preencheu corretamente o campo";
        alert(txt);                
    } 
    else{                                
    };
    let x, y;
    x = ano_atual - ano_nasc;
    y = x - 1;
    txt = `Sua idade é ${x} ou ${y}`;
    alert(txt);
};

function calc(){
    let txt = "O usuário não preencheu corretamente o campo";
    let c;
    let oper = prompt("Insira a operação que deseja fazer ( + | - | * | /):");    
    if (oper == null || oper == ""){                        
        alert(txt);                
    } 
    else{                                
    };
    let a = prompt("Insira o primeiro valor:");
    a = Number(a);
    if (a == null || a == ""){                        
        alert(txt);                
    } 
    else{                                
    };
    let b = prompt("Insira o segundo valor:");
    b = Number(b);
    if (b == null || b == ""){                        
        alert(txt);                
    } 
    else{                                
    };
    if (oper == "+"){
        c = a + b;
    }
    else if (oper == "-"){
        c = a - b;
    }
    else if (oper == "*"){
        c = a * b;
    }
    else if (oper == "/"){
        if (b == 0){
            let erro = "Segundo valor igual à 0, divisão impossível";
            alert(erro);
        }
        c = a / b;
    };
    let conta = `O resultado do seu cálculo é: ${c}`;
    alert(conta);
};

function currentTime(){
    let now = new Date();
    let h = now.getHours();
    let m = now.getMinutes();
    if (m < 10){
        m = "0" + m;
    };
    c_Time = `Horário: ${h}:${m}`;
    alert(c_Time);
};

function calcPA(){    
    let txt = "O usuário não preencheu corretamente o campo";
    let vi = prompt("Valor inicial da PA:");
    vi = Number(vi);
    if (vi == null ||vi == ""){
        alert(txt);                
    } 
    else{                                
    };
    let r = prompt("Valor da raiz da PA:");
    r = Number(r);
    if (r == null ||r == ""){
        alert(txt);                
    } 
    else{                                
    };    
    let pa = [];
    for (let i = 0; i < 10; i++){
        pa.push(vi);
        vi = vi + r;
    };
    show_PA = `Os 10 primeiros elementos da PA são: ${pa}`;
    alert(show_PA);    
};

function sobreNome(){
    let txt = "O usuário não preencheu corretamente o campo";
    let s_nome = prompt("Insira seu último sobrenome:");    
    if (s_nome == null ||s_nome == ""){
        alert(txt);                
    } 
    else{                                
    };
    up = s_nome.toUpperCase();
    show_Snome = `Olá, ${up}. Seu sobrenome contem ${s_nome.length} letras`
    alert(show_Snome);
};

function start(){
    calcPA();
    currentTime();
};