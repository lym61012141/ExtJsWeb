//这是自定义的控件
Ext.define('ux.RotatingCarousel', {
    extend: 'Ext.carousel.Carousel',
    alternateClassName: 'rotatingCarousel',
    xtype: 'rotatingCarousel',
    config: {
//两张图片之间轮播时间
        delay: 3000,
//默认自动开始轮播
        start: true,
        listeners: {
            tap: {
                fn: function () {
                    this.pause();
                },
                element: 'element'
            },
            swipe: {
                fn: function () {
                    this.start();
                },
                element: 'innerElement'
            }
        }
    },
    initialize: function () {
        if (this.config.start) {
            this.start();
        }
    },
    rotate: function () {
        if (this.timeout) {
            clearTimeout(this.timeout);
        }
        if (this.getActiveIndex() === this.getMaxItemIndex()) {
            this.setActiveItem(0, 'slide');
        } else {
            this.next();
        }
        this.timeout = Ext.defer(this.rotate, this.config.delay, this);
    },
    start: function (delayStart) {
        this.timeout = Ext.defer(this.rotate, delayStart || this.config.delay, this);
    },
    pause: function (delayStart) {
        if (this.timeout) {
            clearTimeout(this.timeout);
        }
        if (delayStart) {
            this.start(delayStart);
        }
        return this;
    },
    stop: function (delayStart) {
        this.pause(delayStart);
        this.setActiveItem(0, 'slide');
        return this;
    }
});