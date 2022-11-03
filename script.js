const form = document.getElementById("form");
const inputNumber = document.getElementById("inputNumber");
const header = document.getElementById("header");
const main = document.getElementById("main");
const mainContainer = document.getElementById("mainContainer");
const voltar = document.getElementById("voltar");


form.addEventListener("submit", function(event) {
    event.preventDefault();
    header.className = "hide";
    mainContainer.style.display = "flex";
    main.style.display = "flex";
    const userInput = inputNumber.value;
    const contriPrev = (userInput * 0.08).toFixed(2);
    const GILRAT = (userInput * 0.008).toFixed(2);
    const FGTSmensal = (userInput * 0.08).toFixed(2);
    const FGTScomp = (userInput * 0.032).toFixed(2);
    const sumOfEncargos = (parseFloat(userInput) + parseFloat(contriPrev) + parseFloat(GILRAT) + parseFloat(FGTSmensal) + parseFloat(FGTScomp)).toFixed(2);
    const prov13 = (parseFloat(sumOfEncargos) / 12).toFixed(2);
    const provFerias = ((parseFloat(sumOfEncargos) + (parseFloat(sumOfEncargos) * 1/3)) / 12).toFixed(2);
    const totalProvisionar = (parseFloat(prov13) + parseFloat(provFerias)).toFixed(2);
    const custoReal = (parseFloat(totalProvisionar) + parseFloat(sumOfEncargos)).toFixed(2);
    document.getElementById("spanSalario").innerText = `R$: ${userInput}`;
    document.getElementById("contriPrev").innerText = `R$: ${contriPrev}`;
    document.getElementById("GILRAT").innerText = `R$: ${GILRAT}`;
    document.getElementById("FGTSmensal").innerText = `R$: ${FGTSmensal}`;
    document.getElementById("FGTScomp").innerText = `R$: ${FGTScomp}`;
    document.getElementById("salarioMaisEncargos").innerText = `R$: ${sumOfEncargos}`;
    document.getElementById("prov13").innerText = `R$: ${prov13}`;
    document.getElementById("provFerias").innerText = `R$: ${provFerias}`;
    document.getElementById("totalProvisionar").innerText = `R$: ${totalProvisionar}`;
    document.getElementById("custoReal").innerText = `R$: ${custoReal}`;






});

voltar.addEventListener("click", function() {
    header.className = "";
    mainContainer.style.display = "none";
    main.style.display = "none";
})


// test those numbers 1310 1311 1500 and 1238.11