block('radio')(
    tag()('input'),
    attrs()({type: 'radio'}),

    mod('type', 'vegetable').replace()(function() {
        var content = this.ctx.content;

        var midElem = Math.ceil(content.length / 2);
        var res;
        return content.map((item, i) => {
            res = {
                block: 'radio',
                mods: {view: 'hidden'},
                attrs: {id: item.id, name: 'vegetable'}
            };

            if (midElem === i + 1) {
                res.attrs.checked = '';
            }
            return res;
        });
    })
);