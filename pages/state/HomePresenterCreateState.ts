import { HomePresenter } from '../HomePresenter'
import { HomePresenterState } from './HomePresenterState'

export class HomePresenterCreateState extends HomePresenterState {
  constructor(homePresenter: HomePresenter) {
    super(homePresenter)
    this.setScreenName('Create')
  }

  public setContext(homePresenter: HomePresenter) {
    this.homePresenter = homePresenter
  }

  public setScreenName(name: string): void {
    this.homePresenter.getScope().setScreenName = name
  }
}
