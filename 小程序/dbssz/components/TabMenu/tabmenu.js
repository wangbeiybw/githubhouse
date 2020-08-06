Component({
  options: {
    addGlobalClass: true
  },
  properties: {
    // 这里定义了innerText属性，属性值可以在组件使用时指定
    tabtitle: { // 属性名
      type: Array,
      value:["标题1","标题2","标题3"]
    },
    //父数组
    formultiArray:{
      type: Array,
      value:[['北京', '安徽'], ['北京']]
    },
    //子数组
    forobjmultiArray:{
      type: Array,
      value:[{ "regid": "2", "parid": "1", "regname": "北京", "regtype": "1", "ageid": "0" },{ "regid": "3", "parid": "1", "regname": "安徽", "regtype": "1", "ageid": "0" },{ "regid": "4", "parid": "1", "regname": "福建", "regtype": "1", "ageid": "0" }]
    }
  },
  data: {
    // 这里是一些组件内部数据,
    currid:0,//quID
    _num:-1,//选项卡ID//表示取消高亮
    showIndex:-1,//-1表示不显示内容
    shiid:'11',
    visible:false,
    multiIndex:"",
         //流域
      lyarray:[
        {id:"1",text:"所有流域"},
        {id:"2",text:"辽河流域安"},
        {id:"3",text:"辽河流域安"},
        {id:"4",text:"辽河流域安"},
        {id:"5",text:"辽河流域安"},
        {id:"6",text:"辽河流域安"},
        {id:"7",text:"辽河流域安"},
        {id:"8",text:"辽河流域安"},
        {id:"9",text:"辽河流域安"},
        {id:"10",text:"辽河流域安"},
      ],
      //断面
      dmarray:[
        {id:"1",text:"果河桥"},
        {id:"2",text:"鹿邑付桥(鹿邑付桥闸)"},
        {id:"3",text:"沱江大桥(沱江二桥)"},
        {id:"4",text:"捷庄(涝沟桥)"},
        {id:"5",text:"岷江大桥"},
        {id:"6",text:"新城桥"},
        {id:"7",text:"艾山西大桥"},
        {id:"8",text:"辽河流域安"},
        {id:"9",text:"艾山西大桥"},
        {id:"10",text:"辽河流域安"},
      ],
    someData: {}
  },
  methods: {
    //点击选项卡
  bindAllqy:function(e){
    var that = this
    var id = e.currentTarget.dataset.id;
    that.setData({
      _num: id,
    });
    if (id != this.data.showIndex) {
      this.setData({
        showIndex: id
      })
    } else {
      this.setData({
        showIndex: -1,
        _num:-1
      })
    }
    console.log(this.data.showIndex)
  },
  //选择省
  changesheng:function(e){
    var that = this
       var index = e.currentTarget.dataset.index;
      var list = []
      for (var i = 0; i < that.data.forobjmultiArray.length;i++){
        if (that.data.forobjmultiArray[index].regid == that.data.forobjmultiArray[i].parid){
          list.push(that.data.forobjmultiArray[i].regname)
        }
      }
      console.log(list)
      this.setData({
        currid:index,
        "formultiArray[1]": list,
        shiid:"11"
      })
  },
  //选择市区
  changshi:function(e){
    var shindex = e.currentTarget.dataset.shindex;
    this.setData({
      shiid:shindex
    })
  },
  //选择流域
  bindliuyu:function(e){
    var lyindex = e.currentTarget.dataset.lyindex;
    this.setData({
      lyid:lyindex,
    })
  },
  //选择断面
  binddm:function(e){
    var dmindex = e.currentTarget.dataset.dmindex;
    this.setData({
      dmid:dmindex,
    })
  },
    // 这里是一个自定义方法
    customMethod: function(){}
  }
})