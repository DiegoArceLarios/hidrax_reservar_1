class Head{
    constructor(){
        
        this.logo_sprite = ''
        this.aguacate_mono_sprite = ''
        this.animation = false
        this.image = 1
    }

    header(logo_img, aguacate_mono_img){
        this.logo_sprite = createSprite(200, 100, 1, 1);
        this.logo_sprite.addImage(logo_img);
        this.logo_sprite.scale = 0.2

        this.aguacate_mono_sprite = createSprite(900, 100, 1, 1)
        this.aguacate_mono_sprite.addImage(aguacate_mono_img)
        this.aguacate_mono_sprite.scale = 0.2
    }
    
    headerDraw(aguacate_mono_img_2){
        if (!this.animation){
            this.animation = true
            if (this.image === 1){
                setTimeout(()=>{
                    this.aguacate_mono_sprite.addImage(aguacate_mono_img_2)
                    this.animation = false
                    this.image = 2
                },1000)
            }
            if (this.image === 2){
                setTimeout(()=>{
                    this.aguacate_mono_sprite.addImage(aguacate_mono_img)
                    this.animation = false
                    this.image = 1
                },1000)
            }
            
        }

    }
}