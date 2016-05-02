block('page').mod('view', 'index').replace()(function() {
    var ctx = this.ctx;

    return [
        '<!DOCTYPE html>',
        {
            tag: 'html',
            attrs: {
                lang: 'ru'
            },
            content: [
                {
                    tag: 'head',
                    content: [
                        {
                            tag: 'meta',
                            attrs: {
                                charset: 'utf-8'
                            }
                        },
                        {
                            tag: 'title',
                            content: ctx.title
                        },
                        ctx.styles.map(function(style) {
                            return {
                                tag: 'link',
                                attrs: {
                                    rel: 'stylesheet',
                                    href: style.url
                                }
                            };
                        })
                    ]
                },
                {
                    tag: 'body',
                    cls: 'page page_view_index',
                    content: {
                        block: 'wrapper'
                    }
                }
            ]
        }
    ];
});