import React, { useState } from "react";
import {
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

  const validateEmail = (userName: string) => {
    return String(userName)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const onFinish = async ({
    userName,
    password,
  }: {
    userName: string;
    password: string;
  }) => {
    try {
      if (userName && password) {
        userName = userName.trim();
        password = password.trim();
        // const validate = validateEmail(userName);
        if (true) {
          await onSignIn({
            userName,
            password,
          });
        } else {
          throw Error("userName invalid");
        }
      } else {
        throw Error("userName password null");
      }
    } catch (error: any) {
      toast.error(
        error?.message === "userName password null"
          ? "Veuillez saisir votre userName et votre mot de passe"
          : error?.message === "userName invalid"
          ? `L'entrée n'est pas valide`
          : "Email ou mot de passe incorrect !",
        {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        }
      );
      setError(
        error?.message === "userName password null"
          ? "Email ou mot de passe incorrect !"
          : error?.message === "userName invalid"
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
              Enter your userName and password below
            </h4>
            <Form
              name="basic"
              onFinish={onFinish}
              autoComplete="off"
              form={form}
            >
              <label htmlFor="userName">Username: </label>
              <Form.Item
                name="userName"
                className="login-form__input-userName"
                rules={
                  [
                    // { type: "userName", message: `Please enter true userName format!` },
                    // { required: true, message: `Please enter your userName!` },
                  ]
                }
              >
                <Input
                  id="userName"
                  placeholder="username"
                  autoComplete="userName"
                />
              </Form.Item>
              <label htmlFor="password">Password: </label>
              <Form.Item
                name="password"
                className="login-form__input-password"
                rules={
                  [
                    // {
                    //   required: true,
                    //   message: "Please enter your password!",
                    // },
                  ]
                }
              >
                <Input.Password
                  id="password"
                  type="password"
                  placeholder="Password"
                  autoComplete="password"
                />
              </Form.Item>
              <Button htmlType="submit" className="login-form__login" block>
                Log In
              </Button>
              {/* <Form.Item style={{ marginBottom: 0 }}>
                <Row>
                  <Col span={24} style={{ textAlign: "left" }}>
                    <Button type="text" className="login-form__contact">
                      Need help ?{" "}
                      <a href="javascript:void(0)">Contact Support</a>
                    </Button>
                  </Col>
                </Row>
              </Form.Item> */}
            </Form>
          </div>
        </div>
      </main>
    </div>
  );
};
export default LoginForm;
