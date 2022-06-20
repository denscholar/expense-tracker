import { CloseOutlined } from '@mui/icons-material';



const Snackbar = ({content, closeSnack }) => {
    return (
        <div className="wrapper">
            <p>{content}</p>
            <CloseOutlined onClick={closeSnack}/>
        </div>
    )
}

export default Snackbar;