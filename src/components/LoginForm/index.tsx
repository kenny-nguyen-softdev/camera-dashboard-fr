import React from "react";
import {
  Row,
  Col,
  Form,
  Input,
  Button,
} from "antd";
import Logo from "../../assets/images/logo.png";

const LoginForm: React.FC = () => {
  return (
    <div>
      <main className="login-page">
        <div className="login-page__container">
          <div className="login-form" id="login-form">
            <figure className="login-page__logo">
              <img src={Logo} alt="logo" width={310} height={135} />
            </figure>
            <h3 className="login-form__title1">Camera Dashboard</h3>
            <h1 className="login-form__title2">Log In</h1>
            <h4 className="login-form__title3">
              Enter your email and password below
            </h4>
            <Form name="basic" autoComplete="off">
              <Form.Item
                name="email"
                className="login-form__input-email"
                rules={[
                  { type: "email", message: `Please enter true email format!` },
                  { required: true, message: `Please enter your email!` },
                ]}
              >
                <label htmlFor="email">Email: </label>
                <Input id="email" placeholder="Email address" />
              </Form.Item>
              <Form.Item
                name="password"
                className="login-form__input-password"
                rules={[
                  {
                    required: true,
                    message: "Please enter your password!",
                  },
                ]}
              >
                <label htmlFor="password">Password: </label>
                <Input.Password
                  id="password"
                  type="password"
                  placeholder="Password"
                />
              </Form.Item>
              <Button htmlType="submit" className="login-form__login" block>
                Log In
              </Button>
              <Form.Item style={{ marginBottom: 0 }}>
                <Row>
                  <Col span={24} style={{ textAlign: "left" }}>
                    <Button type="text" className="login-form__contact">
                      Need help ?{" "}
                      <a href="javascript:void(0)">Contact Support</a>
                    </Button>
                  </Col>
                </Row>
              </Form.Item>
            </Form>
          </div>
        </div>
      </main>
    </div>
  );
};
export default LoginForm;
