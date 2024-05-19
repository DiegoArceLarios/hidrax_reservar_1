var caja1, caja2, caja3, caja4, caja5, caja6, caja7, caja8, caja9, caja10, caja11, caja12

class InfoReservacion {

    constructor(database){ 
        this.tiempo = new Date(Date.now());      
        this.dia = this.tiempo.getDate();
        this.mes = this.tiempo.getMonth();
        this.año = this.tiempo.getFullYear();
        this.cajaImg = loadImage('./assets/caja.png')
        this.pedidos = 0
        this.noDate = false

        this.database = database

        this.input = createInput("").attribute("placeholder", "Ingresa el día")
        this.inputHora = createInput("").attribute("placeholder", "Ingresa la hora")
        this.inputMinutos = createInput("").attribute("placeholder", "Ingresa los minutos")
        this.inputNombre = createInput("").attribute("placeholder", "Ingresa el nombre")
        this.inputCantidad = createInput("").attribute("placeholder", "Ingresa cantidad")
        this.inputTipo = createInput("").attribute("placeholder", "Ingresa tipo")

        this.diasAnteriores = 0

        this.tipoDeMes = 0
        this.nombreMes = ''

        this.botonConfirmacion = createSprite(258, 803, 100, 20)
        this.confrimacion = false

        this.botonConfirmacion2 = createSprite(113, 1100, 100, 20)
        this.confrimacion2 = false

        this.botonConfirmacion3 = createSprite(113, 1300, 100, 20)
        this.confrimacion3 = false

        this.botonConfirmacion4 = createSprite(113, 1550, 100, 20)
        this.confrimacion4 = false

        this.botonConfirmacionFinal = createSprite(200, 1750, 200, 60)

        this.horaFinal = 0
        this.diaFinal = 0
        this.mesFinal = ''
        this.minutosFinal = 0
        this.nombreFinal = ''
        this.cantidadFinal = 0
        this.tipoFinal = ''
        this.enviar = false


    }

    
    especificaMesDraw(){
        push();
        fill('white')
        rect(50, 200, 1000, 4)
        textSize(20)
        text('Reservar: Una vez dado a confirmar, no se podra cambiar ', 70, 250)
        rect(50, 270, 1000, 4)
        pop();

        push()
        fill('white')
        textSize(15)
        text(' - ¿En qué mes quisiera recibir la bebida?', 60, 300)
        pop()
        
        push();
        fill('white')
        textSize(15)
        rectMode(CENTER)
        text('Enero', caja1.x/2, caja1.y)
        text('Febrero', caja2.x/2+75, caja2.y)
        text('Marzo', caja3.x/2+150, caja3.y)
        text('Abril', caja4.x/2+225, caja4.y)
        text('Mayo', caja5.x/2, caja5.y)
        fill("Red")
        text('Junio', caja6.x/2+75, caja6.y)
        text('Julio', caja7.x/2+150, caja7.y)
        text('Agosto', caja8.x/2+225, caja8.y)
        text('Diciembre', caja12.x/2+225, caja12.y)
        fill("White")
        text('Septiembre', caja9.x/2, caja9.y)
        text('Octubre', caja10.x/2+75, caja10.y)
        text('Noviembre', caja11.x/2+150, caja11.y)
        
        if(!this.noDate){
            text('Mes: '+ this.nombreMes, 60, 650)
            if (mouseWentDown('leftButton')){
                if (mouseIsOver(caja1)){
                    this.tipoDeMes = 31
                    this.nombreMes = 'Enero'
                    this.diasAnteriores = 0
                    this.mesFinal = this.nombreMes
                }
                if (mouseIsOver(caja2)){
                    this.tipoDeMes = 29
                    this.nombreMes = 'Febrero'
                    this.diasAnteriores = 31
                    this.mesFinal = this.nombreMes
                }
                if (mouseIsOver(caja3)){
                    this.tipoDeMes = 31
                    this.nombreMes = 'Marzo'
                    this.diasAnteriores = 60
                    this.mesFinal = this.nombreMes
                }
                if (mouseIsOver(caja4)){
                    this.tipoDeMes = 30
                    this.nombreMes = 'Abril'
                    this.diasAnteriores = 91
                    this.mesFinal = this.nombreMes
                }
                if (mouseIsOver(caja5)){
                    this.tipoDeMes = 31
                    this.nombreMes = 'Mayo'
                    this.diasAnteriores = 121
                    this.mesFinal = this.nombreMes
                }
                if (mouseIsOver(caja9)){
                    this.tipoDeMes = 30
                    this.nombreMes = 'Septiembre'
                    this.diasAnteriores = 244
                    this.mesFinal = this.nombreMes
                }
                if (mouseIsOver(caja10)){
                    this.tipoDeMes = 31
                    this.nombreMes = 'Octubre'
                    this.diasAnteriores = 274
                    this.mesFinal = this.nombreMes
                }
                if (mouseIsOver(caja11)){
                    this.tipoDeMes = 30
                    this.nombreMes = 'Noviembre'
                    this.diasAnteriores = 305
                    this.mesFinal = this.nombreMes
                }
                
            }
        }else{
            fill('gray')
            text('Mes: '+ this.nombreMes, 60, 650)
        }
        pop()
        
    }

