import React from 'react';

const Blog = () => {
    return (
        <div>
            <h2>How React Work</h2>
            <p>React.js is one of the most talked about JavaScript web frameworks in years. Alongside Angular, and more recently Vue, React is a critical tool that has had a big impact on the way we build web applications. But it’s hard to find a better description of React.js than the single sentence on the project’s home page:  A JavaScript library for building user interfaces.    It’s a library. For building user interfaces. This is perfect because, more often than not, this is all we want. The best part about this description is that it highlights React’s simplicity. It’s not a mega framework. It’s not a full-stack solution that’s going to handle everything from the database to real-time updates over web socket connections. We don’t actually want most of these pre-packaged solutions, because in the end, they usually cause more problems than they solve. Facebook sure did listen to what we want.</p>

            <h2>How useState Work</h2>
            <p>The useState() is a Hook that allows you to have state variables in functional components. React has two types of components, one is class components which are ES6 classes that extend from React and the other is functional components. Class components a Component and can have state and lifecycle methods: class Message extends React. The useState hook is a special function that takes the initial state as an argument and returns an array of two entries.</p>
        </div>
    );
};

export default Blog;