import * as React from "react";
import { ReactNode } from "react";

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
        let content: ReactNode;

        if (error) {
            content ="Error: {error.message}";
        } else if (isLoading) {
            content = "Loading...";
        } else {
            console.log(data);
            
            content = <pre>{JSON.stringify(data, null, 2)}</pre>;
        }
        return (
        <div className="hello-world">
            {content}
        </div>
        );
    }
}