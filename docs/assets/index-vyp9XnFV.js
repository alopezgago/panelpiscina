(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const u of n.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&a(u)}).observe(document,{childList:!0,subtree:!0});function t(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(o){if(o.ep)return;o.ep=!0;const n=t(o);fetch(o.href,n)}})();const w=`<header>
    <div class = "cabecera">
        <div>
        <!-- <img src="./public/icons/fremap_sd_hor_vectorizado.svg" alt="Logo" height="100px"/> -->
        </div>
        <div>
            <h1> [Logo] Panel informativo - Piscina (En pruebas)</h1>
        </div>
    </div>
</header>

<!-- ver https://dev.to/webfaisalbd/responsive-card-using-flex-and-grid-48jk -->

<div class="panel">
    <!-- contenedor-grupo 1 -->
    <!-- <div>
        <img src="../assets/icons/aq_indoor_40dp_FILL0_wght400_GRAD0_opsz40.svg" alt="Aire" class="img-texto-medio"/>
        <span class="nombre-grupo"> Datos Ambientales</span>
    </div>
    <div class="container">
        
    </div> -->
 



</div>        <!-- PANEL fin -->

`;class l{constructor(r="ind-00",t="Indicador",a="0",o="Numero",n="mmm",u=1,g="Grupo ND",b="",v=new Date){this.id=r,this.nombre=t,this.valor=a,this.tipo=o,this.magnitud=n,this.grupo=g,this.paso=u,this.detalle=b,this.updateAt=v}}class p{constructor(r="gru-00",t="grupo",a=new Date){this.id=r,this.nombre=t,this.updateAt=a}}const s={Numero:"numero",Horas:"hh:mm",Texto:"texto"},c={ambiente:"gru-01",agua:"gru-02",obs:"gru-03"},m={indicadores:[new l("ind-01","Temperatura",24.1,s.Numero,"ºC",1,c.ambiente,"",new Date),new l("ind-02","Humedad relativa",23,s.Numero,"%",1,c.ambiente,"",new Date),new l("ind-03","Calidad Aire",452,s.Numero,"ppm",1,c.ambiente,"Concentración C02",new Date),new l("ind-04","Temperatura Agua",23,s.Numero,"ºC",1,c.agua,"",new Date),new l("ind-05","Cloro Libre Residual",2.1,s.Numero,"mg/l",1,c.agua,"",new Date),new l("ind-06","Turbidez",2,s.Numero,"UNF",1,c.agua,"",new Date),new l("ind-07","Tiempo Recirculación","01:30",s.Horas,"hh:mm",5,c.agua,"",new Date),new l("ind-08","Transparencia",9,s.Numero,"x",1,c.agua,"",new Date),new l("ind-09","Desinfectante","Hipoclorito sódico",s.Texto,"",1,c.agua,"",new Date),new l("ind-10","Observaciones","...",s.Texto,"",1,c.obs,"",new Date)],grupos:[new p("gru-01","Datos Ambientales"),new p("gru-02","Datos del Agua"),new p("gru-03","Observaciones")],observaciones:"",fecha:new Date},L=()=>{console.log("Store inicializado (:-)")},f=()=>[...m.indicadores],y=()=>[...m.grupos],D=e=>{if(!e)throw new Error("Store (getStoreIndbyId): se requiere el Id del indicador");let r=m.indicadores.find(t=>t.id===e);if(!r)throw new Error("Store (getStoreIndbyId): No hay indicador con ese id");return r},S=(e,r)=>{if(!e)throw new Error("Store (actualizaValor): El indicador es necesario");if(r&&typeof r!="number")throw new Error("Store (actualizaValor): El paso debe ser númerico");let t=m.indicadores.find(a=>a.id===e);switch((!r||typeof r!="number")&&(r=t.paso),t.tipo){case s.Numero:if(typeof t.valor!="number")throw new Error("Método de Store (actualizaValor): El valor debe ser un número si el tipo es número");t.valor=t.valor*1+r,t.updateAt=new Date;break;case s.Horas:let a=t.valor.split(":");if(a.length!=2)throw new Error("Método de Store (actualizaValor): Si es tipo hora, el valor debe contener :");let o=Number(a[0])*60+Number(a[1]);o=o+r*1,o<=0&&(o=0),o>=5999&&(o=5999);let n=Math.trunc(o/60),u=o%60;t.valor=("0"+n.toString()).slice(-2)+":"+("0"+u.toString()).slice(-2),t.updateAt=new Date;break}},T=()=>{throw new Error("No implementado")},_=()=>{throw new Error("No implementado")},d={actualizaValor:S,getIndicadorById:D,getIndicadores:f,getGrupos:y,initStore:L,onIndicadorChanged:T,reloadPage:_,TiposGrupo:c,TiposInd:s},i={dmahms:"d/m/aa-hh:mm:ss",dmahm:"d/m/aa-hh:mm",dma:"d/m/aa",dia:"d",hhmm:"hh:mm",hhmmss:"hh:mm:ss",ddmmaaLocal:"ddmmaaLocal",fechaLocalLarga:"fechaLarga",fechaLocalCorta:"fechaCorta",fyhLocalLarga:"fyhLarga",fyhLocalCorta:"fyhCorta",prueba:"prueba"},I=(e=new Date,r=FormatoFecha.dmahm)=>{if(!e)throw new Error("use-case (formateaFecha): Un objeto tipo Date es requerido");let t="";switch(r){case i.dmahms:t=e.getDate()+"/"+e.getMonth()+"/"+e.getFullYear()+"-"+e.getHours()+":"+e.getMinutes()+":"+e.getSeconds();break;case i.dmahm:t=e.getDate()+"/"+e.getMonth()+"/"+e.getFullYear()+"-"+e.getHours()+":"+e.getMinutes();break;case i.dma:t=e.getDate()+"/"+e.getMonth()+"/"+e.getFullYear();break;case i.hhmm:t=e.toLocaleTimeString("es-es",{hour:"2-digit",minute:"2-digit",second:"numeric"});break;case i.hhmm:t=e.toLocaleTimeString("es-es",{hour:"2-digit",minute:"2-digit"});break;case i.d:t=e.getDate();break;case i.fechaLocalLarga:t=e.toLocaleDateString("es-es",{year:"2-digit",month:"2-digit",day:"2-digit"});break;case i.fechaLocalLarga:t=e.toLocaleDateString("es-es",{weekday:"long",year:"numeric",month:"short",day:"numeric"});break;case i.fyhLocalLarga:t=e.toLocaleDateString("es-es",{weekday:"long",year:"numeric",month:"long",day:"numeric"})+"-"+e.toLocaleTimeString("es-es",{hour:"2-digit",minute:"2-digit"});break;case i.fyhLocalCorta:t=e.toLocaleDateString("es-es",{weekday:"short",year:"numeric",month:"short",day:"numeric"})+"-"+e.toLocaleTimeString("es-es",{hour:"2-digit",minute:"2-digit"});break;case i.prueba:t=e.toLocaleDateString("es-es",{year:"2-digit",month:"2-digit",day:"2-digit"});break;default:t="revisa formato";break}return t},E=e=>{let r="";switch(e){case d.TiposGrupo.ambiente:r="tarjeta-borde-ambiente";break;case d.TiposGrupo.agua:r="tarjeta-borde-agua";break;case d.TiposGrupo.obs:r="tarjeta-borde-blanco";break;default:r="tarjeta-borde-blanco";break}return r},N=e=>{if(!e)throw new Error("Un objeto tipo indicador es requerido");let r=I(e.updateAt,i.prueba),t=E(e.grupo);console.log(t);const a=`<!-- tarjeta 1.1 ${e.id}-->
        <div class="card-header">
            <span class="nombre-indicador">
                ${e.nombre}
                <small>(${e.magnitud})</small>
            </span>
        </div>
        <div id=${e.id} class="card-body">
            <div class="botonera ${e.tipo==d.TiposInd.Texto?"ocultar-elemento":""} ">
                <button id="btnMas-${e.id}" name="btn-ind-3-mas" class="btnMas valor-numero boton-1">
                    <img src="../assets/icons/keyboard_arrow_up_40dp_FILL0_wght400_GRAD0_opsz40.svg" alt="+"  class = "icono-masmenos" />
                </button>
            </div>
            <div>
                <span
                    id="span-valor-${e.id}" 
                    class="${e.tipo==d.TiposInd.Texto?"valor-texto":"valor-num"}">
                    ${e.valor}
                </span>
            </div>
            <div class="botonera ${e.tipo==d.TiposInd.Texto?"ocultar-elemento":""}">
                <button id="btnMinus${e.id}" name="btn-ind-3-minus" class="btnMinus valor-numero boton-1">
                <img src="../assets/icons/keyboard_arrow_down_40dp_FILL0_wght400_GRAD0_opsz40.svg" alt="-"  class = "icono-masmenos" />
                </button>
            </div>
        </div>

            <p class="valor-fechaAct">${r} </p>
    <!-- tarjeta 1.1 ${e.id} FIN-->
    `,o=document.createElement("Div");return o.setAttribute("data-id",e.id),o.classList.add("card",t),o.innerHTML=a,o},A=(e=[])=>{let r="";e.forEach(function(t){r=document.querySelector(`.${t.grupo}`),r.append(N(t))})},M=e=>{if(!e)throw new Error("Un objeto tipo grupo es requerido");const r=`
        <!-- contenedor-grupo ${e.id} -->
            <div>
                <img src="../assets/icons/aq_indoor_40dp_FILL0_wght400_GRAD0_opsz40.svg" alt="Aire" class="img-texto-medio"/>
                <span class="nombre-grupo"> ${e.nombre} </span>
            </div>
            <div data-id="${e.id}" class="container ${e.id}">
                
            </div>
        <!-- contenedor-grupo ${e.id} FIN-->
    `,t=document.createElement("Div");return t.innerHTML=r,t},$=(e,r=[])=>{const t=document.querySelector(e);r.forEach(a=>{t.append(M(a))})},k=(e,r="")=>{const t=document.getElementById(e);t.innerHTML=r},h={panel:".panel",contenedorCards:".container",spanValor:"span-valor-"},C=e=>{const r=()=>{const o=d.getGrupos();$(h.panel,o)},t=()=>{const o=d.getIndicadores();A(o)},a=(o="ind-01",n=20.1)=>{const u=d.getIndicadorById(o),g=`${h.spanValor}${u.id}`;k(g,n)};(()=>{const o=document.createElement("div");o.innerHTML=w,document.querySelector(e).append(o),r(),t(),a("ind-03",15)})()};d.initStore();d.actualizaValor("ind-07");d.actualizaValor("ind-07",-25);C("#app");
