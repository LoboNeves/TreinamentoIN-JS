//Tive algumas dificuldades por ser minha primeira experiência com javascript, pesquisando sobre na internet vi que tinha maneiras mais faceis de fazer usando comandos específicos, mas como não foi ensinado durante a aula e para fins de prática resolvi fazer tudo manualmente, espero que não se importem e que o código esteja da maneira que solicitaram.

var texto = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut suscipit condimentum justo eget volutpat. Morbi felis diam, pellentesque sed aliquam eu, aliquam vitae elit. Integer ut sapien est. Nulla at elit nec nisl dignissim viverra sit amet in libero. Nunc sed bibendum enim. Praesent pharetra semper nulla vitae interdum. Nunc interdum enim imperdiet porta bibendum. Aenean ex ipsum, placerat sed sollicitudin et, tempus non sapien. Suspendisse congue vulputate molestie. Cras auctor vehicula justo tincidunt accumsan. Pellentesque vel iaculis nibh. Aliquam scelerisque eleifend vestibulum.Phasellus non dictum eros. Praesent cursus laoreet ipsum, in porta nisi hendrerit eu. Pellentesque scelerisque felis ut nunc sagittis, quis ultricies nunc euismod. Curabitur quis neque in magna efficitur luctus mollis vel odio. In eu condimentum orci. Curabitur ut ex imperdiet, consectetur diam at, vestibulum risus. Nunc pharetra, est eu placerat dapibus, risus odio blandit ex, at aliquam enim augue sit amet lacus. Cras bibendum, quam non ultrices porttitor, leo urna egestas eros, a sagittis ligula erat vitae purus. In sit amet porta turpis.Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae Cras mauris mi, aliquet ac dui non, pellentesque venenatis metus. Integer hendrerit tortor id pharetra ultrices. Suspendisse cursus suscipit congue. Vestibulum ornare faucibus interdum. Aliquam dapibus elit sed lorem laoreet tincidunt. Duis et sem fermentum urna tincidunt rutrum sit amet volutpat elit.'

var textonovo = ''

for (i = 0; i < texto.length; i++){
    var letra = texto[i];
    letra = letra.toLowerCase();
    if (letra == 'a'){
        textonovo += 1;
    }
    else if (letra == 'b'){
        textonovo += 2;
    }
    else if (letra == 'c'){
        textonovo += 3;
    }
    else if (letra == 'd'){
        textonovo += 4;
    }
    else if (letra == 'e'){
        textonovo += 5;
    }
    else if (letra == 'f'){
        textonovo += 6;
    }
    else if (letra == 'g'){
        textonovo += 6;
    }
    else if (letra == 'h'){
        textonovo += 7;
    }
    else if (letra == 'i'){
        textonovo += 8;
    }
    else if (letra == 'j'){
        textonovo += 9;
    }
    else if (letra == 'k'){
        textonovo += 10;
    }
    else if (letra == 'l'){
        textonovo += 11;
    }
    else if (letra == 'm'){
        textonovo += 12;
    }
    else if (letra == 'n'){
        textonovo += 13;
    }
    else if (letra == 'o'){
        textonovo += 14;
    }
    else if (letra == 'p'){
        textonovo += 15;
    }
    else if (letra == 'r'){
        textonovo += 16;
    }
    else if (letra == 's'){
        textonovo += 17;
    }
    else if (letra == 't'){
        textonovo += 18;
    }
    else if (letra == 'u'){
        textonovo += 19;
    }
    else if (letra == 'v'){
        textonovo += 20;
    }
    else if (letra == 'w'){
        textonovo += 21;
    }
    else if (letra == 'x'){
        textonovo += 22;
    }
    else if (letra == 'y'){
        textonovo += 23;
    }
    else if (letra == 'z'){
        textonovo += 24;
    }
    else if (letra == '.'){
        textonovo += 0;
    }
    else if (letra == ','){
        textonovo += -1;
    }
}
console.log(textonovo)