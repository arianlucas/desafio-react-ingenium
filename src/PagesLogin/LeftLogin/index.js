import "./index.css";
import Input from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import VpnKeyOutlinedIcon from "@mui/icons-material/VpnKeyOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import Button from "@mui/material/Button";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function LeftLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorPw, setErrorPw] = useState(false);
  const [typePassword, setTypePassword] = useState("password");
  let navigate = useNavigate();

  useEffect(() => {
    if (email || password) {
      setErrorEmail(false);
      setErrorPw(false);
    }
  }, [email, password]);

  function handleTypePassword() {
    const changetypePw = typePassword === "password" ? "text" : "password";
    setTypePassword(changetypePw);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!email) return setErrorEmail(!errorEmail);
    if (!password) return setErrorPw(!errorPw);

    navigate("/lists");
  }

  return (
    <div className="left-side">
      <div className="container-left-login">
        <img src="./imgs/icone_login.svg" alt="" />

        <div className="div-login poppins-font">
          <div className="title-login">
            <h1>Olá, Bem vindo!</h1>
            <p>
              Solução de gerenciamento de relacionamento para empresas e
              pessoas.
            </p>
          </div>

          <form className="form-login" onSubmit={handleSubmit}>
            <div className="email-box">
              <label htmlFor="email" className="poppins-font">
                Email*
              </label>
              <Input
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={errorEmail}
                helperText={errorEmail && "Campo vazio"}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <EmailOutlinedIcon fontSize="large" />
                    </InputAdornment>
                  ),
                }}
                sx={{ width: "47.5rem", height: "4.8rem" }}
                placeholder="Teste@gmail.com"
              />
            </div>
            <div className="password-box">
              <label htmlFor="senha" className="poppins-font">
                Senha*
              </label>
              <Input
                id="senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                error={errorPw}
                helperText={errorPw && "Campo vazio"}
                type={typePassword}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      {typePassword === "password" ? (
                        <RemoveRedEyeOutlinedIcon
                          fontSize="large"
                          onClick={handleTypePassword}
                          sx={{ cursor: "pointer" }}
                        />
                      ) : (
                        <VisibilityOffOutlinedIcon
                          fontSize="large"
                          onClick={handleTypePassword}
                          sx={{ cursor: "pointer" }}
                        />
                      )}
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <VpnKeyOutlinedIcon fontSize="large" />
                    </InputAdornment>
                  ),
                }}
                placeholder="Placeholder"
              />
            </div>

            <Button variant="contained" type="submit">
              Entrar
            </Button>
          </form>
          <span>Esqueci minha senha</span>
          <p className="poppins-font register">
            Não tem uma conta? <a href="/">Cadastre-se</a>
          </p>
        </div>
      </div>
    </div>
  );
}
