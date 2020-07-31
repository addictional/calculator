import { Component, Prop, Vue, Emit } from 'vue-property-decorator';
import { VueComponent } from '../../shims-vue';

import styles from './style.css?module'

export interface ButtonProps {
  background : string;
  color : string;
  symbol : string;
  className? : string;
  click?(symbol : string) : void;  
}

@Component
export default class HelloWorld extends VueComponent<ButtonProps> {

  @Prop()
  private background!: string;

  @Prop()
  private color!: string;

  @Prop()
  private symbol!: string;

  @Prop()
  private className?: string;

  @Prop()
  private click?: (symbol : string) => void;
  /** callback через пропсы не передаётся и инфы по этому не нашёл, пришлось здесь писать */
  @Emit()
  handleClick() {
    if(typeof this.click == 'function') {
      this.click(this.symbol);
    }
  }
  // private onClick!: (symbol : string)=>void;

  render() {
    const className = `${styles.button} ${this.className ? this.className : ''}`
    const style = {background : this.background,color : this.color}
    return (
      <button class={className} onClick={this.handleClick} style={style}>
          {this.symbol}
      </button>
    )
  }
}