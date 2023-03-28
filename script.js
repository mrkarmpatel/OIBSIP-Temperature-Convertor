const form = document.getElementById('generate-form');

//form-submit
const onGenerateSubmit = (e) => {
    e.preventDefault();

    const from = document.getElementById('from').value;
    const to = document.getElementById('to').value;
    const value = parseFloat(document.getElementById('temp_value').value);
    //restriction
    const regex = /^(\-|\+|[0-9])(\d|\.){0,10}$/mg;

    if(value === ''){
        alert('Please Enter The Value');
    }
    else if(regex.test(value) === false){
      alert('Please Enter The Valid Value');
    }
    else{

        if(from === 'Celcius'){
           let Celcius_val = roundTo(value);
           let Fehrenheit_val = roundTo(((9/5) * (value)) + 32);
           let Kelvin_val = roundTo((value * 1) + 273.15); 
        
           get_value(Celcius_val, Fehrenheit_val, Kelvin_val);
           display_box(to);
        }
        else if(from === 'Fehrenheit'){
           let Celcius_val = roundTo((5/9) * (value - 32));
           let Fehrenheit_val = roundTo(value);
           let Kelvin_val = roundTo((5/9 * (value - 32)) + 273.15);

           get_value(Celcius_val, Fehrenheit_val, Kelvin_val);
           display_box(to);
        }
        else if(from === 'Kelvin'){
           let Celcius_val = roundTo(value - 273.15);
           let Fehrenheit_val = roundTo(((9/5) * (value - 273.15)) + 32);
           let Kelvin_val = roundTo(value);
           
           get_value(Celcius_val, Fehrenheit_val, Kelvin_val);
           display_box(to);
        }

    }
}

//result show

const get_value = (Celcius_val, Fehrenheit_val, Kelvin_val) => {
    document.getElementById('it1').innerText = `${Celcius_val} \xB0C`;
    document.getElementById('it2').innerText = `${Fehrenheit_val} \xB0F`;
    document.getElementById('it3').innerText = `${Kelvin_val} \xB0K`;
}

const display_box = (to) => {
    const item1 = document.getElementById('item1');
    const item2 = document.getElementById('item2');
    const item3 = document.getElementById('item3');

    if(to === 'All'){
        item1.style.display = 'flex';
        item2.style.display = 'flex';
        item3.style.display = 'flex';
     }else if(to === 'Celcius'){
        item1.style.display = 'flex';
     }else if(to === 'Fehrenheit'){
        item2.style.display = 'flex';
     }else if(to === 'Kelvin'){
        item3.style.display = 'flex';
     }
}

const clearUI = () => {
    document.getElementById('item1').style.display = 'none';
    document.getElementById('item2').style.display = 'none';
    document.getElementById('item3').style.display = 'none';
}

//round the number
const roundTo = (num) => {
    return +(Math.round(num + "e+" + 2) + "e-" + 2);
}

form.addEventListener('submit', onGenerateSubmit);
form.addEventListener('click', clearUI);