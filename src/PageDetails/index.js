import "../global.css";
import "./header-detail.css";
import "./index.css";
import "./main.css";
import { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import Button from "@mui/material/Button";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import Input from "@mui/material/TextField";
import Select from "@mui/material/Select";
import InputAdornment from "@mui/material/InputAdornment";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Fab from "@mui/material/Fab";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import CallIcon from "@mui/icons-material/Call";
import MenuItem from "@mui/material/MenuItem";
import EventIcon from "@mui/icons-material/Event";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

export function Details() {
  let navigate = useNavigate();
  const [openMenu, setOpenMenu] = useState(true);

  return (
    <div className="Details">
      <header>
        <img
          src="./imgs/icon_menu_header.svg"
          alt="ícone menu"
          className="icon_menu"
          onClick={() => setOpenMenu(!openMenu)}
        />
        <img src="./imgs/logo-ingcorp.png" alt="" />
        <div className="box-header-details">
          <div className="user-box">
            <img src="./imgs/user_icon-listas.svg" alt="" />
            <p className="poppins details-user-box">Lucas Romero Cardim</p>
          </div>
          <p className="roboto title-group">Grupo: Prospecção</p>
          <div className="button-input_header">
            <Button
              variant="contained"
              color="success"
              startIcon={<PhoneInTalkIcon />}
            >
              <div className="infos-button">
                <p>Livre</p>
                <span>00:00:00</span>
              </div>
            </Button>
            <Input
              className="roboto"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <ArrowForwardIosIcon />
                  </InputAdornment>
                ),
              }}
              placeholder="Pausas"
            />
          </div>
          <div className="final-icons">
            <img
              src="./imgs/settings-icon-listas.svg"
              className="settings-icon"
              alt="Icone das configurações"
            />
            <img
              src="./imgs/notifications-icon-listas.svg"
              className="notifications-icon"
              alt="Icone das notificações"
            />
            <img
              src="./imgs/logout-icon-listas.svg"
              className="logout-icon"
              onClick={() => navigate("/")}
              alt="Icone de logout"
            />
          </div>
        </div>
      </header>
      <div className="main-content">
        <div className={openMenu ? "side-menu" : "no-side-menu"}>
          <div className="container-icons">
            <div className="icon-div">
              <img src="./imgs/speed-icon-listas.svg" alt="" />
            </div>
            <div className="icon-div">
              <img src="./imgs/clientes-icon-listas.svg" alt="" />
            </div>
            <div className="icon-div">
              <img src="./imgs/atendentes-icon-listas.svg" alt="" />
            </div>
            <div className="icon-div">
              <img src="./imgs/equipes-icon-listas.svg" alt="" />
            </div>
            <div className="icon-div">
              <img src="./imgs/call-icon-listas.svg" alt="" />
            </div>
            <div className="icon-div">
              <img src="./imgs/monitorias-icon-listas.svg" alt="" />
            </div>
            <div className="icon-div">
              <img src="./imgs/relatorios-icon-listas.svg" alt="" />
            </div>
            <div className="icon-div">
              <img src="./imgs/tarefas-icon-listas.svg" alt="" />
            </div>
            <div className="icon-div">
              <img src="./imgs/case-icon-listas.svg" alt="" />
            </div>
          </div>
          <div className="buttons-icons">
            <Fab size="small" sx={{ backgroundColor: "white" }}>
              <AddOutlinedIcon fontSize="large" />
            </Fab>
            <Fab color="primary" size="small">
              <CallIcon fontSize="large" />
            </Fab>
          </div>
        </div>
        <div className="main-page">
          <div className="main-container">
            <div className="case-details_header">
              <div className="container-case-details">
                <div className="div-select_case">
                  <NavLink to={"/lists"}>
                    <img
                      src="./imgs/go-back-tarefas.svg"
                      alt="Botão de retorno"
                    />
                  </NavLink>
                  <h1 className="poppins">Caso: </h1>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={"202101054820634"}
                    sx={{ width: "25.7rem", height: "4rem" }}
                  >
                    <MenuItem key={202101054820634} value={202101054820634}>
                      202101054820634
                    </MenuItem>
                  </Select>
                </div>
                <div className="div-select_case2">
                  <div className="case2-part1">
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={"202101054820634"}
                      sx={{ width: "13rem", height: "2.6rem" }}
                    >
                      <MenuItem key={202101054820634} value={202101054820634}>
                        Concluído
                      </MenuItem>
                    </Select>
                    <div className="infos-user-case">
                      <img
                        src="/imgs/case_part1.png"
                        alt="Símbolo do usuário"
                      />
                      <img
                        src="/imgs/user-img-tarefas.png"
                        className="user-img-case"
                        alt="Imagem do usuário"
                      />
                      <p className="poppins user-name-case">
                        Lucas Romero Cardim
                      </p>
                    </div>
                  </div>
                  <div className="case2-part2">
                    <button className="button-remove">
                      <img src="/imgs/del-tarefas.svg" alt="Botão de remover" />
                      <p className="poppins">Remover</p>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="principal-content">
              <div className="left-principal">
                <div className="left1">
                  <div className="left1-div">
                    <div className="left1-div1">
                      <p className="poppins titles-leftdiv">Contatos: </p>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={"Selecione"}
                        sx={{ width: "26.9rem", height: "4rem" }}
                      >
                        <MenuItem key={202101054820634} value={"Selecione"}>
                          Selecione
                        </MenuItem>
                      </Select>
                    </div>
                    <div className="left1-div1">
                      <p className="poppins titles-leftdiv">Empresa: </p>
                      <p>Ingenium System</p>
                    </div>
                    <div className="left1-div1">
                      <p className="poppins titles-leftdiv">Prioridade:</p>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={"Selecione"}
                        sx={{ width: "9.5rem", height: "2.4rem" }}
                      >
                        <MenuItem key={202101054820634} value={"Selecione"}>
                          <img src="/imgs/bandeira-verde.png" alt="" />
                          Baixa
                        </MenuItem>
                      </Select>
                    </div>
                    <div className="left1-div1">
                      <p className="poppins titles-leftdiv">Canal de Origem:</p>
                      <div className="origin-chanel">
                        <img
                          src="imgs/redes-sociais/whats-tarefas.svg"
                          alt=""
                        />
                        <p>Whatsapp</p>
                      </div>
                    </div>
                  </div>
                  <div className="left1-div">
                    <div className="left1-div2">
                      <p className="poppins titles-leftdiv">Prazo: </p>
                      <div className="div2-buttons">
                        <Button
                          endIcon={<EventIcon />}
                          className="date-button"
                          sx={{ width: "18.3rem", height: "4rem" }}
                        >
                          12 de Dezembro, 2021
                        </Button>
                        <Button
                          endIcon={<AccessTimeIcon />}
                          className="date-button"
                          sx={{ width: "8.3rem", height: "4rem" }}
                        >
                          00:00
                        </Button>
                      </div>
                    </div>
                    <div className="left1-div2">
                      <p className="poppins titles-leftdiv">Solicitação: </p>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={"Selecione"}
                        sx={{ width: "16.7rem", height: "4rem" }}
                      >
                        <MenuItem key={202101054820634} value={"Selecione"}>
                          Selecione
                        </MenuItem>
                      </Select>
                    </div>
                    <div className="left1-div2">
                      <p className="poppins titles-leftdiv">Motivo: </p>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={"Selecione"}
                        sx={{ width: "16.7rem", height: "4rem" }}
                      >
                        <MenuItem key={202101054820634} value={"Selecione"}>
                          Selecione
                        </MenuItem>
                      </Select>
                    </div>
                  </div>
                  <div className="left1-div">
                    <img src="imgs/redes-sociais/fone-tarefas.svg" alt="" />
                    <p>Selecione o canal de comunicação</p>
                    <div className="icons-redes-sociais">
                      <img src="imgs/redes-sociais/tell-tarefas.svg" alt="" />
                      <img src="imgs/redes-sociais/whats-tarefas.svg" alt="" />
                      <img src="imgs/redes-sociais/mail-2-tarefas.svg" alt="" />
                      <img src="imgs/redes-sociais/air-tarefas.svg" alt="" />
                      <img
                        src="imgs/redes-sociais/instagram-tarefas.svg"
                        alt=""
                      />
                      <img
                        src="imgs/redes-sociais/twitter-tarefas.svg"
                        alt=""
                      />
                      <img
                        src="imgs/redes-sociais/facebook-tarefas.svg"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div className="left2">
                  <div className="div-left2">
                    <p className="poppins titles-leftdiv">Assunto: </p>
                    <img src="imgs/edit-icon-tarefas.png" alt="" />
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. A
                    non, facilisi diam vulputate. A non, facilisi diam
                    vulputate. A non, facilisi diam vulputate. A non, facilisi
                    diam vulputate. A non, facilisi diam vulputate.{" "}
                  </p>
                </div>
                <div className="left3">
                  <div className="header-left3">
                    <img src="imgs/note-tarefas.svg" alt="" />
                    <p>Descrição do Caso</p>
                    <img src="imgs/edit-icon-tarefas.png" alt="" />
                  </div>
                  <div className="main-left3">
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged. It was popularised in the
                      1960s with the release of Letraset sheets containing Lorem
                      Ipsum passages, and more recently with desktop publishing
                      software like Aldus PageMaker including versions of Lorem
                      Ipsum.
                    </p>
                  </div>
                </div>
                <div className="left4">
                  <div className="header-left34"></div>
                  <div className="main-left4"></div>
                </div>
              </div>
              <div className="right-principal"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
