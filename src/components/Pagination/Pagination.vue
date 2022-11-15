<template>
  <div class="pagination">
    <button :disabled="pageNo == 1" @click="$emit('getPageNo', pageNo - 1)">
      上一页
    </button>
    <button
      v-if="startNumAndEndNum.start > 1"
      @click="$emit('getPageNo', 1)"
      :class="{ active: pageNo == 1 }"
    >
      1
    </button>
    <button v-if="startNumAndEndNum.start > 2">···</button>

    <button
      v-for="(page, index) in startNumAndEndNum.end"
      :key="index"
      v-show="page >= startNumAndEndNum.start"
      @click="$emit('getPageNo', page)"
      :class="{ active: pageNo == page }"
    >
      {{ page }}
    </button>

    <button v-if="startNumAndEndNum.end < totlePage - 1">···</button>
    <button
      v-if="startNumAndEndNum.end < totlePage"
      :class="{ active: pageNo == totlePage }"
    >
      {{ totlePage }}
    </button>
    <button
      :disabled="pageNo == totlePage"
      @click="$emit('getPageNo', pageNo + 1)"
    >
      下一页
    </button>

    <button style="margin-left: 30px">共 {{ total }} 条</button>
  </div>
</template>

<script>
export default {
  props: ["pageNo", "pageSize", "total", "continues"],
  name: "Pagination",
  created() {
    console.log(this.pageNo);
  },
  computed: {
    // 总共多少页
    totlePage() {
      return Math.ceil(this.total / this.pageSize);
    },
    startNumAndEndNum() {
      let start = 0,
        end = 0;
      if (this.continues > this.totlePage) {
        start = 1;
        end = this.totlePage;
      } else {
        start = this.pageNo - Math.floor(this.continues / 2);
        end = this.pageNo + Math.floor(this.continues / 2);
        if (start < 1) {
          start = 1;
          end = this.continues;
        }
        if (end > this.totlePage) {
          end = this.totlePage;
          start = this.totlePage - this.continues + 1;
        }
        return { start, end };
      }
    },
  },
  methods: {},
};
</script>


<style lang="less" scoped>
.pagination {
  text-align: center;
  button {
    margin: 0 5px;
    background-color: #f4f4f5;
    color: #606266;
    outline: none;
    border-radius: 2px;
    padding: 0 4px;
    vertical-align: top;
    display: inline-block;
    font-size: 13px;
    min-width: 35.5px;
    height: 28px;
    line-height: 28px;
    cursor: pointer;
    box-sizing: border-box;
    text-align: center;
    border: 0;

    &[disabled] {
      color: #c0c4cc;
      cursor: not-allowed;
    }

    // &.active {
    //   cursor: not-allowed;
    //   background-color: #409eff;
    //   color: #fff;
    // }
  }
}
.active {
  background: skyblue !important;
}
</style>
