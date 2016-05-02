block('recipe')(
    elem('instruction-list')(
        tag()('ol'),
        content()(function() {
            var content = this.ctx.content;

            return content.map(item => {
                return {
                    elem: 'instruction-item',
                    content: item.section
                };
            });
        })
    ),
    elem('instruction-item')(
        tag()('li')
    )
);