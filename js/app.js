document.addEventListener("DOMContentLoaded", () => {

    const btnCalcular = document.getElementById("btn_calcular");
    const valorInput = document.getElementById("valor_venda");

    const valorMin = 389.99;

    if(window.location.pathname.endsWith("index.html")){
        
        const showValorMin = document.getElementById("valor_minimo");

        showValorMin.textContent = `Valor mínimo: ${(valorMin).toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}`;
        btnCalcular.addEventListener("click", () => {
            const valorVendaInput = parseFloat(valorInput.value.replace(",", "."));
            
            if(valorVendaInput < valorMin){
                alert("ERRO! Valor menor que R$ 389,99");
            }else{

            localStorage.setItem("valorVenda", valorVendaInput);
        
            window.location.href = "showCalculate.html"; 
            }
        });

    } else if(window.location.pathname.endsWith("showCalculate.html")){

        const valorVenda = parseFloat(localStorage.getItem("valorVenda"));

        // Capturando elementos HTML da Lista
        const parcela_01 = document.getElementById("parcela_01");
        const total_parcela_01 = document.getElementById("total_01");

        const parcela_02 = document.getElementById("parcela_02");
        const total_parcela_02 = document.getElementById("total_02");

        const parcela_03 = document.getElementById("parcela_03");
        const total_parcela_03 = document.getElementById("total_03");

        const parcela_04 = document.getElementById("parcela_04");
        const total_parcela_04 = document.getElementById("total_04");

        const parcela_05 = document.getElementById("parcela_05");
        const total_parcela_05 = document.getElementById("total_05");

        const parcela_06 = document.getElementById("parcela_06");
        const total_parcela_06 = document.getElementById("total_06");

        const parcela_07 = document.getElementById("parcela_07");
        const total_parcela_07 = document.getElementById("total_07");

        const parcela_08 = document.getElementById("parcela_08");
        const total_parcela_08 = document.getElementById("total_08");

        const parcela_09 = document.getElementById("parcela_09");
        const total_parcela_09 = document.getElementById("total_09");

        const parcela_10 = document.getElementById("parcela_10");
        const total_parcela_10 = document.getElementById("total_10");

        
        //Exibindo valor principal a ser calculado
        const valorPrincpal = document.getElementById("valorPrincipal");
        valorPrincpal.textContent = `Valor calculado: ${(valorVenda).toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}`;

        // Formatando parcelas e exibindo resultado
        parcela_01.textContent = `1x ${(((valorVenda / 100) * 3.40 + valorVenda)).toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}`;
        total_parcela_01.textContent = `Á vista`;

        parcela_02.textContent = `2x ${(((valorVenda / 100) * 4.60 + valorVenda) / 2).toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}`;
        total_parcela_02.textContent = `${((valorVenda / 100) * 4.60 + valorVenda).toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}`;
        
        parcela_03.textContent = `3x ${(((valorVenda / 100) * 5.40 + valorVenda) / 3).toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}`;
        total_parcela_03.textContent = `${((valorVenda / 100) * 5.40 + valorVenda).toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}`;

        parcela_04.textContent = `4x ${(((valorVenda / 100) * 6.12 + valorVenda) / 4).toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}`;
        total_parcela_04.textContent = `${((valorVenda / 100) * 6.12 + valorVenda).toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}`;

        parcela_05.textContent = `5x ${(((valorVenda / 100) * 6.90 + valorVenda) / 5).toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}`;
        total_parcela_05.textContent = `${((valorVenda / 100) * 6.90 + valorVenda).toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}`;

        parcela_06.textContent = `6x ${(((valorVenda / 100) * 7.70 + valorVenda) / 6).toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}`;
        total_parcela_06.textContent = `${((valorVenda / 100) * 7.70 + valorVenda).toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}`;

        parcela_07.textContent = `7x ${(((valorVenda / 100) * 8.70 + valorVenda) / 7).toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}`;
        total_parcela_07.textContent = `${((valorVenda / 100) * 8.70 + valorVenda).toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}`;

        parcela_08.textContent = `8x ${(((valorVenda / 100) * 9.45 + valorVenda) / 8).toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}`;
        total_parcela_08.textContent = `${((valorVenda / 100) * 9.45 + valorVenda).toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}`;

        parcela_09.textContent = `9x ${(((valorVenda / 100) * 10.25 + valorVenda) / 9).toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}`;
        total_parcela_09.textContent = `${((valorVenda / 100) * 10.25 + valorVenda).toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}`;

        parcela_10.textContent = `10x ${(((valorVenda / 100) * 11.25 + valorVenda) / 10).toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}`;
        total_parcela_10.textContent = `${((valorVenda / 100) * 11.25 + valorVenda).toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}`;
    }


});