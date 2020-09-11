import React, { useState } from "react";
import "./style.scss";
import { Upload } from "antd";
import Tooltip from '@material-ui/core/Tooltip';
import Zoom from '@material-ui/core/Zoom';
import { addActivelist, addArticlesCollection } from "../../api";
import AddCommentRoundedIcon from "@material-ui/icons/AddCommentRounded";
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Slide from '@material-ui/core/Slide';
import { TransitionProps } from '@material-ui/core/transitions';
import TextField from '@material-ui/core/TextField';
import message from "../message"
const { Dragger } = Upload;
interface useParmas {
  page: String;
  Submission: Function;
}


const styles = (theme: Theme) =>
  createStyles({
    root: {
      margin: 0,
      padding: theme.spacing(2),
    },
    dialogs: {
      width: 300
    },
    closeButton: {
      position: 'absolute',
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500],
    },
  });

export interface DialogTitleProps extends WithStyles<typeof styles> {
  id: string;
  children: React.ReactNode;
  onClose: () => void;
}

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement<any, any> },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const DialogTitle = withStyles(styles)((props: DialogTitleProps) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});
const DialogContent = withStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme: Theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);


function Addnotelife(props: useParmas) {
  let [modal1Visible, setmodal1Visible] = useState(false);
  let [mdfile, setMdfile] = useState("");
  let [title, setTitle] = useState("");
  let [author, setAuthor] = useState("");
  let [type, setType] = useState("");
  let [introduction, setIntroduction] = useState("");
  let [fileStatus, setFileStatus] = useState(false)

  const reset = () => {
    setMdfile("")
    setTitle("")
    setAuthor("")
    setType("")
    setIntroduction("")
    setFileStatus(false)
  }

  const propres = {
    name: "file",
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    onChange(info: any) {
      setFileStatus(false)
      const { status } = info.file;
      if (status !== "uploading") {
        // console.log(info.file, info.fileList);
      }
      if (status === "done") {
        message.success(`${info.file.name} file uploaded successfully.`);
        const reader = new FileReader();
        reader.readAsText(info.file.originFileObj, '"UTF-8"');
        reader.onload = function (e: any) {
          setMdfile(e.target.result);
          setFileStatus(true)
        };
      } else if (status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    }
  };

  const Submission = () => {
    if (
      mdfile === "" ||
      title === "" ||
      author === "" ||
      introduction === "" ||
      type === ""
    ) {
      message.error("警告：请完善上传信息！！！！");
      return;
    }
    let params = {
      mdfiletext: mdfile,
      title: title,
      author: author,
      introduction: introduction,
      type: type
    };
    if (props.page === "homepage") {
      addActivelist(params).then((res: any) => {
        props.Submission();
        message.success("添加成功！！！！");
        setmodal1Visible(false);
        reset()
      });
    } else {
      addArticlesCollection(params).then((res: any) => {
        props.Submission();
        message.success("添加成功！！！！");
        setmodal1Visible(false);
        reset()
      });
    }
  };

  return (
    <>
      <Tooltip TransitionComponent={Zoom} title="在这里可以添加一些文章">
        <div className="add-active" onClick={() => { setmodal1Visible(true); }}> <AddCommentRoundedIcon fontSize="large" /> </div>
      </Tooltip>
      <Dialog TransitionComponent={Transition} onClose={() => {setmodal1Visible(false)}} aria-labelledby="customized-dialog-title" open={modal1Visible}>
        <DialogTitle id="customized-dialog-title" onClose={() => {setmodal1Visible(false)}}> {props.page === "homepage" ? "添加文章" : "添加视频爱好"}</DialogTitle>
        <DialogContent dividers>
          <TextField
            required
            id="outlined-required"
            label="请填写文章标题"
            defaultValue={title}
            variant="outlined"
            onChange={e => {
              setTitle(e.target.value);
            }}
          />
          <div className="corner-line"></div>
          <TextField
            required
            id="outlined-required"
            label="请填写文章作者"
            defaultValue={title}
            variant="outlined"
            onChange={e => {
              setAuthor(e.target.value);
            }}
          />
          <div className="corner-line"></div>
          <TextField
            required
            id="outlined-required"
            label="请填写文章类型"
            defaultValue={title}
            variant="outlined"
            onChange={e => {
              setType(e.target.value);
            }}
          />
          <div className="corner-line"></div>
          <TextField
            required
            id="outlined-required"
            label="请填写文章简介"
            defaultValue={title}
            variant="outlined"
            onChange={e => {
              setIntroduction(e.target.value);
            }}
          />
          <div className="corner-line"></div>
          <Dragger {...propres}>
            <p className="ant-upload-drag-icon"> </p>
            <p className="ant-upload-text">
              {" "}
              <span role="img" aria-label="生气">😈</span>
              {" "}Click or drag to upload a file{" "}
              <span role="img" aria-label="生气">😈</span>{" "}
            </p>
            <p className="ant-upload-hint"> 请使用md结尾的文件上传，注意规范！！！ </p>
        </Dragger>
        </DialogContent>
        <DialogActions>
          <Button disabled={!fileStatus} autoFocus onClick={() => {Submission()}} color="primary">
            添加<span role="img" aria-label="生气">🥳🥳🥳</span>
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default Addnotelife;
