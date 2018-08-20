# React is strict about naming
1. Component's name starts with capital letter like `<Welcome />`
2. All attributes' names are camelCase

# Life Cycle Hooks
Like Angular, React has its own life cycle hooks for components.

Common ones:

* `componentDidMount`: It runs AFTER the component output has been rendered to the DOM. So it's not like ngOnInit for Angular, which runs as the first step

* `componentWillUnmount`: Run after the component is removed from DOM


# Using State Correctly
* Do not modify state directly
> If we do `this.state.name = 'John'`, this will not re-render the component. Use `setState` instead

* State Updates May Be Asynchronous
> State update can be asynchronous because React will **Batch** or **Defer** State updates. Multiple updates can be batched to single update to improve performance. (To Be Continued, more on this)

* State Updates are Merged
```jsx
constructor(props) {
    super(props);
    this.state = {
        posts: [],
        comments: []
    }
}


componentDidMount() {
    fetchPosts().then(posts => {
        this.setState({posts}); // ES6 destruct feature
    });
    fetchComments().then(comments => {
        this.setState({comments}); // ES6 destruct feature
    });
}
```

* state is called local or encapsulated because 



