class Overworld {
  constructor(config) {
    this.element = config.element;
    this.canvas = this.element.querySelector(".game-canvas");
    this.ctx = this.canvas.getContext("2d");
    this.map = null;
  }

  startGameLoop() {
    const step = () => {

      // Remove already rendered frames each step
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

      // Draw map layers and game objects

      // Objects between lower and upper layer, so the upper layer
      // is above the objects (E.g. roof...)
      this.map.drawLowerImage(this.ctx);
      Object.values(this.map.gameObjects).forEach(object => {
        object.update({
          arrow: this.directionInput.direction
        });
        object.sprite.draw(this.ctx);
      });
      this.map.drawUpperImage(this.ctx);

      requestAnimationFrame(() => {
        step();
      })
    }
    step();
  }

  init() {
    this.map = new OverworldMap(window.OverworldMaps.testRoom);
    this.directionInput = new DirectionInput;
    this.directionInput.init();
    this.startGameLoop();

  }
}
