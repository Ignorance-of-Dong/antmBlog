import React, { useEffect, useState, useCallback } from "react";
import {Header, Author, Addnotelife, message} from "@/components";
import Button from '@material-ui/core/Button';
import { getActivelist, deleteArticles } from "@/api";
import Grow from "@material-ui/core/Grow";
import Pagination from '@material-ui/lab/Pagination';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Paper from '@material-ui/core/Paper';
import "./style.scss";



function HomePage(props: any) {
	let [activeList, setActiveList] = useState([]);
  let [initData, setinitData] = useState(true);
  let [pageNo, setPageNo] = useState(1)
  let [pageSize, setPageSize] = useState(4)
  let [pageTotal, setPageTotal] = useState(1)
  let [confirmDialog, setConfirmDialog] = useState(false)
  let [id, setId] = useState<number>()
  let [name, setName] = useState<String>("")
  
  const getActives = useCallback( async (): Promise<any> => {
    let params = {
      pageNo: pageNo,
      pageSize: pageSize,
      name: name
    }
    await getActivelist(params).then((res: any) => {
      let result = res.data.data;
      setActiveList(result.articlesList);
      setPageTotal(result.pageTotal)
		});
  }, [pageNo, pageSize, name])

  useEffect(() => {
    setPageSize(4)
  }, [])

	useEffect(() => {
		getActives()
  }, [initData, pageNo, getActives, name]);
  
	const change = () => {
    setinitData(!initData);
	};

  let bacolor = ["red", "green", "yellow"];
  
  const deleteActive = async (e: any, id: number) => {
    e.stopPropagation()
    setConfirmDialog(true);
    setId(id)
  }

  const handelDelete = async (): Promise<any> => {
    await deleteArticles({
      id: id
    })
    setConfirmDialog(false)
    message.success("删除成功！！！！");
    getActives();
  }

  const paginationFunc = (event: object, page: number) => {
    console.log(event, page)
    setPageNo(page)
  }

  const handelSearch = (name: String) => {
    console.log(setName)
    setName(name)
  }
	return (
		<div className="home-wrap">
			<Header selectIndex={0} {...props} handelSearch={handelSearch}/>
			<div className="container">
				<div className="active-list">
					{
						activeList.length
							?
							(
								activeList.map((res: any, index: number) => {
									return (
										<Grow in={res ? true : false} {...{ timeout: index * 500 }} key={res.id}>
											<Paper elevation={4}>
												<div className="active-item" onClick={() => { props.history.push(`/detailpage?activeid=${res.activeid}`); }}>
													<div className="tip-tags" style={{ background: bacolor[Math.floor(Math.random() * 3)] }}></div>
													<div className="active-header">{res.title}</div>
													<div className="active-introduce">
														<span>发布时间：{res.uploadate}</span>
														<span>类型：{res.type}</span>
														<span>作者：{res.author}</span>
													</div>
													<div className="active-content">{res.introduction}</div>
                          <div className="operation">
                            <Button color="secondary" onClick={(e) => { deleteActive(e, res.id) }}>DELETE ACTIVE</Button>
                          </div>
												</div>
											</Paper>
										</Grow>
									);
								})
							)
							:
							<div />
					}
          <div className="pagination">
            <div className="page">
              <Pagination count={pageTotal} onChange={paginationFunc} variant="outlined" color="primary" />
            </div>
          </div>
				</div>
				<div className="container-info">
					<div className="info-content">
						<Author />
					</div>
				</div>
			</div>
			<Addnotelife page="homepage" Submission={change} />
      <Dialog
        open={confirmDialog}
        onClose={() => {setConfirmDialog(false)}}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
          警告 <span role="img" aria-label="警告">⚠️</span>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            您确定要删除吗，删除后将不可恢复！！
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={() => {setConfirmDialog(false)}} color="primary">
            Cancel
          </Button>
          <Button onClick={() => {handelDelete()}} color="primary">
            确定
          </Button>
        </DialogActions>
      </Dialog>
      <div className="footer">
         备案/许可证编号为：晋ICP备18012867号
      </div>
		</div>
	);
}
export default HomePage;
