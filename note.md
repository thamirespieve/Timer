Pegar os elementos OK

- body OK
- botão light OK
- botão dark OK

Criar um evento de clique para os botões OK

- se escolher o tema dark adicionar a classe darkTheme ao body OK

Pegar os elementos

- florestSound OK
- rainSound OK
- coffeSound OK
- fireSound OK
  Criar um novo audio para cada botão de som OK

Criar um evento de clique para cada elemento de som

- em cada evento colocar a classe selectSound Ok
- remover a classe selectSound dos demais sons OK
- Dar play ou pause no audio OK
- Pegar o valor que está no slider e passar esse volume para o objeto de audio entre 0 e 1K

Pegar os sliders dos botões de sons OK

- verificar o valor em que ele se encontra. OK
- aumentar ou diminuir o audio de acordo com o valor do slider OK

Pegos os elementos

- play OK
- pause OK
- addition OK
- subtraction OK
- minutes OK
- seconds OK

Criar um evento de click para o addition

- Pegar os minutes e somar + 5 quando o evento for acionado OK
- Deixar os minutos sempre com 2 casas OK

Criar um evento de click para o substraction

- Pegar os minutes e diminuir 5 quando o evento for acionado OK
- Deixar os minutos sempre com 2 casas OK
- Verificar se a conta não da negativa se sim manter em 0 OK

Criar um evento de click para o Play

- fazer uma função setTimeout OK
  - Pegar os minutos e os segundos OK
  - Verificar se o segundo é menor que 0 após o decremento OK
  - Se for menor dentro de um if decrementar os minutos e mostrar no display. Também passar os segundos para 59 OK
  - Verificar se os minutos e os segundos são iguais a 0 OK
  - Se sim chamar o clearTimeout pasando o id do setTimeout. Colocar o display como o valor inicial OK

Criar um evento de click para o stop

- Passar o id do timeOut OK
