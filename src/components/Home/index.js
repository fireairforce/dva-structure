/*
* Created by zoomdong on 2019 01.18
*/
import React, { Fragment } from 'react';
import styles from './index.less';
import {message} from 'antd';
export default class Home extends React.Component{
    constructor(props){
        super(props);
        this.state={
            studID:'123456789',
            stuName:'XXX',
            a:false,b:false,c:false,d:false,e:false,f:false,g:false,
        }
    }
    handleQuit = () =>{
      message.success('您已成功退出')
    }
    handle = (key,val) =>{
       this.setState({
           [key]:val
       })
    }
    render(){
        const {a,b,c,d,e,stuName,studID} = this.state;        
        return(
            <Fragment>
                <div className={styles.wrapper}>
                    <div className={styles.header}>
                      <div className={styles.logo}>
                        <h2>
                            <img src="http://wdlj.zoomdong.xin/logo_school.png" alt="school-logo"/>
                        </h2>
                        <h3>
                            <img src="http://wdlj.zoomdong.xin/logo_jw.png" alt="q"/>
                        </h3>
                        <p>{`欢迎您: ${studID + " " + stuName} |`}</p>
                        <a onClick={this.handleQuit}>安全退出</a>
                     </div>
                    </div>
                    <div className={styles.nav}>
                        <ul className={styles.first}>
                            <li className={styles.first_li}><a className={styles.first_nav} href=" ">返回首页</a></li>
                            <li className={styles.first_li}
                               onMouseOver={()=>{this.handle('a',true)}}
                               onMouseOut={()=>{this.handle('a',false)}}
                            >
                                <a className={styles.first_nav} href=" "
                                 >网上选课</a>
                                <ul 
                                  className={styles.second}
                                  style={a===true?{display:'block'}:{display:'none'}}
                                >
                                   <li><a>学科基础与专业课程选课</a></li>
                                   <li><a>通识教育课程选课</a></li>
                                </ul>
                            </li>
                            <li className={styles.first_li}
                                onMouseOver={()=>{this.handle('b',true)}}
                                onMouseOut={()=>{this.handle('b',false)}}
                            >
                              <a className={styles.first_nav} href=" "
                              >活动报名
                               <ul 
                                  className={styles.second}
                                  style={b===true?{display:'block'}:{display:'none'}}
                                >
                                   <li><a>上海市高校计算机等级考试</a></li>
                                   <li><a>第二专业网上报名</a></li>
                                   <li><a>第二专业网上注册</a></li>
                                </ul>
                            </a>
                            </li>
                            <li className={styles.first_li}
                             >
                              <a className={styles.first_nav} href=" "
                              >教学质量评价</a>
                              </li>
                            <li className={styles.first_li}
                                 onMouseOver={()=>{this.handle('c',true)}}
                                 onMouseOut={()=>{this.handle('c',false)}}
                              ><a className={styles.first_nav} href=" ">信息维护</a>
                                <ul 
                                  className={styles.second}
                                  style={c===true?{display:'block'}:{display:'none'}}
                                >
                                   <li><a>个人信息</a></li>
                                   <li><a>密码修改</a></li>
                                </ul>
                            </li>
                            <li className={styles.first_li}
                               onMouseOver={()=>{this.handle('d',true)}}
                               onMouseOut={()=>{this.handle('d',false)}}
                            ><a className={styles.first_nav} href=" ">公用信息</a>
                            <ul 
                                  className={styles.second}
                                  style={d===true?{display:'block'}:{display:'none'}}
                                >
                                   <li><a>专业推荐课表查询</a></li>
                                   <li><a>教师个人课表查询</a></li>
                                   <li><a>学生个人课表</a></li>
                                   <li><a>学生考试查询</a></li>
                                   <li><a>等级考试查询</a></li>
                                   <li><a>查询培养计划</a></li>
                                   <li><a>学生成绩查询</a></li>
                                   <li><a>补考考试安排查询</a></li>
                                   <li><a>学生二专业教学计划查询</a></li>
                                   <li><a>查询教师教学日历</a></li>
                                   <li><a>绩点表(二专课程不进入任选课程)</a></li>
                                   <li><a>学分收费查询</a></li>
                                </ul>
                            </li>
                            <li className={styles.first_li}
                               onMouseOver={()=>{this.handle('e',true)}}
                               onMouseOut={()=>{this.handle('e',false)}}
                            ><a className={styles.first_nav} href=" ">绩点表</a>
                               <ul 
                                  className={styles.second}
                                  style={e===true?{display:'block'}:{display:'none'}}
                                >
                                   <li><a>绩点表(二专课程不进入任选表)</a></li>
                                </ul>
                            </li>
                        </ul>               
                    </div>
                    <div className={styles.footer}>
                       <p>Created by zoomdong</p>
                    </div>
                </div>
          </Fragment>
        )
    }
}

