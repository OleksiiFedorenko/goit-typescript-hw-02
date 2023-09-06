/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/

class Component<T extends object> {
  constructor(public props: T) {}
}

type Prop = {
  title: string;
};

class Page extends Component<Prop> {
  pageInfo() {
    console.log(this.props.title);
  }
}

export {};
