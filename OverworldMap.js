class OverworldMap {
    constructor(config) {
        this.gameObjects = config.gameObjects;
        // Map layers
        this.lowerImage = new Image();
        this.upperImage = new Image();
        this.lowerImage.src = config.lowerSrc;
        this.upperImage.src = config.upperSrc;
    }

    drawLowerImage(ctx) {
        ctx.drawImage(this.lowerImage, 0, 0);
    }

    drawUpperImage(ctx) {
        ctx.drawImage(this.upperImage, 0, 0);
    }
}

window.OverworldMaps = {
    testRoom: {
        lowerSrc: "/images/maps/testRoomLower.png",
        upperSrc: "/images/maps/testRoomUpper.png",
        gameObjects: {
            hero: new Person({
                x: utils.widthGrid(3),
                y: utils.widthGrid(6),
                src: "/images/characters/people/npc2.png",
                isPlayerControlled: true
            }),
            npc: new Person({
                x: utils.widthGrid(8),
                y: utils.widthGrid(3),
                src: "/images/characters/people/npc1.png"
            })
        }
    }
}
