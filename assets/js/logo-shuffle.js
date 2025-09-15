class LogoShuffle {
    constructor () {
        this.logoContainer = document.querySelector('.js-logo-shuffle');
        if (!this.logoContainer) {
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
        let imageUrl = `/assets/images/logos/logo-${imageIndex}.png`;
        this.createImage(imageUrl);
    }

    removeLogoOpacity () {
        this.logoContainer.style.opacity = 1;
    }

    createImage (url) {
        let image = this.logoContainer.querySelector('img');
        image.src = url;
    }
}

export default new LogoShuffle();