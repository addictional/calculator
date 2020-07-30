import { Component, Prop, Vue } from 'vue-property-decorator';
import { VueComponent } from '../../shims-vue';
import Button from '../Button';
import buttons from './data';


import styles from './style.css?module'



interface Props {
}

@Component
export default class InputArea extends VueComponent<Props> {
  private onClick = (symbol : string) => {
    this.$store.commit('addToCurrent' , symbol);
  }
  render() {
      const firstAreaButtons = buttons.map(({color,background,symbol,className}) => 
        <Button background={background} color={color} symbol={symbol} className={className} onClick={this.onClick}/>
      )
    return (
    <div class={styles.wrapper}>
        <div class={styles['input-area1']} >
            {firstAreaButtons}
        </div>
        <div class={styles['input-area2']} >
            <Button background="#D8D8D8" color="#000000" symbol={'0'} className={`${styles['hide-border-bottom']} ${styles['hide-border-left']}`}/>
            <Button background="#B15E5E" color="#FFFFFF" symbol={'='} className={`${styles['hide-border-bottom']} ${styles['hide-border-right']}`}/>
        </div>
    </div>
    )
  }
}