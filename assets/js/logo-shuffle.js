class LogoShuffle {
    constructor () {
        this.logoContainers = document.querySelectorAll('.js-logo-shuffle');

        if (!this.logoContainers ) {
            return;
        }

        this.init();
    }

    init () {
        this.logoContainers.forEach(function (container) {
            this.removeLogoOpacity(container);
            this.getImagesUrl(container);
        }, this);
    }

    getImagesUrl(container) {
        let imageIndex = Math.floor(Math.random() * 5) + 1
        let imageUrl = `/assets/images/logos/logo_${imageIndex}.svg`;
        this.createImage(container, imageUrl);
    }

    removeLogoOpacity (container) {
        container.style.opacity = 1;
    }

    createImage (container, url) {
        let image = container.querySelector('img');
        image.src = url;
    }
}

export default new LogoShuffle();