block('slider').elem('item').content()(function() {
    var ctx = this.ctx.data;
    
    return [
        {
            block: 'vegetable',
            content: [
                {
                    elem: 'img',
                    attrs: {src: ctx.photo, alt: ctx.vegetableRU}
                },
                {
                    elem: 'link',
                    attrs: {for: `modal-open-${ctx.vegetable}`, 'data-hover': 'Рецепт'},
                    content: 'Рецепт'
                }
            ]
        },
        {
            block: 'recipe',
            content: [
                {
                    elem: 'close',
                    attrs: {for: `modal-close-${ctx.vegetable}`}
                },
                {
                    elem: 'title',
                    content: ctx.dish
                },
                {
                    elem: 'main',
                    data: ctx
                }
            ]
        }
    ];
});