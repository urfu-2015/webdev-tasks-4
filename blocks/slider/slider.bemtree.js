'use strict';

block('slider').content()(function() {
    var data = this.data.dataDB,
        radio1,
        radio2;

    return [
        data.map(function(item) {
            radio1 = {
                block: 'radio',
                mods: {view: 'hidden'},
                attrs: {id: `modal-open-${item.vegetable}`, name: 'modal'}
            };
            radio2 = Object.assign({}, radio1);
            radio2.attrs = {id: `modal-close-${item.vegetable}`, name: 'modal'};

            return [
                radio1,
                radio2,
                {
                    block: 'slider',
                    elem: 'item',
                    elemMods: {name: item.vegetable},
                    attrs: {for: item.vegetable},
                    data: item
                }
            ];
        }),
        {
            block: 'modal-overlay'
        }
    ];
});