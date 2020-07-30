import { Component, Vue } from 'vue-property-decorator';
import InputArea from './components/InputArea';
import TextArea from './components/TextArea';
import {IState} from '@/store/state';
import { State, Action, Getter } from 'vuex-class';

import styles from './app.css?module';


@Component({
})
export default class App extends Vue {
  render() {
    return (
      <div class={styles.wrapper}>
        <TextArea prev={this.$store.state.prev} current={this.$store.getters.current}/>
        <InputArea/>      
      </div>
    )
  }
}
