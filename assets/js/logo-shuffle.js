class LogoShuffle {
    constructor () {
        this.logoContainers = document.querySelectorAll('.js-logo-shuffle');
        if (!this.logoContainers) {
            return;
        }

        this.listen();
    }

    listen () {
        this.removeLogoOpacity();
        this.getImagesUrl();
    }

    getImagesUrl() {
        let imageIndex = Math.floor(Math.random() * 5) + 1
        let imageUrl = `/assets/images/logos/logo_${imageIndex}.svg`;
        this.createImage(imageUrl);
    }

    removeLogoOpacity () {
        this.logoContainers.forEach(function (container) {
            container.style.opacity = 1;
        }, this);
    }

    createImage (url) {
        this.logoContainers.forEach(function (container) {
            let image = container.querySelector('img');
            image.src = url;
        }, this);
    }
}

export default new LogoShuffle();