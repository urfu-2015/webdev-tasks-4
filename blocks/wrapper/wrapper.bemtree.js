block('wrapper').content()(function() {
    var data = this.data.dataDB;
    return [
        {
            block: 'radio',
            mods: {type: 'vegetable'},
            content: data.map(function (item) {
                return {id: item.vegetable};
            })
        },
        {
            block: 'slider'
        }
    ];
});
