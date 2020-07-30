import { Component, Prop, Vue } from 'vue-property-decorator';
import { VueComponent } from '../../shims-vue';

import styles from './style.css?module'

export interface ButtonProps {
  background : string;
  color : string;
  symbol : string;
  className? : string;
  onClick?(symbol : string) : void;  
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
  /** callback через пропсы не передаётся и инфы по этому не нашёл, пришлось здесь писать */
  @Prop()
  private onClick?: (symbol : string)=>void;


  private handleClick = () => {
    if(this.$store.state.isLoading) {
        return;
    }
    if(this.symbol !== '=') {
        this.$store.commit('addToCurrent' , this.symbol);
    } else {
        this.$store.dispatch('asyncCalculation',this.symbol);
    }
  }

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