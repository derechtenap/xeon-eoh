class Sprite {
    constructor(config) {

        // Set up the image
        this.image = new Image();
        this.image.src = config.src;
        this.image.onload = () => {
            this.isLoaded = true;
        }

        // Shadows
        this.shadow = new Image();
        this.useShadow = true; // TODO: config.useShadow || false;
        if (this.useShadow) {
            this.shadow.src = "/images/characters/shadow.png";
        }
        this.shadow.onload = () => {
            this.isShadowLoaded = true;
        }


        // Configure animation and initial state
        this.animation = config.animations || {
            idleDown: [
                [0, 0]
            ]
        }
        this.currentAnimation = config.currentAnimation || "idleDown";
        this.currentAnimationFrame = 0;

        // Reference the game object
        this.gameObject = config.gameObject;
    }

    draw(ctx) {
        const x = this.gameObject.x - 8; // Subtract to center the character on the grid cells
        const y = this.gameObject.y - 18;

        this.isShadowLoaded && ctx.drawImage(this.shadow, x, y)

        // Cut the image from the sprite sheet
        // image, left cut, top cut, width of cut, height of cut, x coordinate, y coordinate, character size x , character size y
        this.isLoaded && ctx.drawImage(this.image, 0, 0, 32, 32, x, y, 32, 32)
    }
}