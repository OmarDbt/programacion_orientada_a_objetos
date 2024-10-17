# Programacion Orientada a Objetos

Para entender mejor como se crea las particulas en P5.js se tuvo que crear un nuevo documento llamado `Particulas.js` una vez creada se comenzó con la creación de las particulas mediante el código. Se inicio con la etiqueta `class` con el nombre _particula_, además se aprendieron nuevas etiquetas como: `constructor`, `this`.

```js
class Particula {
  //este método se hara que se ejecute automáticamente
  constructor(_x, _y) {
    this.posx = _x;
    this.posy = _y;
    this.estaViva = true; //está etiqueta se creó con un nombre propio, además de ser una afirmación verdedera
    this.tVida = round(random(100, 200)); //está etiqueta cuanta con el tiempo vida que tendra la particula
  }
}
```

Se añadieron nuevas etiquetas como la `update`

```js
update(){
   this.tVida -=1;
   if(this.tVida <= 0>) {
       this.estaViva = false;
       return;
   }
   this.posy += 2;
}
```

y por último la etiqueta `display`

```js
display(){ //con esto se creó los valores para el circulo
    fill(255);
    noStroke();
    circle(this.posx, this.posy, 35);
}
```

Una vez creado todos los parametros en el archivo `Particulas.js` se procede con el Skectch.js y así se pueda visualizar en el web.

Primero se comenzó con una variable `let` llamado _particulas_.

Seguido de la function setup: _esta que cubra todo el ancho y alto de la pantalla_.

A continuación continuo la funtion draw:

```js
background();

let nuevaParticula = new Particula(mouseX, mouseY); //se creó una nueva variable `let`
particula.push(nuevaParticula);

for (let i = 0; i < particula, length; i++) {
  ///se utilizó los for loop para las repticiones
  particula[i].update();
  particula[i].display();
}
for (let i = 0; i < particulas.length; i++) {
  if (particulas[i].estaViva) {
  } else {
    particulas.splice(i, 1);
  }
}
```
