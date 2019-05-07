import { Component, Vue } from "vue-property-decorator"
import marked from "marked"
import templateMd from "./article/template.md"
import router from "@/router";

@Component({})
export default class Article extends Vue {
  public markdownTextObject: {[key: string]: string} = {
    template: templateMd.source
  }

  public compiledMarkdownText() {
    const key: string = this.$route.params.postKey
    const mdText: string = this.markdownTextObject[key]
    if (mdText) {
      return marked(mdText)
    } else {
      return router.push("/")
    }
  }
}
