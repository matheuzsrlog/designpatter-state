import Component from 'vue/types/umd'
import { HomePresenterCreateState } from './state/HomePresenterCreateState'
import { HomePresenterEditState } from './state/HomePresenterEditState'
import { HomePresenterState } from './state/HomePresenterState'

interface MeuComponent extends Component {
  inputValue: string
  setScreenName: string
  disabledInput: boolean
}

export class HomePresenter {
  public scope: MeuComponent
  protected state: HomePresenterState

  constructor(scope: MeuComponent, stateSlug: string) {
    this.scope = scope
    if (stateSlug === 'edit') {
      this.state = new HomePresenterEditState(this)
    } else {
      this.state = new HomePresenterCreateState(this)
    }
  }

  public setScreenName(nome: string): void {
    this.state.setScreenName(nome)
  }

  public getScope(): MeuComponent {
    return this.scope
  }
}
