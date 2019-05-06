import { Component, Vue } from "vue-property-decorator"
import marked from "marked"
import md from "./home.md"

@Component({})
export default class Home extends Vue {
  public markdownText: string = md.source

  public compiledMarkdownText() {
    return marked(this.markdownText)
  }
}
