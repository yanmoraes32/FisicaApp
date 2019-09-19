function conversor(direção) {
        //instanciando objetos
        var far = document.convert.faretemperatura, cel = document.convert.celsiusTemperatura, kel = document.convert.kelvinTemperatura;

        //definindo direções para conversões
        if (direção == "ftoc") //  o  input f receber valor
        {
                cel.value = Math.round((far.value - 32) * (5 / 9));
                kel.value = Math.round((parseFloat(cel.value) + 459.67) * (5 / 9));
                if (kel.value < 0) {
                        var r = alert("Não é aceito pois ficou um Valor negativo em kelvin!");
                        if (r == true) {
                                window.location.reload();
                        }

                }

        }
        else if (direção == "ktof") // o  input k receber valor
        {
                far.value = Math.round((parseFloat(cel.value) * (9 / 5)) - 459.67);
                cel.value = Math.round((far.value - 32) * (5 / 9));

        }
        else//o input c receber valor
        {
                far.value = Math.round((parseFloat(cel.value) * (9 / 5)) + 32);
                kel.value = Math.round((parseFloat(cel.value) + 273));
                if (kel.value < 0) {
                        var r = alert("Não é aceito pois ficou um Valor negativo em kelvin!");
                        if (r == true) {
                                window.location.reload();
                        }

                }
        }
}



function LimparTudo() // Definido o input limpar com sua devida função
{
        document.convert.faretemp.value = "";
        document.convert.celtemp.value = "";
        document.convert.keltemp.value = "";

}


function date_time(id) {


        date = new Date;
        year = date.getFullYear();
        month = date.getMonth();
        months = new Array('Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outbro', 'Novembro', 'Dezembro');
        d = date.getDate();
        day = date.getDay();
        days = new Array('Domingo', 'Segunda - Feira', 'Terça - Feira', 'Quarta - Feira', 'Quinta - Feira', 'Sexta - Feira', 'Sabado');
        h = date.getHours();
        if (h < 10) {
                h = "0" + h;
        }
        m = date.getMinutes();
        if (m < 10) {
                m = "0" + m;
        }
        s = date.getSeconds();
        if (s < 10) {
                s = "0" + s;
        }
        result = 'Bem Vindo, Hoje é ' + days[day] + ' ' + d + ' ' + months[month] + ' ' + year + " . Aproveite nosso App";
        document.getElementById(id).innerHTML = result;
        setTimeout('date_time("' + id + '");', '1000');
        return true;
}
