let  head =  document.querySelector("#one");

let hl2 = document.querySelector("#two");

let hl3 = document.querySelector(".clan");

let hl4 = document.querySelector("#goat");




let apikey = "f15249841bccdcec70ee50420df14c7e"

let apiURL = "https://api.openweathermap.org/data/2.5/weather?q="


async function changeWeather(city){
    try {
        const data = await fetch(apiURL + city + `&appid=${apikey}`);

        if(data.status == 404){
            document.querySelector(".disp").style.display ="block";
            document.querySelector(".weather").style.display ="none";
        }else{
            document.querySelector(".disp").style.display ="none";

        }
        let fetched = await data.json();
        console.log(fetched);
        head.innerHTML = Math.round(fetched.main.temp ) + "°C";
        hl2.innerHTML = fetched.name;
        hl3.innerHTML = fetched.main.humidity + "%";
        hl4.innerHTML = fetched.wind.speed + " km/hr";

        let image = document.querySelector(".shade");


        if(fetched.weather[0].main =="Clouds"){
            image.src="images/cloud.png";
        }else if(fetched.weather[0].main == "Rain"){
            image.src="images/rain.png"; 
        }else if(fetched.weather[0].main == "Clear"){
            image.src="images/sun.png";
        }else if(fetched.weather[0].main == 'Drizzle'){
            image.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAAepJREFUaN7tmd2thCAQhSnBEijBEmjgJpZgCZZgCZZgCXZwLcFX3yiBDlhIhhvC5dcdFzeB5LzsTtjz4cwwZomUknyzSANoAA2gATQANICSdZ4nA/Wk0ioGUGY7pVVJKElLXGl6NIAySMGojGh9MsCRMG80Pw5AmRozzRvppzVoGNCk068mwFYI4JPArpMSgB0BwGj5doAVutnsdDNdYwwVAH5o8rTNqzoyGsKIAqAvKETjRkNGQxC5BR8EuMm8vJCO0cKPAXBs83DyXcF9YmvKBoDHfIf5/o2DESUAM7L5HU6eez4fraFwzEwvYQo9BLDfcPrM2dek02jd1vZnOfuyEMCKaH52OwqMGaF04vBdDsQaApgQT546Jy9g/1gtcHgSqUxYQgD0xrwvgR9gn5D6WBtdEC6s6e55KQbQWd3hijqECVakxoq33okzXj03pFpiNQCOT4zfSYCf35MprUpHaBMrhltzlKwOoAx1SkJJgnqPeR3DrRhmXYZY6q8CLJaxP3NOzOzEjOSDKwigT9sxtnvM01RMTYDdMUc9AG5M/wgAnQaOsdljfnBiFlJh/QPwFK4u0C5RuMKNqQngFu7wtMJNAYhUUebE1ATYYoULAFvNwk0BmFuVZty8lFRe7S+mBtAAGkADeFsvKpKWeAy6FowAAAAASUVORK5CYII=";
        }else if(fetched.weather[0].main == "Mist"){
            image.src="images/mist.png";
        }else{
            image.src="This image has refused to load on your screen";
        }
        

        document.querySelector(".weather").style.display= "block";

        

        

        // switch(some){
        //    case fetched.weather[0].main == "Rain":
        //     image.src = "images/rain.png";
        //     break;
        //     case fetched.weather[0].main == "Clouds":
        //         image.src="images/cloud.png";
        //         break;
        //         case fetched.weather[0].main == "Clear":
        //             image.src = 'images/sun.png';
        //             break;
        //             case fetched.weather[0].main == "Drizzle":
        //                 image.src =  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAAepJREFUaN7tmd2thCAQhSnBEijBEmjgJpZgCZZgCZZgCXZwLcFX3yiBDlhIhhvC5dcdFzeB5LzsTtjz4cwwZomUknyzSANoAA2gATQANICSdZ4nA/Wk0ioGUGY7pVVJKElLXGl6NIAySMGojGh9MsCRMG80Pw5AmRozzRvppzVoGNCk068mwFYI4JPArpMSgB0BwGj5doAVutnsdDNdYwwVAH5o8rTNqzoyGsKIAqAvKETjRkNGQxC5BR8EuMm8vJCO0cKPAXBs83DyXcF9YmvKBoDHfIf5/o2DESUAM7L5HU6eez4fraFwzEwvYQo9BLDfcPrM2dek02jd1vZnOfuyEMCKaH52OwqMGaF04vBdDsQaApgQT546Jy9g/1gtcHgSqUxYQgD0xrwvgR9gn5D6WBtdEC6s6e55KQbQWd3hijqECVakxoq33okzXj03pFpiNQCOT4zfSYCf35MprUpHaBMrhltzlKwOoAx1SkJJgnqPeR3DrRhmXYZY6q8CLJaxP3NOzOzEjOSDKwigT9sxtnvM01RMTYDdMUc9AG5M/wgAnQaOsdljfnBiFlJh/QPwFK4u0C5RuMKNqQngFu7wtMJNAYhUUebE1ATYYoULAFvNwk0BmFuVZty8lFRe7S+mBtAAGkADeFsvKpKWeAy6FowAAAAASUVORK5CYII=";
        //                 break;
        //                 case fetched.weather[0].main == "Mist":
        //                     image.src = "images/mist.png";
        //                     break;
        //                     default:
        //                         image.alt = 'This image has refused to download'

        // }

    } catch (error) {
        console.log(error);
    }
}

let put = document.querySelector("#inputed");

let isa = document.querySelector("#btn");



isa.addEventListener("click", ()=>{
    changeWeather(put.value);

    put.value = "";
});