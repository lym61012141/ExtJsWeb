var columns = [
    {header:'编号：',dataIndex:'id'},
    {header:'名称：',dataIndex:'name'},
    {header:'描述：',dataIndex:'desc'}
    ];
var data = [
    ['1','name1','desc'],
    ['2','name2','desc2'],
    ['3','name3','desc3'],
    ['4','name4','desc4'],
    ['5','name5','desc5'],
];

var store = new Ext.data.ArrayStore({
   data:data,
   fields:[
       {name:'id'},
       {name:'name'},
       {name:'desc'}
   ]
});
store.load();

var grid = new Ext.grid.GridPanel({
   autoHeight:true,
   renderTo:'grid',
   store:store,
   columns:columns
});