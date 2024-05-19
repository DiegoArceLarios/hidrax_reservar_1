var divfirebase = 1
var logo_img, aguacate_mono_img, aguacate_mono_img_2;
var pedidos = 0

function setup(){
    createCanvas(1250, 2000)
    logo_img = loadImage('./assets/hidrax_logo.png')
    aguacate_mono_img = loadImage('./assets/mono_aguacate.png')
    aguacate_mono_img_2 = loadImage('./assets/mono_aguacate_2.png')

    database = firebase.database();
    head = new Head();
    head.header(logo_img, aguacate_mono_img);


    infoReservacion = new InfoReservacion(database);
    infoReservacion.especificaMes()
    infoReservacion.especificaDia()
    infoReservacion.especificaHora()
    infoReservacion.especificaNombre()
    infoReservacion.especificaCantidadYTipo()

    console.log(infoReservacion.algo)

}
function draw(){
    
    background('black')
    drawSprites()
    infoReservacion.especificaMesDraw()
    infoReservacion.especificaDiaDraw()
    infoReservacion.especificaHoraDraw()
    infoReservacion.especificaNombreDraw()
    infoReservacion.especificaCantidadYTipoDraw()

    infoReservacion.comprobasion()

    head.headerDraw(aguacate_mono_img_2)

    
}