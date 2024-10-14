// Use as funções de movimentação em uma sequência que leve o macaquinho até o acostamento do outro lado da avenida e sem bater em nenhuma árvore.
// 
function solucionar () {
	
}
function esquerda (aSprite: Sprite) {
    grid.move(aSprite, -1, 0)
    pause(200)
}
function subir (aSprite: Sprite) {
    grid.move(aSprite, 0, -1)
    pause(200)
}
function inicializar () {
    scene.setBackgroundImage(assets.image`tabuleiro`)
    tiles.setCurrentTilemap(tilemap`tabuleiro_tiles`)
    mySprite = sprites.create(assets.image`personagem`, SpriteKind.Player)
    mySprite.setStayInScreen(true)
    grid.place(mySprite, tiles.getTileLocation(5, 7))
}
function mostrar_tarefa () {
    game.showLongText("Ajude o macaquinho a atravessar a rua.", DialogLayout.Bottom)
}
function direita (aSprite: Sprite) {
    grid.move(aSprite, 1, 0)
    pause(200)
}
function descer (aSprite: Sprite) {
    grid.move(aSprite, 0, 1)
    pause(200)
}
let mySprite: Sprite = null
inicializar()
mostrar_tarefa()
solucionar()
game.onUpdate(function () {
    if (grid.spriteRow(mySprite) == 1) {
        game.gameOver(true)
        game.setGameOverEffect(true, effects.confetti)
    }
    if (tiles.tileAtLocationEquals(grid.getLocation(mySprite), sprites.builtin.forestTiles0)) {
        game.showLongText("Bateu! Reescreva a solução e tente novamente.", DialogLayout.Bottom)
        grid.place(mySprite, tiles.getTileLocation(5, 7))
    }
})
