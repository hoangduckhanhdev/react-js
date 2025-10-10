import React, { useState } from 'react'
import { Form, Input, Button, Card, App } from 'antd'
import { useNavigate } from 'react-router-dom'

const LoginPage = () => {
  const [form] = Form.useForm()
  const navigate = useNavigate()
  const { notification } = App.useApp()
  const [loading, setLoading] = useState(false)

  const onFinish = async ({ email, password }) => {
    setLoading(true)
    try {
      const res = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      })

      let data = {}
      try {
        data = await res.json() 
      } catch (err) {
        throw new Error('Server trả dữ liệu không hợp lệ')
      }

      if (res.ok && data.success) {
        localStorage.setItem('token',res.token)
        notification.success({ message: 'Đăng nhập thành công!' })
        localStorage.setItem('token', data.token)
        form.resetFields()
        navigate('/')
      } else {
        notification.error({ message: data.message || 'Đăng nhập thất bại' })
      }
    } catch (err) {
      notification.error({ message: err.message || 'Có lỗi xảy ra!' })
      console.error('Login error:', err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Card title="Đăng nhập" style={{ maxWidth: 400, margin: '50px auto' }}>
      <Form form={form} layout="vertical" onFinish={onFinish}>
        <Form.Item
          label="Email"
          name="email"
          rules={[
            { required: true, message: 'Vui lòng nhập email!' },
            { type: 'email', message: 'Email không hợp lệ!' },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Mật khẩu"
          name="password"
          rules={[{ required: true, message: 'Vui lòng nhập mật khẩu!' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" block loading={loading}>
            Login
          </Button>
        </Form.Item>
      </Form>
    </Card>
  )
}

export default LoginPage
