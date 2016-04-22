block('root').replace()(function() {
    var ctx = this.ctx,
        data = this.data = ctx.data;

    return {
        block: 'page',
        mods: { view: data.view },
        title: data.title,
        styles: [
            { elem: 'css', url: 'index.min.css' }
        ]
    };
});