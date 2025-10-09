
import React from 'react'
import { Button, Form, Input, Card, Select, App } from 'antd'
import { createUserApi } from '../utils/api'
import { useNavigate } from 'react-router-dom'

const { Option } = Select

const RegisterPage = () => {
  const [form] = Form.useForm()
  const navigate = useNavigate()
  const { notification } = App.useApp() 

  const onFinish = async ({ fullName, email, password, role }) => {
    try {
      const res = await createUserApi(fullName, email, password, role)
      notification.success({
        message: 'Đăng ký thành công!',
        description: res?.data?.message || 'Tài khoản đã được tạo.',
      })
      navigate('/login')
    } catch (error) {
      notification.error({
        message: 'Đăng ký thất bại!',
        description: error?.response?.data?.message || 'Đã có lỗi xảy ra.',
      })
    }
  }

  return (
    <Card title="Đăng ký tài khoản" style={{ maxWidth: 400, margin: '50px auto' }}>
      <Form form={form} layout="vertical" onFinish={onFinish}>
        <Form.Item
          label="Full Name"
          name="fullName"
          rules={[{ required: true, message: 'Vui lòng nhập họ và tên!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          rules={[
            { required: true, message: 'Vui lòng nhập email!' },
            { type: 'email', message: 'Email không hợp lệ!' }
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Vui lòng nhập mật khẩu!' }]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          label="Vai trò"
          name="role"
          rules={[{ required: true, message: 'Vui lòng chọn vai trò!' }]}
        >
          <Select placeholder="Chọn vai trò">
            <Option value="student">Học viên</Option>
            <Option value="teacher">Giảng viên</Option>
          </Select>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            Register
          </Button>
        </Form.Item>
      </Form>
    </Card>
  )
}

export default RegisterPage
