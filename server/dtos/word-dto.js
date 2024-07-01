export default class WordDto {
  title;
  tags;

  constructor(model) {
    this.id = model._id;
    this.title = model.title;
    this.tags = model.tags;
    this.createdAt = model.createdAt;
  }
}
