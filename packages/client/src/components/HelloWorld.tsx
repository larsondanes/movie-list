import * as React from "react";

export class HelloWorld extends React.Component<{}, { error: any, isLoading: boolean, data: any}> {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoading: true,
            data: []
        };
    }

    componentDidMount() {
        fetch(
            "http://localhost:3000/hello-world")
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    isLoading: false,
                    data: result
                });
            },
            (error) => {
                this.setState({
                    isLoading: false,
                    error
                });
            }
        );
    }

    render() {
        const { error, isLoading, data } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (isLoading) {
            return <div>Loading...</div>;
        } else {
            console.log(data);
            
            return JSON.stringify(data, null, 2);
        }
    }
}