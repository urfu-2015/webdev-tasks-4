block('recipe').elem('main').content()(function() {
    var ctx = this.ctx.data;

    return [
        {
            elem: 'ingredients',
            content: ctx.ingredients
        },
        {
            elem: 'instruction',
            content: [
                {
                    elem: 'instruction-header',
                    content: {
                        elem: 'instruction-title',
                        content: 'Инструкция'
                    }
                },
                {
                    elem: 'instruction-list',
                    content: ctx.instructions
                },
                {
                    elem: 'instruction-footer',
                    content: ctx.description
                }
            ]
        }
    ];
});