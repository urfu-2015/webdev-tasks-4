block('recipe')(
    elem('ingredients')(
        content()(function() {
            var content = this.ctx.content;

            return content.map(item => {
                return {
                    elem: 'ingredient',
                    content: [
                        {
                            elem: 'ingredient-name',
                            content: item.name
                        },
                        {
                            elem:'ingredient-count',
                            content: `(${item.count})`
                        }
                    ]
                };
            });
        })
    ),
    elem('ingredient')(
        tag()('p')
    ),
    elem('ingredient-name')(
        tag()('span')
    ),
    elem('ingredient-count')(
        tag()('span')
    )
);