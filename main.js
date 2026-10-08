const form = document.getElementById('pform');
const resultsDiv = document.getElementById('results');

const formatarMoeda = (val) => {
    return val.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
};

form.addEventListener('submit', function(event) {
    event.preventDefault(); 

    const formData = new FormData(form);
    const dataObj = Object.fromEntries(formData.entries());

    const products = ['apple', 'banana', 'grape', 'lemon', 'orange'];
    const discount = parseInt(dataObj["discount"], 10) || 0;

    let total = 0;

    products.forEach(p => {
        // Parse to integer in base 10
        const qnt = parseInt(dataObj[`${p}-qnt`], 10) || 0;
        const val = parseInt(dataObj[`${p}-val`], 10) || 0;

        total += (qnt * val);
    });

    const withDiscount = total * (1 - (discount/100));

    resultsDiv.innerHTML = `
        <div class="result"><span class="rtxt">Total s/ desconto:</span> <span class="rint">${formatarMoeda(total)}</span></div>
        <div class="result"><span class="rtxt">Total c/ desconto:</span> <span class="rint">${formatarMoeda(withDiscount)}</span></div>
    `;
});
