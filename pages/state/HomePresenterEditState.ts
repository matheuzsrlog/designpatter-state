import { HomePresenter } from '../HomePresenter'
import { HomePresenterState } from './HomePresenterState'

export class HomePresenterEditState extends HomePresenterState {
  constructor(homePresenter: HomePresenter) {
    super(homePresenter)
    this.setScreenName('Edit')
    this.setFieldsDisable()
  }

  public setContext(homePresenter: HomePresenter) {
    this.homePresenter = homePresenter
  }

  public setScreenName(name: string): void {
    this.homePresenter.getScope().setScreenName = name
  }

  public setFieldsDisable(): void {
    this.homePresenter.getScope().$data.disabledInput = true
  }
}
