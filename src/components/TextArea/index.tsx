import { Component, Prop, Vue } from 'vue-property-decorator';
import { VueComponent } from '../../shims-vue';

import styles from './style.css?module'

interface Props {
  prev : string;
  current : string;
}

@Component
export default class TextArea extends VueComponent<Props> {

  @Prop()
  private prev!: string;

  @Prop()
  private current!: string;


  render() {
    return (
      <div class={styles.wrapper}>
          <p class={styles.prev}>{this.prev}</p>
          <p class={styles.current}>{this.current}</p>
      </div>
    )
  }
}