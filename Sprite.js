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
        this.animations = config.animations || {
            "idle-down": [
                [0, 0]
            ],
            "idle-right": [
                [0, 1]
            ],
            "idle-up": [
                [0, 2]
            ],
            "idle-left": [
                [0, 3]
            ],
            "walk-down": [
                [1, 0],
                [0, 0],
                [3, 0],
                [0, 0]
            ],
            "walk-right": [
                [1, 1],
                [0, 1],
                [3, 1],
                [0, 1]
            ],
            "walk-up": [
                [1, 2],
                [0, 2],
                [3, 2],
                [0, 2]
            ],
            "walk-left": [
                [1, 3],
                [0, 3],
                [3, 3],
                [0, 3]
            ]
        }
        this.currentAnimation = config.currentAnimation || "idle-down";
        this.currentAnimationFrame = 0;

        this.animationFrameLimit = config.animationFrameLimit || 16; // When the next sprite frame is rendered
        this.animationFrameProgress = this.animationFrameLimit;

        // Reference the game object
        this.gameObject = config.gameObject;
    }

    get frame() {
        return this.animations[this.currentAnimation][this.currentAnimationFrame];
    }

    setAnimation(key) { // key = animations
        if (this.currentAnimation !== key) {
            this.currentAnimation = key;
            this.currentAnimationFrame = 0;
            this.animationFrameProgress = this.animationFrameLimit;
        }
    }

    updateAnimationProgress() {
        if (this.animationFrameProgress > 0) {
            this.animationFrameProgress--;
            return;
        }

        // Reset counter
        this.animationFrameProgress = this.animationFrameLimit;
        this.currentAnimationFrame++;

        if (this.frame === undefined) {
            this.currentAnimationFrame = 0;
        }
    }

    draw(ctx) {
        const x = this.gameObject.x - 8; // Subtract to center the character on the grid cells
        const y = this.gameObject.y - 18;

        this.isShadowLoaded && ctx.drawImage(this.shadow, x, y)

        const [frameX, frameY] = this.frame;

        // Cut the image from the sprite sheet
        // image, left cut, top cut, width of cut, height of cut, x coordinate, y coordinate, character size x , character size y
        this.isLoaded && ctx.drawImage(this.image, frameX * 32, frameY * 32, 32, 32, x, y, 32, 32)

        this.updateAnimationProgress();
    }
}
