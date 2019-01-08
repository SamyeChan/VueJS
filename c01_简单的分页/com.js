var pager = {
  props: {
      pagerData:{
          type: Object,
          default:function(){
              return{
                  data:[],
                  rows:[],
                  page:{
                      //分页大小
                      pagesize:20,
                      //分页数
                      arrPageSize:[10,20,30,40],
                      //当前页面
                      pageCurrent:1,
                      //总分页数
                      pageCount:1,
                      //总数
                      totalCount:10
                  }
              }
          }
      }
  },
  template: '<div>sda</div>',
  //计算属性
  computed:{
      // 分页大小 获取的时候显示父级传入的，修改的时候修改自身的。子组件不能修改父元素的值
      pagesize:{
          get:function(){
              return this.pagerData.page.pagesize;
          },
          set:function(value){
              this.mypagesize = value;
          }
      },
      pageCurrent:{
          get:function(){
              return this.pagerData.page.pageCurrent;
          },
          set:function(value){
              this.mypageCurrent = value;
          }
      },
      startData:function(){
          return this.pagerData.page.pagesize*(this.pagerData.page.pageCurrent-1)+1;
      },
      endData:function(){
          var max =this.pagerData.page.pagesize*this.pagerData.page.pageCurrent;
          return max>this.pagerData.page.totalCount?this.pagerData.page.totalCount:max;
      }
  },
  methods:{
      showPage: function (pageIndex, $event) {
                  if (pageIndex > 0) {
                      if(pageIndex>this.pagerData.page.pageCount) pageIndex = this.page.pageCount;
                      this.$emit('show-page',{pageCurrent:pageIndex,pagesize:this.mypagesize});//事件
                  }
              },sortBy: function (sortparam) {
                  this.sortparam = sortparam;
                  this.sorttype = this.sorttype == -1 ? 1 : -1;
              }
  }

}