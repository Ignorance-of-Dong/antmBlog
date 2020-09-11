import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import React from 'react'
import ReactDOM from 'react-dom';

interface Messageprops {
    message: String;
  }

function Alert(props: AlertProps) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}
function Success(props: Messageprops) {
    return <Snackbar
        open={true}
        key={""}
    >
        <Alert severity="success">{props.message}</Alert>
    </Snackbar>
}

function Error(props: Messageprops) {
    return <Snackbar
        open={true}
        key={""}
    >
        <Alert severity="error">{props.message}</Alert>
    </Snackbar>
}
let message = {
    success: (message: String) => {
        let div = document.createElement('div');
        document.body.appendChild(div);
        ReactDOM.render(<Success message={message} />, div)
        setTimeout(() => {
            document.body.removeChild(div);
        }, 2000)
    },
    error: (message: String) => {
        let div = document.createElement('div');
        document.body.appendChild(div);
        ReactDOM.render(<Error message={message} />, div)
        setTimeout(() => {
            document.body.removeChild(div);
        }, 2000)
    }
}

export default message