import Exercise from './exercise.model';

export default class WorkoutModel {
  private duration: string;
  public exercises!: Exercise[];

  constructor(duration: string) {
    this.duration = duration;
  }
}
