import React, { useState } from "react";
import {
  Row,
  Col,
  Form,
  Input,
  Button,
} from "antd";
import Logo from "../../assets/images/logo.png";
import useAuthContext from "../../store/auth-context";
import { toast } from "react-toastify";
import { Spinner } from "../Common";

const LoginForm: React.FC = () => {
  const [form] = Form.useForm();
  const [error, setError] = useState<string | null>(null);
  const { onSignIn, loading } = useAuthContext();

  const validateEmail = (email: string) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const onFinish = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    try {
      if (email && password) {
        email = email.trim();
        password = password.trim();
        const validate = validateEmail(email);
        if (validate && validate.length) {
          await onSignIn({
            email,
            password,
          });
        } else {
          throw Error("email invalid");
        }
      } else {
        throw Error("email password null");
      }
    } catch (error: any) {
      toast.error(error?.message === "email password null"
            ? "Veuillez saisir votre email et votre mot de passe"
            : error?.message === "email invalid"
            ? `L'entrée n'est pas valide`
            : "Email ou mot de passe incorrect !", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      setError(
        error?.message === "email password null"
          ? "Email ou mot de passe incorrect !"
          : error?.message === "email invalid"
          ? `L'entrée n'est pas valide`
          : "Email ou mot de passe incorrect !"
      );
    }
  };

  if (loading === true) {
    return <Spinner />;
  }

  return (
    <div>
      <main className="login-page">
        <div className="login-page__container">
          <div className="login-form" id="login-form">
            <figure className="login-page__logo">
              <img src={Logo} alt="logo" width={200} height={170} />
            </figure>
            <h3 className="login-form__title1">Camera Dashboard</h3>
            <h1 className="login-form__title2">Log In</h1>
            <h4 className="login-form__title3">
              Enter your email and password below
            </h4>
            <Form
              name="basic"
              onFinish={onFinish}
              autoComplete="off"
              form={form}
            >
              <Form.Item
                name="email"
                className="login-form__input-email"
                // rules={[
                //   { type: "email", message: `Please enter true email format!` },
                //   { required: true, message: `Please enter your email!` },
                // ]}
              >
                <label htmlFor="email">Email: </label>
                <Input id="email" placeholder="Email address" />
              </Form.Item>
              <Form.Item
                name="password"
                className="login-form__input-password"
                // rules={[
                //   {
                //     required: true,
                //     message: "Please enter your password!",
                //   },
                // ]}
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
