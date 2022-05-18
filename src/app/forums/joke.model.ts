export class forumsInput{
id?: number;
content: string;

  constructor(
    content: string,
    id?: number

  ){

    this.id = id;
    this.content = content;
  }
}
