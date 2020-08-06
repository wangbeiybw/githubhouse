import React from 'react';
import Test from '../production/Test';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import '../index.css';
import {
	Form,
	Select,
	InputNumber,
	Switch,
	Radio,
	Slider,
	Button,
	Upload,
	Rate,
	Checkbox,
	Row,
	Col,
	Input
} from 'antd';
import { UploadOutlined, InboxOutlined } from '@ant-design/icons';

const {
	Option
} = Select;
const formItemLayout = {
	labelCol: {
		span: 6,
	},
	wrapperCol: {
		span: 14,
	},
};

const normFile = e => {
	console.log('Upload event:', e);

	if(Array.isArray(e)) {
		return e;
	}

	return e && e.fileList;
};
export default class Modalc extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			tabledata: this.props.mdata
		};
	}
	render() {
		const onFinish = values => {

			const newData = {
				key: this.state.tabledata.length + 1,
				name: values.username,
				age: values.age,
				address: values.adress,
				tags: values.tag,
			}
			this.props.onCommentSubmit(newData);
		};
		return(
			<Form
      name="validate_other"
      {...formItemLayout}
      onFinish={onFinish}
      initialValues={{
        'input-number': 3,
        'checkbox-group': ['A', 'B'],
        rate: 3.5,
      }}
    >
     <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Age"
        name="age"
        rules={[
          {
            required: true,
            message: 'Please input your age!',
          },
        ]}
      >
        <Input />
      </Form.Item>
            <Form.Item
        label="Adress"
        name="adress"
        rules={[
          {
            required: true,
            message: 'Please input your adress!',
          },
        ]}
      >
        <Input />
      </Form.Item>

            <Form.Item
        label="Tag"
        name="tag"
        rules={[
          {
            required: true,
            message: 'Please input your tag!',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        wrapperCol={{
          span: 12,
          offset: 6,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
		);
	}
}