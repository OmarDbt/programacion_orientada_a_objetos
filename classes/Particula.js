class Particula {
    // este método se ajecuta automáticamente
    constructor(_x, _y){
        this.posx = _x;
        this.posy = _y;
        this.estaViva = true;
        //tVida el tiempo de vida de la particula
        this.tVida = round(random(100, 200));
    }
    update(){
        this.tVida -= 1;
        if(this.tVida <= 0) {
            this.estaViva = false;
            return;
        }
        this.posy += 2;
    }
    display(){
        fill(random(255), random(255), random(255));
        noStroke();
        circle(this.posx, this.posy, 35);
    }
}