import { Component, Vue } from "vue-property-decorator"
import router from "@/router";

@Component({})
export default class Home extends Vue {
  public postsLink() {
    return router.push("/posts/template")
  }
}