    especificaMes(){
            caja1 = createSprite(100, 350, 1, 1)
            caja1.addImage(this.cajaImg)
            caja1.scale = 0.1

            caja2 = createSprite(250, 350, 1, 1)
            caja2.addImage(this.cajaImg)
            caja2.scale = 0.1

            caja3 = createSprite(400, 350, 1, 1)
            caja3.addImage(this.cajaImg)
            caja3.scale = 0.1

            caja4 = createSprite(550, 350, 1, 1)
            caja4.addImage(this.cajaImg)
            caja4.scale = 0.1

            caja5 = createSprite(100, 450, 1, 1)
            caja5.addImage(this.cajaImg)
            caja5.scale = 0.1
            
            caja6 = createSprite(250, 450, 1, 1)
            caja6.addImage(this.cajaImg)
            caja6.scale = 0.1

            caja7 = createSprite(400, 450, 1, 1)
            caja7.addImage(this.cajaImg)
            caja7.scale = 0.1

            caja8 = createSprite(550, 450, 1, 1)
            caja8.addImage(this.cajaImg)
            caja8.scale = 0.1

            caja9 = createSprite(100, 550, 1, 1)
            caja9.addImage(this.cajaImg)
            caja9.scale = 0.1

            caja10 = createSprite(250, 550, 1, 1)
            caja10.addImage(this.cajaImg)
            caja10.scale = 0.1

            caja11 = createSprite(400, 550, 1, 1)
            caja11.addImage(this.cajaImg)
            caja11.scale = 0.1

            caja12 = createSprite(550, 550, 1, 1)
            caja12.addImage(this.cajaImg)
            caja12.scale = 0.1


    }

    especificaDia(){
        this.input.position(70, 800)
        this.botonConfirmacion.tint = 'white'
    }

    especificaDiaDraw(){
        push()
        fill('white')
        rect(50, 700, 1000, 4)
        textSize(15)
        text(' - ¿Qué día quieres recibir el producto?', 60, 750)
        textSize(10)
        fill('black')
        text('Confirmación', 240, 805)
        pop()

        if (mouseWentDown('leftButton')){
            if(mouseIsOver(this.botonConfirmacion)){
                if (Number(this.input.value()) && (this.input.value()*10)%10 === 0){
                    if((Number(this.input.value()) + this.diasAnteriores+1)%7 != 0 &&
                     (Number(this.input.value()) + this.diasAnteriores)%7 != 0){
                        if (Number(this.input.value()) > 0 && Number(this.input.value()) <= this.tipoDeMes){
                            this.botonConfirmacion.tint = 'green'
                            this.confrimacion = true
                            console.log((Number(this.input.value()) + this.diasAnteriores)%7)
                            this.diaFinal = Number(this.input.value())
                            this.input.hide()
                            this.noDate = true
                        }else{
                            this.botonConfirmacion.tint = 'red'
                            this.confrimacion = false
                            alert('La fecha no es cuerente al mes')
                            
                        }
                    }else{
                        this.botonConfirmacion.tint = 'red'
                        alert('La fecha cae en fin de semana')
                        this.confrimacion = false
                    }
                }else{
                    this.botonConfirmacion.tint = 'red'
                    this.confrimacion = false
                    alert('Solo acepta un número')
                    
                }
            }
        }
        
    }

