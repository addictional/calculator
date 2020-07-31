import { Component, Vue } from 'vue-property-decorator';
import InputArea from './components/InputArea';
import TextArea from './components/TextArea';

import styles from './app.css?module';


@Component({
})
export default class App extends Vue {
  public handleButtonPress(symbol : string){
    if(this.$store.state.isLoading) {
      return;
    }
    if(symbol !== '=') {
        this.$store.commit('addToCurrent' , symbol);
    } else {
        this.$store.dispatch('asyncCalculation',symbol);
    }
  }
  render() {
    return (
      <div class={styles.wrapper}>
        <TextArea prev={this.$store.state.prev} current={this.$store.getters.current}/>
        <InputArea buttonPress={this.handleButtonPress}/>      
      </div>
    )
  }
}
