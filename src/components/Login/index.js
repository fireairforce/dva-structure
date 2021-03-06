import React, { Fragment } from 'react';
import {connect} from 'dva';
import {Form,Input,Button,Icon} from 'antd';
import styles from './index.less';

const FormItem = Form.Item;

class Login extends React.Component{
    state={} 
    handleSubmit = () =>{
        let value = this.props.form.getFieldsValue();
        const content={
            id:value.zh,
            password:value.mm
        }
        const {dispatch} = this.props;
        dispatch({
           type:'shdl/handleLogin',
           payload:content
        })
        setTimeout(()=>{
            console.log(this.props.shdl.value);
        },1000)
    }
    render(){
        const {getFieldDecorator} = this.props.form;
        const formItemLayout = {labelCol: {xs: {span: 24},sm: {span: 6}},wrapperCol: {xs: {span: 24},sm: {span: 12}} };
        return(
            <Fragment>
                <div className={styles.container}>
                <div className={styles.wrapper}>
                     <div className={styles.content}></div>
                   </div>
                   <div className={styles.header1}>
                      <h1>选课系统</h1>
                   </div>
                   <div className={styles.content1}>
                       <Form>
                        <FormItem
                            label='账号'
                            key='account'
                            {...formItemLayout}
                        >
                            {getFieldDecorator('zh', {
                                rules: [{ required: true, message: '请输入账户!' }],
                            })(
                                <Input placeholder="请输入您的姓名" prefix={<Icon type="user" />} style={{width: '15vw'}}/>
                            )}
                        </FormItem>

                        <FormItem
                            label='密码'
                            key='name'
                            {...formItemLayout}
                        >
                            {getFieldDecorator('mm', {
                                rules: [{ required: true, message: '请输入密码!' }],
                            })(
                            <Input placeholder="请输入您的姓名"  prefix={<Icon type="lock" />} style={{width: '15vw'}} type="password"/>
                            )}
                        </FormItem>

                         <Button 
                            type="primary" 
                            htmlType="submit" 
                            className="login-form-button" 
                            onClick={this.handleSubmit}
                            style={{width: '15vw',left:'25%' }}
                        >
                            确认
                        </Button>

                       </Form>
                   </div>
                </div>       
            </Fragment> 
        )
    }
}
export default connect(({ shdl }) => ({ shdl }))(Form.create()(Login));