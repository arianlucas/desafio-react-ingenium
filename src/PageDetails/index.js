import "../global.css";
import "./header-detail.css";
import "./index.css";
import "./main-left.css";
import "./main-right.css";
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
import AttachFileIcon from "@mui/icons-material/AttachFile";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

export function Details() {
  let navigate = useNavigate();
  const [openMenu, setOpenMenu] = useState(true);

  const archiveRows = [
    "imgs/file-txt-tarefas.svg",
    "imgs/file-mp4-tarefas.svg",
    "imgs/file-jpeg-tarefas.svg",
  ];
  const cardTarefas = [1, 2, 3];

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
                    <div className="left1-div1 input-left1-div1">
                      <p className="poppins titles-leftdiv">Contatos: </p>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={"Selecione"}
                        sx={{ width: "100%", height: "4rem" }}
                      >
                        <MenuItem
                          key={202101054820634}
                          value={"Selecione"}
                          className="selected-item"
                        >
                          Selecione
                        </MenuItem>
                      </Select>
                    </div>
                    <div className="left1-div1">
                      <p className="poppins titles-leftdiv">Empresa: </p>
                      <p className="poppins subtitles-leftdiv">
                        Ingenium System
                      </p>
                    </div>
                    <div className="left1-div1 input2-left1-div1">
                      <p className="poppins titles-leftdiv">Prioridade:</p>
                      <div className="fake-select">
                        <img
                          src="/imgs/bandeira-verde2.png"
                          alt="Bandeira Verde"
                        />
                        <span className="poppins">Baixa</span>
                        <img src="/imgs/arrow-down.png" alt="" />
                      </div>
                    </div>
                    <div className="left1-div1">
                      <p className="poppins titles-leftdiv">Canal de Origem:</p>
                      <div className="origin-chanel">
                        <img
                          src="imgs/redes-sociais/whats-tarefas.svg"
                          alt=""
                        />
                        <p className="poppins">Whatsapp</p>
                      </div>
                    </div>
                  </div>
                  <div className="left1-div">
                    <div className="left1-div2 buttons-left1-div2">
                      <p className="poppins titles-leftdiv">Prazo: </p>
                      <div className="div2-buttons">
                        <Button
                          endIcon={<EventIcon sx={{ color: "#C2CFE0" }} />}
                          className="calendar-button"
                          sx={{ width: "66.8%", height: "4rem" }}
                        >
                          12 de Dezembro, 2021
                        </Button>
                        <Button
                          endIcon={<AccessTimeIcon sx={{ color: "#C2CFE0" }} />}
                          className="date-button"
                          sx={{ width: "30.3%", height: "4rem" }}
                        >
                          00:00
                        </Button>
                      </div>
                    </div>
                    <div className="left1-div2 inputs-left1-div2">
                      <p className="poppins titles-leftdiv">Solicitação: </p>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={"Selecione"}
                        sx={{ width: "100%", height: "4rem" }}
                      >
                        <MenuItem key={202101054820634} value={"Selecione"}>
                          Selecione
                        </MenuItem>
                      </Select>
                    </div>
                    <div className="left1-div2 inputs-left1-div2">
                      <p className="poppins titles-leftdiv">Motivo: </p>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={"Selecione"}
                        sx={{ width: "100%", height: "4rem" }}
                      >
                        <MenuItem key={202101054820634} value={"Selecione"}>
                          Selecione
                        </MenuItem>
                      </Select>
                    </div>
                  </div>
                  <div className="left1-div left1-redes-sociais">
                    <div className="header-features">
                      <img src="imgs/redes-sociais/fone-tarefas.svg" alt="" />
                      <p className="poppins titles-header-left">
                        Selecione o canal de comunicação
                      </p>
                    </div>
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
                    <img
                      src="imgs/edit-icon-tarefas.png"
                      alt="Botão de edição"
                      className="icon-edit"
                    />
                  </div>
                  <p className="poppins">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. A
                    non, facilisi diam vulputate. A non, facilisi diam
                    vulputate. A non, facilisi diam vulputate. A non, facilisi
                    diam vulputate. A non, facilisi diam vulputate.{" "}
                  </p>
                </div>
                <div className="left3">
                  <div className="header-left3">
                    <img src="imgs/note-tarefas.svg" alt="" />
                    <p className="poppins titles-header-left">
                      Descrição do Caso
                    </p>
                    <img
                      src="imgs/edit-icon-tarefas.png"
                      alt="Botão de Edição"
                      className="icon-edit"
                    />
                  </div>
                  <div className="main-left3">
                    <p className="poppins">
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
                  <div className="header-left4">
                    <AttachFileIcon fontSize="large" />
                    <p className="poppins titles-header-left">Anexos</p>
                  </div>
                  <div className="main-left4">
                    <div className="upload-archive">
                      <label htmlFor="arquivos" className="label-arquivos">
                        <img src="imgs/upload-tarefas.svg" alt="" />
                        <p className="poppins">Solte seu arquivo aqui</p>
                      </label>
                      <input
                        type="file"
                        id="arquivos"
                        className="archive-input"
                      />
                    </div>
                    <div className="archives-uploaded">
                      {archiveRows.map((arqfile) => (
                        <div className="archive-row" key={arqfile}>
                          <img src={arqfile} alt="" />
                          <div className="archive-infos">
                            <div className="header-arq-infos">
                              <div className="arq-infos">
                                <p className="poppins firstp">Name-Photo.jpg</p>
                                <p className="poppins secondp">1.4 MB</p>
                              </div>
                              <div className="arq-infos">
                                <p className="poppins download-arq-infos">
                                  Download
                                </p>
                                <img src="imgs/del-2-tarefas.svg" alt="" />
                              </div>
                            </div>
                            <p className="poppins archive-principalp">
                              Courtney Henry
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="right-principal">
                <div className="menu-control">
                  <KeyboardArrowLeftIcon
                    sx={{ cursor: "pointer", color: "#D9DAE1" }}
                  />
                  <div className="principal-menu-control">
                    <div className="options-menu">
                      <div className="container-options-menu">
                        <img src="imgs/menu/message-tarefas.svg" alt="" />
                        <p className="poppins"> Comentários</p>
                      </div>
                    </div>
                    <div className="options-menu">
                      <div className="container-options-menu">
                        <img src="imgs/menu/interacao-tarefas.svg" alt="" />
                        <p className="poppins"> Interações</p>
                      </div>
                    </div>
                    <div className="options-menu blue-border-option">
                      <div className="container-options-menu">
                        <img src="imgs/menu/todo-tarefas.svg" alt="" />
                        <p className="poppins blue-option"> Tarefas</p>
                      </div>
                    </div>
                    <div className="options-menu">
                      <div className="container-options-menu">
                        <EmailOutlinedIcon
                          fontSize="large"
                          sx={{ color: "#828292" }}
                        />
                        <p className="poppins"> Comunicados</p>
                      </div>
                    </div>
                  </div>
                  <ChevronRightIcon
                    sx={{ cursor: "pointer", color: "#D9DAE1" }}
                  />
                </div>
                <div className="body-right">
                  <div className="header-body">
                    <h1 className="poppins">Tarefas vinculadas ao caso</h1>
                    <div className="quantity poppins">08</div>
                  </div>
                  <div className="main-body">
                    {cardTarefas.map((tarefas) => (
                      <div className="cards-tarefas" key={tarefas}>
                        <div className="card-tarefas">
                          <div className="head-cards-tarefas">
                            <div className="head1-tarefas">
                              <EventIcon
                                sx={{ color: "#C2CFE0", mr: "0.6rem" }}
                                fontSize="large"
                              />
                              <p className="poppins">14 de Dezembro, 2021</p>
                              <img
                                src="imgs/cards-tarefas/sino-tarefas.svg"
                                alt="Sino de tarefas"
                              />
                            </div>
                            <div className="head2-tarefas">
                              <img
                                src="imgs/cards-tarefas/threedot-tarefas.svg"
                                alt="Três pontos menu"
                              />
                            </div>
                          </div>
                          <div className="title-cards-tarefas">
                            <p className="poppins principal-title">
                              Nome da tarefa
                            </p>
                            <p className="poppins second-title">
                              Sint ex excepteur proident adipisicing adipisicing
                              occaecat pariatur. Aadipisicing occaecat pariatur.
                            </p>
                          </div>
                          <div className="tags-cards-tarefas">
                            <img
                              src="imgs/cards-tarefas/tag-tarefas.svg"
                              alt=""
                            />
                            <div className="tag-div poppins">Web Design</div>
                            <div className="tag-div poppins">Web Design</div>
                            <p className="poppins more-tarefas">+4</p>
                          </div>
                          <div className="footer-cards-tarefas">
                            <div className="footer1-tarefas">
                              <img
                                src="imgs/cards-tarefas/user-card-tarefas.svg"
                                alt="Simbolo do usuário"
                              />
                              <div className="pictures-tarefas">
                                <img
                                  src="imgs/cards-tarefas/users-tarefas.png"
                                  alt="Imagem do perfil"
                                />
                              </div>
                              <p className="poppins more-tarefas">+4</p>
                            </div>
                            <div className="footer2-tarefas">
                              <div className="button-concluided">
                                <p className="poppins">Concluído</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="card-tarefas">
                          <div className="head-cards-tarefas">
                            <div className="head1-tarefas">
                              <EventIcon
                                sx={{ color: "#C2CFE0", mr: "0.6rem" }}
                                fontSize="large"
                              />
                              <p className="poppins">14 de Dezembro, 2021</p>
                              <img
                                src="imgs/cards-tarefas/lembrete-tarefas.png"
                                alt="Sino de tarefas"
                              />
                            </div>
                            <div className="head2-tarefas">
                              <img
                                src="imgs/cards-tarefas/threedot-tarefas.svg"
                                alt="Três pontos menu"
                              />
                            </div>
                          </div>
                          <div className="title-cards-tarefas">
                            <p className="poppins principal-title">
                              Nome da tarefa
                            </p>
                            <p className="poppins second-title">
                              Sint ex excepteur proident adipisicing adipisicing
                              occaecat pariatur. Aadipisicing occaecat pariatur.
                            </p>
                          </div>
                          <div className="tags-cards-tarefas">
                            <img
                              src="imgs/cards-tarefas/tag-tarefas.svg"
                              alt=""
                            />
                            <div className="tag-div poppins">Web Design</div>
                            <div className="tag-div poppins">Web Design</div>
                            <p className="poppins more-tarefas">+4</p>
                          </div>
                          <div className="footer-cards-tarefas">
                            <div className="footer1-tarefas">
                              <img
                                src="imgs/cards-tarefas/user-card-tarefas.svg"
                                alt="Simbolo do usuário"
                              />
                              <div className="pictures-tarefas">
                                <img
                                  src="imgs/cards-tarefas/users-tarefas.png"
                                  alt="Imagem do perfil"
                                />
                              </div>
                              <p className="poppins more-tarefas">+4</p>
                            </div>
                            <div className="footer2-tarefas">
                              <div className="button-todo">
                                <p className="poppins">A Fazer</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="separator-body-right"></div>
                  <button className="add-button-right">
                    <p className="poppins">Adicionar tarefa</p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
