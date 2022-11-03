import { HomePresenter } from '../HomePresenter'

export abstract class HomePresenterState {
  protected homePresenter: HomePresenter

  constructor(homePresenter: HomePresenter) {
    this.homePresenter = homePresenter
  }

  public setScreenName(_nome: string): void {
    throw new Error('Não é possível alterar o nome nesse estado')
  }

  public setFieldsDisable(): void {
    throw new Error('Não é possível alterar o nome nesse estado')
  }
}
