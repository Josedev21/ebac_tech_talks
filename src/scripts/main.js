AOS.init();

const DataDoEvento = new Date("May 25, 2024 18:00:00");
const TimeStampDoEvento = DataDoEvento.getTime();

const ContaAsHoras = setInterval(function(){
    const Agora = new Date();
    const TimeStampAtual = Agora.getTime();

    const distanciaAteOEvento = TimeStampDoEvento - TimeStampAtual;

    const diasEmMs = 1000 * 60 * 60 * 24;
    const horasEmMs = 1000 * 60 * 60;
    const minutosEmMs = 1000 * 60;

    const diasAteOEvento =  Math.floor(distanciaAteOEvento / diasEmMs);
    const horasDoEvento = Math.floor((distanciaAteOEvento % diasEmMs) / horasEmMs);
    const minutosAteOEvento = Math.floor(distanciaAteOEvento % horasEmMs / minutosEmMs);
    const segundosAteOEvento = Math.floor((distanciaAteOEvento % minutosEmMs) / 1000);

    console.log(diasAteOEvento);
    console.log(horasDoEvento);
    console.log(minutosAteOEvento);
    console.log(segundosAteOEvento);

    document.getElementById('contador').innerHTML = `${diasAteOEvento}d ${horasDoEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`

    if(distanciaAteOEvento < 0) {
        clearInterval(ContaAsHoras);
        document.getElementById('contador').innerHTML = '(Evento expirado !)'
    }
},1000)