    especificaHora(){
        this.inputHora.position(70, 950)
        this.inputMinutos.position(70, 1000)
        this.botonConfirmacion2.tint = 'white'
    }
    especificaHoraDraw(){
        push()
        fill('white')
        rect(50, 850, 1000, 4)
        textSize(15)
        text(' - ¿A que hora quieres recibir el producto? (trabajamos de 8-15)', 60, 900)
        fill('gray')
        text('- Minutos', 250, 1005)
        text('- Horas', 250, 955)
        fill('white')
        textSize(10)
        fill('black')
        text('Confirmación', 70, 1103)
        
        pop()

        if (mouseWentDown('leftButton')){
            if(mouseIsOver(this.botonConfirmacion2)){
                if (Number(this.inputHora.value()) && Number(this.inputMinutos.value()) && 
                (this.inputHora.value()*10)%10 === 0 && ((this.inputMinutos.value()*10)%10 === 0)||
                (Number(this.inputMinutos.value()) === 0)){
                    if (this.inputHora.value() >= 8 && this.inputHora.value() <= 15 && 
                    this.inputMinutos.value() < 60 && this.inputMinutos.value() >= 0){
                        this.botonConfirmacion2.tint = 'green';
                        this.confrimacion2 = true;
                        this.horaFinal = this.inputHora.value()
                        this.minutosFinal = this.inputMinutos.value()

                        this.inputMinutos.hide()
                        this.inputHora.hide()
                    }else{
                        this.botonConfirmacion2.tint = 'red';
                        this.confrimacion2 = false;
                        alert('Los numeros no son validos');
                        
                    }
                }else{
                    this.botonConfirmacion.tint = 'red';
                    this.confrimacion2 = false;
                    alert('Solo acepta números enteros');
                    
                }
            }
        }
    }

    especificaNombre(){
        this.inputNombre.position(70, 1250)
        this.botonConfirmacion3.tint = 'white'
    }
    especificaNombreDraw(){
        push()
        fill('white')
        rect(50, 1150, 1000, 4)
        textSize(15)
        text('Escribe el nombre con el que recibiras el producto: ', 60, 1200)
        textSize(10)
        fill('black')
        text('Confirmación', 70, 1304)
        pop()

        if (mouseWentDown('leftButton')){  
            if(mouseIsOver(this.botonConfirmacion3)){
                if(this.inputNombre.value() === ''){
                    this.botonConfirmacion3.tint = 'red'
                    this.confrimacion3 = false
                    alert('Debes de escribir al menos algo')
                }else{
                    this.confrimacion3 = true
                    this.nombreFinal = this.inputNombre.value()
                    this.botonConfirmacion3.tint = 'green'

                    this.inputNombre.hide()
                    
                }
            }
            
        }

    }
    especificaCantidadYTipo(){
        this.inputCantidad.position(70, 1450)
        this.inputTipo.position(70, 1500)
        this.botonConfirmacion4.tint = 'white'
    }
    especificaCantidadYTipoDraw(){
        push()
        fill('white')
        rect(50, 1350, 1000, 4)
        textSize(15)
        text('Escribe la cantidad de botellas que deseas y el sabor de estas: ', 60, 1400)
        fill('gray')
        text('Sabores: Aguacate = A', 250, 1505)
        text('Maximo 10 botella. En caso de requerir más, contanta a nuestro correo', 250, 1455)
        fill('black')
        textSize(30)
        text('Enviar', 150, 1760)
        fill('white')
        textSize(10)
        fill('black')
        text('Confirmación', 70, 1554)
        pop()

        if (mouseWentDown('leftButton')){
            if(mouseIsOver(this.botonConfirmacion4)){
                if (Number(this.inputCantidad.value()) && (this.inputCantidad.value()*10)%10 === 0 && 
                this.inputTipo.value() === 'A' && Number(this.inputCantidad.value()) > 0 && Number(this.inputCantidad.value()) <= 10){
                    this.botonConfirmacion4.tint = 'green'
                    this.confrimacion4 = true
                    this.cantidadFinal = Number(this.inputCantidad.value())
                    this.tipoFinal = this.inputTipo.value()

                    this.inputCantidad.hide()
                    this.inputTipo.hide()
                        
                }else{
                    this.botonConfirmacion4.tint = 'red'
                    this.confrimacion4 = false
                    alert('Alguno de los valores esta incorrecto')
                    
                }
            }
        }

    }

    comprobasion(){
        if(this.confrimacion && this.confrimacion2 && this.confrimacion3 && this.confrimacion4){
            this.botonConfirmacionFinal.tint = 'green'
            if(mouseWentDown('leftButton')){
                if(mouseIsOver(this.botonConfirmacionFinal)){

                    this.database.ref('/pedido/'+ Math.round(random(0,999999999)) + this.nombreFinal +'/').set({
                            Cliente: this.nombreFinal,
                            Cantidad: this.cantidadFinal,
                            Sabor: this.tipoFinal,
                            Mes: this.mesFinal,
                            Dia: this.diaFinal,
                            Hora: this.horaFinal + ':' + this.minutosFinal
                            
                
                    })
                    
                    
                    

                    alert('enviado correctamente')
                    
                }
            }

        }else{
            this.botonConfirmacionFinal.tint = 'red'
        }
        
    }
        
    

}