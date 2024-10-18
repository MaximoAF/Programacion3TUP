import { Button, Form } from "react-bootstrap";
import styles from "./Login.module.css";
import { FormEvent, useState } from "react";
import { useForm } from "../../../hooks/useForm";
import { useAppDispatch } from "../../../hooks/redux";
import { setLogIn } from "../../../redux/slices/auth";

export const Login = () => {
  const [showPass, setShowPass] = useState(false);
  const [failTry, setFailTry] = useState(false);

  const { values, handleChanges, resetForm } = useForm({
    user: "",
    password: "",
  });

  const { user, password } = values;
  const dispatch = useAppDispatch();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await fetch("/user.json");
    const userData = await response.json();
    const userFound = userData.users.find(
      (u: { username: string; password: string }) =>
        u.username === user && u.password === password
    );
    if (userFound) {
      dispatch(setLogIn(user));
      resetForm();
    } else {
      setFailTry(true);
    }
  };

  return (
    <div className={`${styles.login__body}`}>
      <div className={`${styles.login__container}`}>
        <div className={`${styles.login__tittle} text-center`}>
          <span
            className={`${styles.icon} material-symbols-outlined`}
            translate="no"
          >
            person
          </span>
          <h2>Login</h2>
        </div>
        <Form
          onSubmit={handleSubmit}
          className={` m-4 p-4 rounded ${styles.login__form} ${
            failTry ? styles.login__errorBorder : null
          }`}
        >
          <Form.Group className="mb-3">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="username"
              onChange={handleChanges}
              name="user"
              value={user}
              className={`${failTry ? styles.login__errorBorder : null}`}
            />
          </Form.Group>
          <Form.Group className="mb-1">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type={showPass ? "text" : "password"}
              placeholder="password"
              onChange={handleChanges}
              name="password"
              value={password}
              className={`${failTry ? styles.login__errorBorder : null}`}
            />
          </Form.Group>
          <Form.Group className="d-flex gap-3 align-items-center mx-1 mb-3">
            <Form.Check
              className={` fs-3 `}
              type="switch"
              id="pass-switch"
              onChange={() => {
                setShowPass(!showPass);
              }}
            />
            <Form.Label>Show password</Form.Label>
          </Form.Group>
          <div className="d-flex justify-content-center">
            <Button type="submit" className={styles.login__buttonSend}>
              Send
            </Button>
          </div>
          <p className={`${failTry?styles.login__errorMesajeVisivility:styles.login__errorMesaje} `}>Invalid login</p>
        </Form>
      </div>
    </div>
  );
};
