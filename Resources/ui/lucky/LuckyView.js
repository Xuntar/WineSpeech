function LuckyView(dic) {
    var self = Ti.UI.createView();

    var container = Ti.UI.createView({
        backgroundColor: '#fff',
        borderColor: '#888',
        borderWidth: 4,
        bottom: 20,
        height: 170,
        width: 306,
        borderRadius: 8,
        opacity: 0.75
    });

    self.add(container);
    return self;
}

module.exports = LuckyView;