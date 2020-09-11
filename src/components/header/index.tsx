import React from "react";
import "./style.scss";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Input from '@material-ui/core/Input';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';

function Header(props: any) {
  let { selectIndex = 0, handelSearch } = props;
  const [open, setOpen] = React.useState(false);
  const [searchInput, setSearchInput] = React.useState("");


  const toggleDrawer = (anchor: String, open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent
  ) => {
    if (
      event &&
      event.type === "keydown" &&
      ((event as React.KeyboardEvent).key === "Tab" ||
        (event as React.KeyboardEvent).key === "Shift")
    ) {
      return;
    }

    setOpen(false);
  };
  
  const handelSearchs = () => {
    handelSearch(searchInput)
  }

  return (
    <>
      <div className="blog-header">
        <div className="blog-text">
          <div className="blog-left">倥侗无知</div>
          <div className="blog-other">作为一个怪兽，我的欲望是至少消灭一个奥特曼<span role="img" aria-label="淘气">🥳🥳🥳</span></div>
        </div>
        <div className="specd"></div>
        <div className="search">
          <Input placeholder="查询您的文章" onChange={(e) => {
            setSearchInput(e.target.value)
          }}/>
          <IconButton aria-label="search" onClick={() => { handelSearchs() }}>
            <SearchIcon />
          </IconButton>
        </div>
        <div className="blog-tab">
          <div
            className="tab"
            onClick={() => {
              props.history.push("/");
            }}
          >
            Home Page
            <div
              className="line"
              style={{ display: selectIndex === 0 ? "block" : "none" }}
            ></div>
          </div>
          <div className="tab">
            Article
            <div
              className="line"
              style={{ display: selectIndex === 1 ? "block" : "none" }}
            ></div>
          </div>
          <div
            className="tab"
            onClick={() => {
              props.history.push("/videopage");
            }}
          >
            Video life
            <div
              className="line"
              style={{ display: selectIndex === 2 ? "block" : "none" }}
            ></div>
          </div>
          <div
            className="tab more"
            onClick={() => {
              setOpen(true);
            }}
          >
            More Operations
            <div
              className="line"
              style={{ display: selectIndex === 3 ? "block" : "none" }}
            ></div>
          </div>
        </div>
      </div>
      <SwipeableDrawer
        anchor="right"
        open={open}
        onClose={toggleDrawer("right", false)}
        onOpen={toggleDrawer("right", true)}
      >
        <div className="drawer-wrap">
          <List>
            {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
              <ListItem button key={text}>
                {/* <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon> */}
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </div>
      </SwipeableDrawer>
    </>
  );
}

export default Header;
