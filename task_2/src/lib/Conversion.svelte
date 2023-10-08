<script lang="ts">
    import transferImg from '../assets/transfer.png'

    const currencies: string[] = ["USD", "AED", "ARS", "AUD", "CAD", "CHF", "CLP", "CNY", "EUR", "GBP", "HKD", "RUB", "AMD"]
    let rates;
    let currency1: string = "";
    let currency2: string = "";
    let sum1: number = 0;
    let sum2: number = 0;

    const fetchRates = async (currency: string) => {
        const response = await fetch(`https://open.er-api.com/v6/latest/${currency}`);
        const result = await response.json();
        rates = result.rates;
        currency1 = currency;
        convert(1);
        convert(2);
    }

    const convert = (inputNumber: number) => {
        const factor = inputNumber === 1 ? rates[currency2] : 1 / rates[currency2];
        if (inputNumber === 1) {
            sum2 = sum1 * factor;
        } else {
            sum1 = sum2 * factor;
        }
    }

    const validateInput = (e, inputNumber) => {
        e.target.value = e.target.value.replace(/^0+/, '') || '0';
        convert(inputNumber);
    }
</script>

<div class="conversion">
    <div>
        <select bind:value={currency1} on:change={(e) => fetchRates(e.target.value)}>
            <option value="" disabled selected>Выберите валюту из списка</option>
            {#each currencies.filter(i => i !== currency2) as currency}
                <option value={currency}>{currency}</option>
            {/each}
        </select>
        <input bind:value={sum1} on:input={(e) => validateInput(e, 1)} disabled={!currency1 || !currency2} min="0" type="number" />
    </div>

    <div><img src={transferImg} alt="transfer"/></div>

    <div>
        <select bind:value={currency2} on:change={(e) => { currency2 = e.target.value; fetchRates(currency1); }}>
            <option value="" disabled selected>Выберите валюту из списка</option>
            {#each currencies.filter(i => i !== currency1) as currency}
                <option value={currency}>{currency}</option>
            {/each}
        </select>
        <input bind:value={sum2} on:input={(e) => validateInput(e, 2)} disabled={!currency1 || !currency2} min="0" type="number" />
    </div>
</div>

<style>
    .conversion {
        display: flex;
    }

    div {
        align-items: center;
    }

    img {
        margin: 0 20px;
        width: 30px;
    }

    input {
        height: 48px;
        min-width: 200px;
        border-radius: 8px;
        font-size: 24px;
        padding-left: 10px;
    }


</style>