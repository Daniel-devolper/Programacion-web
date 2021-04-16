let mostraHora=()=>{
    let reloj=document.getElementById('reloj');
    let fechadato=document.getElementById('fec-datos');

    let fechaHora= new Date();
    let hora=fechaHora.getHours();
    let minutos=fechaHora.getMinutes();
    let segundos=fechaHora.getSeconds();
    let dia=fechaHora.getDate();
    let mes=fechaHora.getMonth();
    let ano=fechaHora.getFullYear();
    let dias=['Lunes','Martes','Miercoles','Jueves','Viernes','Sabado','domingo'];
    let meses=['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];

    let m=meses[mes];
    let hr=(hora>12)? hora-12:hora;
    let am=(hora>12)?'PM':'AM'; 
    if(hr<10){hr='0'+hr};
    if(minutos<10){minutos='0'+minutos};
    if(segundos<10){segundos='0'+segundos};

    reloj.textContent=`${hr}:${minutos}:${segundos} ${am}`;
    /*console.log('reloj');*/
    fechadato.textContent=`${dia}  ${m}  ${ano}`;
} 
setInterval(mostraHora,1000); //actlizar en timpo real
mostraHora();