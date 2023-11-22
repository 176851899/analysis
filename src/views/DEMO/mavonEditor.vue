<template>
    <div class="markdown-editor">
      
        <mavonEditor ref="mavonEditor" v-model="handbook"  :toolbars="toolbars" tabSize="4" @save="save" @change="changeMark"  />
        <!-- <a @click="save">52555</a>
        {{ handbook }} -->
    </div>
</template>

<script>
// https://github.com/hinesboy/mavonEditor
// https://github.com/hinesboy/mavonEditor/blob/master/README.md  //配置参数
import { mavonEditor } from 'mavon-editor'
import 'mavon-editor/dist/css/index.css';

export default {
    components: {
        mavonEditor
    },
    name:'mavonEditor',
    props: {
        value: {
            type: Array,
            default: () => {
                return [];
            },
        },
    },
    watch: {
        // value: {
        //     immediate: true,
        //     handler(newVal, oldVal) {
        //         this.handbook = newVal;
        //         console.log(newVal)
        //     },
        // }
    },
    data() {
        return {
            handbook: '',
            toolbars: {
                bold: true, // 粗体
                italic: true, // 斜体
                header: true, // 标题
                underline: true, // 下划线
                strikethrough: true, // 中划线
                mark: true, // 标记
                superscript: false, // 上角标
                subscript: false, // 下角标
                quote: true, // 引用
                ol: true, // 有序列表
                ul: true, // 无序列表
                link: true, // 链接
                imagelink: false, // 图片链接
                code: true, // code
                table: true, // 表格
                fullscreen: false, // 全屏编辑
                readmodel: true, // 沉浸式阅读
                htmlcode: false, // 展示html源码
                help: true, // 帮助
                /* 1.3.5 */
                undo: true, // 上一步
                redo: true, // 下一步
                trash: false, // 清空
                save: true, // 保存（触发events中的save事件）
                /* 1.4.2 */
                navigation: false, // 导航目录
                /* 2.1.8 */
                alignleft: true, // 左对齐
                aligncenter: true, // 居中
                alignright: true, // 右对齐
                /* 2.2.1 */
                subfield: true, // 单双栏模式
                preview: true, // 预览
            },
        }
    },
    methods: {
        init(){
            console.log(this.$refs.mavonEditor)
            // const markdownIt = this.$refs.mavonEditor.mavonEditor.getMarkdownIt();
            // console.log(markdownIt,'mit')
            
        },
        changeMark(a,b){
            // console.log('changeMark a',a)
            // console.log('changeMark b',b)
            this.$emit('input',a)
            this.$emit('change',a)
        },
        save(a,b){
            console.log(this.handbook)
            this.$emit('save',this.handbook);
        },
        
    },
    mounted() {
        this.$nextTick(()=>{
            this.init();
        })
    },
    destroyed(){
       
    }
   
}

</script>
<style lang="scss" scoped>
.markdown-editor{
 
    width: 100%;
    height: 100%;
}

</style>