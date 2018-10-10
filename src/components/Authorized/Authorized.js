import React, { Component } from 'react';
import queryString from 'query-string';
import './Authorized.css';
import fire from '../../Fire';

class Authorized extends Component {
    componentWillMount() {
        const parsed = queryString.parse(this.props.location.search);
        console.log(parsed)

        let tokenRef = fire.database().ref('token');
        //@TODO fetch oauth token from the code using this method: https://developers.hubspot.com/docs/methods/oauth2/get-access-and-refresh-tokens
        // POST request can be done using: https://stackoverflow.com/questions/38510640/how-to-make-a-rest-post-call-from-reactjs-code
        /*tokenRef.set(parsed.code, function(error) {
            if (error) {
                console.log("failed to write")
            } else {
                console.log("Saved successfully!")
            }
          });
        tokenRef.on('value', function(snapshot) {
            console.log(snapshot.val())
        });*/

        fetch("https://api.example.com/items")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result.items
                    });
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {

        return (
            <div className="authorized-container">
                <p className="alert alert-success"><strong>The integration was successfully authorized.</strong> Close this window to go back.</p>
            </div>
        );
    }
}

export default Authorized;
